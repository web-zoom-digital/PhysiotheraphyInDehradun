import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Award, GraduationCap, CheckCircle, Stethoscope, Landmark, Calendar } from "lucide-react";

export const metadata = {
  title: "Dr. Rohan Mehta, PT - Senior Consultant Physiotherapist Dehradun",
  description: "Consult Dr. Rohan Mehta, PT, senior consultant physiotherapist in Dehradun. Specialized in Neurological Rehab, Stroke recovery, and manual joint mobilization."
};

export default function DoctorPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20Dr.%20Rohan%20Mehta%2C%20I%20would%20like%20to%20consult%20you%20for%20physiotherapy.`;

  return (
    <>
      <ClinicSchema type="doctor" />
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Doctor Profile", item: "/doctor" }
      ]} />

      {/* Main Profile Header */}
      <section className="py-16 bg-gradient-to-tr from-brand-blue-light/35 via-white to-brand-blue-light/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left: Visual Placeholder */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-72 h-[340px] rounded-[32px] overflow-hidden shadow-premium border-8 border-white bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-brand/30 to-brand-blue/30 flex items-center justify-center text-primary-brand">
                  <Stethoscope className="w-24 h-24 opacity-30" />
                </div>
              </div>
            </div>

            {/* Right: Lead Details */}
            <div className="md:col-span-7 space-y-5 text-center md:text-left">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue-light px-3 py-1 rounded-full border border-sky-100">
                Chief Medical Officer & Founder
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                {CLINIC_CONFIG.doctor.name}
              </h1>
              <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wide">
                {CLINIC_CONFIG.doctor.credentials}
              </p>
              <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto md:mx-0" />
              <p className="text-sm text-slate-500 leading-relaxed">
                {CLINIC_CONFIG.doctor.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1"><Award className="w-4 h-4 text-primary-brand" /> 12+ Years Experience</span>
                <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4 text-primary-brand" /> Master of Physiotherapy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Journey & Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Qualifications & Certs */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-blue" />
              <span>Academic & Clinical Credentials</span>
            </h3>
            
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-brand-gray-light border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Master of Physiotherapy (MPT - Neurology)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Specialized study on stroke rehab, nerve flossing, and brain-muscle communication models.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-gray-light border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Certified Manual Therapist (COMT)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Certified in Mulligan Concept (New Zealand) and Maitland Concept (Australia) for joint restoration.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-gray-light border border-slate-100 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-blue flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Advanced Dry Needling Practitioner</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Specialized in intramuscular stimulation to disable deep myofascial painful trigger points.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Memberships & Core Philosophies */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-brand-blue" />
              <span>Professional Affiliations & Philosophy</span>
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-brand-gray-light border border-slate-100">
                <h4 className="text-sm font-bold text-slate-800">Active Memberships</h4>
                <ul className="mt-2 space-y-2 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-brand shrink-0" />
                    <span>Registered Member of the Indian Association of Physiotherapists (IAP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-brand shrink-0" />
                    <span>Affiliated with Neurological Physical Therapy Associations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-brand shrink-0" />
                    <span>Consultant Partner with leading Orthopedic Surgeons in Dehradun & Delhi NCR</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-brand-gray-light border border-slate-100">
                <h4 className="text-sm font-bold text-slate-800">Rehabilitation Philosophy</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Dr. Rohan's treatment focuses on Bobath techniques (Neuro-Developmental Treatment) and Proprioceptive Neuromuscular Facilitation (PNF). He believes that patient education, target core strength, and workplace posture are just as important as manual clinical therapy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Book a Consultation with Dr. Rohan Mehta
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Consultation slots are available at both our Rajpur Road and Bhaniyawala branches. In-home consultations can also be requested for paralysis and stroke recovery.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all">
                Book on WhatsApp
              </a>
              <Link href="/book-appointment" className="w-full sm:w-auto px-8 py-4 bg-white text-primary-brand border border-slate-200 font-extrabold rounded-full hover:bg-slate-50 shadow-sm flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Fill Booking Form</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
