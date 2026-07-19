import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "..");
const outputDirectory = join(projectRoot, "out");
const maxFiles = 20_000;
const maxFileSize = 25 * 1024 * 1024;

const requiredFiles = ["index.html", "404.html", "sitemap.xml", "_headers"];

if (!existsSync(outputDirectory)) {
  throw new Error("Static export validation failed: out/ does not exist.");
}

const files = [];

function collectFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) collectFiles(fullPath);
    if (entry.isFile()) files.push(fullPath);
  }
}

collectFiles(outputDirectory);

const problems = [];

for (const requiredFile of requiredFiles) {
  if (!existsSync(join(outputDirectory, requiredFile))) {
    problems.push(`Missing required export file: ${requiredFile}`);
  }
}

if (files.length > maxFiles) {
  problems.push(`Export contains ${files.length} files; Cloudflare Pages Free allows ${maxFiles}.`);
}

for (const file of files) {
  const size = statSync(file).size;
  if (size > maxFileSize) {
    problems.push(
      `${relative(outputDirectory, file)} is ${(size / 1024 / 1024).toFixed(2)} MiB; Cloudflare Pages allows 25 MiB per asset.`,
    );
  }
}

function normalizeLocalUrl(value) {
  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(value)
  ) {
    return null;
  }

  const pathname = value.split("#", 1)[0].split("?", 1)[0];
  if (!pathname.startsWith("/")) return null;

  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function resolvesInsideExport(urlPath) {
  const cleanPath = urlPath.replace(/^\/+/, "");
  const candidate = resolve(outputDirectory, cleanPath);
  const outputPrefix = `${resolve(outputDirectory)}${sep}`;

  if (candidate !== resolve(outputDirectory) && !candidate.startsWith(outputPrefix)) {
    return false;
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) return true;
  if (existsSync(join(candidate, "index.html"))) return true;
  if (!extname(candidate) && existsSync(`${candidate}.html`)) return true;

  return false;
}

const brokenReferences = new Set();
const attributePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

for (const htmlFile of files.filter((file) => extname(file) === ".html")) {
  const html = readFileSync(htmlFile, "utf8");
  for (const match of html.matchAll(attributePattern)) {
    const localUrl = normalizeLocalUrl(match[1]);
    if (localUrl && !resolvesInsideExport(localUrl)) {
      brokenReferences.add(`${relative(outputDirectory, htmlFile)} -> ${localUrl}`);
    }
  }
}

if (brokenReferences.size > 0) {
  problems.push(
    `Broken local references:\n${[...brokenReferences]
      .sort()
      .map((item) => `  - ${item}`)
      .join("\n")}`,
  );
}

if (problems.length > 0) {
  throw new Error(`Static export validation failed:\n${problems.map((item) => `- ${item}`).join("\n")}`);
}

const htmlCount = files.filter((file) => extname(file) === ".html").length;
const largestFile = files.reduce(
  (largest, file) => (statSync(file).size > statSync(largest).size ? file : largest),
  files[0],
);

console.log(
  `Cloudflare export validated: ${files.length} files, ${htmlCount} HTML pages, largest asset ${(statSync(largestFile).size / 1024 / 1024).toFixed(2)} MiB.`,
);
