const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\user\\.gemini\\antigravity\\scratch\\nicheflow-nextjs\\src\\app\\service-areas';

const areas = [
  'central-tucson',
  'north-tucson',
  'east-tucson',
  'south-tucson',
  'west-tucson',
  'oro-valley',
  'catalina-foothills',
  'rita-ranch',
  'southwest-tucson',
  'catalina-saddlebrooke'
];

areas.forEach(area => {
  const filePath = path.join(baseDir, area, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace the specific hero image name based on area
    // e.g., central-tucson -> central_tucson_hero.jpg
    const imageName = area.replace(/-/g, '_') + '_hero.jpg';
    
    content = content.replace(/\/images\/hero_home\.jpg/g, '/images/' + imageName);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated images for', area);
  }
});
