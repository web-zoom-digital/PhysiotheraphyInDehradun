import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/FramerWrapper";
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
  Stethoscope,
  Shield,
  Syringe,
  PersonStanding,
  Dumbbell,
  Baby,
  Sparkles,
  Home,
  Users,
  Target,
  Microscope,
  Footprints,
  FlipHorizontal,
  BrainCircuit,
  Cpu,
  Hand,
  Smile,
  HeartHandshake,
  Ambulance,
  Award,
  Laugh,
  EarOff,
  ScanLine,
  Bed,
  Route,
} from "lucide-react";

export const metadata = {
  title: "Physiotherapy Services in Dehradun | RonEx Physiotherapy",
  description:
    "Explore advanced physiotherapy services in Dehradun. RonEx Physiotherapy offers orthopedic rehabilitation, stroke neuro rehab, sports injury recovery, pediatric therapy, and home visit care.",
  keywords:
    "physiotherapy services in Dehradun, orthopedic physiotherapy, neuro physiotherapy, sports physiotherapy, pediatric physiotherapy, women's health physiotherapy, home physiotherapy",
};

export default function ServicesIndexPage() {
  // Global prefilled WhatsApp link
  const globalWaMsg =
    "Hello RonEx Physiotherapy, I would like to know which physiotherapy service would be suitable for my condition and would like to book an appointment.";
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(globalWaMsg)}`;

  // Category 1: Orthopedic
  const orthoServices = [
    {
      name: "Back Pain & Sciatica",
      desc: "Targeted decompression and core strengthening for mechanical backache.",
      href: "/conditions/back-pain",
      icon: Bone,
      tint: "bg-orange-50 text-orange-600",
    },
    {
      name: "Cervical & Neck Pain",
      desc: "Relieve cervical spondylosis stiffness and neck-to-shoulder strain.",
      href: "/conditions/neck-pain",
      icon: PersonStanding,
      tint: "bg-blue-50 text-blue-600",
    },
    {
      name: "Disc Bulge",
      desc: "Non-surgical McKenzie spinal extension to relieve disc compression.",
      href: "/conditions/slip-disc",
      icon: ScanLine,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Knee Pain",
      desc: "Preserve mobility and quadriceps strength for knee osteoarthritis.",
      href: "/conditions/knee-pain",
      icon: Footprints,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Shoulder Pain",
      desc: "Restore overhead movement and relieve rotator cuff impingements.",
      href: "/conditions/shoulder-pain",
      icon: Activity,
      tint: "bg-pink-50 text-pink-600",
    },
    {
      name: "Joint Pain Treatment",
      desc: "Manual mobilization and pain management for multi-joint stiffness.",
      href: "/services/orthopedic-physiotherapy",
      icon: Hand,
      tint: "bg-amber-50 text-amber-600",
    },
    {
      name: "Post Fracture Stiffness",
      desc: "Carefully calibrated range of motion stretching post-plaster cast.",
      href: "/services/orthopedic-physiotherapy",
      icon: Shield,
      tint: "bg-slate-100 text-slate-600",
    },
    {
      name: "Post Surgery Rehabilitation",
      desc: "Structured rehabilitation after total knee and hip replacements.",
      href: "/services/post-surgery-rehabilitation",
      icon: Bed,
      tint: "bg-green-50 text-green-600",
    },
    {
      name: "Muscle Pain Physiotherapy",
      desc: "Dry needling and myofascial release for acute trigger points.",
      href: "/services/physiotherapy-in-dehradun",
      icon: Syringe,
      tint: "bg-red-50 text-red-500",
    },
  ];

  // Category 2: Neuro
  const neuroServices = [
    {
      name: "Stroke / Paralysis Rehabilitation",
      desc: "PNF facilitation and gait retraining to regain movement.",
      href: "/services/stroke-rehabilitation",
      icon: BrainCircuit,
      tint: "bg-indigo-50 text-indigo-600",
    },
    {
      name: "Parkinson's Disease Rehabilitation",
      desc: "LSVT BIG exercises to combat tremors, rigidity, and freezing steps.",
      href: "/conditions/parkinsons-disease",
      icon: Brain,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Multiple Sclerosis Rehabilitation",
      desc: "Preserve motor coordination and daily independence capabilities.",
      href: "/services/neuro-physiotherapy",
      icon: Cpu,
      tint: "bg-blue-50 text-blue-600",
    },
    {
      name: "Guillain Barre Syndrome",
      desc: "Intensive muscle strengthening and nerve regeneration exercises.",
      href: "/services/neuro-physiotherapy",
      icon: Activity,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Spinal Cord Injury Rehabilitation",
      desc: "Functional transfer drills, muscle stimulation, and core stability.",
      href: "/services/neuro-physiotherapy",
      icon: Route,
      tint: "bg-amber-50 text-amber-600",
    },
    {
      name: "Ataxia & Balance Disorders",
      desc: "Targeted balance board training to stabilize unsteady walking.",
      href: "/conditions/balance-disorders",
      icon: Target,
      tint: "bg-pink-50 text-pink-600",
    },
    {
      name: "Neuropathy & Muscle Weakness",
      desc: "Intramuscular stimulation and muscle settings to prevent atrophy.",
      href: "/services/neuro-physiotherapy",
      icon: Zap,
      tint: "bg-yellow-50 text-yellow-600",
    },
    {
      name: "Bell's Palsy",
      desc: "Facial nerve stimulation and mirror-feedback symmetrical drills.",
      href: "/conditions/bells-palsy",
      icon: Smile,
      tint: "bg-orange-50 text-orange-500",
    },
    {
      name: "Vertigo / BPPV",
      desc: "Epley maneuvers to resolve inner ear crystal displacement instantly.",
      href: "/conditions/balance-disorders",
      icon: EarOff,
      tint: "bg-rose-50 text-rose-500",
    },
  ];

  // Category 3: Pediatric
  const pediatricServices = [
    {
      name: "Pediatric Physiotherapy",
      desc: "Gross motor coordination training tailored for children.",
      href: "/services/pediatric-physiotherapy",
      icon: Baby,
      tint: "bg-pink-50 text-pink-500",
    },
    {
      name: "Cerebral Palsy Rehabilitation",
      desc: "Gentle stretches and tone-regulating exercises for kids.",
      href: "/services/pediatric-physiotherapy",
      icon: Brain,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Autism Support Therapy",
      desc: "Sensory integration play to assist kids in physical balance.",
      href: "/services/occupational-therapy",
      icon: Sparkles,
      tint: "bg-amber-50 text-amber-500",
    },
    {
      name: "ADHD Support Therapy",
      desc: "Dynamic coordination loops to aid focus and physical control.",
      href: "/services/occupational-therapy",
      icon: Zap,
      tint: "bg-yellow-50 text-yellow-600",
    },
    {
      name: "Brachial Plexus Injury",
      desc: "Early newborn arm and hand movement facilitation stretching.",
      href: "/services/pediatric-physiotherapy",
      icon: Hand,
      tint: "bg-blue-50 text-blue-500",
    },
    {
      name: "Birth Injury Rehabilitation",
      desc: "Gentle structural adjustments for postnatal developmental strains.",
      href: "/services/pediatric-physiotherapy",
      icon: HeartHandshake,
      tint: "bg-rose-50 text-rose-500",
    },
    {
      name: "Hydrocephalus Rehabilitation",
      desc: "Safe balance conditioning and milestones monitoring.",
      href: "/services/pediatric-physiotherapy",
      icon: Shield,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Developmental Delay Therapy",
      desc: "Supporting children to meet standard rolling, sitting, and walking milestones.",
      href: "/services/pediatric-physiotherapy",
      icon: PersonStanding,
      tint: "bg-green-50 text-green-600",
    },
    {
      name: "Pediatric Exercise Therapy",
      desc: "Fun, game-oriented exercises to build core strength in children.",
      href: "/services/pediatric-physiotherapy",
      icon: Dumbbell,
      tint: "bg-orange-50 text-orange-500",
    },
  ];

  // Category 4: Sports
  const sportsServices = [
    {
      name: "Sports Injury Rehabilitation",
      desc: "Recover from athletic injuries and optimize kinetic chain.",
      href: "/services/sports-physiotherapy",
      icon: Zap,
      tint: "bg-amber-50 text-amber-600",
    },
    {
      name: "Muscle Strain",
      desc: "Accelerate hamstring, quadriceps, or calf pull healing.",
      href: "/services/sports-physiotherapy",
      icon: Activity,
      tint: "bg-orange-50 text-orange-500",
    },
    {
      name: "Ligament Sprain",
      desc: "Restore joint integrity after ankle inversion or wrist sprains.",
      href: "/conditions/ligament-injury",
      icon: Shield,
      tint: "bg-blue-50 text-blue-600",
    },
    {
      name: "Post Surgery Sports Rehabilitation",
      desc: "Surgeon-approved phase-wise ACL reconstruction rehabilitation.",
      href: "/services/post-surgery-rehabilitation",
      icon: Bed,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Ankle Instability",
      desc: "Wobble board drills to prevent chronic recurrent sprains.",
      href: "/services/sports-physiotherapy",
      icon: Footprints,
      tint: "bg-pink-50 text-pink-500",
    },
    {
      name: "Frequent Shoulder Dislocation",
      desc: "Rotator cuff strengthening to secure the humerus socket.",
      href: "/conditions/shoulder-pain",
      icon: PersonStanding,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Muscle Stiffness",
      desc: "Hands-on release techniques to restore range of motion.",
      href: "/services/manual-therapy",
      icon: Hand,
      tint: "bg-slate-100 text-slate-600",
    },
    {
      name: "Muscle Pull",
      desc: "Laser therapy and friction massage to resolve muscle fibers pull.",
      href: "/services/sports-physiotherapy",
      icon: Sparkles,
      tint: "bg-yellow-50 text-yellow-600",
    },
    {
      name: "Tendonitis",
      desc: "Eccentric loading for Achilles, patellar, or tennis elbow tendonitis.",
      href: "/services/sports-physiotherapy",
      icon: Target,
      tint: "bg-red-50 text-red-500",
    },
  ];

  // Category 5: Women's Health
  const womensServices = [
    {
      name: "Pre Partum Rehabilitation",
      desc: "Safe prenatal exercises to prevent pelvic girdle instability.",
      href: "/services/womens-health-physiotherapy",
      icon: Baby,
      tint: "bg-pink-50 text-pink-500",
    },
    {
      name: "Post Partum Rehabilitation",
      desc: "Deep core activation to safely close diastasis recti.",
      href: "/services/womens-health-physiotherapy",
      icon: HeartHandshake,
      tint: "bg-rose-50 text-rose-500",
    },
    {
      name: "Incontinence Physiotherapy",
      desc: "Biofeedback pelvic floor drills for bladder control.",
      href: "/services/womens-health-physiotherapy",
      icon: Shield,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Back Pain During Pregnancy",
      desc: "Safe stretches and manual decompression for prenatal loads.",
      href: "/services/womens-health-physiotherapy",
      icon: Bone,
      tint: "bg-orange-50 text-orange-500",
    },
    {
      name: "Back Pain After Delivery",
      desc: "Pelvic and spinal stability training post-childbirth.",
      href: "/services/womens-health-physiotherapy",
      icon: Activity,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Pelvic Floor Physiotherapy",
      desc: "Kegel re-education for bladder and uterine support.",
      href: "/services/womens-health-physiotherapy",
      icon: Target,
      tint: "bg-indigo-50 text-indigo-600",
    },
  ];

  // Category 6: Other Services
  const otherServices = [
    {
      name: "Speech Therapy",
      desc: "Speech clarity, articulation drills, and swallow retraining.",
      href: "/services/physiotherapy-in-dehradun",
      icon: Laugh,
      tint: "bg-amber-50 text-amber-600",
    },
    {
      name: "Occupational Therapy",
      desc: "Sensory integration rooms, fine motor skills, and hand therapy.",
      href: "/services/occupational-therapy",
      icon: Hand,
      tint: "bg-blue-50 text-blue-600",
    },
    {
      name: "Home Physiotherapy",
      desc: "Qualified therapists visiting your home with mobile units.",
      href: "/services/home-physiotherapy",
      icon: Home,
      tint: "bg-teal-50 text-teal-800",
    },
    {
      name: "Exercise Therapy",
      desc: "Calibrated stretching, weight-bearing, and gait conditioning.",
      href: "/services/physiotherapy-in-dehradun",
      icon: Dumbbell,
      tint: "bg-green-50 text-green-600",
    },
    {
      name: "Robotic Rehabilitation",
      desc: "Supported weight harness walking and sensory-motor drills.",
      href: "/services/physiotherapy-in-dehradun",
      icon: Cpu,
      tint: "bg-violet-50 text-violet-600",
    },
    {
      name: "Pain Management",
      desc: "High-tech Laser therapy, ultrasound, IFT, and Mulligan manual adjustments.",
      href: "/services/electrotherapy",
      icon: Sparkles,
      tint: "bg-pink-50 text-pink-500",
    },
  ];

  const categories = [
    {
      id: "orthopedic-physiotherapy",
      title: "Orthopedic Physiotherapy",
      desc: "Advanced orthopedic physiotherapy for pain relief, mobility improvement, posture correction, joint stiffness and post-injury recovery.",
      services: orthoServices,
      bg: "bg-white",
      tag: "Orthopedic Care",
    },
    {
      id: "neuro-physiotherapy",
      title: "Neuro Physiotherapy",
      desc: "Specialized neuro physiotherapy in Dehradun for patients recovering from stroke, paralysis, nerve injury, balance problems and neurological movement disorders.",
      services: neuroServices,
      bg: "bg-brand-blue-light/10",
      tag: "Neuro Rehab",
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      desc: "Child-focused pediatric rehabilitation designed to support movement, coordination, strength, posture and developmental needs.",
      services: pediatricServices,
      bg: "bg-brand-blue-light/10",
      tag: "Child Development",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      desc: "Sports rehabilitation for athletes and active individuals dealing with injury, pain, stiffness, instability or post-surgery recovery.",
      services: sportsServices,
      bg: "bg-white",
      tag: "Sports Medicine",
    },
    {
      id: "womens-health-physiotherapy",
      title: "Women's Health Physiotherapy",
      desc: "Safe women's health physiotherapy support for pregnancy-related pain, post-delivery recovery, pelvic floor weakness and related rehabilitation needs.",
      services: womensServices,
      bg: "bg-brand-blue-light/10",
      tag: "Women's Health",
    },
    {
      id: "other-therapy-rehabilitation-services",
      title: "Other Therapy & Rehabilitation Services",
      desc: "Specialized multi-disciplinary clinical solutions including occupational therapy, speech drills, robotic aids, and senior home-visit assessments.",
      services: otherServices,
      bg: "bg-brand-blue-light/10",
      tag: "Allied Health",
    },
  ];

  // Schema representation of service listings
  const servicesSchemaList = categories.flatMap((cat) =>
    cat.services.map((s) => ({
      name: s.name,
      description: s.desc,
      url: `${CLINIC_CONFIG.domain}${s.href}`,
    })),
  );

  return (
    <>
      {/* Dynamic SEO JSON-LD injection */}
      <ClinicSchema
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />

      {/* 1. BREADCRUMB */}
      <nav
        className="bg-slate-50 border-b border-slate-100 py-3"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-primary-brand transition-colors"
              >
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <li className="text-slate-700 font-bold" aria-current="page">
              Services
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT: Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.05}>
                <span className="inline-block text-xs font-black tracking-widest text-teal-800 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  Expert Physiotherapy in Dehradun
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Physiotherapy &amp; Rehabilitation
                  <span className="block text-teal-800 text-2xl sm:text-3xl mt-1">
                    Services in Dehradun
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Comprehensive, evidence-based physiotherapy for orthopedic,
                  neurological, sports, pediatric, and women&apos;s health
                  conditions — at our clinic or your home.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book on WhatsApp
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {CLINIC_CONFIG.contact.phone}
                  </a>
                </div>
              </Reveal>

              {/* Service Category Pills */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="text-xs font-semibold text-teal-300 border border-teal-800/30 bg-teal-800/10 px-3.5 py-1.5 rounded-full hover:bg-teal-800/20 transition-colors"
                    >
                      {cat.tag}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Image */}
            <div className="lg:col-span-5">
              <Reveal delay={0.3}>
                <div className=" rounded-3xl overflow-hidden border border-white/20 shadow-2xl min-h-[60vh]">
                  <img
                    src="/blog/best-physiotherapy.png"
                    alt="Physiotherapy Services Dehradun"
                    className="w-full h-full object-contain"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">
                        10,000+ Patients
                      </p>
                      <p className="text-teal-300 text-xs">
                        Treated Successfully
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-black text-sm">12+ Years</p>
                      <p className="text-teal-300 text-xs">
                        Clinical Experience
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
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
                <div
                  className={`lg:col-span-8 space-y-4 ${isOdd ? "lg:order-2" : ""}`}
                >
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
                          className="bg-white rounded-2xl border border-slate-200 p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.12)] hover:-translate-y-1.5 hover:border-teal-200 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="space-y-4">
                            {/* Unique colored icon badge */}
                            <div
                              className={`w-13 h-13 rounded-2xl flex items-center justify-center ${service.tint} group-hover:scale-110 transition-transform duration-300 w-12 h-12`}
                            >
                              <CardIcon className="w-6 h-6" />
                            </div>

                            <div>
                              <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-primary-brand transition-colors duration-300 leading-snug">
                                {service.name}
                              </h3>
                              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                                {service.desc}
                              </p>
                            </div>
                          </div>

                          {/* Footer CTA row */}
                          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400 group-hover:text-primary-brand transition-colors duration-300">
                              Learn More
                            </span>
                            <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-primary-brand flex items-center justify-center transition-all duration-300">
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </div>
          </section>
        );
      })}

      {/* 4. FINAL CTA SECTION */}
      <section className="py-20 bg-white ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-gradient-to-tr from-white to-brand-blue-light/20 rounded-[32px] border border-slate-400 p-8 sm:p-12 shadow-premium text-center space-y-6">
            <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-3 py-1 rounded-full border border-teal-100">
              Guidance & Support
            </span>

            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Not Sure Which Physiotherapy Service You Need?
            </h2>

            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Tell us about your symptoms, injury or rehabilitation needs and
              our team can help guide you toward the appropriate physiotherapy
              service.
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
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue-light0 text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-black  shrink-0 hover:text-white" />
                <span className="text-slate-900 hover:text-white">WhatsApp Us</span>
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 font-extrabold rounded-full hover:bg-teal-800 text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span className="text-slate-900 hover:text-white" >Call Now</span>
              </a>
            </div>

            {/* Trust points grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100/60 text-left">
              {[
                "Evidence-Based Physiotherapy",
                "Personalized Recovery Plans",
                "Experienced Physiotherapy Team",
                "Home Physiotherapy Available",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold"
                >
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
                      <p className="font-bold text-slate-700">
                        Main Rajpur Road Clinic:
                      </p>
                      <p className="mt-0.5">
                        {CLINIC_CONFIG.branches[0].address}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-700">Clinic Hours:</p>
                      <p className="mt-0.5">
                        {CLINIC_CONFIG.branches[0].openingHours}
                      </p>
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
