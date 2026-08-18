import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, FaqAccordion } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { MessageSquare, ArrowRight } from "lucide-react";

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

      {/* Header Banner */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-xl mx-auto">
              Find instant answers regarding clinical appointments, treatment methods, home visits, and billing.
            </p>
          </Reveal>
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
