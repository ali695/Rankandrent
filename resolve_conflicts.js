const fs = require('fs');
const path = require('path');

function resolveConflictsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /<<<<<<< HEAD\r?\n[\s\S]*?=======\r?\n([\s\S]*?)>>>>>>> [^\r\n]*\r?\n?/g;
  
  if (regex.test(content)) {
    const newContent = content.replace(regex, '$1');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Resolved conflicts in ' + filePath);
  }
}

const dir = 'src/app/service-areas';
const folders = fs.readdirSync(dir);
for (const folder of folders) {
  const pagePath = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    resolveConflictsInFile(pagePath);
  }
}
