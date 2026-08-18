export interface BlogPost {
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
  content: string;
  keywords: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: "physiotherapy-exercises-for-back-pain",
    title: "Best Physiotherapy Exercises for Lower Back Pain Relief",
    category: "Back Pain",
    metaTitle: "Physiotherapy Exercises for Lower Back Pain | Dehradun",
    metaDesc: "Discover clinically proven physiotherapy exercises for lower back pain. Strengthen your core and relieve pain with expert guidance.",
    shortDesc: "Struggling with lower back stiffness? Read our clinical guide on the best physiotherapy exercises to relieve back pain and rebuild core strength.",
    publishedDate: "2026-08-01",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "6 Min Read",
    image: "/blog/back-pain-physio.png",
    keywords: ["back pain exercises", "physiotherapy for back pain", "lower back relief"],
    content: `<h2>Why Back Pain Occurs</h2><p>Over 80% of adults experience lower back pain at some point. Most back pain is mechanical, caused by poor posture, weak core muscles, or repetitive strain.</p><h2>Core Stabilization Exercises</h2><p>Strengthening your Transversus Abdominis and Multifidus muscles is essential to support your lumbar spine and prevent disc injuries.</p>`
  },
  {
    slug: "knee-pain-physiotherapy-guide",
    title: "Knee Pain Treatment: How Physiotherapy Helps Without Surgery",
    category: "Knee Pain",
    metaTitle: "Knee Pain Physiotherapy | Non-Surgical Treatment Dehradun",
    metaDesc: "Learn how physiotherapy can treat knee pain, osteoarthritis, and ligament injuries without surgery in Dehradun.",
    shortDesc: "Knee pain doesn't always need surgery. Discover how targeted physiotherapy, strengthening exercises, and manual therapy can restore your knee function.",
    publishedDate: "2026-08-03",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "5 Min Read",
    image: "/blog/knee-pain-physio.png",
    keywords: ["knee pain treatment", "physiotherapy for knee", "knee osteoarthritis"],
    content: `<h2>Common Causes of Knee Pain</h2><p>Knee pain can result from osteoarthritis, ligament tears, meniscus injuries, or patellofemoral syndrome. Early physiotherapy intervention prevents long-term damage.</p><h2>Physiotherapy Treatment Approach</h2><p>We use a combination of manual joint mobilization, quadriceps strengthening, and electrotherapy to reduce pain and restore full knee function.</p>`
  },
  {
    slug: "neck-pain-cervical-physiotherapy",
    title: "Neck Pain & Cervical Spondylosis: Physiotherapy Treatment Guide",
    category: "Neck Pain",
    metaTitle: "Neck Pain & Cervical Spondylosis Physiotherapy | Dehradun",
    metaDesc: "Effective physiotherapy for neck pain and cervical spondylosis. Manual therapy, posture correction, and exercises for lasting relief.",
    shortDesc: "Cervical neck pain and spondylosis can be debilitating. Our physiotherapy approach combines manual therapy with targeted exercises for lasting relief.",
    publishedDate: "2026-08-05",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "5 Min Read",
    image: "/blog/neck-pain-cervical.png",
    keywords: ["neck pain physiotherapy", "cervical spondylosis treatment", "neck exercises"],
    content: `<h2>Understanding Cervical Spondylosis</h2><p>Cervical spondylosis is age-related wear and tear affecting the spinal discs in your neck. It often causes neck stiffness, headaches, and arm pain.</p><h2>Physiotherapy for Neck Relief</h2><p>Our treatment includes cervical traction, Mulligan mobilization, and postural re-education to eliminate pain and prevent recurrence.</p>`
  },
  {
    slug: "sciatica-pain-treatment-physiotherapy",
    title: "Sciatica Pain: Causes, Symptoms & Physiotherapy Treatment",
    category: "Sciatica",
    metaTitle: "Sciatica Pain Treatment with Physiotherapy | Dehradun",
    metaDesc: "Understand sciatica pain and how physiotherapy can relieve shooting leg pain without surgery. Expert care in Dehradun.",
    shortDesc: "Sharp shooting pain from your lower back down your leg? Learn how physiotherapy treats sciatica through nerve mobilization and targeted exercises.",
    publishedDate: "2026-08-07",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "6 Min Read",
    image: "/blog/sciatica-pain.png",
    keywords: ["sciatica treatment", "leg pain physiotherapy", "nerve pain relief"],
    content: `<h2>What is Sciatica?</h2><p>Sciatica is pain that travels along the sciatic nerve, from your lower back through the hip and down the leg. It is usually caused by a herniated disc or bone spur compressing the nerve.</p><h2>Physiotherapy Treatment</h2><p>Neural mobilization, McKenzie exercises, and dry needling are highly effective in relieving sciatic nerve compression and restoring mobility.</p>`
  },
  {
    slug: "frozen-shoulder-non-surgical-treatment",
    title: "Frozen Shoulder: Non-Surgical Solutions That Actually Work",
    category: "Shoulder",
    metaTitle: "Frozen Shoulder Treatment Without Surgery | Dehradun",
    metaDesc: "Struggling with shoulder stiffness? Read about effective non-surgical treatments for frozen shoulder including Mulligan therapy.",
    shortDesc: "Frozen shoulder causes severe stiffness and pain. Learn how advanced manual joint mobilization and stretching can restore your shoulder movement.",
    publishedDate: "2026-08-09",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "5 Min Read",
    image: "/blog/frozen-shoulder.png",
    keywords: ["frozen shoulder treatment", "shoulder stiffness", "mulligan mobilization"],
    content: `<h2>What is Frozen Shoulder?</h2><p>Adhesive capsulitis (frozen shoulder) is a condition where the shoulder joint capsule becomes tight and inflamed, severely restricting movement. It typically progresses through freezing, frozen, and thawing stages.</p><h2>Advanced Physiotherapy Treatment</h2><p>Mulligan Mobilization with Movement (MWM), laser therapy, and progressive capsule stretching are highly effective in restoring full shoulder range of motion.</p>`
  },
  {
    slug: "stroke-rehabilitation-guide",
    title: "Stroke Rehabilitation: Timeline, Techniques & Recovery Tips",
    category: "Neuro Rehab",
    metaTitle: "Stroke Rehabilitation Guide | Neuro-Physiotherapy Dehradun",
    metaDesc: "Learn about stroke rehabilitation timeline and advanced neuro-physiotherapy techniques to recover movement and independence.",
    shortDesc: "A complete overview of post-stroke recovery. Discover how Bobath technique and PNF help stroke patients regain motor control and walk again.",
    publishedDate: "2026-08-11",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "8 Min Read",
    image: "/blog/neuro-physio-stroke.png",
    keywords: ["stroke rehabilitation", "neuro physiotherapy", "paralysis recovery"],
    content: `<h2>The Role of Early Stroke Intervention</h2><p>Stroke causes rapid brain cell damage. Early, intensive physiotherapy using neuroplasticity principles is the gold standard for recovery.</p><h2>Recovery Timeline</h2><p>Recovery progresses from acute bedside mobility (week 1-2), to intensive gait training (month 2-3), to functional independence (6+ months).</p>`
  },
  {
    slug: "slip-disc-treatment-physiotherapy",
    title: "Slip Disc (Herniated Disc): Can Physiotherapy Avoid Surgery?",
    category: "Spine",
    metaTitle: "Slip Disc Treatment with Physiotherapy | Dehradun",
    metaDesc: "Find out how physiotherapy for slip disc can relieve pain, reduce nerve compression, and help you avoid surgery.",
    shortDesc: "A slipped disc doesn't always need surgery. Physiotherapy with McKenzie technique, traction, and core stabilization can provide lasting relief.",
    publishedDate: "2026-08-13",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "6 Min Read",
    image: "/blog/slip-disc.png",
    keywords: ["slip disc physiotherapy", "herniated disc treatment", "disc pain relief"],
    content: `<h2>What is a Slip Disc?</h2><p>A herniated (slip) disc occurs when the soft cushion between vertebrae pushes out and presses on spinal nerves, causing pain, weakness, and numbness.</p><h2>Physiotherapy Approach</h2><p>McKenzie Method, lumbar traction, and deep core strengthening effectively reduce disc pressure and nerve irritation, helping most patients avoid surgery.</p>`
  },
  {
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation: Return to Peak Performance Faster",
    category: "Sports",
    metaTitle: "Sports Injury Physiotherapy & Rehabilitation | Dehradun",
    metaDesc: "Recover from ACL tears, muscle strains, and sports injuries faster with expert physiotherapy and rehabilitation in Dehradun.",
    shortDesc: "Sports injuries need specialized rehab to return safely to activity. Learn how our sports physiotherapy program gets athletes back on the field faster.",
    publishedDate: "2026-08-15",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "7 Min Read",
    image: "/blog/sports-injury-rehab.png",
    keywords: ["sports injury rehab", "ACL recovery", "sports physiotherapy"],
    content: `<h2>Common Sports Injuries</h2><p>ACL tears, rotator cuff strains, ankle sprains, and meniscus injuries are among the most common sports injuries requiring expert rehabilitation.</p><h2>Our Sports Rehab Protocol</h2><p>We combine PRICE protocol, progressive loading, proprioceptive training, and sport-specific drills to ensure complete, safe return to competition.</p>`
  },
  {
    slug: "home-physiotherapy-benefits",
    title: "Home Visit Physiotherapy: Who Needs It & What to Expect",
    category: "Home Visit",
    metaTitle: "Home Visit Physiotherapy in Dehradun | Benefits & Process",
    metaDesc: "Learn who benefits from home physiotherapy, what happens during a session, and how to book a certified home visit physiotherapist in Dehradun.",
    shortDesc: "Home visit physiotherapy is ideal for stroke patients, post-surgery recovery, and elderly individuals. Learn how our mobile team brings clinic-quality care to you.",
    publishedDate: "2026-08-17",
    author: "Dr. Om Prakash, PT",
    authorTitle: "Senior Consultant Physiotherapist",
    readTime: "5 Min Read",
    image: "/blog/home-physiotherapy.png",
    keywords: ["home physiotherapy dehradun", "home visit physiotherapist", "mobile physiotherapy"],
    content: `<h2>Who Benefits from Home Physiotherapy?</h2><p>Stroke survivors, post-knee/hip replacement patients, elderly individuals with fall risk, and bedridden patients benefit most from professional home visit physiotherapy.</p><h2>What to Expect During a Home Visit</h2><p>Our certified therapists bring portable IFT, TENS, and ultrasound units to deliver clinic-standard electrotherapy alongside manual therapy and exercise training at your home.</p>`
  },
];
