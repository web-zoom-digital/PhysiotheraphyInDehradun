const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, '..', 'public', 'generated_blog_images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 100 unique and realistic blog headings
const headings = [
  "5 Exercises to Relieve Lower Back Pain at Home",
  "Understanding Post-Surgical Knee Rehabilitation",
  "How to Fix 'Tech Neck' from Office Work",
  "The Role of Dry Needling in Sports Recovery",
  "Preventing Running Injuries: A Runner's Guide",
  "Why Your Posture Matters More Than You Think",
  "Managing Sciatica Pain: What You Need to Know",
  "The Benefits of Cupping Therapy",
  "Rehabilitating a Torn ACL: Step by Step",
  "Core Strengthening: Beyond Just Crunches",
  "How Physiotherapy Helps with Chronic Headaches",
  "Rotator Cuff Injuries: Causes and Treatments",
  "The Science Behind Muscle Hypertrophy",
  "Ergonomics: Setting Up Your Workstation",
  "Managing Arthritis Pain Through Movement",
  "Plantar Fasciitis: Relief for Heel Pain",
  "Breathing Exercises for Core Stability",
  "Why Does My Shoulder Click When I Move It?",
  "Recovering from a Sprained Ankle Safely",
  "The Importance of Warm-ups and Cool-downs",
  "Tennis Elbow vs Golfer's Elbow",
  "How Manual Therapy Speeds Up Healing",
  "Is Surgery the Only Option for Herniated Discs?",
  "Mobility vs Flexibility: What's the Difference?",
  "Understanding TENS and Electrical Stimulation",
  "Kinesio Taping: Does It Really Work?",
  "The Role of Sleep in Muscle Recovery",
  "Managing Frozen Shoulder Syndrome",
  "Physiotherapy for Seniors: Maintaining Independence",
  "How to Safely Return to Sports After Injury",
  "Pelvic Floor Physiotherapy Explained",
  "TMJ Disorders and Jaw Pain Relief",
  "Stretching: Dynamic vs Static",
  "The Benefits of Hydrotherapy (Aquatic Therapy)",
  "Overtraining Syndrome: Signs You Need to Rest",
  "Nutrition Tips for Injury Recovery",
  "Managing Fibromyalgia Symptoms Naturally",
  "Why Women athletes are more prone to ACL tears",
  "Myofascial Release Techniques",
  "How to Improve Your Balance and Prevent Falls",
  "Sciatica or Piriformis Syndrome? How to Tell",
  "The Truth About Posture Correctors",
  "Exercising with Osteoporosis Safely",
  "Managing Shin Splints During Marathon Prep",
  "Can Physiotherapy Help Vertigo?",
  "What is IASTM (Instrument Assisted Soft Tissue Mobilization)?",
  "Managing Work-Related Repetitive Strain Injuries",
  "The Mental Health Benefits of Physical Therapy",
  "Why Do Muscles Cramp? Causes and Solutions",
  "Understanding Scoliosis and Management Strategies",
  "Pre-hab: Preparing Your Body for Surgery",
  "The Impact of Dehydration on Muscle Performance",
  "Choosing the Right Running Shoes",
  "Managing Carpal Tunnel Syndrome Without Surgery",
  "What to Expect During Your First Physio Visit",
  "The Anatomy of the Human Knee",
  "How Often Should You See a Physiotherapist?",
  "Understanding Whiplash from Auto Accidents",
  "The Benefits of Foam Rolling",
  "Can Stress Cause Physical Pain?",
  "Dealing with Muscle Imbalances",
  "The Biomechanics of a Perfect Golf Swing",
  "Managing Pediatric Sports Injuries",
  "What is Blood Flow Restriction (BFR) Therapy?",
  "How to Relieve Tight Hamstrings",
  "The Connection Between Foot Arch and Knee Pain",
  "Recovering from a Concussion Safely",
  "Is Cracking Your Knuckles Bad for You?",
  "Managing Achilles Tendinopathy",
  "The Role of Physiotherapy in Stroke Recovery",
  "How to Spot Bad Form in the Gym",
  "The Benefits of Deep Tissue Massage",
  "Understanding Bursitis: Causes and Care",
  "How to Safely Lift Heavy Objects",
  "The Difference Between a Strain and a Sprain",
  "Managing Groin Pain in Athletes",
  "The Role of Posture in Breathing Efficiency",
  "How to Recover from a Marathon",
  "Understanding Hypermobility Spectrum Disorders",
  "The Benefits of Yoga for Physical Therapy",
  "Managing Patellofemoral Pain Syndrome (Runner's Knee)",
  "How to Tape an Ankle for Stability",
  "The Anatomy of the Spine",
  "Understanding Delayed Onset Muscle Soreness (DOMS)",
  "Managing Tennis Calf (Gastroc Tear)",
  "The Importance of Ankle Mobility in Squatting",
  "How to Treat a Stiff Neck",
  "The Role of Diaphragmatic Breathing in Pain Relief",
  "Understanding Tendonitis vs Tendinosis",
  "Managing Iliotibial (IT) Band Friction Syndrome",
  "How to Perform a Proper Push-up",
  "The Benefits of Resistance Band Training",
  "Managing Thoracic Outlet Syndrome",
  "How to Sit Properly with Lower Back Pain",
  "The Importance of Grip Strength",
  "Understanding Muscle Knots (Trigger Points)",
  "Managing Osteoarthritis of the Hip",
  "How to Prevent Tech Injuries in E-sports",
  "The Future of Virtual Reality in Physiotherapy",
  "Top 10 Myths About Physical Therapy Busted"
];

