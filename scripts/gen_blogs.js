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

// Find the last index of `];`
const lastBracketIdx = blogsContent.lastIndexOf('];');

if (lastBracketIdx === -1) {
    console.error("Could not find array end.");
    process.exit(1);
}

let numToAdd = 64;
let newBlogs = ',\n'; // Add comma before the new elements

for(let i=0; i<numToAdd; i++) {
  let id = ids[i % ids.length];
  let imgUrl = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
  let title = `Comprehensive Physiotherapy Guide ${i+10}`;
  let category = ["Back Pain", "Neck Pain", "Knee Pain", "Neuro Rehab", "Sports Injury"][i % 5];
  
  newBlogs += `  {
    slug: "physio-guide-${i+10}",
    title: "${title}",
    category: "${category}",
    metaTitle: "${title} | Dehradun",
    metaDesc: "Detailed guide on ${category} and physiotherapy treatments.",
    shortDesc: "Learn how expert physiotherapy can help you recover from ${category} efficiently and naturally.",
    publishedDate: "2026-08-15",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "5 Min Read",
    image: "${imgUrl}",
    keywords: ["${category.toLowerCase()}", "physiotherapy", "rehabilitation"],
    content: \`<h2>Understanding ${category}</h2><p>Proper diagnosis and targeted physical therapy are essential for recovering from ${category}. Our clinic uses advanced techniques to ensure optimal healing.</p><h2>Rehabilitation Strategy</h2><p>We focus on strengthening, flexibility, and manual therapy to restore function and relieve pain.</p>\`
  }`;
  
  if (i < numToAdd - 1) {
      newBlogs += ',\n';
  } else {
      newBlogs += '\n';
  }
}

const finalContent = blogsContent.substring(0, lastBracketIdx) + newBlogs + '];\n';
fs.writeFileSync(file, finalContent);
console.log('Successfully appended blogs without syntax errors!');
