const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'config', 'blogs.ts');
let content = fs.readFileSync(file, 'utf8');

let i = 1;
// Replace any string matching image: "..." with the Picsum URL
content = content.replace(/image:\s*"[^"]+"/g, () => {
  const newUrl = `https://picsum.photos/seed/physiotherapy${i}/800/600`;
  i++;
  return `image: "${newUrl}"`;
});

fs.writeFileSync(file, content);
console.log('Successfully updated blogs.ts with Picsum real photo URLs.');
