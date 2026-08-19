const fs = require('fs');
const path = require('path');

const validImages = [
  "/blog/back-pain-physio.png",
  "/blog/chiropractic-care.png",
  "/blog/dry-needling.png",
  "/blog/frozen-shoulder.png",
  "/blog/home-physiotherapy.png",
  "/blog/knee-pain-physio.png",
  "/blog/neck-pain-cervical.png",
  "/blog/neuro-physio-stroke.png",
  "/blog/occupational-therapy.png",
  "/blog/paralysis-rehab.png",
  "/blog/pediatric-cerebral-palsy.png",
  "/blog/pregnancy-back-pain.png",
  "/blog/sciatica-pain.png",
  "/blog/slip-disc.png",
  "/blog/sports-injury-rehab.png"
];

const file = path.join(__dirname, 'src', 'config', 'blogs.ts');
let content = fs.readFileSync(file, 'utf8');

let i = 0;
// Replace any string matching image: "..." with one of the local images
content = content.replace(/image:\s*"[^"]+"/g, () => {
  const localImg = validImages[i % validImages.length];
  i++;
  return `image: "${localImg}"`;
});

fs.writeFileSync(file, content);
console.log('Successfully updated blogs.ts with local images.');