const categories = ["Back Pain", "Neck Pain", "Sports Injury", "Neuro Rehab", "Post-Surgery", "Geriatric Care", "General Fitness"];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const writeStream = fs.createWriteStream(filepath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        resolve();
      });
    }).on('error', reject);
  });
};

async function generateBlogs() {
  console.log("Starting to generate 100 unique blogs and downloading AI images...");
  
  let blogsStr = 'export interface BlogPost {\n  slug: string;\n  title: string;\n  category: string;\n  metaTitle: string;\n  metaDesc: string;\n  shortDesc: string;\n  publishedDate: string;\n  author: string;\n  authorTitle: string;\n  readTime: string;\n  image: string;\n  keywords: string[];\n  content: string;\n}\n\nexport const BLOGS_DATA: BlogPost[] = [\n';

  for (let i = 0; i < 100; i++) {
    let title = headings[i];
    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let category = categories[i % categories.length];
    
    let imageName = `img_${slug}.jpg`;
    let imagePath = path.join(outputDir, imageName);
    
    // We create a prompt related to the blog heading. We add "realistic, high quality, physiotherapy" to ensure it fits the theme.
    let promptText = `High quality professional realistic photograph for a blog about ${title}, in a modern physiotherapy clinic, human subjects, bright lighting, 8k resolution`;
    let pollUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(promptText)}?width=800&height=600&nologo=true`;
    
    console.log(`Downloading image ${i + 1}/100: ${imageName}`);
    try {
        await downloadImage(pollUrl, imagePath);
    } catch (e) {
        console.error(`Error downloading image ${i + 1}:`, e);
        // Fallback to picsum if it fails
        await downloadImage(`https://picsum.photos/seed/${slug}/800/600`, imagePath);
    }
    
    let readTime = Math.floor(Math.random() * 5 + 3); // 3 to 7 mins
    let date = `2026-08-${(i % 28 + 1).toString().padStart(2, '0')}`;
    
    // Human-like content paragraphs
    let p1 = `Dealing with ${title.toLowerCase()} can be a frustrating experience. As a physiotherapist, I often see patients struggling with this very issue in the clinic. The reality is that there is a lot of misinformation out there. In my years of practice, I've realized that understanding the root cause is the first and most crucial step towards recovery. We need to look beyond the immediate symptoms and focus on how the entire body functions as a single unit.`;
    let p2 = `A comprehensive approach involves careful assessment and personalized strategies. I always tell my patients that rehabilitation is not a passive process; it requires active participation. The strategies and techniques we utilize are heavily backed by recent clinical research, ensuring that you aren't wasting time on outdated methods. What works for one person might not work for another, which is why a tailored plan is so important.`;
    let p3 = `Going forward, incorporating preventative measures into your daily routine is essential. Simple lifestyle modifications, consistent mobility work, and targeted strengthening can make a world of difference. Remember, the goal isn't just to alleviate pain temporarily, but to build resilience so that you can return to your favorite activities without fear of reinjury. If you're experiencing severe symptoms, always consult with a healthcare professional before starting any new regimen.`;
    
    blogsStr += `  {
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
    image: "/generated_blog_images/${imageName}",
    keywords: ["${category.toLowerCase()}", "physiotherapy", "recovery", "health"],
    content: \`<h2>Understanding the Core Problem</h2><p>${p1}</p><h2>Developing an Effective Strategy</h2><p>${p2}</p><h2>Long-term Resilience</h2><p>${p3}</p>\`
  }${i < 99 ? ',' : ''}\n`;
  }

  blogsStr += '];\n';

  const fileOut = path.join(__dirname, '..', 'src', 'config', 'blogs.ts');
  fs.writeFileSync(fileOut, blogsStr);
  console.log('Successfully generated 100 blogs with newly downloaded AI images!');
}

generateBlogs().catch(console.error);
