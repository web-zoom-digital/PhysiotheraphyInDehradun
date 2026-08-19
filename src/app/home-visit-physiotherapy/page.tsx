import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { LeadForm } from "@/components/LeadForm";
import { Home, ClipboardCheck, Laptop, ShieldAlert, Award, Phone } from "lucide-react";

export const metadata = {
  title: "Home Visit Physiotherapy in Dehradun | Physiotherapy",
  description: "Get professional, MPT-certified physiotherapy at home in Dehradun. Specialized home rehab for stroke paralysis, knee replacements, and seniors. Call today."
};

export default function HomeVisitPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%2C%20I%20want%20to%20inquire%20about%20Home%20Visit%20Physiotherapy%20services%20in%20Dehradun.`;

  const processSteps = [
    {
      title: "Initial Diagnostic Booking",
      desc: "Contact us to schedule your first home visit. We match you with a therapist specializing in your orthopedic or neuro condition."
    },
    {
      title: "Home Assessment & Safety Check",
      desc: "Our therapist evaluates your physical function, joint range of motion, and suggests safety adjustments to prevent senior falls."
    },
    {
      title: "Structured Therapy Sessions",
      desc: "We perform hands-on manual adjustments, muscle releases, and carry portable electrotherapy units to ensure clinic-quality care."
    },
    {
      title: "Surgeon Feedback Coordination",
      desc: "We track your range of motion scores weekly and share progression charts with your referring surgeon to ensure aligned recovery."
    }
  ];

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Home Visit Physiotherapy", item: "/home-visit-physiotherapy" }
      ]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Home Visit Physiotherapy in Dehradun</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-xl mx-auto">
              Recover in the comfort and security of your home. Perfect for stroke rehabilitation, post-surgery knee replacements, and elderly care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue-light px-3 py-1 rounded-full border border-sky-100 inline-block">
                Clinic at Home
              </span>
              <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Get Clinic-Quality Physical Therapy Without the Travel Pain
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Commuting daily to a clinic can be exhausting and painful—especially for individuals recovering from major orthopedic operations like total knee replacements, spine surgeries, or stroke paralysis.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our Home Visit service brings registered, MPT-certified physiotherapists directly to your residence in Dehradun. We combine hands-on manual adjustments with portable therapeutic tech to ensure optimal recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-primary-brand shrink-0" />
                  <span>MPT Certified Therapists only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary-brand shrink-0" />
                  <span>Portable IFT & TENS units</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-primary-brand shrink-0" />
                  <span>Sanitized, clinical protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-brand shrink-0" />
                  <span>Weekly progress reports</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-brand-gray-light/30 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">Our Home Rehab Process</h2>
            <p className="text-xs text-slate-400">We maintain identical medical standards at home as in our clinics.</p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <StaggerItem key={idx} className="h-full">
                  <div className="glass-panel bg-white p-6 rounded-3xl border border-slate-100 shadow-soft h-full space-y-3">
                    <span className="w-8 h-8 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center font-black text-xs">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Home className="w-12 h-12 text-brand-blue mx-auto" />
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">Areas Covered in Dehradun</h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Our home visit therapists operate in shifts across all residential areas in Dehradun, including:
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {["Rajpur Road", "GMS Road", "Patel Nagar", "Dalanwala", "Vasant Vihar", "Jakhan", "Sahastradhara Road", "Garhi Cantt", "Prem Nagar", "Canal Road"].map((area, idx) => (
              <span key={idx} className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-150 px-3.5 py-1.5 rounded-full shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Request a Home Visit Assessment
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Have our senior therapist visit your home. Call or message us to select available slots.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all">
                Book Home Visit on WhatsApp
              </a>
              <a href={CLINIC_CONFIG.contact.phoneUrl} className="w-full sm:w-auto px-8 py-4 bg-white text-primary-brand border border-slate-200 font-extrabold rounded-full hover:bg-slate-50 shadow-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call {CLINIC_CONFIG.contact.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
