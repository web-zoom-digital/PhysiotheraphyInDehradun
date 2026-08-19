import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Camera, MapPin, CheckCircle, Activity, Sparkles, Shield } from "lucide-react";

export const metadata = {
  title: "Clinic Gallery & Facilities | Physiotherapy Dehradun",
  description: "Take a visual tour of Physiotherapy Dehradun's modern clinics. View our private consulting rooms, treatment beds, and advanced exercise gym equipment."
};

export default function GalleryPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%2C%20I%20saw%20your%20clinic%20gallery%20and%20want%20to%20book%20a%20visit.`;

  const items = [
    {
      title: "Private Consultation Rooms",
      tag: "Assessment",
      desc: "Soundproof, private spaces for Dr. Rohan Mehta to conduct detailed postural, orthopedic, and neurological diagnostic checks.",
      icon: Shield
    },
    {
      title: "Electrotherapy Division",
      tag: "Modality",
      desc: "Advanced medical-grade Interferential Therapy (IFT), localized therapeutic Laser units, and ultrasound machines.",
      icon: Sparkles
    },
    {
      title: "Active Exercise Gym",
      tag: "Strengthening",
      desc: "Rehab area equipped with swiss balls, resistance bands, balance boards, and posture mirrors for movement retraining.",
      icon: Activity
    },
    {
      title: "Neuro-Rehab Zone",
      tag: "Stroke & Nerve",
      desc: "Specialized height-adjustable treatment beds and supportive frames to assist stroke survivors in balance and gait drills.",
      icon: Sparkles
    },
    {
      title: "Rajpur Road Reception",
      tag: "Lobby",
      desc: "Lobby at our Clock Tower branch, featuring glassmorphic check-in desks and comfortable, air-conditioned seating.",
      icon: Camera
    },
    {
      title: "Bhaniyawala Center",
      tag: "Branch",
      desc: "Our secondary branch layout, hosting identical therapeutic equipment to serve the eastern parts of Dehradun.",
      icon: MapPin
    }
  ];

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Clinic Gallery", item: "/gallery" }
      ]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Our Clinic Gallery</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-xl mx-auto">
              Step inside our modern, startup-style physical therapy spaces designed for comfortable patient healing and safety.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <StaggerItem key={idx} className="h-full">
                    <div className="glass-panel bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium hover:border-brand-blue/10 transition-all duration-300 group h-full flex flex-col">
                      
                      {/* Visual Graphic Area */}
                      <div className="relative aspect-[4/3] bg-gradient-to-tr from-brand-blue-light/50 to-brand-blue-light/30 flex items-center justify-center text-slate-400 group-hover:scale-102 transition-transform duration-500 border-b border-slate-50">
                        <IconComponent className="w-16 h-16 text-slate-300 opacity-60 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
                        <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest text-brand-blue uppercase bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-100 shadow-sm">
                          {item.tag}
                        </span>
                      </div>

                      {/* Detail Text */}
                      <div className="p-6 space-y-2">
                        <h4 className="font-extrabold text-slate-800 text-base group-hover:text-primary-brand transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Tour Our Facilities In-Person
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              We maintain identical clinical standards across both branches. Schedule an initial diagnostic assessment to visit us.
            </p>
            <div className="pt-2">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2">
                <span>Book In-Clinic Assessment</span>
                <CheckCircle className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
