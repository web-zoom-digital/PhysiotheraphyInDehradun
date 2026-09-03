import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Award, GraduationCap, CheckCircle, Stethoscope, MessageSquare, Phone, Calendar, Heart, Sparkles } from "lucide-react";

export const metadata = {
  title: "Our Specialists | Expert Physiotherapists in Dehradun",
  description: "Meet our team of highly qualified and experienced MPT physiotherapists in Dehradun. Specialized in neuro, ortho, sports, and pediatric rehabilitation."
};

const DOCTORS_DATA = [
  {
    name: "Dr. Nawal Soni, PT",
    credentials: "BPT, MPT (Neurology)",
    role: "Senior Neurological Specialist",
    experience: "6 Years Practice",
    specialty: "Neuro Physiotherapy",
    focus: ["Parkinson's & Spinal Cord", "Balance Disorders"],
    bio: "Dr. Nawal Soni specializes in neurological rehab, utilizing evidence-based nerve flossing and motor control models to support independence.",
    image: "https://www.ronexphysiotherapy.com/doctors/nawal-soni.jpg",
    waMessage: "Hi, I want to book a consultation with Dr. Nawal Soni."
  },
  {
    name: "Dr. Razia Khatoon, PT",
    credentials: "BPT, MPT (Pediatrics)",
    role: "Pediatric Physiotherapy Specialist",
    experience: "8 Years Practice",
    specialty: "Pediatric Care",
    focus: ["Cerebral Palsy", "Developmental Delays"],
    bio: "Dr. Razia Khatoon is dedicated to pediatric physical therapy, designing child-focused, fun exercises for motor milestone recovery.",
    image: "https://www.ronexphysiotherapy.com/doctors/razia-khatoon.jpg",
    waMessage: "Hi, I want to book a consultation with Dr. Razia Khatoon."
  },
  {
    name: "Dr. Sonali Rawat, PT",
    credentials: "BPT, MPT (Sports)",
    role: "Sports Rehabilitation Consultant",
    experience: "3 Years Practice",
    specialty: "Sports Care",
    focus: ["Tendon & Ligament Recovery", "Post-Surgery Athletes"],
    bio: "Dr. Sonali Rawat works closely with athletes to recover from injuries, prevent recurring pain, and safely return to active training.",
    image: "https://www.ronexphysiotherapy.com/doctors/sonali-rawat.jpg",
    waMessage: "Hi, I want to book a consultation with Dr. Sonali Rawat."
  },
  {
    name: "Dr. Shaurya Chhetri, PT",
    credentials: "BPT, MPT (Sports)",
    role: "Sports & Strength Conditioning Coach",
    experience: "3 Years Practice",
    specialty: "Sports Care",
    focus: ["Ligament Reconstruction Rehab", "Athletic Conditioning"],
    bio: "Dr. Shaurya Chhetri combines sports biomechanics and physical therapy to design strength programs and return-to-sport pathways.",
    image: "https://www.ronexphysiotherapy.com/doctors/shaurya-chhetri.jpg",
    waMessage: "Hi, I want to book a consultation with Dr. Shaurya Chhetri."
  }
];

