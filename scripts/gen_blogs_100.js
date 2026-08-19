const fs = require('fs');
const path = require('path');

const ids = [
  "1576091160550-2173ff3a8f9b", "1571019614242-c5c5dee9f50b", "1598256989814-fa647e907a56",
  "1550831107-1553da8c8e96", "1518611012118-6a419eb502b4", "1579684385127-1ef15d508118",
  "1552674605-db6acea4bc1b", "1554284126-aa254ce30197", "1600880292089-90a7e086ee94",
  "1534438327276-14e5300c3a48", "1527137342181-19aab11a8ee8", "1576091160399-112ba8d25d1d",
  "1581091226825-a6a2a5aee158", "1599058917200-af151a6296de", "1574680096145-d05b474e2155",
  "1588286840104-8952b015e14f", "1513224502586-d1e602410265", "1534438327276-14e5300c3a48",
  "1552674605-db6acea4bc1b", "1544367567-0f2fcb009e0b", "1607990281513-2c110a25bd8c",
  "1598256989814-fa647e907a56", "1576091160550-2173ff3a8f9b", "1583454110551-21f2fa2bfc70",
  "1518611012118-6a419eb502b4", "1554284126-aa254ce30197", "1571019614242-c5c5dee9f50b",
  "1527137342181-19aab11a8ee8", "1579684385127-1ef15d508118"
];

const file = path.join(__dirname, '..', 'src', 'config', 'blogs.ts');
let blogsContent = fs.readFileSync(file, 'utf8');

const lastBracketIdx = blogsContent.lastIndexOf('];');

if (lastBracketIdx === -1) {
    console.error("Could not find array end.");
    process.exit(1);
}

let numToAdd = 27;
let newBlogs = ',\n'; 

for(let i=0; i<numToAdd; i++) {
  let id = ids[i % ids.length];
  let imgUrl = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
  let title = `Advanced Physiotherapy Protocol ${i+74}`;
  let category = ["Post-Surgery", "Geriatric Care", "Pediatric Physio", "Dry Needling", "Joint Pain"][i % 5];
  
  newBlogs += `  {
    slug: "physio-protocol-${i+74}",
    title: "${title}",
    category: "${category}",
    metaTitle: "${title} | Dehradun",
    metaDesc: "Advanced protocol and care instructions for ${category} patients.",
    shortDesc: "Discover specialized treatment protocols and rehabilitation strategies specifically designed for ${category}.",
    publishedDate: "2026-08-16",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "7 Min Read",
    image: "${imgUrl}",
    keywords: ["${category.toLowerCase()}", "advanced physiotherapy", "treatment protocol"],
    content: \`<h2>Comprehensive ${category} Care</h2><p>Our advanced treatment protocols for ${category} are designed to provide rapid relief and long-term recovery.</p><h2>Evidence-Based Approach</h2><p>We combine modern medical technology with hands-on manual therapy for the best clinical outcomes in treating ${category}.</p>\`
  }`;
  
  if (i < numToAdd - 1) {
      newBlogs += ',\n';
  } else {
      newBlogs += '\n';
  }
}

const finalContent = blogsContent.substring(0, lastBracketIdx) + newBlogs + '];\n';
fs.writeFileSync(file, finalContent);
console.log('Added 27 more blogs to reach 100!');
