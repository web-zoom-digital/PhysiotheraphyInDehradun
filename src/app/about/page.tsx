import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Award, ShieldCheck, Heart, User, Sparkles, CheckCircle } from "lucide-react";

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
      <section className="relative overflow-hidden pt-25 pb-40 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/blog/best-physiotherapy.png"
            alt="Physiotherapy Clinic Dehradun"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal delay={0.1} yOffset={25}>
            <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold text-white">
              About Physiotherapy<br />
              <span className="text-teal-400 lg:ml-20"> In Dehradun</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">Advanced Rehabilitation Equipment</h2>
            <p className="text-xs text-slate-400">Our Dehradun branches are equipped with clinical-grade medical hardware.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            <div className="glass-panel p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-md">Targeted Laser Therapy</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizes localized coherent light to stimulate cellular metabolism, decrease pain, and speed up tendon tissue repair.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-sm">Interferential Therapy (IFT)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Uses mid-frequency currents to penetrate deep muscle tissues, providing strong pain-relief and reducing deep joint edema.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <h4 className="font-bold text-slate-800 text-md">Vestibular Balance Boards</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Advanced coordination training platforms designed to challenge balance, retrain gait, and prevent senior falls.
              </p>
            </div>
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