export default function DoctorPage() {
  const generalWaUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20Physiotherapy%20Dehradun%2C%20I%2520want%2520to%2520book%2520an%2520appointment%2520with%2520your%2520specialists.`;

  return (
    <>
      <ClinicSchema type="doctor" />
      <Breadcrumb
        items={[
          { label: "Our Doctors", url: "/doctor" }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal delay={0.05}>
            <span className="inline-block text-xs font-black tracking-widest text-white uppercase bg-teal-800/10 border border-teal-800 px-3.5 py-1.5 rounded-full">
              CLINICAL SPECIALISTS
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5.5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Meet Our Highly Qualified
              <span className="block text-teal-500 text-2xl sm:text-3xl lg:text-4xl mt-2 font-bold">
                Specialist Physiotherapists in Dehradun
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We host a dedicated team of MPT-certified senior physical therapy consultants specialized in neurological, orthopedic, pediatric, and sports injury rehabilitation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. DOCTORS DIRECTORY GRID */}
      <section className="py-20 bg-[#F3FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOCTORS_DATA.map((doctor, idx) => {
                const docWaUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(doctor.waMessage)}`;
                return (
                  <StaggerItem key={idx} className="h-full">
                    <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                      
                      {/* Top banner header with accent overlay */}
                      <div className="w-full h-24 bg-gradient-to-r from-teal-500 to-teal-800 relative shrink-0 ">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
                        
                        {/* Tags */}
                        <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                          <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-wider">
                            {doctor.specialty}
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/25 text-emerald-100 rounded-full text-[10px] font-bold">
                            {doctor.experience}
                          </span>
                        </div>
                      </div>

                      {/* Overlapping Profile Photo */}
                      <div className="relative h-12 shrink-0">
                        <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-6 pt-2 flex flex-col flex-grow space-y-4">
                        <div>
                          <h3 className="font-extrabold text-[#111827] text-lg leading-snug group-hover:text-teal-800 transition-colors duration-300">
                            {doctor.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600 mt-1">
                            {doctor.credentials}
                          </p>
                          <p className="text-[10px] text-teal-850 font-bold uppercase tracking-wider mt-1.5">
                            {doctor.role}
                          </p>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                          {doctor.bio}
                        </p>

                        {/* Focus details list */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                            Clinical Focus
                          </p>
                          <div className="flex flex-col gap-1">
                            {doctor.focus.map((item, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-1.5 text-slate-600 text-xs">
                                <Sparkles className="w-3 h-3 text-teal-800 shrink-0" />
                                <span className="font-medium truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA button per card */}
                        <a
                          href={docWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pt-2 block"
                        >
                          <button className="w-full py-3 bg-slate-50 hover:bg-teal-800 border border-slate-200 text-slate-700 hover:text-white rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
                            <MessageSquare className="w-3.5 h-3.5 text-teal-800 group-hover/btn:text-white transition-colors" />
                            <span>Consult {doctor.name.split(',')[0]}</span>
                          </button>
                        </a>
                      </div>

                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. REHABILITATION COMMITMENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal yOffset={25}>
            <div className="space-y-6">
              <span className="text-sm font-extrabold text-teal-800 uppercase ">
                CLINICAL PRACTICE STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Our Code of Care & Evidence-Based Treatments
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At our clinics, our therapists do not rely on generic electrical machines to treat pain. We focus heavily on manual joint therapies, functional movement corrections, and specific muscle activations.
              </p>
              <div className="space-y-3">
                {[
                  "Bobath & PNF concepts for adult neurological paralysis",
                  "Mulligan & Maitland manual joint mobilization concepts",
                  "Pediatric sensory integration therapies for delayed milestones",
                  "Intramuscular dry needling for myofascial trigger pain"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} yOffset={25}>
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-8 sm:p-12 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-800">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Paralysis & Stroke Recovery Home Consultations
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We understand that neuro-patients undergoing stroke rehabilitation or severe spinal cord injuries may find it difficult to visit the clinic. That is why our senior MPT therapists offer custom home visit schedules across all neighborhoods in Dehradun.
              </p>
              <div className="flex gap-4">
                <a
                  href={generalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-teal-800 text-white font-bold rounded-full hover:bg-teal-900 transition-all text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Inquire Home Care
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. FOOTER CALL-TO-ACTION */}
      <section className="py-16 bg-[#04304a] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3.5xl font-black tracking-tight leading-tight">
              Regain Mobility. Restore Freedom.
            </h2>
            <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed">
              Book a clinic session or request a certified home therapist directly through our primary helpline coordinators.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-teal-800 text-white font-extrabold rounded-full hover:bg-teal-900 transition-all shadow-lg hover:scale-105  text-sm flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                Book Consultation on WhatsApp
              </a>
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#04304a] font-extrabold rounded-full hover:bg-slate-50 transition-all shadow-md hover:scale-105  text-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                Schedule Appointment Form
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
