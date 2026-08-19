const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'generated_blog_images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Harmonious gradient color pairs (from Tailwind colors)
const gradientPairs = [
  { start: '#0ea5e9', end: '#2563eb' }, // Sky to Blue
  { start: '#0d9488', end: '#0f766e' }, // Teal to Dark Teal
  { start: '#10b981', end: '#047857' }, // Emerald to Dark Emerald
  { start: '#6366f1', end: '#4f46e5' }, // Indigo
  { start: '#8b5cf6', end: '#6d28d9' }, // Violet
  { start: '#ec4899', end: '#be185d' }, // Pink
  { start: '#f43f5e', end: '#be123c' }, // Rose
  { start: '#f97316', end: '#c2410c' }, // Orange
  { start: '#14b8a6', end: '#06b6d4' }, // Teal to Cyan
  { start: '#a855f7', end: '#ec4899' }, // Purple to Pink
];

// Clean medical & fitness icon paths (scaled for 100x100 viewbox, centered at 400, 300)
const iconPaths = [
  // Medical Cross
  `<path d="M360 260h80v80h80v80h-80v80h-80v-80h-80v-80h80z" fill="white" fill-opacity="0.9"/>`,
  // Heart (Health)
  `<path d="M400 420s-120-70-120-150c0-50 40-90 90-90 30 0 50 20 30 50 30-30 50-50 80-50 50 0 90 40 90 90 0 80-120 150-120 150z" fill="white" fill-opacity="0.9"/>`,
  // Activity / Pulse
  `<path d="M280 300h50l30-80 40 160 30-110 20 30h50" fill="none" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.9"/>`,
  // Bone / Joint (representing physio)
  `<path d="M420 220c15 0 30 15 30 30s-15 30-30 30h-40c-15 0-30-15-30-30s15-30 30-30z M420 320c15 0 30 15 30 30s-15 30-30 30h-40c-15 0-30-15-30-30s15-30 30-30z" fill="white" fill-opacity="0.9"/>`,
  // Fitness / Dumbbell
  `<path d="M280 280h40v40h-40z M480 280h40v40h-40z M320 295h160v10h-160z" fill="white" fill-opacity="0.9"/>`,
  // Spine representation (circles connected by lines)
  `<g stroke="white" stroke-width="6" stroke-opacity="0.8" fill="white">
     <line x1="400" y1="200" x2="400" y2="400"/>
     <circle cx="400" cy="200" r="15"/>
     <circle cx="400" cy="240" r="15"/>
     <circle cx="400" cy="280" r="15"/>
     <circle cx="400" cy="320" r="15"/>
     <circle cx="400" cy="360" r="15"/>
     <circle cx="400" cy="400" r="15"/>
   </g>`,
  // Shield (Protection / Strength)
  `<path d="M400 180l100 40v100c0 70-40 110-100 130-60-20-100-60-100-130v-100z" fill="white" fill-opacity="0.9"/>`,
  // Person stretching / celebrating (Starlike shape representing recovery)
  `<path d="M400 240c15 0 27-12 27-27s-12-27-27-27-27 12-27 27 12 27 27 27z M340 300c30-10 60-10 90-10l30 80h-20l-20-60h-80l-20 60h-20z" fill="white" fill-opacity="0.9"/>`
];

function generateSVG(title, category, index) {
  const grad = gradientPairs[index % gradientPairs.length];
  const icon = iconPaths[index % iconPaths.length];
  const gradId = `grad_${index}`;
  
  return `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${grad.start}" />
        <stop offset="100%" stop-color="${grad.end}" />
      </linearGradient>
      
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" stroke-opacity="0.07" />
      </pattern>
    </defs>
    
    <!-- Background Gradient -->
    <rect width="800" height="600" fill="url(#${gradId})" />
    
    <!-- Pattern Overlay -->
    <rect width="800" height="600" fill="url(#grid)" />
    
    <!-- Decorative Glowing Circles -->
    <circle cx="200" cy="150" r="300" fill="white" fill-opacity="0.03" filter="blur(40px)" />
    <circle cx="600" cy="450" r="250" fill="black" fill-opacity="0.05" filter="blur(50px)" />

    <!-- Center Icon -->
    <g transform="translate(0, -30)">
      ${icon}
    </g>

    <!-- Category Label -->
    <rect x="300" y="440" width="200" height="36" rx="18" fill="white" fill-opacity="0.15" />
    <text x="400" y="463" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1.5">
      ${category.toUpperCase()}
    </text>

    <!-- Short visual indicator representing modern design -->
    <line x1="360" y1="520" x2="440" y2="520" stroke="white" stroke-width="4" stroke-linecap="round" stroke-opacity="0.3" />
  </svg>`;
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

console.log("Generating 100 unique custom premium SVG images...");

let blogsStr = 'export interface BlogPost {\n  slug: string;\n  title: string;\n  category: string;\n  metaTitle: string;\n  metaDesc: string;\n  shortDesc: string;\n  publishedDate: string;\n  author: string;\n  authorTitle: string;\n  readTime: string;\n  image: string;\n  keywords: string[];\n  content: string;\n}\n\nexport const BLOGS_DATA: BlogPost[] = [\n';

for (let i = 0; i < 100; i++) {
  let title = headings[i];
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let category = categories[i % categories.length];
  
  let imageName = `svg_${slug}.svg`;
  let imagePath = path.join(outputDir, imageName);
  
  // Generate the clean SVG content
  let svgContent = generateSVG(title, category, i);
  fs.writeFileSync(imagePath, svgContent);
  
  let readTime = Math.floor(Math.random() * 5 + 3); // 3 to 7 mins
  let date = `2026-08-${(i % 28 + 1).toString().padStart(2, '0')}`;
  
  let p1 = `Dealing with ${title.toLowerCase()} can be a challenging journey. Proper understanding of the underlying causes, muscle imbalances, and joint alignment is key to unlocking lasting relief. Our clinical team works with patients daily to target these issues through active, evidence-based methods rather than just temporary symptom management.`;
  let p2 = `A structural rehabilitation protocol involves tailored exercises, patient education, and targeted physical therapy. When you address the body as a connected kinetic chain, you can correct the mechanics that cause pain in the first place, ensuring faster recovery and stronger overall body composition.`;
  let p3 = `Consistency is critical for long-term health and prevention. Incorporating brief daily mobility work, stretching, and strength routines will build the physical resilience needed to keep you moving comfortably. Consult with a qualified physiotherapist to outline a program specific to your needs.`;
  
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
console.log('Successfully generated 100 blogs with 100 completely unique premium SVG vector images!');
