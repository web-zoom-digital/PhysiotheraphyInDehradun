import React from "react";
import { CLINIC_CONFIG } from "@/config/clinic";
import Link from "next/link";
import { Reveal } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Phone, Clock, FileText, UserCheck, MessageSquare, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Book a Physiotherapy Appointment | Physiotherapy Dehradun",
  description: "Schedule a physical therapy session or request a home visit in Dehradun. Fill out our booking form or connect instantly on WhatsApp at +91 92862 44489."
};

export default function BookAppointmentPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20regarding%20physiotherapy%20sessions.`;

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Book Appointment", item: "/book-appointment" }
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
              <span className="text-white font-semibold">Book Appointment</span>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT: Content */}
            <div className="lg:col-span-8 space-y-6">
              <Reveal delay={0.05}>
                <span className="inline-block text-xs font-black tracking-widest text-teal-400 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  Easy & Quick Booking
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Book Your Physiotherapy
                  <span className="block text-teal-400 text-2xl sm:text-3xl mt-1">
                    Appointment in Minutes
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Choose a convenient time to visit our clinic, or request a senior
                  physiotherapist for a home visit anywhere in Dehradun. Fast, personal,
                  and hassle-free scheduling — start your recovery journey today.
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
                    Book on WhatsApp
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
                    alt="Book Physiotherapy Dehradun Session"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
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
                  <div className="bg-gradient-to-r from-teal-800 to-teal-800 px-8 py-6">
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
                        <Clock className="w-4 h-4 text-teal-800" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Arrive Early</p>
                        <p className="mt-0.5 leading-relaxed">Please arrive 10 minutes prior to complete initial documentation at the clinic.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-teal-800" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Bring Reports</p>
                        <p className="mt-0.5 leading-relaxed">Carry copies of recent X-rays, MRI scans, or doctor prescriptions related to your condition.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                        <UserCheck className="w-4 h-4 text-teal-800" />
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
                    <Phone className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Need Instant Support?</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Experiencing acute pain or need an emergency home visit? Call us directly:
                    </p>
                    <a href={CLINIC_CONFIG.contact.phoneUrl} className="text-base font-extrabold text-teal-800 block hover:underline mt-2">
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
