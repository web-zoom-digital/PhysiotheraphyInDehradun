export interface ConditionItem {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  symptoms: string[];
  causes: string[];
  physioTreatment: string[];
  exercises: string[];
  relatedServices: string[]; // slugs
  faqs: { question: string; answer: string }[];
  content: string;
}

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    slug: "back-pain",
    title: "Physiotherapy for Back Pain",
    description: "Get permanent relief from acute or chronic lower back pain. Personalized physical therapy targeting disc issues, muscle strains, and posture alignment.",
    metaTitle: "Back Pain Treatment in Dehradun | Lower Back Relief Specialist",
    metaDescription: "Relieve back pain with advanced physiotherapy in Dehradun. Get Mulligan manual therapy, core exercises, and posture correction at RonEx.",
    keywords: ["back pain treatment dehradun", "lower back pain physiotherapist", "back pain cure dehradun"],
    symptoms: [
      "Dull aching pain in the lumbar region",
      "Stiffness when waking up or standing from a seated position",
      "Sharp pain radiating to the buttocks or legs",
      "Muscle spasms across the lower back"
    ],
    causes: [
      "Poor sitting posture and ergonomic strain",
      "Muscle pull or ligament strain due to heavy lifting",
      "Herniated or degenerated spinal discs",
      "Sedentary lifestyle and weak core muscles"
    ],
    physioTreatment: [
      "Manual mobilization to restore lumbar spinal alignment",
      "Interferential Therapy (IFT) for rapid spasm release",
      "Dry needling to eliminate deep myofascial trigger points",
      "Core stabilization and pelvic tilts"
    ],
    exercises: [
      "Cat-Camel stretch (spinal flexibility)",
      "Bird-Dog exercise (core stability)",
      "Pelvic tilts (deep core activation)",
      "Hamstring stretches (relieving lumbar pull)"
    ],
    relatedServices: ["orthopedic-physiotherapy", "manual-therapy", "dry-needling"],
    faqs: [
      {
        question: "How many sessions are needed for lower back pain recovery?",
        answer: "Mild muscle strain resolves in 3-5 sessions. Chronic back pain or disc herniation may require 10-15 sessions of progressive strengthening combined with posture training."
      }
    ],
    content: `
      <h3>Understanding Lower Back Pain</h3>
      <p>Lower back pain (lumbar pain) is one of the most common physical ailments. It frequently stems from mechanical issues, such as poor posture, weak core muscles, or improper lifting techniques. Over time, these strains can lead to deeper complications like slipped discs, sciatica, or facet joint arthritis. At RonEx, we conduct a detailed biomechanical review to locate the specific source of your discomfort.</p>
      
      <h3>Our Comprehensive Back Rehab Protocol</h3>
      <p>Our treatment strategy begins by resolving acute pain and muscle spasms using advanced electrotherapy and gentle spinal mobilizations. Once pain levels decrease, we pivot to active core stability training. We work closely with you to adjust your workplace ergonomics, ensuring you do not re-injure your back during daily activities.</p>
    `
  },
  {
    slug: "neck-pain",
    title: "Neck Pain & Spondylosis Therapy",
    description: "Effective treatment for neck stiffness, cervical spondylosis, and postural strains. Restore smooth movement and eliminate nerve compression.",
    metaTitle: "Neck Pain Treatment in Dehradun | Cervical Pain Relief",
    metaDescription: "Say goodbye to neck stiffness and cervical pain. Certified manual therapy, dry needling, and posture correction in Dehradun. Book now.",
    keywords: ["neck pain physiotherapy dehradun", "cervical spondylosis doctor dehradun", "neck stiffness cure"],
    symptoms: [
      "Constant stiffness and restricted neck rotation",
      "Dull ache extending to shoulders and upper back",
      "Tension headaches originating from base of skull",
      "Numbness or tingling radiating down the arms"
    ],
    causes: [
      "Chronic strain from forward head posture ('Text Neck')",
      "Cervical spondylosis (age-related disc wear)",
      "Whiplash or sudden acceleration-deceleration injuries",
      "Stress-induced muscle tension in upper trapezius"
    ],
    physioTreatment: [
      "Cervical joint mobilization (Maitland/Mulligan)",
      "Dry needling for trapezius trigger points",
      "Postural alignment exercises using biofeedback",
      "Cervical traction to relieve compressed nerve roots"
    ],
    exercises: [
      "Chin tucks (deep neck flexor strengthening)",
      "Trapezius stretches (releasing neck-to-shoulder strain)",
      "Scapular squeezes (improving upper back support)",
      "Isometric neck exercises (strength building)"
    ],
    relatedServices: ["manual-therapy", "dry-needling", "orthopedic-physiotherapy"],
    faqs: [
      {
        question: "Can 'text neck' be cured by physiotherapy?",
        answer: "Yes, Text Neck is caused by bad posture while looking at mobile phones or laptops. It is highly treatable through stretching, neck strengthening, and workstation ergonomic modifications."
      }
    ],
    content: `
      <h3>Relieving Neck Tension & Cervical Stiffness</h3>
      <p>Your cervical spine supports the weight of your head (around 5kg) and allows multi-directional movement. Poor posture, like slouched sitting at a computer, dramatically increases the load on your neck muscles, leading to spasms and premature disc wear. Our cervical rehabilitation program relaxes hyperactive muscles, aligns joints, and strengthens deep stabilizers to prevent chronic recurrences.</p>
    `
  },
  {
    slug: "sciatica",
    title: "Sciatica Nerve Pain Relief",
    description: "Targeted therapy to relieve sciatic nerve compression. Stop shooting leg pain, numbness, and tingling with specialized spinal mobilization.",
    metaTitle: "Sciatica Treatment Dehradun | Sciatic Nerve Pain Relief",
    metaDescription: "Struggling with shooting leg pain? Advanced sciatica physiotherapy in Dehradun at RonEx. Relieve nerve pressure safely. Book now.",
    keywords: ["sciatica treatment dehradun", "sciatic nerve pain physiotherapist", "leg pain cure dehradun"],
    symptoms: [
      "Sharp, electric shock-like pain radiating from lower back down to foot",
      "Burning sensation along the back of the thigh and calf",
      "Numbness, tingling, or weakness in the affected leg",
      "Pain that worsens with prolonged sitting or coughing"
    ],
    causes: [
      "Herniated or bulging disc pressing on sciatic nerve roots",
      "Piriformis syndrome (deep buttock muscle compressing the nerve)",
      "Lumbar spinal stenosis (narrowing of the spinal canal)",
      "Spondylolisthesis (slipping of one vertebra over another)"
    ],
    physioTreatment: [
      "Nerve flossing / neural mobilization to release trapped nerve",
      "Mulligan mobilization of lumbar spine",
      "Manual release of piriformis muscle trigger points",
      "Lumbar decompression therapy"
    ],
    exercises: [
      "Nerve flossing drills (improving nerve mobility)",
      "Piriformis stretch (releasing deep gluteal compression)",
      "Knee-to-chest stretches (lumbar opening)",
      "Gentle extension exercises (disc centralization)"
    ],
    relatedServices: ["manual-therapy", "orthopedic-physiotherapy", "home-physiotherapy"],
    faqs: [
      {
        question: "Is sciatica pain permanent?",
        answer: "No. Sciatica is highly curable. In over 90% of cases, pressure on the sciatic nerve is successfully relieved using conservative physiotherapy within 4 to 8 weeks, avoiding surgery."
      }
    ],
    content: `
      <h3>Overcoming Sciatica Pain</h3>
      <p>Sciatica refers to pain that radiates along the path of the sciatic nerve, which travels from your lower back, through your hips and buttocks, and down each leg. Typically, sciatica affects only one side of the body. The goal of our clinic is to centralize the pain (move it from the foot/leg back into the lower back) and ultimately resolve it by removing the compression on the nerve root.</p>
    `
  },
  {
    slug: "slip-disc",
    title: "Non-Surgical Slip Disc Treatment",
    description: "Scientific rehabilitation for herniated and bulging discs. Restore spine health, relieve nerve compression, and avoid back surgery.",
    metaTitle: "Slip Disc Treatment in Dehradun | Herniated Disc Therapy",
    metaDescription: "Get expert, non-surgical treatment for slip disc in Dehradun. Spinal decompression, manual therapy, and McKenzie exercises at RonEx.",
    keywords: ["slip disc treatment dehradun", "herniated disc physiotherapy", "spinal decompression dehradun"],
    symptoms: [
      "Localized deep back or neck pain at the disc site",
      "Radiating pain to arms (cervical disc) or legs (lumbar disc)",
      "Weakness in lifting foot or holding objects",
      "Increased pain when bending forward or coughing"
    ],
    causes: [
      "Age-related degeneration (dehydration of disc nucleus)",
      "Sudden heavy lifting using back muscles instead of legs",
      "Repetitive twisting and bending motions",
      "High-impact trauma or accidents"
    ],
    physioTreatment: [
      "McKenzie Method of Mechanical Diagnosis and Therapy",
      "Controlled spinal decompression therapy",
      "Spinal stabilization exercises (core strengthening)",
      "Myofascial release of protective muscle guarding"
    ],
    exercises: [
      "Prone press-ups (McKenzie extension)",
      "Standing back extension",
      "Abdominal bracing",
      "Quadruped arm-leg extensions"
    ],
    relatedServices: ["orthopedic-physiotherapy", "manual-therapy", "home-physiotherapy"],
    faqs: [
      {
        question: "Can a slipped disc heal on its own?",
        answer: "Yes, herniated disc material is often reabsorbed by the body. Physiotherapy accelerates this process by utilizing spinal extension exercises that push the disc back into place and relieve nerve compression."
      }
    ],
    content: `
      <h3>Understanding Disc Herniation (Slipped Disc)</h3>
      <p>Spinal discs act as shock absorbers between your vertebrae. A slipped disc occurs when the soft gel-like center (nucleus pulposus) pushes through a tear in the tougher exterior (annulus fibrosus). This protrusion can pinch nearby spinal nerves. Our certified McKenzie therapists analyze your spinal movement directions to customize exercises that reduce the protrusion safely and quickly.</p>
    `
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    description: "Restore complete, pain-free shoulder movement. Specialized manual mobilization and stretch techniques for fast joint recovery.",
    metaTitle: "Frozen Shoulder Treatment in Dehradun | Shoulder Stiffness",
    metaDescription: "Regain shoulder mobility with advanced physiotherapy in Dehradun. Mulligan mobilization, joint stretching, and laser therapy for frozen shoulder.",
    keywords: ["frozen shoulder treatment dehradun", "adhesive capsulitis physiotherapy", "shoulder stiffness cure"],
    symptoms: [
      "Severe, dull ache in outer shoulder, worse at night",
      "Inability to raise arm upwards or rotate it outwards",
      "Stiffness that makes dressing or reaching back difficult",
      "Sharp pain during sudden, accidental arm movements"
    ],
    causes: [
      "Prolonged joint immobilization after injury or fracture",
      "Systemic conditions like Diabetes Mellitus",
      "Rotator cuff tendinitis or shoulder bursitis",
      "Age-related inflammatory changes in the joint capsule"
    ],
    physioTreatment: [
      "Mulligan Mobilization with Movement (highly effective for range of motion)",
      "High-Frequency Ultrasound/Laser to reduce capsule inflammation",
      "Passive capsular stretches",
      "Rotator cuff strengthening exercises"
    ],
    exercises: [
      "Pendulum exercises (joint mobilization)",
      "Towel stretch (improving internal rotation)",
      "Finger ladder climb (shoulder abduction)",
      "Rotator cuff strengthening with resistance bands"
    ],
    relatedServices: ["manual-therapy", "electrotherapy", "orthopedic-physiotherapy"],
    faqs: [
      {
        question: "Why does frozen shoulder occur more in diabetic patients?",
        answer: "Diabetes alters the collagen structure within the joint capsule, making it more prone to thickening, contracting, and sticking. Diabetic patients require gentle, early physical therapy to prevent severe locking."
      }
    ],
    content: `
      <h3>Overcoming Frozen Shoulder</h3>
      <p>Frozen shoulder (adhesive capsulitis) is characterized by stiffness and pain in the shoulder joint. The condition typically develops in three stages: Freezing (painful stage), Frozen (severe restriction), and Thawing (mobility improvement). At RonEx, we utilize advanced manual therapies like Mulligan techniques to glidingly mobilize the stiff humerus head, dramatically shortening the recovery timeline.</p>
    `
  },
  {
    slug: "knee-pain",
    title: "Knee Pain & Osteoarthritis Rehab",
    description: "Avoid knee replacement. Comprehensive rehabilitation for knee osteoarthritis, meniscus tears, patellar tendinitis, and joint pain.",
    metaTitle: "Knee Pain Treatment in Dehradun | Osteoarthritis Rehab",
    metaDescription: "Struggling with knee pain or arthritis? Consult our experts in Dehradun. Strength building, manual therapy, and joint care to avoid surgery.",
    keywords: ["knee pain treatment dehradun", "osteoarthritis knee physiotherapy", "meniscus tear rehabilitation"],
    symptoms: [
      "Deep joint pain while walking, climbing stairs, or squatting",
      "Morning stiffness lasting less than 30 minutes",
      "Swelling, warmth, and grating sound (crepitus) in knee joint",
      "Inability to bend or straighten the knee completely"
    ],
    causes: [
      "Knee Osteoarthritis (age-related cartilage wear)",
      "Meniscus tears or ligament sprains (ACL/MCL)",
      "Patellofemoral pain syndrome (faulty kneecap tracking)",
      "Excess body weight putting high pressure on joint surfaces"
    ],
    physioTreatment: [
      "Quadriceps, hamstring, and gluteal strengthening",
      "Manual patella mobilization to improve patella tracking",
      "Electrotherapy (Ultrasound & IFT) to decrease inflammation",
      "Knee taping for mechanical unloading"
    ],
    exercises: [
      "Static quadriceps squeeze",
      "Straight Leg Raises (SLR)",
      "Clamshell exercises (hip strength for knee stability)",
      "Wall slides (safe quadriceps loading)"
    ],
    relatedServices: ["orthopedic-physiotherapy", "electrotherapy", "post-surgery-rehabilitation"],
    faqs: [
      {
        question: "Can knee physiotherapy help me avoid surgery?",
        answer: "Yes. For Grade 1, 2, and even early Grade 3 knee osteoarthritis, structured quadriceps and gluteal strengthening reduces joint pressure, relieves pain, and improves walking, postponing or eliminating the need for knee replacement."
      }
    ],
    content: `
      <h3>Scientific Knee Pain Rehabilitation</h3>
      <p>Knee pain can severely restrict your freedom of movement. Because the knee joint is situated between the hip and ankle, its alignment is heavily influenced by both. At our clinic, we evaluate your standing posture, foot arch, and hip stability. We create custom protocols that target weak stabilizer muscles, unload painful areas, and restore normal walking patterns.</p>
    `
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder Pain & Rotator Cuff Therapy",
    description: "Expert therapy for rotator cuff tears, impingement syndrome, and bursitis. Restore arm strength and overhead mobility.",
    metaTitle: "Shoulder Pain Treatment in Dehradun | Rotator Cuff Care",
    metaDescription: "Relieve shoulder impingement and rotator cuff pain. Experienced physiotherapists in Dehradun offer manual therapy and rehab. Call today.",
    keywords: ["shoulder pain physiotherapy dehradun", "rotator cuff rehab dehradun", "shoulder impingement therapy"],
    symptoms: [
      "Pain when raising arm overhead or reaching backward",
      "Weakness when lifting objects or rotating the arm",
      "Dull, deep ache in the shoulder joint, especially at night",
      "Clicking or catching sound when moving the arm"
    ],
    causes: [
      "Rotator cuff tendinitis or tears (overuse or trauma)",
      "Shoulder impingement (tendons pinched under bone)",
      "Subacromial bursitis (inflamed fluid-filled sac)",
      "Poor thoracic spine posture causing mechanical crowding"
    ],
    physioTreatment: [
      "Rotator cuff tendon healing stimulation (Laser/Ultrasound)",
      "Manual scapular stabilization techniques",
      "Thoracic spine mobilization to open up subacromial space",
      "Progressive shoulder strengthening"
    ],
    exercises: [
      "Scapular setting",
      "Sleeper stretch (posterior capsule release)",
      "External rotation with band",
      "Prone Y-T-W raises"
    ],
    relatedServices: ["manual-therapy", "electrotherapy", "sports-physiotherapy"],
    faqs: [
      {
        question: "What is shoulder impingement?",
        answer: "Impingement happens when the top of the shoulder blade rubs against and pinches the rotator cuff tendons beneath it. Physiotherapy cures this by improving shoulder posture and scapular mechanics."
      }
    ],
    content: `
      <h3>Comprehensive Shoulder Rehab</h3>
      <p>The shoulder is the most mobile joint in the human body, relying heavily on a complex group of muscles called the rotator cuff for stability. Impingements, tears, and tendinopathy are highly common. We analyze your scapulohumeral rhythm (how your shoulder blade moves relative to your arm) and design customized exercises to restore normal mechanics and rebuild pain-free strength.</p>
    `
  },
  {
    slug: "heel-pain",
    title: "Heel Pain & Plantar Fasciitis Therapy",
    description: "Eliminate morning heel pain. Specialized treatment for plantar fasciitis, heel spurs, and achilles tendinitis in Dehradun.",
    metaTitle: "Heel Pain Treatment in Dehradun | Plantar Fasciitis Relief",
    metaDescription: "Struggling with sharp morning heel pain? Advanced physiotherapy in Dehradun for plantar fasciitis and heel spurs. Call RonEx today.",
    keywords: ["heel pain treatment dehradun", "plantar fasciitis physiotherapist", "heel spur therapy dehradun"],
    symptoms: [
      "Sharp, stabbing pain under the heel during the first steps in the morning",
      "Pain that decreases with walking but returns after sitting for a while",
      "Tenderness when pressing the bottom of the heel",
      "Tightness in calf muscles and Achilles tendon"
    ],
    causes: [
      "Plantar Fasciitis (inflammation of thick sole tissue)",
      "Calcaneal heel spur (bony growth on heel bone)",
      "Flat feet or high arches leading to uneven loading",
      "Improper footwear lacking arch support"
    ],
    physioTreatment: [
      "Myofascial release of plantar fascia and calf muscles",
      "High-Frequency Ultrasound to resolve local inflammation",
      "Dry needling for stubborn trigger points in calf muscles",
      "Taping to support the foot arch"
    ],
    exercises: [
      "Plantar fascia stretching (using towel or hands)",
      "Calf wall stretch",
      "Foot arch strengthening (scrunching towel with toes)",
      "Eccentric heel drops"
    ],
    relatedServices: ["dry-needling", "manual-therapy", "electrotherapy"],
    faqs: [
      {
        question: "Why is heel pain worse in the morning?",
        answer: "Overnight, the plantar fascia tissue contracts and tightens. When you take your first steps in the morning, the sudden stretch causes micro-tears in the inflamed tissue, producing sharp pain. Stretching before getting out of bed helps prevent this."
      }
    ],
    content: `
      <h3>Resolving Stubborn Heel Pain</h3>
      <p>Heel pain, particularly when caused by Plantar Fasciitis, can turn simple walking into a painful ordeal. We address heel pain by stretching tight plantar structures, releasing calf tension (which pulls on the heel), and recommending appropriate orthotic insoles or footwear modifications. Our multidisciplinary approach provides rapid and permanent relief.</p>
    `
  },
  {
    slug: "arthritis",
    title: "Arthritis Pain Management & Rehab",
    description: "Manage pain, preserve mobility, and improve joint health. Specialized care for Osteoarthritis, Rheumatoid Arthritis, and Spondylitis.",
    metaTitle: "Arthritis Treatment in Dehradun | Joint Pain Management",
    metaDescription: "Live actively with arthritis. Specialized physiotherapy in Dehradun to manage joint pain, reduce stiffness, and restore function. Book now.",
    keywords: ["arthritis treatment dehradun", "rheumatoid arthritis physiotherapy", "joint pain doctor dehradun"],
    symptoms: [
      "Persistent pain, stiffness, and swelling in multiple joints",
      "Reduced range of movement and flexibility",
      "Joint deformity or enlargement over time",
      "Fatigue and morning stiffness"
    ],
    causes: [
      "Age-related cartilage wear and tear (Osteoarthritis)",
      "Autoimmune joint capsule inflammation (Rheumatoid Arthritis)",
      "Genetic predisposition and family history",
      "Obesity and history of traumatic joint injuries"
    ],
    physioTreatment: [
      "Gentle joint mobilization to maintain joint play",
      "Low-impact strengthening exercises (hydrotherapy style / safe loading)",
      "Paraffin wax bath therapy for hands/feet arthritis pain",
      "Joint protection training and assistive advice"
    ],
    exercises: [
      "Range of motion exercises (circling joints gently)",
      "Static muscle contractions",
      "Water aerobics or stationary cycling",
      "Gentle yoga stretches"
    ],
    relatedServices: ["orthopedic-physiotherapy", "electrotherapy", "geriatric-physiotherapy"],
    faqs: [
      {
        question: "Does exercise worsen arthritis joint wear?",
        answer: "No. In fact, targeted low-impact exercises build supporting muscles, lubricate the joint surfaces, and improve joint flexibility, which reduces wear-and-tear and significantly relieves pain."
      }
    ],
    content: `
      <h3>Living Comfortably with Arthritis</h3>
      <p>Arthritis is a chronic inflammatory condition affecting the joints. While there is no structural cure for degenerative arthritis, physiotherapy is the Gold Standard for management. We help you preserve joint movement, strengthen muscles to absorb shocks, and modify activities to protect your joints, ensuring you remain active and independent.</p>
    `
  },
  {
    slug: "cervical-pain",
    title: "Cervical Pain & Radiculopathy relief",
    description: "Relieve neck pain radiating to shoulders, arms, and fingers. Expert decompression and manual therapy for cervical spondylosis.",
    metaTitle: "Cervical Pain Treatment in Dehradun | Pinched Nerve Relief",
    metaDescription: "Cure cervical neck pain and arm numbness. RonEx Physiotherapy offers Mulligan therapy, cervical traction, and core posture training.",
    keywords: ["cervical pain treatment dehradun", "cervical radiculopathy physiotherapy", "cervical spondylosis care"],
    symptoms: [
      "Stiff neck with pain radiating to the scapula or arm",
      "Numbness, tingling, or 'pins and needles' sensation in fingers",
      "Hand muscle weakness or difficulty griping objects",
      "Headaches starting from the neck area"
    ],
    causes: [
      "Cervical disc bulge compressing spinal nerve roots",
      "Degenerative narrowing of cervical foramina",
      "Poor forward head posture in office workers",
      "Spade or osteophyte formation pressing on nerves"
    ],
    physioTreatment: [
      "Cervical mechanical or manual traction",
      "Neural dynamic mobilization (nerve flossing)",
      "Mulligan mobilization of stiff cervical segments",
      "Postural correction and ergonomic training"
    ],
    exercises: [
      "Cervical retraction (chin tucks)",
      "Suboccipital release stretch",
      "Shoulder blade retractions",
      "Isometric cervical rotation strengthening"
    ],
    relatedServices: ["manual-therapy", "dry-needling", "orthopedic-physiotherapy"],
    faqs: [
      {
        question: "Can cervical spondylosis cause dizziness?",
        answer: "Yes. Severe cervical muscle spasms and joint dysfunction can disrupt neck proprioception inputs to the brain, producing a sensation of dizziness (cervicogenic vertigo), which is highly treatable by physiotherapy."
      }
    ],
    content: `
      <h3>Relieving Cervical Nerve Compression</h3>
      <p>Cervical radiculopathy occurs when a nerve root in the neck is compressed or inflamed as it branches off the spinal cord. This results in radiating pain and numbness down the arm. Our clinical approach focuses on decompressive manual techniques and traction to open up the nerve spaces, combined with muscle re-education to maintain normal head alignment.</p>
    `
  },
  {
    slug: "acl-injury",
    title: "ACL Injury Rehabilitation",
    description: "Recover from ACL tears. Specialized post-surgical rehabilitation and non-surgical ACL management programs in Dehradun.",
    metaTitle: "ACL Injury Rehab in Dehradun | Anterior Cruciate Ligament Care",
    metaDescription: "Recover from ACL tears at RonEx. Specialized athletic knee rehabilitation post-ACL reconstruction or non-surgical rehab. Book now.",
    keywords: ["acl rehab dehradun", "acl tear physiotherapy dehradun", "knee ligament recovery"],
    symptoms: [
      "A loud 'pop' sound in the knee during injury",
      "Rapid swelling and severe joint pain within hours",
      "Instability - a feeling that the knee will 'give way'",
      "Restricted knee bending and straightening"
    ],
    causes: [
      "Sudden change of direction or pivoting during sports",
      "Landing awkwardly from a jump",
      "Direct impact to the side of the knee",
      "Sudden deceleration or stopping while running"
    ],
    physioTreatment: [
      "Swelling control using cryo-compression and elevation",
      "Quadriceps and hamstring activation (preventing atrophy)",
      "Proprioception and balance training on unstable boards",
      "Return-to-sport agility drills in final stages"
    ],
    exercises: [
      "Quad sets and SLR",
      "Hamstring curls (essential for ACL stability)",
      "Single-leg balance drills",
      "Agility ladder drills (advanced stage)"
    ],
    relatedServices: ["sports-physiotherapy", "post-surgery-rehabilitation", "electrotherapy"],
    faqs: [
      {
        question: "Can a partial ACL tear heal without surgery?",
        answer: "Yes, many partial ACL tears can be managed without surgery if the knee joint remains stable. A structured 3-month physiotherapy program focusing on hamstring strength and neuromuscular balance is highly successful."
      }
    ],
    content: `
      <h3>Anterior Cruciate Ligament (ACL) Rehabilitation</h3>
      <p>The ACL is a vital stabilizer inside your knee joint. ACL injuries are common in sports involving pivoting or jumping (like football, basketball, and badminton). At RonEx, we guide patients through safe, phase-wise rehabilitation. For post-surgical ACL reconstructions, we follow a strict medical calendar to ensure the newly grafted ligament heals perfectly while rebuilding full athletic capacity.</p>
    `
  },
  {
    slug: "ligament-injury",
    title: "Ligament & Tendon Sprain Recovery",
    description: "Fast healing for ankle sprains, wrist strains, and shoulder ligament tears. Restore joint stability and prevent chronic weakness.",
    metaTitle: "Ligament Injury Treatment in Dehradun | Sprain Recovery",
    metaDescription: "Recover from ankle sprains, wrist injuries, and ligament strains. Advanced ultrasound, joint mobilization, and strength training in Dehradun.",
    keywords: ["ligament injury physiotherapy dehradun", "ankle sprain treatment", "tendon tear recovery"],
    symptoms: [
      "Immediate pain, bruising, and localized swelling at the joint",
      "Tenderness when touching the injured ligament",
      "Difficulty putting weight on the foot or moving the wrist",
      "Joint instability or feeling loose"
    ],
    causes: [
      "Twisting of the foot (inversion ankle sprain)",
      "Sudden fall on an outstretched hand (wrist sprain)",
      "Repetitive strain from overhead activities (shoulder ligaments)",
      "Traumatic collision during sports"
    ],
    physioTreatment: [
      "POLICE protocol (Protect, Optimal Loading, Ice, Compression, Elevation)",
      "High-frequency ultrasound to stimulate collagen repair",
      "Friction massage to prevent scar tissue restriction",
      "Progressive joint stabilization exercises"
    ],
    exercises: [
      "Ankle alphabet tracing",
      "Resistance band inversion/eversion",
      "Wobble board balance training",
      "Eccentric tendon strengthening"
    ],
    relatedServices: ["sports-physiotherapy", "electrotherapy", "manual-therapy"],
    faqs: [
      {
        question: "How is a sprain different from a strain?",
        answer: "A sprain is the stretching or tearing of ligaments (connective tissue connecting bones). A strain is the stretching or tearing of muscle fibers or tendons (connective tissue connecting muscle to bone). Both respond exceptionally well to physiotherapy."
      }
    ],
    content: `
      <h3>Professional Care for Joint Sprains</h3>
      <p>Ligament injuries are commonly caused by sudden twists or impacts that force a joint out of its normal range. If not rehabilitated properly, ligaments heal with weak, disorganized scar tissue, leading to chronic joint instability and frequent re-injuries. Our program focuses on controlled loading, collagen stimulation, and deep joint positional awareness (proprioception) to restore full strength.</p>
    `
  },
  {
    slug: "stroke",
    title: "Neuro Rehabilitation after Stroke",
    description: "Regain movement, coordination, and independence after a stroke. Advanced Bobath, PNF, and task-specific neuro training.",
    metaTitle: "Stroke Recovery in Dehradun | Advanced Neuro Rehab",
    metaDescription: "Comprehensive stroke rehabilitation in Dehradun. Get personalized neuro-physiotherapy to restore movement, balance, and independence. Book now.",
    keywords: ["stroke rehabilitation dehradun", "stroke recovery specialist", "neuro physiotherapy post stroke"],
    symptoms: [
      "Hemiplegia (weakness or paralysis on one side of the body)",
      "Spasticity (stiff, tight muscles and contracted limbs)",
      "Balance loss and coordination difficulties (ataxia)",
      "Difficulty speaking (aphasia) or swallowing (dysphagia)"
    ],
    causes: [
      "Ischemic Stroke (blocked blood flow to the brain)",
      "Hemorrhagic Stroke (bleeding in the brain)",
      "Transient Ischemic Attack (TIA) leading to neurological deficit",
      "Brain injury causing motor pathway disruption"
    ],
    physioTreatment: [
      "Facilitation of normal movement patterns (Bobath Concept)",
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Task-specific upper and lower limb training",
      "Gait re-education with weight support"
    ],
    exercises: [
      "Weight-shifting drills while standing",
      "Bridging (hip extension)",
      "Reach-and-grasp training",
      "Step-ups and walking drills"
    ],
    relatedServices: ["stroke-rehabilitation", "neuro-physiotherapy", "home-physiotherapy"],
    faqs: [
      {
        question: "How soon should stroke rehabilitation start?",
        answer: "Stroke rehabilitation should start as soon as the patient is medically stable, often within 24 to 48 hours of the stroke event. Early stimulation maximizes the recovery of damaged brain pathways."
      }
    ],
    content: `
      <h3>Restoring Function After a Stroke</h3>
      <p>A stroke occurs when the blood supply to part of the brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. Neurological rehabilitation is essential to help patients relearn movements and adapt to physical changes. We design intensive, repetitive, goal-oriented programs to help you recover as much independence as possible.</p>
    `
  },
  {
    slug: "paralysis",
    title: "Physical Therapy for Paralysis Recovery",
    description: "Rebuild muscle control and sensory awareness. Specialized rehabilitation for Hemiplegia, Paraplegia, and Nerve Injury paralysis.",
    metaTitle: "Paralysis Treatment in Dehradun | Muscle & Nerve Rehab",
    metaDescription: "Struggling with paralysis or nerve injury? Advanced neuro-rehab in Dehradun at RonEx. Specialized muscle stimulation & therapy.",
    keywords: ["paralysis treatment dehradun", "paralysis rehabilitation doctor", "nerve injury physiotherapy"],
    symptoms: [
      "Complete loss of voluntary movement in affected limbs",
      "Muscle wasting (atrophy) due to lack of nerve input",
      "Loss of touch, temperature, or position sensation",
      "Increased muscle stiffness (spasticity) or extreme floppiness"
    ],
    causes: [
      "Spinal Cord Injury (Paraplegia or Quadriplegia)",
      "Traumatic Brain Injury or Brain Tumors",
      "Peripheral Nerve Injuries (Radial/Sciatic nerve palsy)",
      "Stroke or neurological infections"
    ],
    physioTreatment: [
      "Electrical Muscle Stimulation (EMS) to prevent muscle atrophy",
      "Passive range of motion exercises to preserve joint health",
      "Tilt-table training for cardiovascular orthostatic adaptation",
      "Functional transfer and wheelchair independence training"
    ],
    exercises: [
      "Passive leg/arm stretching",
      "Supported standing drills",
      "Core stability on Swiss balls",
      "Upper limb coordination exercises"
    ],
    relatedServices: ["neuro-physiotherapy", "stroke-rehabilitation", "home-physiotherapy"],
    faqs: [
      {
        question: "Can muscles recover after paralysis?",
        answer: "Yes, depending on whether the nerve injury is complete or incomplete. Electrical stimulation keeps muscle fibers healthy while nerve pathways recover, and active exercises retrain the brain to command these muscles."
      }
    ],
    content: `
      <h3>Dedicated Paralysis Rehabilitation</h3>
      <p>Paralysis is the loss of muscle function in part of your body. It can be partial or complete, temporary or permanent. Our team provides an empathetic, multi-disciplinary approach. We use advanced therapeutic stimulators to keep muscles alive, prevent joint stiffening contractures, and guide patients through physical and sensory re-education to optimize recovery.</p>
    `
  },
  {
    slug: "parkinsons-disease",
    title: "Parkinson's Disease Mobility Therapy",
    description: "Improve balance, reduce tremors, and counter rigidity. Specialized LSVT-style mobility training for Parkinson's patients in Dehradun.",
    metaTitle: "Parkinson's Treatment in Dehradun | Balance & Gait Therapy",
    metaDescription: "Improve Parkinson's symptoms with physiotherapy in Dehradun. Specialized balance drills, gait training, and rigidity relief at RonEx.",
    keywords: ["parkinsons treatment dehradun", "parkinsons physiotherapy doctor", "balance therapy seniors"],
    symptoms: [
      "Resting tremors in hands, arms, or legs",
      "Muscle stiffness (rigidity) and difficulty moving",
      "Bradykinesia (extreme slowness of movement)",
      "Postural instability, causing frequent loss of balance"
    ],
    causes: [
      "Degeneration of dopamine-producing neurons in the brain",
      "Genetic predisposition",
      "Environmental toxins exposure",
      "Aging changes in motor control centers"
    ],
    physioTreatment: [
      "Large-amplitude movement training (LSVT BIG style)",
      "Rhythmic auditory cueing to overcome gait freezing",
      "Balance training on foam and balance boards",
      "Trunk rotation stretches to counter rigidity"
    ],
    exercises: [
      "Large step-overs (combating shuffling gait)",
      "Arm swinging while walking",
      "Standing balance drills",
      "Chest-opening posture stretches"
    ],
    relatedServices: ["neuro-physiotherapy", "geriatric-physiotherapy", "home-physiotherapy"],
    faqs: [
      {
        question: "Can physiotherapy stop the progress of Parkinson's?",
        answer: "While Parkinson's is a progressive neurological disease, consistent physiotherapy significantly slows down the decline in mobility, improves balance, prevents falls, and keeps patients walking independently for many years longer."
      }
    ],
    content: `
      <h3>Managing Parkinson's Disease with Movement</h3>
      <p>Parkinson's disease is a nervous system disorder that affects movement, often causing stiffness, tremors, and shuffling steps. Our physical therapy programs focus on 'thinking big.' We train patients to make larger movements to override the brain's micro-scaling, use rhythmic sounds to bypass frozen walking patterns, and build core stability to prevent dangerous falls.</p>
    `
  },
  {
    slug: "bells-palsy",
    title: "Bell's Palsy Facial Muscle Rehab",
    description: "Restore facial symmetry and expressions. Facial muscle stimulation, massage, and exercises for Bell's Palsy recovery.",
    metaTitle: "Bell's Palsy Treatment in Dehradun | Facial Muscle Therapy",
    metaDescription: "Recover facial muscle control and symmetry. Specialized Bell's Palsy physiotherapy in Dehradun. Facial stimulation & exercises.",
    keywords: ["bells palsy treatment dehradun", "facial paralysis physiotherapy", "facial nerve rehabilitation"],
    symptoms: [
      "Sudden weakness or paralysis on one side of the face",
      "Drooping of the corner of the mouth and eyelid",
      "Inability to close the eye, blink, or wrinkle the forehead",
      "Drooling and loss of taste on the affected side"
    ],
    causes: [
      "Inflammation/compression of the 7th cranial (facial) nerve",
      "Viral infection activation (e.g. Herpes Simplex)",
      "Cold air draft exposure causing nerve congestion",
      "Stress-related immune drop"
    ],
    physioTreatment: [
      "Faradic electrical stimulation to facial muscles",
      "Gentle manual facial massage to maintain blood circulation",
      "Facial feedback training (using mirrors)",
      "Eye protection guidance and taping instructions"
    ],
    exercises: [
      "Gentle forehead wrinkling",
      "Attempting to close eyes tightly",
      "Pursing lips and blowing",
      "Smiling and puffing out cheeks"
    ],
    relatedServices: ["neuro-physiotherapy", "electrotherapy", "home-physiotherapy"],
    faqs: [
      {
        question: "How long does Bell's Palsy take to recover?",
        answer: "Most patients start showing recovery within 2 to 3 weeks. Complete recovery of facial symmetry and movement typically occurs in 2 to 3 months with daily facial exercises and electrical muscle stimulation."
      }
    ],
    content: `
      <h3>Restoring Facial Movement in Bell's Palsy</h3>
      <p>Bell's palsy causes sudden, temporary weakness in your facial muscles. It happens when the facial nerve becomes swollen, inflamed, or compressed. At our clinic, we use precise facial muscle stimulators to prevent muscle thinning while the nerve heals. Our customized mirror feedback exercises guide you to rebuild symmetrical facial expressions like smiling, blinking, and speaking.</p>
    `
  },
  {
    slug: "posture-correction",
    title: "Postural Correction & Ergonomics",
    description: "Eliminate aches caused by slouching. Correct forward head posture, rounded shoulders, and scoliosis in Dehradun.",
    metaTitle: "Posture Correction in Dehradun | Ergonomic Specialist",
    metaDescription: "Fix slouched posture and eliminate back/neck stiffness. RonEx Physiotherapy offers postural analysis, alignment correction, and exercises.",
    keywords: ["posture correction dehradun", "postural assessment clinic", "forward head posture therapy"],
    symptoms: [
      "Chronic neck and shoulder ache after sitting at a computer",
      "Rounded shoulders and a visible forward lean of the head",
      "Lower back soreness due to pelvic tilt issues",
      "Frequent muscle fatigue and headaches"
    ],
    causes: [
      "Long hours of sitting with poor desk ergonomics",
      "Weakness in postural muscles (rhomboids, deep neck flexors)",
      "Tightness in chest (pectoralis) and hip flexor muscles",
      "Lack of ergonomic awareness and physical activity"
    ],
    physioTreatment: [
      "Full digital and manual postural alignment check",
      "Myofascial stretching of tight muscle groups",
      "Strengthening of stabilizer muscles (scapular & core)",
      "Workspace ergonomics consulting and correction advice"
    ],
    exercises: [
      "Wall slides for upper back alignment",
      "Doorway chest stretch",
      "Planks (abdominal bracing)",
      "Chin tucks for forward head posture"
    ],
    relatedServices: ["manual-therapy", "orthopedic-physiotherapy", "occupational-therapy"],
    faqs: [
      {
        question: "Can posture be corrected in adults?",
        answer: "Yes. Posture is a combination of muscle memory, strength, and flexibility. Through target stretching of tight tissues, strengthening weak back/core muscles, and conscious desk adjustment, adults can permanently improve their posture."
      }
    ],
    content: `
      <h3>Correcting Posture for Pain-Free Living</h3>
      <p>Bad posture is not just an aesthetic issue; it alters the loading forces on your spine, leading to early disc wear, pinched nerves, and chronic muscle pain. Our posture program goes beyond telling you to 'stand up straight.' We perform a comprehensive physical alignment assessment, identify structural imbalances, and design a customized stretching/strengthening program to retrain your nervous system's posture memory.</p>
    `
  },
  {
    slug: "balance-disorders",
    title: "Balance & Gait Rehabilitation",
    description: "Overcome dizziness, unsteady walking, and fear of falling. Specialized vestibular and balance therapy in Dehradun.",
    metaTitle: "Balance Disorder Treatment in Dehradun | Gait Rehab",
    metaDescription: "Unsteady walking or dizziness? Specialized vestibular and balance rehabilitation in Dehradun. Prevent falls and walk with confidence.",
    keywords: ["balance disorders physiotherapy dehradun", "gait rehabilitation clinic", "vestibular rehab dehradun"],
    symptoms: [
      "A feeling of dizziness, spinning (vertigo), or lightheadedness",
      "Unsteady walking, swaying, or veering to one side",
      "Frequent tripping or a persistent fear of falling",
      "Difficulty walking on uneven surfaces or in dark rooms"
    ],
    causes: [
      "Vestibular system issues (inner ear balance coordinates)",
      "Neuropathy or loss of sensation in feet (diabetic sensory loss)",
      "Age-related decay in balance reflexes",
      "Stroke, ataxia, or cerebellar coordination issues"
    ],
    physioTreatment: [
      "Cawthorne-Cooksey vestibular rehabilitation drills",
      "Canalith repositioning maneuvers for BPPV (vertigo)",
      "Proprioceptive training using balance boards and foam blocks",
      "Step-length and gait pattern re-training"
    ],
    exercises: [
      "Single-leg stand (with support, progress to eyes closed)",
      "Tandem walking (heel-to-toe walking)",
      "Vestibular eye-tracking exercises",
      "Sit-to-stand drills"
    ],
    relatedServices: ["neuro-physiotherapy", "geriatric-physiotherapy", "occupational-therapy"],
    faqs: [
      {
        question: "What is BPPV and can physiotherapy cure it?",
        answer: "BPPV (Benign Paroxysmal Positional Vertigo) is an inner ear issue causing sudden spinning sensations when moving the head. It is cured in just 1 or 2 sessions by physical therapists using precise head maneuvers (like Epley's maneuver) to reposition displaced ear crystals."
      }
    ],
    content: `
      <h3>Restoring Stability and Balance</h3>
      <p>Balance is a complex function dependent on coordinates from three systems: your eyes (visual), your inner ear (vestibular), and your joints/feet receptors (proprioceptive). Weakness or damage in any of these pathways can lead to instability, making walking stressful. Our advanced balance center evaluates all three inputs to design targeted, safe exercises that restore walking confidence and prevent falls.</p>
    `
  }
];
