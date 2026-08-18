import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Check, ShieldCheck, HelpCircle, Receipt } from "lucide-react";

export const metadata = {
  title: "Pricing & Rehabilitation Packages | RonEx Physiotherapy",
  description: "Transparent pricing for physiotherapy sessions in Dehradun. View charges for clinical consultations, home visits, and multi-session recovery packages."
};

export default function PricingPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%2C%20I%20would%20like%20to%20know%20more%20about%20your%20rehab%20packages.`;

  const prices = [
    {
      title: "Clinic Consultation",
      price: "₹400",
      period: "per assessment",
      desc: "Comprehensive physical diagnostic check, structural mobility test, and custom exercise plan print.",
      features: [
        "Movement assessment by MPT doctor",
        "Digital posture analysis",
        "Surgeon protocol alignment review",
        "Custom home exercise PDF guide"
      ],
      cta: "Book Diagnostic Visit",
      highlight: false
    },
    {
      title: "Clinic Session",
      price: "₹500",
      period: "per session",
      desc: "Standard physiotherapy session combining hands-on joint manual therapy and clinical electrotherapy.",
      features: [
        "20-30 Mins manual joint mobilization",
        "Targeted clinical electrotherapy (IFT/TENS)",
        "Therapeutic exercise oversight",
        "Paraffin wax / heat packs (if needed)"
      ],
      cta: "Book Clinic Session",
      highlight: true
    },
    {
      title: "Home Visit Session",
      price: "₹800",
      period: "per session",
      desc: "Professional home physical therapy for post-surgical, stroke, paralysis, or elderly mobility rehabilitation.",
      features: [
        "Trained physical therapist at your home",
        "Portable TENS / muscle stimulator therapy",
        "Gait training & transfers guidance",
        "Ergonomic home safety review"
      ],
      cta: "Request Home Session",
      highlight: false
    }
  ];

  const packages = [
    {
      title: "10-Session Clinic Package",
      price: "₹4,500",
      savings: "Save ₹500",
      desc: "Ideal for acute back pain, frozen shoulder, or localized sports injuries requiring consistent recovery.",
      features: ["Valid for 45 Days", "Includes regular reassessments", "Flexible scheduling slots"]
    },
    {
      title: "15-Session Neuro / Home Package",
      price: "₹11,000",
      savings: "Save ₹1,000",
      desc: "Best for stroke rehabilitation, spinal cord injuries, or advanced post-operative joint mobility recovery.",
      features: ["Valid for 60 Days", "One-on-one dedicated therapist", "Free progress reports for surgeon"]
    }
  ];

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Pricing", item: "/pricing" }
      ]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Transparent, Affordable Pricing</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-xl mx-auto">
              Get premium startup-style healthcare treatments with zero hidden costs. Review our clinic rates and recovery packages.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prices.map((plan, idx) => (
                <StaggerItem key={idx} className="h-full">
                  <div 
                    className={`glass-panel rounded-3xl p-8 border h-full flex flex-col justify-between transition-all duration-300 shadow-soft ${
                      plan.highlight 
                        ? "border-brand-blue/30 bg-gradient-to-tr from-white to-brand-blue-light/20 scale-[1.02]" 
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div>
                      {plan.highlight && (
                        <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-2.5 py-0.5 rounded-full border border-sky-100 inline-block mb-4">
                          Most Popular
                        </span>
                      )}
                      <h3 className="text-lg font-black text-slate-800">{plan.title}</h3>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-800 tracking-tight">{plan.price}</span>
                        <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                        {plan.desc}
                      </p>
                      
                      <div className="w-full h-px bg-slate-100 my-6" />

                      <ul className="space-y-3.5 text-xs text-slate-600">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-primary-brand shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <a 
                        href={`${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%2C%20I%20would%20like%20to%20book%20a%20%27${encodeURIComponent(plan.title)}%27.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          plan.highlight 
                            ? "bg-primary-brand text-white hover:bg-primary-hover shadow-md"
                            : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span>{plan.cta}</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Rehabilitation Packages */}
      <section className="py-20 bg-brand-gray-light/30 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black tracking-widest text-primary-brand uppercase bg-brand-blue-light px-3 py-1 rounded-full border border-sky-100">
              Bulk Packages
            </span>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">Chronic Recovery & Neuro Packages</h2>
            <p className="text-sm text-slate-500">Accelerate your recovery path and save on long-term packages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="glass-panel bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-800 text-base">{pkg.title}</h4>
                    <span className="text-[10px] font-black text-primary-brand bg-brand-blue-light border border-sky-100 px-2.5 py-0.5 rounded-full">
                      {pkg.savings}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{pkg.desc}</p>
                  
                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-primary-brand shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={`${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%2C%20I%20want%20to%20opt%20for%20the%20%27${encodeURIComponent(pkg.title)}%27.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-blue-light text-primary-brand hover:bg-brand-blue-light border border-sky-100 font-bold rounded-xl text-center text-xs transition-colors"
                >
                  Opt for this Package
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Insurance and Claims Help */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel border-slate-100/60 rounded-3xl p-6 sm:p-10 shadow-premium bg-gradient-to-tr from-white to-brand-blue-light/10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary-brand shrink-0 shadow-sm">
              <Receipt className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-black text-slate-800">Need Invoices for Health Insurance / Reimbursements?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Yes! We provide official medical receipts containing the consulting physiotherapist's registration number (IAP) and diagnostic details. These are fully valid for medical reimbursement claims from leading corporate and government insurance organizations.
              </p>
              <div className="pt-2">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary-brand hover:text-brand-blue flex items-center gap-1">
                  <span>Chat with billing coordinator</span>
                  <HelpCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
