const fs = require('fs');
const path = require('path');

// Read the actual local files in public/blog/ to ensure we don't cause 404s
const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');
let localImages = [];
if (fs.existsSync(publicBlogDir)) {
    localImages = fs.readdirSync(publicBlogDir)
        .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))
        .map(file => `/blog/${file}`);
}

// Fallback to these if there are no local images for some reason
if (localImages.length === 0) {
    localImages = ["/blog/best-physiotherapy.png"];
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

let blogsStr = 'export interface BlogPost {\n  slug: string;\n  title: string;\n  category: string;\n  metaTitle: string;\n  metaDesc: string;\n  shortDesc: string;\n  publishedDate: string;\n  author: string;\n  authorTitle: string;\n  readTime: string;\n  image: string;\n  keywords: string[];\n  content: string;\n}\n\nexport const BLOGS_DATA: BlogPost[] = [\n';

for (let i = 0; i < 100; i++) {
  let title = headings[i];
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let category = categories[i % categories.length];
  
  // Use local images instead of Unsplash
  let imgUrl = localImages[i % localImages.length];
  
  let readTime = Math.floor(Math.random() * 5 + 3); // 3 to 7 mins
  let date = `2026-08-${(i % 28 + 1).toString().padStart(2, '0')}`;
  
  blogsStr += `  {
    slug: "${slug}",
    title: "${title.replace(/"/g, '\\"')}",
    category: "${category}",
    metaTitle: "${title.replace(/"/g, '\\"')} | Dehradun Physio",
    metaDesc: "Comprehensive guide on ${title.replace(/"/g, '\\"')}. Read expert physiotherapy advice.",
    shortDesc: "Learn expert techniques and physiotherapy advice for ${title.replace(/"/g, '\\"')}.",
    publishedDate: "${date}",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "${readTime} Min Read",
    image: "${imgUrl}",
    keywords: ["${category.toLowerCase()}", "physiotherapy", "rehabilitation", "dehradun"],
    content: \`<h2>Understanding the Essentials</h2><p>Proper diagnosis and targeted physical therapy are essential. Our clinic uses advanced evidence-based techniques to ensure optimal healing and rapid recovery.</p><h2>Rehabilitation Strategy</h2><p>We focus on strengthening, flexibility, and manual therapy to restore function, relieve pain, and help you get back to your active lifestyle safely.</p>\`
  }${i < 99 ? ',' : ''}\n`;
}

blogsStr += '];\n';

const fileOut = path.join(__dirname, '..', 'src', 'config', 'blogs.ts');
fs.writeFileSync(fileOut, blogsStr);
console.log('Successfully generated 100 blogs using LOCAL images!');
