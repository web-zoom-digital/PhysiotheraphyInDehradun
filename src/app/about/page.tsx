import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Award, ShieldCheck, Heart, User, Sparkles, CheckCircle, MapPin, Activity, ChevronRight, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { SERVICES_DATA } from "@/config/services";
import { LOCATIONS_DATA } from "@/config/locations";

export const metadata = {
  title: "About Us | Leading Physiotherapy Clinic in Dehradun",
  description: "Learn about Physiotherapy Dehradun's philosophy, medical team, and advanced equipment. We are committed to evidence-based joint and muscle rehab."
};

export default function AboutPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20Physiotherapy%20Dehradun%2C%20I%20read%20your%20About%20page%20and%20want%20to%20consult%20Dr.%20Om%20Prakash.`;

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about" }
      ]} />

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* LEFT: Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.05}>
                <span className="inline-block text-xs font-black tracking-widest text-teal-800 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  ABOUT OUR CLINIC
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  About Physiotherapy
                  <span className="block text-teal-800 text-2xl sm:text-3xl mt-1">
                    In Dehradun
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  We are Dehradun's premier evidence-based physical therapy & joint rehabilitation clinic, committed to restoring your active movement and pain-free living through senior consultant care.
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
                    Book Consultation on WhatsApp
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Clinic Coordinator
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Image */}
            <div className="lg:col-span-5">
              <Reveal delay={0.3}>
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[350px] lg:h-[450px]">
                  <img
                    src="/services/sport-pain-dehradun.png"
                    alt="Physiotherapy Clinic Dehradun"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Main Branch</p>
                      <p className="text-teal-200 text-xs">Clock Tower, Dehradun</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-black text-sm">Experience</p>
                      <p className="text-teal-200 text-xs">12+ Years Practice</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal yOffset={25}>
            <div className="space-y-5">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue-light px-3 py-1 rounded-full border border-sky-100">
                Founding Philosophy
              </span>
              <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
                Why We Built Dehradun's Most Premium Rehab Clinic
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most physiotherapy clinics rely purely on basic electrical machines, leaving patients with temporary relief but zero long-term recovery. At Physiotherapy Dehradun, we wanted to change that.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                By combining advanced European joint mobilization (Mulligan &amp; Maitland concepts) with localized neuromuscular training, we target the root biomechanical issues. We believe in active, exercise-based recovery rather than passive dependent machines.
              </p>
            </div>
          </Reveal>

          {/* Core Values Cards */}
          <StaggerContainer>
            <div className="space-y-4 cursor-pointer">
              <StaggerItem>
                <div className="flex gap-4 p-5 rounded-2xl bg-brand-gray-light border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800">Evidence-Based Medicine</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      We follow international protocols verified by clinical trials to ensure safe, rapid, and complete healing.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex gap-4 p-5 rounded-2xl bg-brand-gray-light border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800">Absolute Safety &amp; Hygiene</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      From sterilized clinical needles to deeply sanitized patient beds, your safety is our top healthcare priority.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex gap-4 p-5 rounded-2xl bg-brand-gray-light border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-800">Empathetic Care Pathways</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Chronic pain affects you emotionally. We build patient-centric programs that respect your speed, targets, and life.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities and Equipment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">Advanced Rehabilitation Equipment</h2>
            <p className="text-xs text-slate-400">Our Dehradun branches are equipped with clinical-grade medical hardware.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            <div className="glass-panel p-6 rounded-3xl border border-slate-400 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-md">Targeted Laser Therapy</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizes localized coherent light to stimulate cellular metabolism, decrease pain, and speed up tendon tissue repair.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-3xl border border-slate-400 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-sm">Interferential Therapy (IFT)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Uses mid-frequency currents to penetrate deep muscle tissues, providing strong pain-relief and reducing deep joint edema.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-slate-400 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-md">Vestibular Balance Boards</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Advanced coordination training platforms designed to challenge balance, retrain gait, and prevent senior falls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES WE OFFER SECTION ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold   text-teal-800  text-primary-brand px-3.5 py-1.5 rounded-full inline-block">
              OUR SPECIALIZED SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              These Are the Services We Provide
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
              We offer evidence-based, clinical-grade physical therapy and rehabilitation programs customized to your specific recovery goals.
            </p>
          </div>

          {/* Grid of Cards */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES_DATA.slice(0, 3).map((service) => (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="bg-white rounded-3xl border border-slate-400 p-7 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.12)] hover:-translate-y-1.5 hover:border-teal-200 transition-all duration-300 h-full group cursor-pointer"
                  >
                    <div className="space-y-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-teal-50 text-teal-800 group-hover:scale-110 transition-transform duration-300">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-primary-brand transition-colors duration-300 leading-snug">
                          {service.title.replace(" in Dehradun", "")}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed line-clamp-3">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary-brand transition-colors duration-300">
                      <span>Explore Therapy</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-800 text-white hover:bg-teal-750 hover:text-white text-sm font-base rounded-full transition-all"
            >
              <span>View All Specialized Therapies</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── LOCATIONS WE SERVE SECTION ─── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold   text-teal-800  text-primary-brand px-3.5 py-1.5 rounded-full inline-block">
              OUR SERVICE AREAS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              These Are the Locations We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Our mobile home-visit physiotherapy team and clinics serve patient needs across all major neighborhoods of Dehradun.
            </p>
          </div>

          {/* Grid of Cards */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LOCATIONS_DATA.slice(0, 3).map((loc) => (
                <StaggerItem key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="bg-white rounded-3xl border border-slate-400 p-7 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.12)] hover:-translate-y-1.5 hover:border-teal-200 transition-all duration-300 h-full group cursor-pointer"
                  >
                    <div className="space-y-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-primary-brand transition-colors duration-300 leading-snug">
                          {loc.name} Sector
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
                          {loc.tagline}
                        </p>
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {loc.landmarks.slice(0, 3).map((landmark, idx) => (
                            <span key={idx} className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary-brand transition-colors duration-300">
                      <span>View Area Coverage</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-800 text-white hover:bg-teal-750 hover:text-white text-sm font-base rounded-full transition-all"
            >
              <span>View All 15+ Neighborhoods Served</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── GOOGLE MAP SECTION ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-bold   text-teal-800  text-primary-brand px-3.5 py-1.5 rounded-full inline-block">
              VISIT OUR CLINIC
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Find Our Clinic on Google Maps
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
              Find our main Rajpur Road branch centrally located near Clock Tower for easy access from anywhere in Dehradun.
            </p>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-premium h-96 sm:h-[450px]">
            <iframe
              src={CLINIC_CONFIG.contact.googleMapRajpurRoad}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RonEx Physiotherapy Dehradun Google Map"
              aria-label="Google Maps showing RonEx Physiotherapy Clinic in Dehradun"
            />
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Do not let joint stiffness or chronic muscle pain dictate your daily life. Schedule an in-clinic consult or home visit now.
            </p>
            <div className="pt-6">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all">
                Book Consultation on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
