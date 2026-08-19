import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, FaqAccordion } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { MessageSquare, ArrowRight, Phone, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQs) | Physiotherapy Dehradun",
  description: "Find answers to commonly asked questions about physiotherapy consultations, treatment session durations, home visits, and health insurance billing at our Dehradun clinics."
};

export default function FaqsPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20regarding%20physiotherapy%20sessions.`;

  const faqSections = [
    {
      title: "Clinic & Appointments",
      items: [
        {
          question: "Where are your clinics located in Dehradun?",
          answer: "Our main branch is located at 13, Rajpur Road, near the Clock Tower and Chukkuwala. Our second branch is at Rama Market, Thano Chowk, opposite Ranjit Singh Marg in Bhaniyawala."
        },
        {
          question: "How can I book an appointment?",
          answer: "You can book directly by calling +91 92862 44489, chatting with our coordinator on WhatsApp, or using the booking intake form on our website."
        },
        {
          question: "Do I need a doctor's referral or scan reports to consult your team?",
          answer: "No, you don't need a prior referral to see our MPT physiotherapists. If you have existing X-rays, MRI scans, or doctor prescriptions, please bring them along as they help in planning your recovery."
        }
      ]
    },
    {
      title: "Treatments & Sessions",
      items: [
        {
          question: "What conditions do you treat?",
          answer: "We treat a wide range of orthopedic and neurological issues, including lower back pain, neck stiffness, frozen shoulder, knee osteoarthritis, sports ligament tears (ACL), stroke paralysis, Bell's Palsy, and balance disorders."
        },
        {
          question: "How long is each physiotherapy session?",
          answer: "A standard clinical session lasts between 45 to 60 minutes. This includes hands-on joint manual adjustments, electrotherapy modalities, and therapeutic exercises."
        },
        {
          question: "Is manual therapy safe?",
          answer: "Yes, manual therapy is highly safe. Our senior therapists are MPT certified in joint mobilizations. We perform gentle adjustments within your pain-free movement margins."
        }
      ]
    },
    {
      title: "Home Visits & Packages",
      items: [
        {
          question: "Do you offer home visit physiotherapy?",
          answer: "Yes, we have a specialized mobile physical therapy team that visits homes across Dehradun (Rajpur Road, Patel Nagar, Vasant Vihar, Dalanwala, GMS Road, Sahastradhara Road, etc.)."
        },
        {
          question: "Do home-visit therapists carry treatment equipment?",
          answer: "Yes. Our home-visit therapists carry portable electrotherapy devices (TENS/IFT), resistance bands, and massage equipment to deliver clinic-quality treatments inside your home."
        },
        {
          question: "Are there multi-session discounts?",
          answer: "Yes, we offer discounted 10-session and 15-session packages for chronic rehabilitation cases, helping you save on total treatment costs."
        }
      ]
    }
  ];

  // Flat array of all FAQs for the Schema
  const allFaqs = faqSections.flatMap((s) => s.items);

  return (
    <>
      <ClinicSchema type="faq" faqs={allFaqs} />
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "FAQs", item: "/faqs" }
      ]} />

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Reveal>
            <nav
              className="mb-6 flex items-center gap-1.5 text-xs text-teal-300 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <span className="text-white font-semibold">FAQs</span>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT: Content */}
            <div className="lg:col-span-8 space-y-6">
              <Reveal delay={0.05}>
                <span className="inline-block text-xs font-black tracking-widest text-teal-400 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  Instant Support
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Frequently Asked
                  <span className="block text-teal-400 text-2xl sm:text-3xl mt-1">
                    Questions
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Find instant answers regarding clinical appointments, treatment methods, home visits, packages, and health billing in Dehradun.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Ask on WhatsApp
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Coordinator
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Image */}
            <div className="lg:col-span-4">
                          <Reveal delay={0.3}>
                            <div className="relative rounded-3xl max-h-[65vh] overflow-hidden border border-white/20">
                              <img
                                src="/blog/neck-pain-cervical.png"
                                alt="Contact Physiotherapy Dehradun Team"
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                          </Reveal>
                        </div>
          </div>
        </div>
      </section>

      {/* FAQs Sections list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h3 className="text-lg font-black text-slate-800 border-l-4 border-brand-blue pl-3 uppercase tracking-wider text-xs">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <FaqAccordion 
                    key={itemIdx} 
                    question={item.question} 
                    answer={item.answer} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Still Have Unanswered Questions?
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Our front-desk team is happy to help you with clinic timings, diagnostic pricing, or matching you with the right therapist.
            </p>
            <div className="pt-2">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-white text-primary-brand shrink-0" />
                <span>Ask via WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
