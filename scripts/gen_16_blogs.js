const fs = require('fs');
const path = require('path');

const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');
let localImages = [];
if (fs.existsSync(publicBlogDir)) {
    localImages = fs.readdirSync(publicBlogDir)
        .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))
        .sort(); // Sorting them alphabetically
}

console.log("Found", localImages.length, "images:", localImages);

// Generate human-like realistic content based on the filename
function generateBlogFromImage(filename) {
    let nameWithoutExt = filename.replace(/\.(png|jpg|jpeg)$/, '');
    
    // Create a slug and title
    let slug = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    let words = nameWithoutExt.replace(/[-_]/g, ' ').split(' ');
    let capitalized = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    let title = `${capitalized}: Comprehensive Guide and Treatment`;
    
    let category = "Physiotherapy";
    if (filename.includes('back') || filename.includes('disc') || filename.includes('sciatica')) category = "Back Pain";
    else if (filename.includes('neck') || filename.includes('cervical')) category = "Neck Pain";
    else if (filename.includes('neuro') || filename.includes('paralysis') || filename.includes('cerebral')) category = "Neuro Rehab";
    else if (filename.includes('pediatric')) category = "Pediatric Care";
    else if (filename.includes('sports')) category = "Sports Injury";
    else if (filename.includes('knee') || filename.includes('shoulder')) category = "Joint Pain";
    
    let date = `2026-08-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')}`;
    let readTime = Math.floor(Math.random() * 5 + 4); // 4 to 8 mins
    
    let p1 = `When dealing with issues related to ${words.join(' ')}, finding the right treatment approach is critical. As physiotherapists, we often encounter patients who have struggled with this condition for months or even years before seeking professional help. The reality is that early intervention can significantly reduce recovery time and prevent long-term complications. In our clinic, we emphasize a thorough initial assessment to understand exactly how this issue is impacting your daily life.`;
    
    let p2 = `A successful rehabilitation strategy for ${words.join(' ')} goes beyond just treating the immediate symptoms. We look at the body holistically. This means analyzing your posture, biomechanics, and movement patterns. By utilizing evidence-based techniques—ranging from targeted manual therapy and soft tissue mobilization to specific strengthening exercises—we aim to restore optimal function. Our approach is never one-size-fits-all; it is highly customized to your specific needs and goals.`;
    
    let p3 = `Looking ahead, maintaining the progress achieved during therapy is just as important as the treatment itself. We provide our patients with a comprehensive home exercise program and lifestyle modifications to ensure long-term resilience. Whether your goal is to return to a competitive sport or simply to enjoy a pain-free daily routine, consistency is key. Always remember to listen to your body and communicate with your physiotherapist if you experience any new discomfort.`;
    
    return `  {
    slug: "${slug}",
    title: "${title.replace(/"/g, '\\"')}",
    category: "${category}",
    metaTitle: "${title.replace(/"/g, '\\"')} | Dehradun Physio",
    metaDesc: "An insightful look into ${title.replace(/"/g, '\\"')}. Read practical, expert advice.",
    shortDesc: "A practical guide and expert advice for dealing with ${title.replace(/"/g, '\\"')}.",
    publishedDate: "${date}",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "${readTime} Min Read",
    image: "/blog/${filename}",
    keywords: ["${category.toLowerCase()}", "physiotherapy", "recovery", "health"],
    content: \`<h2>Understanding the Core Problem</h2><p>${p1}</p><h2>Developing an Effective Strategy</h2><p>${p2}</p><h2>Long-term Resilience</h2><p>${p3}</p>\`
  }`;
}

let blogsStr = 'export interface BlogPost {\n  slug: string;\n  title: string;\n  category: string;\n  metaTitle: string;\n  metaDesc: string;\n  shortDesc: string;\n  publishedDate: string;\n  author: string;\n  authorTitle: string;\n  readTime: string;\n  image: string;\n  keywords: string[];\n  content: string;\n}\n\nexport const BLOGS_DATA: BlogPost[] = [\n';

for (let i = 0; i < localImages.length; i++) {
    blogsStr += generateBlogFromImage(localImages[i]);
    if (i < localImages.length - 1) blogsStr += ',\n';
    else blogsStr += '\n';
}

blogsStr += '];\n';

const fileOut = path.join(__dirname, '..', 'src', 'config', 'blogs.ts');
fs.writeFileSync(fileOut, blogsStr);
console.log(`Successfully generated ${localImages.length} blogs perfectly matched to image names!`);
