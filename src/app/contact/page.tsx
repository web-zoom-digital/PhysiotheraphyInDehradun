import React from "react";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us | Physiotherapy Clinic Dehradun",
  description: "Get in touch with us. View phone numbers, clinic addresses, operating hours, and Google maps directions for our Rajpur Road and Bhaniyawala branches."
};

export default function ContactPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20Physiotherapy%20Dehradun%2C%20I%20want%20to%20get%20in%20touch%20with%20your%20clinic.`;

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Contact", item: "/contact" }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-25 sm:pb-40 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/blog/best-physiotherapy.png"
            alt="Contact Physiotherapy Dehradun"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal delay={0.1} yOffset={25}>
            <h1 className="text-2xl sm:text-3xl lg:text-4.5xl font-bold text-white">
              Contact Our Care Team<br />
              <span className="text-teal-800">Physiotherapy Dehradun</span>
            </h1>
            <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-xl">
              Have questions or ready to book? Reach out via call, email, or WhatsApp — we respond in minutes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-5">

              {/* Section label */}
              <div className="space-y-2">
                <span className="text-[10px] font-black text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-block">
                  Quick Details
                </span>
                <h2 className="text-xl sm:text-xl font-bold text-slate-800 ">
                  Reach Out Via Call,<br />Email Or WhatsApp
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our front-desk team manages bookings and queries in real-time.
                </p>
              </div>

              {/* Call Now Box */}
              <Reveal delay={0.05}>
                <a
                  href={CLINIC_CONFIG.contact.phoneUrl}
                  className="group flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-teal-200 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-800 group-hover:border-teal-800 transition-all duration-300">
                    <Phone className="w-5 h-5 text-teal-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-teal-800 uppercase ">Call Now</p>
                    <p className="text-xs text-slate-400 mt-0.5">Direct consulting desk</p>
                    <p className="text-base  text-slate-800 mt-1">{CLINIC_CONFIG.contact.phone}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </Reveal>

              {/* Email Box */}
              <Reveal delay={0.1}>
                <a
                  href={`mailto:${CLINIC_CONFIG.contact.email}`}
                  className="group flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-teal-200 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-800 group-hover:border-teal-800 transition-all duration-300">
                    <Mail className="w-5 h-5 text-teal-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-teal-800 uppercase ">Email Us</p>
                    <p className="text-xs text-slate-400 mt-0.5">Queries &amp; tie-ups</p>
                    <p className="text-sm  text-slate-800 mt-1 truncate">{CLINIC_CONFIG.contact.email}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </Reveal>

              {/* Clinic Hours Box */}
              <Reveal delay={0.15}>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-teal-800" />
                    </div>
                    <h4 className=" text-teal-800 uppercase font-black text-sm">Clinic Hours</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-50">
                      <span className="text-sm font-semibold text-slate-500">Monday – Saturday</span>
                      <span className="text-sm font-black text-slate-800 whitespace-nowrap">9:00 AM – 10:00 PM</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-50">
                      <span className="text-sm font-semibold text-slate-500">Sunday</span>
                      <span className="text-sm font-black text-slate-800 whitespace-nowrap">10:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 py-2.5 rounded-xl bg-teal-50 px-3">
                      <span className="text-sm font-semibold text-teal-800">Home Visit (Daily)</span>
                      <span className="text-sm font-black text-teal-800 whitespace-nowrap">8:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right: Lead Form in Box */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                  {/* Form header bar */}
                  <div className="bg-gradient-to-r from-teal-800 to-teal-800 px-8 py-6">
                    <h2 className="text-white font-black text-xl ">Send Us a Message</h2>
                    <p className="text-teal-100 text-xs mt-1">We'll confirm your slot on WhatsApp within minutes.</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <LeadForm />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Map embeds */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">Our Clinic Locations</h2>
            <p className="text-sm text-slate-500">Visit our primary Rajpur Road center or Bhaniyawala center.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-teal-800" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Rajpur Road Branch (Main)</h4>
                  <p className="text-xs text-slate-500 mt-1">{CLINIC_CONFIG.branches[0].address}</p>
                </div>
              </div>
              <div className="h-60 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Physiotherapy Rajpur Road Map"
                  src={CLINIC_CONFIG.contact.googleMapRajpurRoad}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-teal-800" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Bhaniyawala Branch</h4>
                  <p className="text-xs text-slate-500 mt-1">{CLINIC_CONFIG.branches[1].address}</p>
                </div>
              </div>
              <div className="h-60 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Physiotherapy Bhaniyawala Map"
                  src={CLINIC_CONFIG.contact.googleMapBhaniyawala}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <Reveal>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Prefer Instant Confirmation?
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Skip the form — chat directly with our clinic coordinator on WhatsApp to book your slot instantly.
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-white font-bold rounded-full hover:bg-teal-900 shadow-md hover:shadow-teal-200 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
