"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { BLOGS_DATA } from "@/config/blogs";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  FaqAccordion,
} from "@/components/FramerWrapper";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import {
  Activity,
  Brain,
  Zap,
  Bone,
  Heart,
  Shield,
  Award,
  MapPin,
  ArrowRight,
  Star,
  Phone,
  Clock,
  Smile,
  CheckCircle2,
  MessageSquare,
  Home,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Calendar,
} from "lucide-react";
import { color } from "framer-motion";

export default function HomePage() {
  const featuredConditions = CONDITIONS_DATA.slice(0, 6);

  const serviceCards = [
    {
      slug: "physiotherapy-in-dehradun",
      title: "Advanced Physiotherapy",
      category: "Physiotherapy",
      shortDesc:
        "Experience premium, evidence-based physiotherapy treatments tailored for recovery, pain relief, and enhanced mobility at our Dehradun clinic.",
      icon: Activity,
      bgTint: "bg-slate-100 text-slate-700",
      items: [
        "Joint Mobilization",
        "K-Taping & Bracing",
        "Dry Needling",
        "Myofascial Release",
        "IFT & Ultrasound",
      ],
      moreCount: 5,
    },
    {
      slug: "best-physiotherapist-in-dehradun",
      title: "Best Physiotherapist",
      category: "Physiotherapy",
      shortDesc:
        "Consult Dehradun's top-rated specialists. Direct access to experienced practitioners for muscle, nerve, and joint rehabilitation.",
      icon: Award,
      bgTint: "bg-purple-100 text-purple-700",
      items: [
        "Clinical Assessment",
        "Posture Correction",
        "Gait Rehabilitation",
        "Ergonomic Setup",
        "Custom Care Roadmap",
      ],
      moreCount: 8,
    },
    {
      slug: "physiotherapist-in-dehradun",
      title: "Qualified Physiotherapists",
      category: "Therapists",
      shortDesc:
        "Connect with certified physiotherapists near you in Dehradun. Personalized care for arthritis, paralysis, sports injuries, and posture issues.",
      icon: Heart,
      bgTint: "bg-teal-100 text-teal-800",
      items: [
        "MPT Ortho Specialist",
        "MPT Neuro Specialist",
        "Certified Chiropractor",
        "Sports Therapist",
        "Home Care Coordinator",
      ],
      moreCount: 10,
    },
    {
      slug: "home-physiotherapy",
      title: "Premium Home Visit Physiotherapy",
      category: "Home Visit",
      shortDesc:
        "Receive expert physiotherapy sessions in the absolute comfort and privacy of your home. Ideal for post-surgery, elderly, and stroke patients.",
      icon: Home,
      bgTint: "bg-pink-100 text-pink-700",
      items: [
        "In-Home Stroke Rehab",
        "Post-Knee Replacement",
        "Bedside Passive Range",
        "Geriatric Fall Prevention",
        "Portable IFT/Ultrasound",
      ],
      moreCount: 6,
    },
    {
      slug: "neuro-physiotherapy",
      title: "Specialized Neurological Physiotherapy",
      category: "Neuro",
      shortDesc:
        "Rebuild motor function, balance, and independence. Targeted therapy for Stroke, Parkinson's, and Spinal Cord Injuries.",
      icon: Brain,
      bgTint: "bg-indigo-100 text-indigo-700",
      items: [
        "Stroke & Hemiplegia",
        "Paralysis Management",
        "Parkinson's Disease",
        "Bell's Palsy Recovery",
        "Balance & Gait Disorders",
      ],
      moreCount: 7,
    },
    {
      slug: "sports-physiotherapy",
      title: "Elite Sports Physiotherapy & Rehab",
      category: "Sports",
      shortDesc:
        "Recover faster and return to peak athletic performance. Expert care for ACL tears, ligament injuries, and biomechanical corrections.",
      icon: Zap,
      bgTint: "bg-amber-100 text-amber-700",
      items: [
        "ACL Tear Rehab",
        "Meniscus Injury",
        "Ankle Sprain Care",
        "Shoulder Dislocation",
        "Rotator Cuff Strain",
      ],
      moreCount: 9,
    },
  ];

  const homeFaqs = [
    {
      question: "Which clinic locations do you have in Dehradun?",
      answer:
        "We have two state-of-the-art clinics: our Main Branch is on Rajpur Road near Clock Tower (Chukkuwala), and our second branch is in Bhaniyawala at Rama Market, opposite Ranjit Singh Marg.",
    },
    {
      question: "Do you provide home visit physiotherapy in Dehradun?",
      answer:
        "Yes, we have a specialized mobile physical therapy team equipped with portable electrotherapy units (TENS, IFT, Ultrasound) to deliver safe and professional treatments at homes across Dehradun.",
    },
    {
      question: "How long is a typical physiotherapy session?",
      answer:
        "A standard session lasts between 45 to 60 minutes, depending on the complexity of the condition and the required treatment protocols (manual therapy, exercises, and modalities).",
    },
    {
      question: "What are your pricing packages for rehabilitation?",
      answer:
        "Our consultation starts from ₹400-500. We also offer highly affordable 10-session and 15-session chronic recovery packages for stroke rehabilitation, post-surgery recovery, and arthritis management.",
    },
  ];

  const testimonials = [
    {
      name: "Amit Negi",
      condition: "Recovered from Stroke / Paralysis",
      rating: 5,
      text: "The team here are angels. My father had a severe stroke and lost all movement on his right side. Within 3 months of home-visit neuro physiotherapy, he is now walking independently with confidence. Strongly recommend!",
    },
    {
      name: "Priyamvada Sharma",
      condition: "Post-ACL Surgery Rehab",
      rating: 5,
      text: "Outstanding sports rehab experience. The protocols followed after my ACL reconstruction were highly scientific and structured. I returned to my badminton training in 6 months. Best physiotherapy center in Dehradun!",
    },
    {
      name: "Sarabjeet Singh",
      condition: "Lower Back Sciatica Pain",
      rating: 5,
      text: "I was suffering from sharp shooting pain in my left leg due to sciatica. Two other clinics suggested surgery. Here, the combination of manual therapy and dry needling cured my pain in 8 sessions. Life saver!",
    },
    {
      name: "Meenakshi Rawat",
      condition: "Severe Knee Osteoarthritis",
      rating: 5,
      text: "Excellent geriatric care. I am 68 and had severe knee stiffness. The team built my leg strength using gentle exercises and modern ultrasound therapy. I can now walk up the stairs without pain.",
    },
    {
      name: "Rahul Sharma",
      condition: "Chronic Back Pain",
      rating: 5,
      text: "I came in with persistent lower back pain. The team was professional, thorough in their assessment and the exercises really helped improve my mobility over a few weeks. Highly recommended.",
    },
    {
      name: "Neha Bisht",
      condition: "Frozen Shoulder Recovery",
      rating: 5,
      text: "My frozen shoulder was affecting my daily work. After 10 sessions of targeted manual therapy and guided exercises, I have almost full range of motion back. Very happy with the results.",
    },
  ];
  const blogPosts = [
    {
      slug: "5-signs-you-need-physiotherapy",
      title: "5 Signs You Need Physiotherapy Right Now",
      excerpt:
        "Persistent pain, reduced mobility, or stiffness after an injury? Learn the key warning signs that indicate it's time to consult a physiotherapist in Dehradun.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "Wellness Tips",
      date: "Aug 10, 2026",
      readTime: "5 min read",
    },
    {
      slug: "post-surgery-recovery-guide",
      title: "Complete Guide to Post-Surgery Recovery",
      excerpt:
        "Recovering from surgery? Discover the essential physiotherapy exercises and precautions to speed up healing and regain full mobility safely.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      category: "Recovery",
      date: "Aug 5, 2026",
      readTime: "7 min read",
    },
    {
      slug: "neuro-rehab-stroke-recovery",
      title: "Neuro Rehabilitation: A Path to Stroke Recovery",
      excerpt:
        "Explore how specialized neurological physiotherapy helps stroke survivors regain movement, balance, and independence step by step.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      category: "Neuro Care",
      date: "Jul 28, 2026",
      readTime: "6 min read",
    },
    {
      slug: "back-pain-causes-treatment",
      title: "Back Pain in Dehradun: Causes & Treatment Options",
      excerpt:
        "Chronic back pain affects millions. Understand the common causes — from sedentary lifestyles to disc issues — and how physiotherapy can help.",
      image:
        "/services/back-pain-dehradun.png",
      category: "Back Pain",
      date: "Jul 20, 2026",
      readTime: "6 min read",
    },
    {
      slug: "sports-injury-prevention-tips",
      title: "Sports Injury Prevention: Tips From Our Physiotherapists",
      excerpt:
        "Whether you're a weekend athlete or a competitive player, these physiotherapy-backed tips will help you avoid common sports injuries.",
      image:
        "/services/sport-pain-dehradun.png",
      category: "Sports Care",
      date: "Jul 12, 2026",
      readTime: "4 min read",
    },
    {
      slug: "pediatric-physiotherapy-benefits",
      title: "How Pediatric Physiotherapy Supports Child Development",
      excerpt:
        "From delayed milestones to cerebral palsy, learn how early pediatric physiotherapy intervention can make a lasting difference for children.",
      image:
        "/services/child-support-dehradun.png",
      category: "Pediatric Care",
      date: "Jul 3, 2026",
      readTime: "5 min read",
    },
  ];
  const stats = [
    { target: 10000, suffix: "+", label: "Patients Recovered", decimals: 0 },
    {
      target: 12,
      suffix: "+ Years",
      label: "Clinical Excellence",
      decimals: 0,
    },
    { target: 98.7, suffix: "%", label: "Success Rate", decimals: 1 },
    { target: 2, suffix: " Modern", label: "Dehradun Branches", decimals: 0 },
  ];

  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%2C%20I%27d%20like%20to%20schedule%20an%20appointment%20in%20Dehradun.`;

  // Testimonial carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const featuredBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <>
      <ClinicSchema type="faq" faqs={homeFaqs} />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-25 sm:pb-40 min-h-[70vh] sm:min-h-[90vh] flex items-center">
        {/* Background Image of Physiotherapy Center - Full Width */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/services/hero-section.png"
            alt="Physiotherapy Clinic"
            className="w-full h-full object-cover "
          />
        </div>
        {/* Subtle Dark Overlay/Gradient behind text for high readability */}
        <div className="absolute inset-0 bg-black/45  " />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Reveal delay={0.1} yOffset={25}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-teal-800 border border-white/10 text-sm font-bold shadow-lg shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-current text-white" />
                  <span className="text-gradient-brand">Dehradun's Premium Physical Therapy Center</span>
                </div>
              </Reveal>

              <Reveal delay={0.2} yOffset={30}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-bold text-white">
                  Dehradun's Trusted Physiotherapy{" "}
                  <span className="text-gradient-brand">
                    &amp; Rehabilitation Centre
                  </span>
                </h1>
              </Reveal>
            </div>

            {/* Right Column: Lead Form */}
            {/* <div className="lg:col-span-5 relative">
              <Reveal delay={0.3} yOffset={30}>
                <LeadForm />
              </Reveal>
            </div> */}
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-slate-50/60 border-y border-slate-100 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <StaggerItem
                  key={idx}
                  className="bg-white border border-slate-300 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-2 group"
                >
                  <span className="text-3xl md:text-4xl font-black text-teal-800 tracking-tight block">
                    <AnimatedCounter
                      target={stat.target}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider block group-hover:text-slate-600 transition-colors">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. ABOUT US — moved up for immediate trust building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Heading */}
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <span className="text-sm font-bold uppercase tracking-wide text-teal-800 block">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                About Physiotherapy
              </h2>
              <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
                We believe in providing healthcare with maximum transparency.
                Our clinic model combines senior clinical expertise with highly
                compassionate in-home care protocols.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel rounded-3xl p-6 shadow-soft border-1 border-slate-400 bg-white">
                <Award className="w-10 h-10 text-brand-blue mb-4" />
                <h4 className="text-lg font-bold text-slate-900">
                  MPT Certified Doctors
                </h4>
                <p className="text-sm text-slate-500 mt-2 ">
                  Consultation and sessions handled directly by Post-Graduate
                  (Master of Physiotherapy) clinicians with orthopedic and neuro
                  specializations.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-6 shadow-soft border border-slate-400 bg-white">
                <Shield className="w-10 h-10 text-brand-blue mb-4" />
                <h4 className="text-lg font-bold text-slate-900">
                  Surgeon-Aligned Care
                </h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  We align each session stage directly with your operating
                  orthopedic surgeon or consulting physician&apos;s clinical
                  instructions.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-6 shadow-soft border border-slate-400 bg-white">
                <Zap className="w-10 h-10 text-brand-blue mb-4" />
                <h4 className="text-lg font-bold text-slate-900">
                  Advanced Laser &amp; Electro
                </h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Accelerated recovery utilizing state-of-the-art Interferential
                  Therapy (IFT), deep ultrasound, and high-tech localized Laser
                  therapy.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-6 shadow-soft border border-slate-400 bg-white">
                <Activity className="w-10 h-10 text-brand-blue mb-4" />
                <h4 className="text-lg font-bold text-slate-900">
                  Custom Home Exercise Apps
                </h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Receive structured PDF guides and videographed exercise sets
                  custom to your recovery path to ensure progress between
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-20 bg-brand-gray-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-800">
              SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Physiotherapy &amp; Rehabilitation Services
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-slate-500 max-w-2xl leading-relaxed">
              Comprehensive physiotherapy care across six speciality areas in
              Dehradun.
            </p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((card) => (
                <StaggerItem key={card.slug} className="h-full">
                  <div className="bg-white rounded-2xl border border-slate-400 p-7 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-premium hover:-translate-y-1.5 hover:border-teal-100 transition-all duration-300 h-full group">
                    <div className="space-y-5">
                      {/* Icon badge */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bgTint} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <card.icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl text-slate-900 ">{card.title}</h3>

                      {/* Description — expanded since no bullets */}
                      <p className="text-sm text-slate-500 ">
                        {card.shortDesc}
                      </p>

                      {/* Specialty chips — 2 clean tags */}
                      <div className="flex flex-wrap gap-2">
                        {card.items.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <Link
                      href={`/services/${card.slug}`}
                      className="mt-8 w-full py-3.5 bg-gradient-to-r from-primary-brand to-teal-800 text-white hover:from-primary-hover hover:to-teal-800 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all text-sm shadow-sm hover:shadow-md"
                    >
                      <span>Explore {card.category} Therapy</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link
              href="/services/physiotherapy-in-dehradun"
              className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-primary-brand hover:underline transition-colors"
            >
              <span>Explore all rehabilitation techniques</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-800">
              CONDITIONS TREATED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Get Relief From Stubborn Pain
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-teal-800 max-w-2xl leading-relaxed">
              Trusted Physiotherapy Centre in Dehradun. Select your condition to
              view target exercises.
            </p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredConditions.map((cond) => (
                <StaggerItem key={cond.slug} className="h-full">
                  <Link
                    href={`/conditions/${cond.slug}`}
                    className="premium-card p-6 h-full flex flex-col justify-between group rounded-2xl border border-slate-400 shadow-hard cursor-pointer"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/80 text-primary-brand flex items-center justify-center mb-5 group-hover:bg-white group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                        {cond.slug === "stroke" ||
                        cond.slug === "paralysis" ||
                        cond.slug === "parkinsons-disease" ? (
                          <Brain className="w-6 h-6 text-primary-brand" />
                        ) : cond.slug === "back-pain" ||
                          cond.slug === "neck-pain" ||
                          cond.slug === "cervical-pain" ? (
                          <Bone className="w-6 h-6 text-primary-brand" />
                        ) : (
                          <Activity className="w-6 h-6 text-primary-brand" />
                        )}
                      </div>
                      <h3 className="text-lg text-slate-900 ">{cond.title}</h3>
                      <p className="text-sm text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                        {cond.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100/50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary-brand transition-colors duration-300">
                      <span>View Core Symptoms</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link
              href="/conditions/back-pain"
              className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-primary-brand hover:underline transition-colors"
            >
              <span>View all pain treatment pathways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* old about section removed — merged into section above */}

      {/* 6. MEET THE DOCTOR */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl border border-slate-100/60 p-8 sm:p-12 shadow-premium bg-gradient-to-tr from-white to-brand-blue-light/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Doctor Avatar Mockup */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 my-4 mx-auto">
                  <img
                    src="/doctors/om-prakash.jpg"
                    alt={CLINIC_CONFIG.doctor.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 text-center">
                    <span className="text-base font-black text-slate-800 block">
                      {CLINIC_CONFIG.doctor.name}
                    </span>
                    <span className="text-xs text-slate-500 font-bold block">
                      {CLINIC_CONFIG.doctor.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="lg:col-span-7 space-y-6 lg:pl-5">
                <span className="text-sm font-bold uppercase tracking-wide text-teal-800 block">
                  LEAD DOCTOR
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Meet {CLINIC_CONFIG.doctor.name}
                </h2>
                <p className="text-base font-bold text-teal-800 tracking-wide uppercase">
                  {CLINIC_CONFIG.doctor.credentials} |{" "}
                  {CLINIC_CONFIG.doctor.experience} Clinical Practice
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  {CLINIC_CONFIG.doctor.description} He specializes in the
                  Mulligan Concept of manual therapy and custom neurological
                  rehabilitation frameworks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {CLINIC_CONFIG.doctor.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-650"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-brand shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/doctor"
                    className="px-6 py-3.5 border border-slate-200 hover:bg-slate-50 font-bold rounded-full text-sm md:text-base text-slate-700 transition-colors shadow-sm"
                  >
                    View Doctor Bio & Profile
                  </Link>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-primary-brand text-white font-bold rounded-full text-sm md:text-base hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <span>Schedule Clinic Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-gray-light/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-wide text-primary-brand">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
              Loved by 10,000+ Recovered Patients
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-primary-brand max-w-2xl leading-relaxed">
              Real feedback from patients across Dehradun neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-400 p-6 sm:p-8 flex flex-col justify-between shadow-hard cursor-pointer hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600   mb-6">"{test.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-wide text-primary-brand">
              BLOG
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
              Latest Health &amp; Recovery Insights
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-primary-brand max-w-2xl leading-relaxed">
              Tips, guides and expert advice from our physiotherapy team in
              Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-slate-400 overflow-hidden shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary-brand text-[11px]  px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-md font-bold text-slate-600 mb-2.5 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-brand">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-primary-brand hover:underline transition-colors"
            >
              <span>View all blog posts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-60 -z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-60 -z-0" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 space-y-5 flex flex-col items-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-800 text-sm font-bold uppercase tracking-wider"
            >
              <span />
              FAQ
            </span>

            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight "
            >
              Frequently Asked Questions
            </h2>

            <p className="max-w-2xl text-lg md:text-xl font-medium text-teal-800 leading-relaxed ">
              Quick answers about our Dehradun physiotherapy clinic, treatments,
              facilities and appointments.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-5">
            {homeFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-400 bg-white p-1 transition-all duration-300 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50" >
                <div
                  className="flex items-start gap-4 rounded-xl p-4 md:p-5 bg-gradient-to-r from-white to-teal-50/30">
                  {/* Number */}
                  <div
                    className=" w-9 h-9 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold  shadow-teal-200 "
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Accordion */}
                  <div className="flex-1">
                    <FaqAccordion question={faq.question} answer={faq.answer} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/faqs"
              className="
          inline-flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          bg-teal-800
          text-white
          font-bold
          text-sm
          md:text-base
          
          transition-all
          duration-300
          hover:bg-teal-900 hover:-translate-y-1 "
            >
              View complete FAQ list
              <ArrowRight
                className="w-5 h-5
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. GOOGLE MAPS EMBED & BRANCHES */}
      <section className="py-20 bg-brand-gray-light/30 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-800">
              CLINIC LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
              Visit Our Modern Facilities
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-teal-800 max-w-2xl leading-relaxed">
              Find directions to our closest rehabilitation branch in Dehradun.
            </p>
          </div>

          <div className="w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-soft border border-slate-100 bg-white">
            <iframe
              title="Physiotherapy Dehradun"
              src="https://maps.google.com/maps?q=Rajpur%20Road%20Dehradun&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-slate-900 text-slate-100 rounded-[32px] p-8 sm:p-16 text-center space-y-6 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-brand/30 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight text-center">
                Ready to Live Without{" "}
                <span className="text-teal-800">Physical Pain?</span>
              </h2>
              <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Connect with our senior physical therapists. Receive a custom
                rehabilitation roadmap that addresses the source of your pain.
                In-clinic consults and home visits available.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
              >
                <MessageSquare className="w-4 h-4 fill-white text-primary-brand shrink-0" />
                <span>Confirm Booking on WhatsApp</span>
              </a>

              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-slate-200 hover:text-white font-bold rounded-full hover:bg-slate-700 shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
