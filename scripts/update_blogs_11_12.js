const fs = require('fs');
const file = 'src/config/blogs.ts';
let content = fs.readFileSync(file, 'utf8');
for(let i=11; i<=12; i++){
    let regex = new RegExp(`(image: ")https://images\\.unsplash\\.com/photo-[^"]+(")`, 'i');
    content = content.replace(regex, `$1/blog/generated/blog_image_${i}.jpg$2`);
}
fs.writeFileSync(file, content);
console.log('Updated blogs 11 and 12!');
