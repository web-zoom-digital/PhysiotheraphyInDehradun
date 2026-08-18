import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { LOCATIONS_DATA } from "@/config/locations";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { 
  MapPin, 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle,
  Clock,
  Navigation
} from "lucide-react";

export const metadata = {
  title: "Physiotherapy Home Visit Locations in Dehradun | RonEx Physiotherapy",
  description: "Find all sectors and neighborhoods served by RonEx Physiotherapy home visit rehabilitation team in Dehradun, Uttarakhand. Call +91 92862 44489.",
  keywords: "physiotherapy in dehradun, home visit physiotherapy dehradun, physiotherapy near rajpur road, GMS road, kargi chowk"
};

export default function LocationsIndexPage() {
  const globalWaMsg = "Hello RonEx Physiotherapy, I would like to check home visit availability for my area and book an appointment.";
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(globalWaMsg)}`;

  return (
    <>
      {/* Dynamic SEO JSON-LD injection */}
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Locations served", item: "/locations" }
      ]} />
      
      {/* 1. BREADCRUMB */}
      <nav className="bg-slate-50 border-b border-slate-100 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <li>
              <Link href="/" className="hover:text-primary-brand transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <li className="text-slate-700 font-bold" aria-current="page">Locations Served</li>
          </ol>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-white via-brand-blue-light/30 to-teal-100/20 py-16 sm:py-24 border-b border-slate-100/50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-teal-200/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal delay={0.05}>
            <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-3.5 py-1.5 rounded-full border border-teal-100 shadow-sm">
              DEHRADUN HEALTHCARE MAP
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-2.5xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Physiotherapy Home Visit <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Locations We Serve</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We provide professional, clinical home visit physiotherapy across Dehradun. Check below to see if our mobile MPT-certified rehabilitation specialists serve your area.
            </p>
          </Reveal>

          {/* User requested Areas Served links block directly in Hero */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-6 shadow-premium border border-slate-100 max-w-4xl mx-auto mt-6 text-left space-y-3.5">
              <p className="text-xs text-slate-400 font-extrabold tracking-wider uppercase">
                Quick Navigation - Select served Neighborhoods:
              </p>
              <div className="flex flex-wrap gap-x-3.5 gap-y-2.5 text-xs text-slate-600 font-semibold">
                <Link href="/locations/rajpur-road" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Rajpur Road</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/gms-road" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in GMS Road</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/kargi-chowk" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Kargi Chowk</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/garhi-cantt" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Garhi Cantt</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/prem-nagar" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Prem Nagar</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/patel-nagar" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Patel Nagar</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/balliwala" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Balliwala</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/sahastradhara-road" className="hover:text-primary-brand transition-colors underline decoration-teal-300 underline-offset-4">Physiotherapy in Sahastradhara Road</Link>
                <span className="text-slate-300 select-none">•</span>
                <Link href="/locations/clock-tower" className="hover:text-primary-brand font-bold transition-colors underline decoration-teal-300 underline-offset-4">+ 7 more Dehradun sectors</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer"
              >
                Inquire Area Availability
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-600 border border-slate-200 font-extrabold rounded-full hover:bg-slate-50 hover:scale-105 active:scale-98 transition-all flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4 text-primary-brand" />
                <span>Call Coordinator</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. AREAS DIRECTORY GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase bg-brand-blue-light px-2.5 py-0.5 rounded-full border border-teal-100">
              EXPLORE OUR SERVICES NEIGHBORHOODS
            </span>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Dehradun Neighborhoods Directory
            </h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              Our clinical and home-visit network covers all major residential societies, schools, and markets around these locations:
            </p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS_DATA.map((loc) => (
                <StaggerItem key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="premium-card p-6 h-full flex flex-col justify-between group cursor-pointer border border-slate-100"
                  >
                    <div className="space-y-4">
                      {/* Icon & Status */}
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-brand group-hover:text-white transition-all duration-300">
                          <MapPin className="w-5 h-5" />
                        </div>
                        {loc.homeVisitAvailable && (
                          <span className="text-[9px] font-black text-primary-brand bg-brand-blue-light px-2 py-0.5 rounded-full border border-teal-100 uppercase tracking-wider">
                            Home Visits Active
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-800 group-hover:text-primary-brand transition-colors duration-300">
                          {loc.name} Sector
                        </h3>
                        <p className="text-[11px] font-bold text-slate-400">
                          Dehradun, Uttarakhand
                        </p>
                      </div>

                      {/* Landmarks */}
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">
                          Served Landmarks:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {loc.landmarks.slice(0, 3).map((marker, idx) => (
                            <span key={idx} className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-150/40">
                              {marker}
                            </span>
                          ))}
                          {loc.landmarks.length > 3 && (
                            <span className="text-[10px] text-slate-400 font-bold bg-slate-50 px-2 py-0.5 rounded-md">
                              +{loc.landmarks.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100/50 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-primary-brand transition-colors duration-300">
                      <span>View Area Coverage</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. MOBILITY REHAB HOME VISIT STANDARDS */}
      <section className="py-20 bg-brand-blue-light/10 border-t border-slate-100/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black tracking-widest text-primary-brand uppercase bg-brand-blue-light px-2.5 py-0.5 rounded-full border border-teal-100">
              CLINICAL STANDARDS
            </span>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Home Physiotherapy Setup Standards
            </h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              Our mobile therapists carry calibrated machinery and follow rigid safety checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Portable Electrotherapy",
                desc: "We bring portable IFT, TENS, and therapeutic ultrasound machines to aid joint pain reduction and trigger needs directly in-house.",
                icon: ShieldCheck
              },
              {
                title: "Safety & Sanitation",
                desc: "Therapists sanitize hands and wear clinical masks/shoe coverings before entering your living space to maintain high clinical hygiene.",
                icon: Clock
              },
              {
                title: "Coordinated Diagnostics",
                desc: `Every dynamic recovery slot is aligned with our lead consultant, ${CLINIC_CONFIG.doctor.name}, ensuring clinical supervision on every progress marker.`,
                icon: Navigation
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA CONVERSION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-white to-teal-50 rounded-[32px] border border-slate-100 p-8 sm:p-12 shadow-premium text-center space-y-6">
            <span className="text-xs font-black tracking-widest text-primary-brand uppercase bg-brand-blue-light px-3 py-1 rounded-full border border-teal-100">
              Guidance & Support
            </span>
            
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Need Help Checking Your Local Sector?
            </h2>
            
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              If your specific sector or residential landmark is not listed, contact our Dehradun coordinator. We dynamically extend slots based on clinical urgency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link 
                href="/book-appointment"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all text-xs"
              >
                Request Slot
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-primary-brand shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust points grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-150/40 text-left">
              {[
                "Evidence-Based Treatments",
                "Home Visit Modalities",
                "Certified MPT Therapists",
                "Flexible Session Timings"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold">
                  <CheckCircle className="w-4 h-4 text-primary-brand shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
