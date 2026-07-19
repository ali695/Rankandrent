import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Apostrophes and quotation marks are common in long-form editorial JSX.
      // React escapes text nodes safely, so enforcing HTML entities adds noise.
      "react/no-unescaped-entities": "off",
      // This project uses static export with Next image optimization disabled.
      // Source assets are precompressed WebP files, so raw image elements do not
      // bypass a runtime optimizer.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // One-off maintenance scripts are CommonJS utilities, not application code.
    "fix-seo.js",
    "replace-images.js",
    "resolve_conflicts.js",
  ]),
]);

export default eslintConfig;
