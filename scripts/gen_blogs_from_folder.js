const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/blog-section');
const outputFile = path.join(__dirname, '../src/config/blogs.ts');

const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

let blogs = [];

files.forEach(file => {
  const title = file.replace(/\.(png|jpg)$/i, '').trim();
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  blogs.push(`
  {
    slug: "${slug}",
    title: "${title}",
    category: "Physiotherapy",
    metaTitle: "${title} | Physiotherapy in Dehradun",
    metaDesc: "Learn all about ${title}. Expert physiotherapy insights and treatments.",
    shortDesc: "Discover effective physiotherapy approaches and treatments for ${title}.",
    publishedDate: "August 19, 2026",
    author: "Dr. Zoom",
    authorTitle: "Lead Physiotherapist",
    readTime: "4 min read",
    image: "/blog-section/${file}",
    keywords: ["${title}", "physiotherapy", "treatment"],
    content: \`
      <h2>Understanding ${title}</h2>
      <p>Welcome to our comprehensive guide on ${title}. In this article, we'll explore the causes, symptoms, and effective physiotherapy treatments available.</p>
      
      <h3>Common Symptoms</h3>
      <ul>
        <li>Pain and discomfort in the affected area.</li>
        <li>Restricted mobility and stiffness.</li>
        <li>Swelling or inflammation.</li>
      </ul>
      
      <h3>How Physiotherapy Can Help</h3>
      <p>Physiotherapy plays a crucial role in managing and recovering from ${title}. Our targeted exercises and manual therapy techniques aim to restore function, reduce pain, and prevent future occurrences.</p>
    \`
  }`);
});

const fileContent = `export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDesc: string;
  shortDesc: string;
  publishedDate: string;
  author: string;
  authorTitle: string;
  readTime: string;
  image: string;
  keywords: string[];
  content: string;
}

export const BLOGS_DATA: BlogPost[] = [${blogs.join(',\n')}
];
`;

fs.writeFileSync(outputFile, fileContent);
console.log('Successfully generated blogs.ts from blog-section images!');
