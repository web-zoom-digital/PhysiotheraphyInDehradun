export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  benefits: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
  conditions: string[]; // Slugs of related conditions for internal linking
  content: string; // Detailed HTML/Markdown-style structured content
  iconName: string; // For Lucide icons mapping
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "physiotherapy-in-dehradun",
    title: "Advanced Physiotherapy in Dehradun",
    shortDesc: "Experience premium, evidence-based physiotherapy treatments tailored for recovery, pain relief, and enhanced mobility at our state-of-the-art clinic in Dehradun.",
    metaTitle: "Advanced Physiotherapy in Dehradun | RonEx Clinic",
    metaDesc: "Looking for advanced physiotherapy in Dehradun? RonEx offers specialized treatments for back pain, joint stiffness, and neuro-rehabilitation at Rajpur Road.",
    keywords: ["physiotherapy in dehradun", "physiotherapy clinic dehradun", "best physiotherapy dehradun", "physical therapy dehradun"],
    benefits: [
      "Rapid reduction in acute and chronic pain",
      "Restoration of joint range of motion",
      "Customized exercise regimes for long-term health",
      "State-of-the-art electrotherapy equipment"
    ],
    approach: [
      "Comprehensive Initial Assessment",
      "Targeted Pain Modulation",
      "Manual Therapy & Mobilization",
      "Home Exercise Prescription & Education"
    ],
    conditions: ["back-pain", "neck-pain", "knee-pain", "frozen-shoulder"],
    iconName: "Activity",
    faqs: [
      {
        question: "What should I expect during my first physiotherapy session in Dehradun?",
        answer: "During your first session at RonEx Physiotherapy, our expert physiotherapists will conduct a detailed assessment, reviewing your medical history, assessing posture, joint mobility, muscle strength, and flexibility to create a personalized recovery plan."
      },
      {
        question: "Do I need a doctor's referral to visit your clinic?",
        answer: "No, a doctor's referral is not mandatory. You can directly consult our senior physiotherapists for assessment and treatment. However, if you have a referral or post-operative prescription, please bring it along."
      }
    ],
    content: `
      <h3>State-of-the-Art Physiotherapy Care in Dehradun</h3>
      <p>At RonEx Physiotherapy, we combine advanced therapeutic modalities with expert hands-on manual techniques. Our goal is to address the root cause of your physical limitations, rather than just masking the symptoms. Whether you are dealing with age-related wear-and-tear, postural fatigue from long hours of computer work, or recovering from a traumatic injury, our clinical team is here to guide your recovery step-by-step.</p>
      
      <h3>Our Multi-Disciplinary Framework</h3>
      <p>Every individual's body heals differently. That is why our clinical team conducts an extensive movement analysis on your initial visit. Our treatment protocols merge manual therapy, dry needling, modern electrotherapy, and kinetic correction to deliver optimal and long-lasting recovery. We serve patients across Dehradun from our primary branch at Rajpur Road near Clock Tower and our secondary clinic at Bhaniyawala.</p>
    `
  },
  {
    slug: "best-physiotherapist-in-dehradun",
    title: "Best Physiotherapist in Dehradun",
    shortDesc: "Consult with Dehradun's top-rated physiotherapy specialists. Direct access to highly experienced practitioners for muscle, nerve, and joint rehabilitation.",
    metaTitle: "Best Physiotherapist in Dehradun | Expert Pain Specialists",
    metaDesc: "Book an appointment with the best physiotherapist in Dehradun. Get customized treatment for sports injuries, neurological disorders, and orthopedic conditions.",
    keywords: ["best physiotherapist in dehradun", "top physiotherapist dehradun", "expert physical therapist dehradun"],
    benefits: [
      "Treatment by highly qualified MPT doctors",
      "One-on-one focused attention",
      "Proven clinical outcomes for complex cases",
      "Comprehensive rehab post-accident or surgery"
    ],
    approach: [
      "Evidence-based Clinical Review",
      "Custom Joint Mobilization",
      "Neuromuscular Re-education",
      "Proactive Ergonomic Training"
    ],
    conditions: ["sciatica", "slip-disc", "stroke", "acl-injury"],
    iconName: "Award",
    faqs: [
      {
        question: "Who is the lead physiotherapist at your Dehradun center?",
        answer: "Dr. Rohan Mehta, PT (Senior Consultant & Director) leads our clinical team. He holds a Master's degree in Neurological Rehabilitation and holds multiple national and international certifications in manual therapy."
      }
    ],
    content: `
      <h3>Consult with Top Physiotherapists in Dehradun</h3>
      <p>Finding the right physical therapist is critical to ensuring a swift, safe, and complete recovery. Our clinic hosts a panel of senior, registered therapists holding postgraduate specializations in orthopedics, sports medicine, and neurology. We utilize premium clinical systems to track your progress and adjust treatment parameters dynamically.</p>
    `
  },
  {
    slug: "physiotherapist-in-dehradun",
    title: "Qualified Physiotherapists in Dehradun",
    shortDesc: "Connect with certified physiotherapists near you in Dehradun. Offering personalized care for arthritis, paralysis, sports injuries, and posture issues.",
    metaTitle: "Physiotherapist in Dehradun | Registered Care Experts",
    metaDesc: "Find a registered physiotherapist in Dehradun. Specialized in hands-on manual therapy, electrotherapy, and structural rehabilitation. Call us today.",
    keywords: ["physiotherapist in dehradun", "physiotherapy doctor dehradun", "local physical therapist dehradun"],
    benefits: [
      "Clinically certified rehabilitation experts",
      "Flexible appointment booking options",
      "Patient-centric recovery goals",
      "Dedicated home-visit options available"
    ],
    approach: [
      "Physical Function Analysis",
      "Targeted Muscle Activation",
      "Therapeutic Manipulation",
      "Self-care Exercises"
    ],
    conditions: ["cervical-pain", "shoulder-pain", "arthritis"],
    iconName: "UserCheck",
    faqs: [
      {
        question: "What treatments do your physiotherapists in Dehradun specialize in?",
        answer: "Our physiotherapists specialize in manual therapy, stroke rehab, orthopedic treatments, dry needling, occupational therapy, and customized home exercise programs."
      }
    ],
    content: `
      <h3>Professional Care Close to Home</h3>
      <p>We pride ourselves on offering patient-centric, empathetic care. Our physical therapists are registered professionals who continuously update their training with latest research findings. From pediatric developmental delays to geriatric mobility restoration, we deliver tailored programs to suit every life stage.</p>
    `
  },
  {
    slug: "home-physiotherapy",
    title: "Premium Home Visit Physiotherapy",
    shortDesc: "Receive expert physiotherapy sessions in the absolute comfort and privacy of your home in Dehradun. Ideal for post-surgery, elderly, and stroke patients.",
    metaTitle: "Home Visit Physiotherapy in Dehradun | RonEx",
    metaDesc: "Book home visit physiotherapy in Dehradun. Get professional treatment for stroke, paralysis, knee replacement, and back pain directly in your home.",
    keywords: ["home physiotherapy dehradun", "physiotherapist at home dehradun", "home visit physiotherapy dehradun"],
    benefits: [
      "Maximum comfort without travel fatigue",
      "Safe and hygienic treatment environment",
      "Personalized assessment of home safety/ergonomics",
      "High convenience for family caregivers"
    ],
    approach: [
      "Home Hazard/Safety Assessment",
      "Portable Treatment Modalities",
      "Functional Living Training",
      "Family Caregiver Integration"
    ],
    conditions: ["stroke", "paralysis", "knee-pain", "balance-disorders"],
    iconName: "Home",
    faqs: [
      {
        question: "Which areas in Dehradun do you cover for home physiotherapy?",
        answer: "We cover all major locations including Rajpur Road, GMS Road, Sahastradhara Road, Patel Nagar, Vasant Vihar, Dalanwala, and Canal Road among others."
      },
      {
        question: "Are your home visit physiotherapists equipped with treatment modalities?",
        answer: "Yes, our home visit team carries essential portable electrotherapy equipment (TENS, IFT, Ultrasound) and training accessories to ensure an in-clinic experience."
      }
    ],
    content: `
      <h3>In-Home Rehabilitation Services in Dehradun</h3>
      <p>Traveling to a clinic can be incredibly challenging, painful, or even unsafe for patients recovering from severe strokes, major orthopaedic surgeries (such as total knee or hip replacements), or those with advanced Parkinson's disease. Our specialized Home Visit Service brings the clinic to your doorstep. We coordinate with your operating surgeon or treating physician to execute a structured, highly monitored, and safe rehabilitation protocol.</p>
    `
  },
  {
    slug: "neuro-physiotherapy",
    title: "Specialized Neurological Physiotherapy",
    shortDesc: "Rebuild motor function, balance, and independence. Targeted therapy for Stroke, Parkinson's, Multiple Sclerosis, and Spinal Cord Injuries in Dehradun.",
    metaTitle: "Neurological Physiotherapy in Dehradun | Stroke & Nerve Rehab",
    metaDesc: "Advanced neurological physiotherapy in Dehradun at RonEx. Specialized programs for stroke rehabilitation, Parkinson's, and paralysis recovery.",
    keywords: ["neuro physiotherapy dehradun", "neurological rehabilitation dehradun", "paralysis treatment dehradun"],
    benefits: [
      "Re-education of motor pathways (neuroplasticity)",
      "Marked improvement in static and dynamic balance",
      "Reduced spasticity and muscle tightness",
      "Enhanced gait pattern and daily independence"
    ],
    approach: [
      "Bobath/NDT Framework Integration",
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Balance & Coordination Drills",
      "Task-oriented Repetitive Training"
    ],
    conditions: ["stroke", "paralysis", "parkinsons-disease", "bells-palsy", "balance-disorders"],
    iconName: "Brain",
    faqs: [
      {
        question: "How long does it take to see results in neuro physiotherapy?",
        answer: "Neurological recovery relies on neuroplasticity (the brain's ability to reorganize). While some changes in muscle tone and control occur in weeks, major functional gains usually require 3 to 6 months of consistent therapy."
      },
      {
        question: "Do you treat Bell's Palsy at your clinic?",
        answer: "Yes, we offer specialized facial muscle stimulation, manual facial massage, and tailored exercise training to recover symmetry and function in Bell's Palsy cases."
      }
    ],
    content: `
      <h3>Scientific Neurological Rehabilitation</h3>
      <p>Our neurological physiotherapy program is built on the principles of Neuroplasticity. The nervous system has a remarkable ability to reorganize itself by forming new neural connections after damage. We design repetitive, task-specific, and highly engaging exercises to stimulate these pathways. Our therapists are trained in world-class neurological treatment concepts, including the Bobath Concept, PNF, and Motor Relearning Programs.</p>
    `
  },
  {
    slug: "sports-physiotherapy",
    title: "Elite Sports Physiotherapy & Rehab",
    shortDesc: "Recover faster and return to peak athletic performance. Expert care for ACL tears, ligament injuries, muscle strains, and biomechanical corrections.",
    metaTitle: "Sports Physiotherapy in Dehradun | ACL & Athletic Rehab",
    metaDesc: "Ranked top sports physiotherapy in Dehradun. Get evidence-based treatment for ligament tears, sprains, and kinetic chain optimizations. Call now.",
    keywords: ["sports physiotherapy dehradun", "sports injury clinic dehradun", "acl rehabilitation dehradun"],
    benefits: [
      "Accelerated tissue healing and repair",
      "Correction of faulty biomechanics & movement patterns",
      "Return-to-play specific functional testing",
      "Pre-injury baseline benchmarking"
    ],
    approach: [
      "Movement/Gait Video Analysis",
      "Manual Joint Mobilization & Dry Needling",
      "Eccentric Strength Training & Plyometrics",
      "Structured Return-to-Sport Timelines"
    ],
    conditions: ["acl-injury", "ligament-injury", "shoulder-pain", "heel-pain"],
    iconName: "Zap",
    faqs: [
      {
        question: "When can I resume training after a ligament sprain?",
        answer: "The timeline depends on the severity (Grade 1, 2, or 3) of the sprain. A mild sprain may take 2-4 weeks, whereas post-surgical ACL reconstructions require 6 to 9 months of progressive rehabilitation."
      }
    ],
    content: `
      <h3>Peak Performance and Athletic Recovery</h3>
      <p>Whether you are a professional athlete, a weekend runner, or a fitness enthusiast, sports injuries require a specialized approach. At RonEx, we look beyond the injury site to inspect the entire kinetic chain. We evaluate muscle imbalances, joint hypermobility or stiffness, and sport-specific biomechanics. Our return-to-sport protocols ensure you are not only pain-free but also less prone to re-injury.</p>
    `
  },
  {
    slug: "orthopedic-physiotherapy",
    title: "Advanced Orthopedic Physiotherapy",
    shortDesc: "Effective relief for joint, bone, and spine conditions. Expert treatment for Osteoarthritis, Spondylosis, Slip Disc, and Frozen Shoulder in Dehradun.",
    metaTitle: "Orthopedic Physiotherapy in Dehradun | Spine & Joint Care",
    metaDesc: "Comprehensive orthopedic physiotherapy in Dehradun. Specialized treatments for arthritis, slip disc, neck pain, and chronic joint issues.",
    keywords: ["orthopedic physiotherapy dehradun", "arthritis treatment dehradun", "slip disc physiotherapy dehradun"],
    benefits: [
      "Long-term relief from chronic joint pain",
      "Halts progress of degenerative conditions like arthritis",
      "Restores structural spinal alignment",
      "Improves daily functional ease"
    ],
    approach: [
      "Maitland & Mulligan Mobilization",
      "Core Stabilization Training",
      "Myofascial Trigger Point Therapy",
      "Ergonomic Alignment Guidance"
    ],
    conditions: ["back-pain", "neck-pain", "frozen-shoulder", "arthritis", "slip-disc"],
    iconName: "Bone",
    faqs: [
      {
        question: "Can physiotherapy cure Knee Osteoarthritis?",
        answer: "While physiotherapy cannot reverse structural cartilage loss in advanced arthritis, it significantly strengthens the surrounding musculature (quadriceps/hamstrings), improves joint lubrication, and relieves pain, often helping patients delay or avoid joint replacement surgery."
      }
    ],
    content: `
      <h3>Rebuild Your Mobility and Spinal Health</h3>
      <p>Musculoskeletal disorders are the leading cause of chronic disability worldwide. Our orthopedic department focuses on restoration of structural balance. Using advanced manual techniques, trigger-point release, and targeted muscle activation, we guide patients out of the cycle of pain. We customize plans for cervical spondylosis, lumbar stenosis, sacroiliac joint dysfunction, and tennis elbow.</p>
    `
  },
  {
    slug: "pediatric-physiotherapy",
    title: "Gentle Pediatric Physiotherapy",
    shortDesc: "Specialized rehabilitation for developmental delays, Cerebral Palsy, and pediatric movement disorders. Nurturing children toward independence.",
    metaTitle: "Pediatric Physiotherapy in Dehradun | Child Developmental Care",
    metaDesc: "Caring pediatric physiotherapy in Dehradun. Expert intervention for developmental delays, cerebral palsy, and juvenile posture issues.",
    keywords: ["pediatric physiotherapy dehradun", "cerebral palsy treatment dehradun", "developmental delay physiotherapist dehradun"],
    benefits: [
      "Achievement of age-appropriate motor milestones",
      "Enhanced muscle tone regulation",
      "Improved coordination, posture, and balance",
      "Engaging, play-based rehabilitation environment"
    ],
    approach: [
      "Play-Based Motor Facilitation",
      "Developmental Milestones Tracking",
      "Orthotics & Assistive Advice",
      "Family-Centered Training Programs"
    ],
    conditions: ["balance-disorders", "posture-correction"],
    iconName: "Baby",
    faqs: [
      {
        question: "At what age can a child start physiotherapy?",
        answer: "Pediatric physiotherapy can begin as early as infancy if developmental delays, torticollis, or congenital orthopedic conditions are noticed. Early intervention is highly effective."
      }
    ],
    content: `
      <h3>Supporting Your Child's Physical Growth</h3>
      <p>Children are not miniature adults; their growing skeletal systems and developing nervous systems require highly specialized care. Our pediatric physiotherapists integrate treatment protocols into fun, play-based activities that children love. We partner closely with parents, providing realistic home guides to support the child's development day by day.</p>
    `
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Compassionate Geriatric Physiotherapy",
    shortDesc: "Maintain active mobility, balance, and joint health in golden years. Fall prevention and arthritis management for seniors in Dehradun.",
    metaTitle: "Geriatric Physiotherapy in Dehradun | Senior Care & Mobility",
    metaDesc: "Senior-specialist geriatric physiotherapy in Dehradun. Prevent falls, manage arthritis pain, and improve overall balance for independent living.",
    keywords: ["geriatric physiotherapy dehradun", "physiotherapist for seniors dehradun", "fall prevention dehradun"],
    benefits: [
      "Significantly reduced risk of falls and fractures",
      "Enhanced confidence in walking and climbing stairs",
      "Safe management of multi-joint arthritis pain",
      "Improved general cardiovascular endurance"
    ],
    approach: [
      "Comprehensive Fall Risk Screening",
      "Proprioception & Balance Strengthening",
      "Low-impact Cardiovascular Training",
      "Safe Functional Transfer Training"
    ],
    conditions: ["arthritis", "balance-disorders", "knee-pain", "back-pain"],
    iconName: "Shield",
    faqs: [
      {
        question: "Can older adults with osteoporosis safely do physiotherapy?",
        answer: "Absolutely. We design low-impact, bone-strengthening weight-bearing exercises and balance drills specifically modified for osteoporotic bones to ensure safety and prevent fractures."
      }
    ],
    content: `
      <h3>Active Aging and Fall Prevention</h3>
      <p>Aging naturally brings structural changes such as reduced muscle mass, stiffer joints, and altered balance reflexes. However, this does not have to mean a loss of independence. Our geriatric program focuses on keeping seniors active, confident, and safe. We identify potential fall hazards, build core and lower-limb strength, and restore balance patterns to ensure seniors can live dynamic, independent lives.</p>
    `
  },
  {
    slug: "womens-health-physiotherapy",
    title: "Women's Health & Pelvic Floor Physiotherapy",
    shortDesc: "Specialized care for pre/post-natal recovery, pelvic floor dysfunction, diastasis recti, and chronic pelvic pain in a private, supportive setting.",
    metaTitle: "Women's Health Physiotherapy in Dehradun | Pregnancy & Pelvic Rehab",
    metaDesc: "Private and professional women's health physiotherapy in Dehradun. Treat pelvic floor issues, prenatal back pain, and post-delivery core recovery.",
    keywords: ["womens health physiotherapy dehradun", "pregnancy exercise dehradun", "pelvic floor physiotherapy dehradun"],
    benefits: [
      "Re-strengthening of pelvic floor and deep core",
      "Resolution of urinary incontinence issues",
      "Pain-free pregnancy and easier delivery",
      "Safe postpartum recovery and diastasis recti closure"
    ],
    approach: [
      "Pelvic Floor Muscle Re-education",
      "Safe Prenatal Exercise Conditioning",
      "Diastasis Recti Assessment & Repair",
      "Core & Pelvic Stabilization"
    ],
    conditions: ["back-pain", "posture-correction"],
    iconName: "Heart",
    faqs: [
      {
        question: "When should I start postpartum physiotherapy?",
        answer: "For a normal delivery, gentle pelvic floor and core recovery can start around 6 weeks postpartum, after your obstetrician's clearance. For C-section deliveries, we typically wait 8-10 weeks."
      }
    ],
    content: `
      <h3>Specialized Care for Every Phase of Womanhood</h3>
      <p>Women's bodies undergo profound structural, hormonal, and muscular changes during pregnancy, childbirth, and menopause. Our specialized women's health service provides a private, compassionate, and highly professional space. We offer comprehensive solutions for pregnancy back pain, pelvic girdle instability, and core muscle separation.</p>
    `
  },
  {
    slug: "manual-therapy",
    title: "Advanced Manual Therapy",
    shortDesc: "Restore joint play and release deep muscle tension. Mulligan, Maitland, and Osteopathic manual techniques by certified therapists in Dehradun.",
    metaTitle: "Manual Therapy in Dehradun | Mulligan & Maitland Techniques",
    metaDesc: "Advanced manual therapy in Dehradun. Get certified Mulligan and Maitland mobilization treatments for chronic joint stiffness and spine pain.",
    keywords: ["manual therapy dehradun", "joint mobilization dehradun", "osteopathic manual therapist dehradun"],
    benefits: [
      "Instant relief from joint lock and severe stiffness",
      "Enhanced biomechanical joint alignment",
      "Deep tissue myofascial release",
      "Non-pharmacological pain resolution"
    ],
    approach: [
      "Mulligan Mobilization with Movement (MWM)",
      "Maitland Passive Oscillations",
      "Myofascial Trigger Point Release",
      "High Velocity Low Amplitude (HVLA) thrusts"
    ],
    conditions: ["frozen-shoulder", "neck-pain", "back-pain", "cervical-pain"],
    iconName: "Sparkles",
    faqs: [
      {
        question: "Is manual therapy painful?",
        answer: "Manual therapy is generally not painful. Our therapists are trained to apply precise, controlled forces within your tolerance limit. You may feel a mild stretching sensation, but it is typically followed by immediate relief."
      }
    ],
    content: `
      <h3>The Power of Hands-On Treatment</h3>
      <p>Manual therapy is a specialized area of physiotherapy where the clinician uses their hands to apply precise forces to joints, muscles, and nerves. Unlike machine-based modalities, manual therapy allows for real-time assessment and correction. We restore normal gliding movement to joints, stretch tight fascia, and desensitize hyperactive nerves to restore movement.</p>
    `
  },
  {
    slug: "dry-needling",
    title: "Intramuscular Stimulation & Dry Needling",
    shortDesc: "Release deep myofascial trigger points and resolve stubborn muscle knots. Advanced therapeutic needling for fast pain relief in Dehradun.",
    metaTitle: "Dry Needling in Dehradun | Myofascial Trigger Point Therapy",
    metaDesc: "Expert dry needling in Dehradun. Release stubborn muscle knots, cure chronic trigger points, and relieve pain instantly. Call RonEx.",
    keywords: ["dry needling dehradun", "trigger point needling dehradun", "myofascial pain relief dehradun"],
    benefits: [
      "Rapid deactivation of painful muscle knots (trigger points)",
      "Increases localized blood circulation to speed up healing",
      "Restores natural muscle length and function",
      "Effective for chronic headaches, neck tension, and calf pain"
    ],
    approach: [
      "Sterile Single-use Acupuncture Needles",
      "Precise Trigger Point Location",
      "Local Twitch Response Elicitation",
      "Post-Needling Muscle Stretching"
    ],
    conditions: ["neck-pain", "back-pain", "heel-pain", "cervical-pain"],
    iconName: "Scissors",
    faqs: [
      {
        question: "How is Dry Needling different from Acupuncture?",
        answer: "Acupuncture is based on traditional Chinese medicine aiming to balance energy flow (Qi) along meridians. Dry Needling is a modern, Western medical technique targeting specific, anatomically defined trigger points in muscles and connective tissue to relieve pain."
      }
    ],
    content: `
      <h3>Targeting Pain at the Neuromuscular Source</h3>
      <p>Dry Needling involves inserting thin, sterile, solid filament needles into myofascial trigger points (muscle knots). These knots are hyper-irritable spots in skeletal muscle that can cause severe local pain or refer pain to other areas. The needle stimulates a local twitch response, which resets the chemical environment around the muscle fibers, instantly reducing muscle tension.</p>
    `
  },
  {
    slug: "electrotherapy",
    title: "Modern Clinical Electrotherapy",
    shortDesc: "Advanced pain relief and tissue healing modalities. Laser Therapy, IFT, TENS, and Clinical Ultrasound technology in Dehradun.",
    metaTitle: "Electrotherapy in Dehradun | IFT, TENS & Laser Therapy",
    metaDesc: "Advanced electrotherapy in Dehradun. High-tech laser therapy, ultrasound, IFT, and muscle stimulators for fast healing and pain control.",
    keywords: ["electrotherapy dehradun", "ultrasound therapy dehradun", "ift treatment dehradun"],
    benefits: [
      "Accelerated cellular repair and soft-tissue healing",
      "Non-invasive pain blocking at spinal cord level",
      "Deep tissue heating to increase tissue elasticity",
      "Reduces localized edema and chronic swelling"
    ],
    approach: [
      "Interferential Therapy (IFT)",
      "Transcutaneous Electrical Nerve Stimulation (TENS)",
      "High-Frequency Therapeutic Ultrasound",
      "Electrical Muscle Stimulation (EMS)"
    ],
    conditions: ["heel-pain", "knee-pain", "shoulder-pain", "frozen-shoulder"],
    iconName: "Flame",
    faqs: [
      {
        question: "Are there any side effects of electrotherapy?",
        answer: "No, clinical electrotherapy is highly safe when administered by trained physiotherapists. You will only feel a mild tingling or heating sensation. We screen for contraindications like pacemakers before application."
      }
    ],
    content: `
      <h3>Advanced Technological Modalities for Healing</h3>
      <p>Electrotherapy uses targeted electrical, sound, or light energy to stimulate tissue repair, reduce inflammation, and block pain signals. At RonEx, we utilize medical-grade devices that are calibrated regularly. These technologies are combined with manual exercises to ensure optimal, long-term functional recovery.</p>
    `
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post-Surgery Orthopedic Rehabilitation",
    shortDesc: "Structured, surgeon-aligned recovery programs after Total Knee Replacement, Hip Replacement, Spine Surgery, and Fracture recovery.",
    metaTitle: "Post-Surgery Rehabilitation in Dehradun | Joint & Spine Rehab",
    metaDesc: "Surgeon-approved post-surgery rehabilitation in Dehradun. Specialized physical therapy after knee replacement, hip surgery, and ligament repairs.",
    keywords: ["post surgery rehabilitation dehradun", "knee replacement rehab dehradun", "post operative physiotherapy dehradun"],
    benefits: [
      "Prevents post-operative scar tissue and joint stiffness",
      "Surgeon-aligned rehabilitation phase-wise protocols",
      "Safe, step-by-step weight-bearing guidance",
      "Rebuilds muscle volume lost due to post-surgical disuse"
    ],
    approach: [
      "Phase-Wise Surgeon Protocol Adherence",
      "Gentle Scar Tissue Mobilization",
      "Progressive Joint Mobilization",
      "Functional Task Re-education"
    ],
    conditions: ["knee-pain", "shoulder-pain", "back-pain", "acl-injury", "ligament-injury"],
    iconName: "Activity",
    faqs: [
      {
        question: "When should I begin physiotherapy after a total knee replacement?",
        answer: "Gentle exercises, ankle pumps, and static quadriceps settings can begin as early as Day 1 or Day 2 after surgery in the hospital. Active structured rehabilitation starts once you are discharged and home, usually within a week."
      }
    ],
    content: `
      <h3>Safe, Structured, and Surgeon-Aligned Recovery</h3>
      <p>The success of any major orthopedic surgery depends heavily on the quality of post-operative rehabilitation. Without structured movement, joints can become permanently stiff, and muscles will atrophy rapidly. We work closely with leading orthopedic surgeons across India to ensure our rehab plan aligns perfectly with their surgical report. We guide you through pain control, swelling management, safe mobility, and final athletic independence.</p>
    `
  },
  {
    slug: "stroke-rehabilitation",
    title: "Advanced Stroke & Paralysis Rehabilitation",
    shortDesc: "Intensive neuro-rehabilitation to recover movement, balance, and speech. Specialized home visit and in-clinic stroke therapy in Dehradun.",
    metaTitle: "Stroke Rehabilitation in Dehradun | Paralysis Recovery Care",
    metaDesc: "Comprehensive stroke and paralysis rehabilitation in Dehradun. High-tech neuro-physiotherapy to restore movement, gait, and daily independence.",
    keywords: ["stroke rehabilitation dehradun", "paralysis recovery dehradun", "stroke physiotherapy dehradun"],
    benefits: [
      "Restores walking ability and upper limb functions",
      "Improves cognitive motor planning and coordination",
      "Combats muscle contractures and painful limb alignment",
      "Re-establishes independence in washing, dressing, and eating"
    ],
    approach: [
      "Neuro-Developmental Treatment (NDT)",
      "Constraint-Induced Movement Therapy (CIMT)",
      "Customized Gait Training & Body Weight Support",
      "Mirror Therapy & Sensory Stimulation"
    ],
    conditions: ["stroke", "paralysis", "balance-disorders", "posture-correction"],
    iconName: "Dribbble",
    faqs: [
      {
        question: "Can old stroke patients benefit from physiotherapy?",
        answer: "Yes. While the fastest recovery occurs within the first 6 months of a stroke, chronic stroke patients (even years after the stroke) can make significant functional gains in balance, gait, and arm utility with task-specific training."
      }
    ],
    content: `
      <h3>Rebuilding Life After a Stroke</h3>
      <p>A stroke can be a life-altering event for both the patient and their family. Our stroke rehabilitation team provides intensive, compassionate, and evidence-based support. We address spasticity, flaccidity, foot drop, balance loss, and sensory neglect using a combination of neurological paradigms. Our goal is to assist the patient in returning to a self-sufficient, dignified, and active life.</p>
    `
  },
  {
    slug: "occupational-therapy",
    title: "Pediatric & Adult Occupational Therapy",
    shortDesc: "Develop, recover, and maintain daily living and work skills. Specialized occupational rehabilitation for sensory, physical, or cognitive challenges.",
    metaTitle: "Occupational Therapy in Dehradun | Daily Skill Rehab",
    metaDesc: "Professional occupational therapy in Dehradun. Helping children and adults master fine motor skills, sensory integration, and daily living tasks.",
    keywords: ["occupational therapy dehradun", "sensory integration therapy dehradun", "fine motor skills therapy dehradun"],
    benefits: [
      "Mastery of daily living activities (eating, writing, dressing)",
      "Enhanced sensory modulation and integration in kids",
      "Custom adaptations for home and workspace accessibility",
      "Improved fine motor dexterity and hand-eye coordination"
    ],
    approach: [
      "Sensory Integration Protocols",
      "Fine Motor Skill Training",
      "Cognitive Rehabilitation Exercises",
      "Ergonomic Workspace Redesign"
    ],
    conditions: ["balance-disorders", "posture-correction"],
    iconName: "ShieldAlert",
    faqs: [
      {
        question: "How is Occupational Therapy different from Physiotherapy?",
        answer: "Physiotherapy focuses on restoring gross motor movements, joint mobility, strength, and general physical function. Occupational Therapy focuses on how these physical abilities translate into daily life skills, fine motor tasks (like writing or using utensils), and sensory integration."
      }
    ],
    content: `
      <h3>Empowering Daily Life and Functional Independence</h3>
      <p>Occupational therapy addresses the physical, cognitive, and sensory challenges that prevent individuals from participating in their daily 'occupations'—which includes play, school, work, and self-care. For children with sensory processing disorders, ADHD, or autism, our therapists offer structured sensory integration rooms. For adults recovering from strokes or hand injuries, we rebuild fine motor skills and design assistive strategies to make home life easy.</p>
    `
  }
];
