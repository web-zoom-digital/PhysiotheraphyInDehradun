import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { 
  Activity, 
  Brain, 
  Zap, 
  Bone, 
  Heart, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  CheckCircle,
  Stethoscope
} from "lucide-react";

export const metadata = {
  title: "Physiotherapy Services in Dehradun | RonEx Physiotherapy",
  description: "Explore advanced physiotherapy services in Dehradun. RonEx Physiotherapy offers orthopedic rehabilitation, stroke neuro rehab, sports injury recovery, pediatric therapy, and home visit care.",
  keywords: "physiotherapy services in Dehradun, orthopedic physiotherapy, neuro physiotherapy, sports physiotherapy, pediatric physiotherapy, women's health physiotherapy, home physiotherapy"
};

export default function ServicesIndexPage() {
  // Global prefilled WhatsApp link
  const globalWaMsg = "Hello RonEx Physiotherapy, I would like to know which physiotherapy service would be suitable for my condition and would like to book an appointment.";
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(globalWaMsg)}`;

  // Category 1: Orthopedic
  const orthoServices = [
    { name: "Back Pain & Sciatica", desc: "Targeted decompression and core strengthening for mechanical backache.", href: "/conditions/back-pain", icon: Bone },
    { name: "Cervical & Neck Pain", desc: "Relieve cervical spondylosis stiffness and neck-to-shoulder strain.", href: "/conditions/neck-pain", icon: Bone },
    { name: "Disc Bulge", desc: "Non-surgical McKenzie spinal extension to relieve disc compression.", href: "/conditions/slip-disc", icon: Bone },
    { name: "Knee Pain", desc: "Preserve mobility and quadriceps strength for knee osteoarthritis.", href: "/conditions/knee-pain", icon: Bone },
    { name: "Shoulder Pain", desc: "Restore overhead movement and relieve rotator cuff impingements.", href: "/conditions/shoulder-pain", icon: Bone },
    { name: "Joint Pain Treatment", desc: "Manual mobilization and pain management for multi-joint stiffness.", href: "/services/orthopedic-physiotherapy", icon: Bone },
    { name: "Post Fracture Stiffness", desc: "Carefully calibrated range of motion stretching post-plaster cast.", href: "/services/orthopedic-physiotherapy", icon: Bone },
    { name: "Post Surgery Rehabilitation", desc: "Structured rehabilitation after total knee and hip replacements.", href: "/services/post-surgery-rehabilitation", icon: Bone },
    { name: "Muscle Pain Physiotherapy", desc: "Dry needling and myofascial release for acute trigger points.", href: "/services/physiotherapy-in-dehradun", icon: Bone },
    { name: "Posture Correction", desc: "Eliminate text-neck, rounded shoulders, and align spinal mechanics.", href: "/conditions/posture-correction", icon: Bone }
  ];

  // Category 2: Neuro
  const neuroServices = [
    { name: "Stroke / Paralysis Rehabilitation", desc: "PNF facilitation and gait retraining to regain movement.", href: "/services/stroke-rehabilitation", icon: Brain },
    { name: "Parkinson's Disease Rehabilitation", desc: "LSVT BIG exercises to combat tremors, rigidity, and freezing steps.", href: "/conditions/parkinsons-disease", icon: Brain },
    { name: "Multiple Sclerosis Rehabilitation", desc: "Preserve motor coordination and daily independence capabilities.", href: "/services/neuro-physiotherapy", icon: Brain },
    { name: "Guillain Barre Syndrome", desc: "Intensive muscle strengthening and nerve regeneration exercises.", href: "/services/neuro-physiotherapy", icon: Brain },
    { name: "Spinal Cord Injury Rehabilitation", desc: "Functional transfer drills, muscle stimulation, and core stability.", href: "/services/neuro-physiotherapy", icon: Brain },
    { name: "Ataxia & Balance Disorders", desc: "Targeted balance board training to stabilize unsteady walking.", href: "/conditions/balance-disorders", icon: Brain },
    { name: "Neuropathy & Muscle Weakness", desc: "Intramuscular stimulation and muscle settings to prevent atrophy.", href: "/services/neuro-physiotherapy", icon: Brain },
    { name: "Bell's Palsy", desc: "Facial nerve stimulation and mirror-feedback symmetrical drills.", href: "/conditions/bells-palsy", icon: Brain },
    { name: "Vertigo / BPPV", desc: "Epley maneuvers to resolve inner ear crystal displacement instantly.", href: "/conditions/balance-disorders", icon: Brain },
    { name: "Nerve Injuries", desc: "Splinting alignment advice and physical re-education for palsy.", href: "/services/neuro-physiotherapy", icon: Brain }
  ];

  // Category 3: Pediatric
  const pediatricServices = [
    { name: "Pediatric Physiotherapy", desc: "Gross motor coordination training tailored for children.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "C cerebral Palsy Rehabilitation", desc: "Gentle stretches and tone-regulating exercises for kids.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "Autism Support Therapy", desc: "Sensory integration play to assist kids in physical balance.", href: "/services/occupational-therapy", icon: Activity },
    { name: "ADHD Support Therapy", desc: "Dynamic coordination loops to aid focus and physical control.", href: "/services/occupational-therapy", icon: Activity },
    { name: "Brachial Plexus Injury", desc: "Early newborn arm and hand movement facilitation stretching.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "Birth Injury Rehabilitation", desc: "Gentle structural adjustments for postnatal developmental strains.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "Hydrocephalus Rehabilitation", desc: "Safe balance conditioning and milestones monitoring.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "Developmental Delay Therapy", desc: "Supporting children to meet standard rolling, sitting, and walking milestones.", href: "/services/pediatric-physiotherapy", icon: Activity },
    { name: "Pediatric Exercise Therapy", desc: "Fun, game-oriented exercises to build core strength in children.", href: "/services/pediatric-physiotherapy", icon: Activity }
  ];

  // Category 4: Sports
  const sportsServices = [
    { name: "Sports Injury Rehabilitation", desc: "Recover from athletic injuries and optimize kinetic chain.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Muscle Strain", desc: "Accelerate hamstring, quadriceps, or calf pull healing.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Ligament Sprain", desc: "Restore joint integrity after ankle inversion or wrist sprains.", href: "/conditions/ligament-injury", icon: Zap },
    { name: "Post Surgery Sports Rehabilitation", desc: "Surgeon-approved phase-wise ACL reconstruction rehabilitation.", href: "/services/post-surgery-rehabilitation", icon: Zap },
    { name: "Ankle Instability", desc: "Wobble board drills to prevent chronic recurrent sprains.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Frequent Shoulder Dislocation", desc: "Rotator cuff strengthening to secure the humerus socket.", href: "/conditions/shoulder-pain", icon: Zap },
    { name: "Muscle Stiffness", desc: "Hands-on release techniques to restore range of motion.", href: "/services/manual-therapy", icon: Zap },
    { name: "Muscle Pull", desc: "Laser therapy and friction massage to resolve muscle fibers pull.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Tendonitis", desc: "Eccentric loading for Achilles, patellar, or tennis elbow tendonitis.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Strength & Conditioning", desc: "Pre-injury athletic benchmark testing and core training.", href: "/services/sports-physiotherapy", icon: Zap },
    { name: "Return to Sports Rehab", desc: "Sport-specific functional testing before clearance.", href: "/services/sports-physiotherapy", icon: Zap }
  ];

  // Category 5: Women's Health
  const womensServices = [
    { name: "Pre Partum Rehabilitation", desc: "Safe prenatal exercises to prevent pelvic girdle instability.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Post Partum Rehabilitation", desc: "Deep core activation to safely close diastasis recti.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Incontinence Physiotherapy", desc: "Biofeedback pelvic floor drills for bladder control.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Back Pain During Pregnancy", desc: "Safe stretches and manual decompression for prenatal loads.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Back Pain After Delivery", desc: "Pelvic and spinal stability training post-childbirth.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Pelvic Floor Physiotherapy", desc: "Kegel re-education for bladder and uterine support.", href: "/services/womens-health-physiotherapy", icon: Heart },
    { name: "Women's Health Physiotherapy", desc: "Private, compassionate physical therapy services for women.", href: "/services/womens-health-physiotherapy", icon: Heart }
  ];

  // Category 6: Other Services
  const otherServices = [
    { name: "Speech Therapy", desc: "Speech clarity, articulation drills, and swallow retraining.", href: "/services/physiotherapy-in-dehradun", icon: Stethoscope },
    { name: "Occupational Therapy", desc: "Sensory integration rooms, fine motor skills, and hand therapy.", href: "/services/occupational-therapy", icon: Stethoscope },
    { name: "Home Physiotherapy", desc: "Qualified therapists visiting your home with mobile units.", href: "/services/home-physiotherapy", icon: Stethoscope },
    { name: "Exercise Therapy", desc: "Calibrated stretching, weight-bearing, and gait conditioning.", href: "/services/physiotherapy-in-dehradun", icon: Stethoscope },
    { name: "Robotic Rehabilitation", desc: "Supported weight harness walking and sensory-motor drills.", href: "/services/physiotherapy-in-dehradun", icon: Stethoscope },
    { name: "Pain Management", desc: "High-tech Laser therapy, ultrasound, IFT, and Mulligan manual adjustments.", href: "/services/electrotherapy", icon: Stethoscope },
    { name: "Senior Citizen Physiotherapy", desc: "Arthritis care, balance training, and fall prevention drills.", href: "/services/geriatric-physiotherapy", icon: Stethoscope },
    { name: "Balance & Fall Prevention Therapy", desc: "Cawthorne-Cooksey vestibular drills to regain walking safety.", href: "/conditions/balance-disorders", icon: Stethoscope }
  ];

  const categories = [
    {
      id: "orthopedic-physiotherapy",
      title: "Orthopedic Physiotherapy",
      desc: "Advanced orthopedic physiotherapy for pain relief, mobility improvement, posture correction, joint stiffness and post-injury recovery.",
      services: orthoServices,
      bg: "bg-white",
      tag: "Orthopedic Care"
    },
    {
      id: "neuro-physiotherapy",
      title: "Neuro Physiotherapy",
      desc: "Specialized neuro physiotherapy in Dehradun for patients recovering from stroke, paralysis, nerve injury, balance problems and neurological movement disorders.",
      services: neuroServices,
      bg: "bg-brand-blue-light/10",
      tag: "Neuro Rehab"
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      desc: "Child-focused pediatric rehabilitation designed to support movement, coordination, strength, posture and developmental needs.",
      services: pediatricServices,
      bg: "bg-brand-blue-light/10",
      tag: "Child Development"
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      desc: "Sports rehabilitation for athletes and active individuals dealing with injury, pain, stiffness, instability or post-surgery recovery.",
      services: sportsServices,
      bg: "bg-white",
      tag: "Sports Medicine"
    },
    {
      id: "womens-health-physiotherapy",
      title: "Women's Health Physiotherapy",
      desc: "Safe women's health physiotherapy support for pregnancy-related pain, post-delivery recovery, pelvic floor weakness and related rehabilitation needs.",
      services: womensServices,
      bg: "bg-brand-blue-light/10",
      tag: "Women's Health"
    },
    {
      id: "other-therapy-rehabilitation-services",
      title: "Other Therapy & Rehabilitation Services",
      desc: "Specialized multi-disciplinary clinical solutions including occupational therapy, speech drills, robotic aids, and senior home-visit assessments.",
      services: otherServices,
      bg: "bg-brand-blue-light/10",
      tag: "Allied Health"
    }
  ];

  // Schema representation of service listings
  const servicesSchemaList = categories.flatMap(cat => 
    cat.services.map(s => ({
      name: s.name,
      description: s.desc,
      url: `${CLINIC_CONFIG.domain}${s.href}`
    }))
  );

  return (
    <>
      {/* Dynamic SEO JSON-LD injection */}
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" }
      ]} />
      
      {/* 1. BREADCRUMB */}
      <nav className="bg-slate-50 border-b border-slate-100 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <li>
              <Link href="/" className="hover:text-primary-brand transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <li className="text-slate-700 font-bold" aria-current="page">Services</li>
          </ol>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-white via-brand-blue-light/25 to-brand-blue-light/10 py-16 sm:py-24 border-b border-slate-100/50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-primary-brand/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal delay={0.05}>
            <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-3 py-1 rounded-full border border-teal-100">
              PHYSIOTHERAPY & REHABILITATION
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-2.5xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Our Physiotherapy & <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Rehabilitation Services</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Comprehensive, evidence-based physiotherapy and rehabilitation services in Dehradun, designed around your condition, mobility goals and recovery needs.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs"
              >
                <span>Book Appointment</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue-light text-primary-brand border border-teal-100 font-extrabold rounded-full hover:bg-brand-blue-light/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current text-primary-brand" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-600 border border-slate-200 font-extrabold rounded-full hover:bg-slate-50 hover:scale-105 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4 text-primary-brand" />
                <span>Call Now</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SERVICE CATEGORY SECTIONS */}
      {categories.map((category, catIdx) => {
        const isOdd = catIdx % 2 !== 0;
        return (
          <section 
            key={category.id} 
            id={category.id}
            className={`py-20 border-b border-slate-100/40 ${category.bg}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              {/* Category Introduction Area (2 columns on desktop) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className={`lg:col-span-8 space-y-4 ${isOdd ? "lg:order-2" : ""}`}>
                  <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-2.5 py-0.5 rounded-full border border-teal-100">
                    {category.tag}
                  </span>
                  <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
                    {category.title} in Dehradun
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
                    {category.desc}
                  </p>
                </div>

                <div className={`lg:col-span-4 flex lg:justify-end pt-2 ${isOdd ? "lg:order-1" : ""}`}>
                  <a
                    href={`${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%20Physiotherapy%2C%20I%20would%20like%20to%20inquire%20about%20your%20%27${encodeURIComponent(category.title)}%27%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-brand text-white text-xs font-bold rounded-xl hover:bg-primary-hover shadow-sm hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  >
                    <span>Inquire About {category.tag}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Service Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
              <StaggerContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, sIdx) => {
                    const CardIcon = service.icon;
                    return (
                      <StaggerItem key={sIdx}>
                        <Link 
                          href={service.href} 
                          className="premium-card p-6 h-full flex flex-col justify-between group cursor-pointer"
                        >
                          <div>
                            {/* Icon box */}
                            <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/80 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-white group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                              <CardIcon className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-primary-brand transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                              {service.desc}
                            </p>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-100/50 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>

              {/* Compact Category CTA */}
              <div className="p-5 rounded-2xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm max-w-4xl mx-auto">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Need help choosing the right treatment? <strong className="text-slate-700">Talk to our physiotherapy team.</strong>
                </p>
                <div className="flex gap-2.5 shrink-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-brand-blue-light text-primary-brand hover:bg-brand-blue-light border border-teal-100 rounded-xl text-center text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-primary-brand" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="px-4 py-2 bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-xl text-center text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary-brand" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

            </div>
          </section>
        );
      })}

      {/* 4. FINAL CTA SECTION */}
      <section className="py-20 bg-white border-b border-slate-100/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-gradient-to-tr from-white to-brand-blue-light/20 rounded-[32px] border border-slate-100/60 p-8 sm:p-12 shadow-premium text-center space-y-6">
            <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-3 py-1 rounded-full border border-teal-100">
              Guidance & Support
            </span>
            
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Not Sure Which Physiotherapy Service You Need?
            </h2>
            
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Tell us about your symptoms, injury or rehabilitation needs and our team can help guide you toward the appropriate physiotherapy service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link 
                href="/book-appointment"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all text-xs"
              >
                Book Appointment
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue-light0 text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-primary-brand shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 font-extrabold rounded-full hover:bg-slate-100 text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust points grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100/60 text-left">
              {[
                "Evidence-Based Physiotherapy",
                "Personalized Recovery Plans",
                "Experienced Physiotherapy Team",
                "Home Physiotherapy Available"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold">
                  <CheckCircle className="w-4 h-4 text-primary-brand shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT / LOCATION SECTION */}
      <section className="py-16 bg-brand-gray-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white border border-slate-100 p-6 sm:p-8 rounded-[24px] shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info text column */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Verify Clinic Details
                </span>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">
                  Visit RonEx Physiotherapy Clinic Dehradun
                </h3>
                
                <div className="space-y-3 text-xs text-slate-500">
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-700">Main Rajpur Road Clinic:</p>
                      <p className="mt-0.5">{CLINIC_CONFIG.branches[0].address}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-700">Clinic Hours:</p>
                      <p className="mt-0.5">{CLINIC_CONFIG.branches[0].openingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action columns (Map Embed) */}
              <div className="lg:col-span-6 h-48 rounded-xl overflow-hidden shadow-inner bg-slate-100">
                <iframe
                  title="RonEx Physiotherapy Dehradun"
                  src={CLINIC_CONFIG.contact.googleMapRajpurRoad}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
