import React from "react";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Phone, Clock, FileText, UserCheck } from "lucide-react";

export const metadata = {
  title: "Book a Physiotherapy Appointment | Physiotherapy Dehradun",
  description: "Schedule a physical therapy session or request a home visit in Dehradun. Fill out our booking form or connect instantly on WhatsApp at +91 92862 44489."
};

export default function BookAppointmentPage() {
  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Book Appointment", item: "/book-appointment" }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-25 sm:pb-40 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/blog/best-physiotherapy.png"
            alt="Book Physiotherapy Appointment Dehradun"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal delay={0.1} yOffset={25}>
            <h1 className="text-2xl sm:text-3xl lg:text-4.5xl font-bold text-white">
              Book an Appointment<br />
              <span className="text-teal-400">Physiotherapy Dehradun</span>
            </h1>
            <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-xl">
              Fill out the form below and our team will confirm your slot on WhatsApp within minutes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Form in a styled box */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                  {/* Form header bar */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-6">
                    <h2 className="text-white font-black text-xl tracking-tight">Book a Consultation</h2>
                    <p className="text-teal-100 text-xs mt-1">Secure your slot — redirects to WhatsApp for instant confirmation.</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <LeadForm />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Side Info Panel */}
            <div className="lg:col-span-5 space-y-5">

              {/* Preparation tips */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-5">
                  <h3 className="font-extrabold text-slate-800 text-base">Before Your Session</h3>
                  <div className="space-y-4 text-xs text-slate-600">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Arrive Early</p>
                        <p className="mt-0.5 leading-relaxed">Please arrive 10 minutes prior to complete initial documentation at the clinic.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Bring Reports</p>
                        <p className="mt-0.5 leading-relaxed">Carry copies of recent X-rays, MRI scans, or doctor prescriptions related to your condition.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                        <UserCheck className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Wear Comfortable Clothing</p>
                        <p className="mt-0.5 leading-relaxed">Wear loose, comfortable clothing (shorts, t-shirts, track pants) for easy movement assessments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Call CTA */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Need Instant Support?</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Experiencing acute pain or need an emergency home visit? Call us directly:
                    </p>
                    <a href={CLINIC_CONFIG.contact.phoneUrl} className="text-base font-extrabold text-teal-600 block hover:underline mt-2">
                      {CLINIC_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
