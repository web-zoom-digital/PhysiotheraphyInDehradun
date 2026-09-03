import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS_DATA, ConditionItem } from "@/config/conditions";
import { SERVICES_DATA } from "@/config/services";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, FaqAccordion } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MedicalReviewBadge } from "@/components/MedicalReviewBadge";
import { FAQSchema } from "@/components/FAQSchema";
import { Phone, Calendar, ArrowRight, ChevronRight, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS_DATA.map((cond) => ({
    slug: cond.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const condition = CONDITIONS_DATA.find((c) => c.slug === slug);
  if (!condition) return {};

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    keywords: condition.keywords.join(", "),
    alternates: {
      canonical: `${CLINIC_CONFIG.domain}/conditions/${condition.slug}`
    },
    openGraph: {
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `${CLINIC_CONFIG.domain}/conditions/${condition.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: CLINIC_CONFIG.name
    },
    twitter: {
      card: "summary_large_image",
      title: condition.metaTitle,
      description: condition.metaDescription
    }
  };
}

export default async function ConditionDetailPage({ params }: Props) {
  const { slug } = await params;
  const condition = CONDITIONS_DATA.find((c) => c.slug === slug);

  if (!condition) {
    return notFound();
  }

  // Find other conditions for sidebar navigation
  const otherConditions = CONDITIONS_DATA.filter((c) => c.slug !== slug).slice(0, 5);

  // Map related services for internal linking
  const relatedServices = SERVICES_DATA.filter((s) =>
    condition.relatedServices.includes(s.slug)
  );

  const customWaMessage = `Hi RonEx Physiotherapy, I'd like to book an appointment for ${condition.title}. Please let me know the availability.`;
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(customWaMessage)}`;

  return (
    <>
      {/* Schemas */}
      <ClinicSchema 
        type="condition" 
        slug={condition.slug} 
        name={condition.title} 
        description={condition.description} 
      />
      <FAQSchema faqs={condition.faqs} />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Conditions", url: "/conditions/back-pain" },
          { label: condition.title, url: `/conditions/${condition.slug}` },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <nav className="mb-4 flex items-center gap-1 text-xs text-blue-200 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
              <span>Conditions</span>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-white font-bold">{condition.title}</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              {condition.title} Treatment in Dehradun
            </h1>
            <p className="text-sm text-slate-100 mt-3 max-w-2xl leading-relaxed">
              {condition.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-primary-brand font-bold rounded-full hover:bg-slate-50 shadow-md transition-all text-xs"
              >
                Book on WhatsApp
              </a>
              <a 
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="px-6 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-xs"
              >
                Call Pain Specialists
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Medical Review & YMYL E-E-A-T Badge */}
            <MedicalReviewBadge />

            {/* HTML Description */}
            <div className="prose max-w-none text-slate-500 text-sm leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: condition.content }}
            />

            {/* Symptoms & Causes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
              
              {/* Symptoms */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <span>Common Symptoms</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-blue" />
                  <span>Potential Causes</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {condition.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Treatment Approach */}
            <div className="space-y-4 pt-6 border-t border-slate-50">
              <h3 className="text-xl font-black text-slate-800">Our Clinical Treatment Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {condition.physioTreatment.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary-brand shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Self-Management Exercises */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-blue-light border border-sky-100 space-y-4">
              <h3 className="text-lg font-black text-slate-800">Home Self-Management Exercises</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Perform these stretches gently within comfort limits. Do not force movement if pain spikes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {condition.exercises.map((ex, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white text-primary-brand flex items-center justify-center font-bold text-xs shrink-0 shadow-sm border border-sky-100/50">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 font-semibold mt-0.5">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Link: Related Services */}
            {relatedServices.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <h3 className="text-xl font-black text-slate-800">Related Clinical Therapies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedServices.map((s) => (
                    <Link 
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-brand-blue-light hover:border-brand-blue/20 transition-all flex items-center justify-between group text-xs text-slate-700 font-semibold"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transform group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            {condition.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-slate-50">
                <h3 className="text-xl font-black text-slate-800">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {condition.faqs.map((faq, idx) => (
                    <FaqAccordion 
                      key={idx} 
                      question={faq.question} 
                      answer={faq.answer} 
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky form + Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Lead Booking Form */}
            <LeadForm />

            {/* Call Booking Sidebox */}
            <div className="glass-panel border-slate-100 rounded-3xl p-6 shadow-soft space-y-3 bg-gradient-to-tr from-white to-brand-blue-light/10">
              <h4 className="font-extrabold text-slate-800 text-sm">Need Pain Advice?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect with our front desk to understand how physiotherapy can target and resolve {condition.title}.
              </p>
              <a href={CLINIC_CONFIG.contact.phoneUrl} className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 bg-white text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50">
                <Phone className="w-3.5 h-3.5 text-primary-brand" />
                <span>Call {CLINIC_CONFIG.contact.phone}</span>
              </a>
              <Link href="/book-appointment" className="flex items-center justify-center gap-2 w-full py-3 bg-primary-brand text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Internal Link: Other Conditions */}
            <div className="glass-panel border-slate-100 rounded-3xl p-6 shadow-soft space-y-3 bg-white">
              <h4 className="font-extrabold text-slate-800 text-sm">Other Pain Conditions</h4>
              <div className="flex flex-col gap-2">
                {otherConditions.map((oc) => (
                  <Link 
                    key={oc.slug}
                    href={`/conditions/${oc.slug}`}
                    className="flex items-center justify-between text-xs text-slate-500 hover:text-primary-brand font-semibold py-1.5 border-b border-slate-50 hover:border-slate-100 last:border-0"
                  >
                    <span className="truncate pr-2">{oc.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
