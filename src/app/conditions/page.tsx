import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { CONDITIONS_DATA } from "@/config/conditions";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, StaggerContainer, StaggerItem, FaqAccordion } from "@/components/FramerWrapper";
import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  CheckCircle2,
  ChevronRight,
  Heart,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Pain & Medical Conditions Treated | Physiotherapy in Dehradun | RonEx",
  description:
    "Comprehensive physical therapy treatments for back pain, cervical spondylosis, sciatica, slip disc, frozen shoulder, knee pain, stroke paralysis, and sports injuries in Dehradun.",
  keywords:
    "physiotherapy conditions Dehradun, back pain treatment Dehradun, neck pain physiotherapy, sciatica relief, stroke rehabilitation Dehradun, frozen shoulder therapy, slip disc recovery",
  alternates: {
    canonical: `${CLINIC_CONFIG.domain}/conditions`,
  },
  openGraph: {
    title: "Conditions We Treat | RonEx Physiotherapy Dehradun",
    description:
      "Expert physical therapy protocols for spine, joint, neurological, and sports conditions at RonEx Physiotherapy, Dehradun.",
    url: `${CLINIC_CONFIG.domain}/conditions`,
    type: "website",
    locale: "en_IN",
    siteName: CLINIC_CONFIG.name,
    images: [{ url: `${CLINIC_CONFIG.domain}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions We Treat | RonEx Physiotherapy Dehradun",
    description:
      "Specialized recovery programs for 18+ spine, joint, and nerve disorders in Dehradun.",
    images: [`${CLINIC_CONFIG.domain}/og-image.jpg`],
  },
};

const CONDITION_CATEGORIES = [
  {
    category: "Spine & Neck Pain",
    icon: Bone,
    description: "Disc herniations, postural strains, and nerve compressions of the cervical and lumbar spine.",
    slugs: ["back-pain", "neck-pain", "sciatica", "slip-disc", "cervical-pain", "posture-correction"],
  },
  {
    category: "Joint & Musculoskeletal Care",
    icon: Activity,
    description: "Restricted mobility, cartilage wear, adhesive capsulitis, and chronic joint degeneration.",
    slugs: ["frozen-shoulder", "knee-pain", "shoulder-pain", "heel-pain", "arthritis"],
  },
  {
    category: "Neurology & Paralysis Recovery",
    icon: Brain,
    description: "Neuro-plasticity stimulation, motor control re-education, and balance restoration.",
    slugs: ["stroke", "paralysis", "parkinsons-disease", "bells-palsy", "balance-disorders"],
  },
  {
    category: "Sports Injuries & Ligament Strains",
    icon: Zap,
    description: "Accelerated athletic recovery, surgical rehabilitation, and joint stabilization.",
    slugs: ["acl-injury", "ligament-injury"],
  },
];

const GENERAL_CONDITION_FAQS = [
  {
    question: "Do I need a doctor's referral to start physiotherapy at RonEx Dehradun?",
    answer:
      "While a doctor's prescription or MRI/X-ray reports are welcome and helpful, direct access physiotherapy is available. Our Senior Consultant, Dr. Om Prakash (PT), performs a comprehensive physical and biomechanical evaluation to diagnose the musculoskeletal or neurological root cause before beginning therapy.",
  },
  {
    question: "How do I know if my condition requires in-clinic therapy or a home visit?",
    answer:
      "Patients experiencing severe mobility impairment, bedridden states post-stroke, acute post-surgical restrictions, or extreme pain can benefit from our specialized home-visit physiotherapy across Dehradun. Patients who can travel usually benefit from the advanced electrotherapy machines and rehabilitation gym at our Rajpur Road clinic.",
  },
  {
    question: "How many sessions are typically required to feel relief?",
    answer:
      "Acute muscular spasms often improve noticeably within 3 to 5 sessions. Chronic conditions such as lumbar disc prolapse, cervical spondylosis, or frozen shoulder usually require 10 to 15 progressive sessions combining manual therapy, electro-modalities, and targeted corrective exercises.",
  },
  {
    question: "Are your treatments safe for elderly patients with arthritis or osteoporosis?",
    answer:
      "Yes, completely. Every treatment plan is customized. For senior citizens, we utilize gentle joint mobilizations, low-impact muscle activation, and pain-relieving electrotherapy, strictly avoiding aggressive manipulations.",
  },
];

export default function ConditionsIndexPage() {
  const globalWaMsg =
    "Hello RonEx Physiotherapy, I am seeking treatment for a painful condition and would like to consult Dr. Om Prakash.";
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(globalWaMsg)}`;

  // Prepare ItemList for schema
  const itemListElements = CONDITIONS_DATA.map((c, i) => ({
    name: c.title,
    url: `${CLINIC_CONFIG.domain}/conditions/${c.slug}`,
    description: c.description,
    position: i + 1,
  }));

  return (
    <>
      {/* Dynamic SEO JSON-LD Schemas */}
      <ClinicSchema
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Conditions", item: "/conditions" },
        ]}
      />
      <ClinicSchema
        type="webpage"
        slug="conditions"
        name="Conditions & Pain Disorders Treated | RonEx Physiotherapy Dehradun"
        description="Explore evidence-based physiotherapy treatments for back pain, cervical spondylosis, sciatica, frozen shoulder, stroke, and arthritis at RonEx Dehradun."
        pageType="MedicalWebPage"
      />
      <ClinicSchema
        type="itemlist"
        name="Conditions Treated at RonEx Physiotherapy Dehradun"
        itemListElements={itemListElements}
      />

      {/* Breadcrumb Bar */}
      <Breadcrumb
        items={[
          { label: "Home", url: "/" },
          { label: "Conditions Treated", url: "/conditions" },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-tr from-primary-brand via-brand-dark to-brand-blue py-16 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider text-blue-200 mb-4">
              <Stethoscope className="w-4 h-4 text-brand-gold" />
              Evidence-Based Musculoskeletal & Neuro Care
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Medical Conditions & Pain We Treat in Dehradun
            </h1>
            <p className="text-base sm:text-lg text-slate-100 mt-4 max-w-3xl leading-relaxed">
              From acute spinal disc herniation and chronic osteoarthritis to post-stroke motor rehabilitation, RonEx Physiotherapy offers individualized, non-invasive protocols designed to eliminate pain and restore full function.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-brand-gold text-slate-900 font-bold rounded-full hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Discuss Your Condition on WhatsApp
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="px-6 py-3.5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +91 92862 44489
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Condition Clusters */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {CONDITION_CATEGORIES.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            const categoryConditions = CONDITIONS_DATA.filter((cond) =>
              cat.slugs.includes(cond.slug)
            );

            return (
              <div key={cat.category} className="space-y-6">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-brand/10 text-primary-brand flex items-center justify-center">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{cat.category}</h2>
                      <p className="text-sm text-slate-600">{cat.description}</p>
                    </div>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryConditions.map((cond) => (
                    <Reveal key={cond.slug}>
                      <Link
                        href={`/conditions/${cond.slug}`}
                        className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary-brand transition-all flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-primary-brand">
                              Condition Profile
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-brand group-hover:translate-x-1 transition-all" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-brand transition-colors">
                            {cond.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                            {cond.description}
                          </p>

                          {cond.symptoms && cond.symptoms.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-slate-100">
                              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                                Common Symptoms:
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {cond.symptoms.slice(0, 2).map((symp, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                                  >
                                    {symp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary-brand">
                          <span>View Treatment Protocol</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clinical Quality / E-E-A-T Guarantee */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-brand flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Expert Differential Diagnosis</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We don&apos;t just mask symptoms with hot packs; we identify biomechanical faults, joint restrictions, and nerve entrapments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Surgery-Prevention First</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Our evidence-based manual therapy and targeted strengthening help over 80% of disc and joint pain patients avoid invasive surgery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Clinic & Home Care Flexibility</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Visit our state-of-the-art Rajpur Road clinic or request specialized home visits across all residential sectors of Dehradun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary-brand uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Frequently Asked Questions About Conditions We Treat
            </h2>
          </div>
          <div className="space-y-4">
            {GENERAL_CONDITION_FAQS.map((faq, idx) => (
              <FaqAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpenByDefault={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SILO Interlinking Links */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Related Physiotherapy Services & Local Dehradun Coverage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-700 mb-2">Core Service Disciplines</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li><Link href="/services/orthopedic-physiotherapy" className="hover:text-primary-brand hover:underline">Orthopedic Physiotherapy</Link></li>
                  <li><Link href="/services/neuro-physiotherapy" className="hover:text-primary-brand hover:underline">Neurological Rehabilitation</Link></li>
                  <li><Link href="/services/sports-physiotherapy" className="hover:text-primary-brand hover:underline">Sports Injury Rehab</Link></li>
                  <li><Link href="/services/geriatric-physiotherapy" className="hover:text-primary-brand hover:underline">Elderly Care & Arthritis</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-700 mb-2">Alternative Treatment Modes</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li><Link href="/home-visit-physiotherapy" className="hover:text-primary-brand hover:underline">Home Visit Physiotherapy</Link></li>
                  <li><Link href="/doctor" className="hover:text-primary-brand hover:underline">Dr. Om Prakash (PT) Profile</Link></li>
                  <li><Link href="/about" className="hover:text-primary-brand hover:underline">About RonEx Clinic</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary-brand hover:underline">Transparent Treatment Fees</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-700 mb-2">Dehradun Local Service Areas</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li><Link href="/locations/rajpur-road" className="hover:text-primary-brand hover:underline">Rajpur Road (Clock Tower)</Link></li>
                  <li><Link href="/locations/gms-road" className="hover:text-primary-brand hover:underline">GMS Road & Ballupur</Link></li>
                  <li><Link href="/locations/jakhan" className="hover:text-primary-brand hover:underline">Jakhan & Pacific Mall</Link></li>
                  <li><Link href="/locations/dalanwala" className="hover:text-primary-brand hover:underline">Dalanwala & Race Course</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-700 mb-2">Need Rapid Pain Consultation?</p>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  Speak directly with our senior physiotherapy coordinator to discuss your symptoms and book your slot.
                </p>
                <Link
                  href="/book-appointment"
                  className="inline-block px-4 py-2 bg-primary-brand text-white font-bold rounded-lg text-xs hover:bg-brand-dark transition-all"
                >
                  Book In-Clinic Evaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
