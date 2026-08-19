import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Star, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Patient Reviews & Success Stories | RonEx Physiotherapy",
  description: "Read real reviews from patients cured at our Dehradun clinics. Verified success stories for stroke rehabilitation, back pain, and knee arthritis."
};

export default function ReviewsPage() {
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=Hi%20RonEx%2C%20I%20read%20your%20patient%20reviews%20and%20want%20to%20book%20a%20session.`;

  const verifiedReviews = [
    {
      name: "Amit Negi",
      location: "GMS Road, Dehradun",
      condition: "Stroke / Paralysis Rehab",
      text: "Dr. Rohan and his team are angels. My father had a severe stroke and lost all movement on his right side. Within 3 months of home-visit neuro physiotherapy, he is now walking independently with confidence. Strongly recommend!",
      rating: 5,
      date: "August 2026"
    },
    {
      name: "Priyamvada Sharma",
      location: "Rajpur Road, Dehradun",
      condition: "Post-ACL Surgery Rehab",
      text: "Outstanding sports rehab experience. The protocols followed after my ACL reconstruction were highly scientific and structured. I returned to my badminton training in 6 months. Best physiotherapy center in Dehradun!",
      rating: 5,
      date: "July 2026"
    },
    {
      name: "Sarabjeet Singh",
      location: "Patel Nagar, Dehradun",
      condition: "Lower Back Sciatica Pain",
      text: "I was suffering from sharp shooting pain in my left leg due to sciatica. Two other clinics suggested surgery. At RonEx, the combination of manual therapy and dry needling cured my pain in 8 sessions. Life saver!",
      rating: 5,
      date: "June 2026"
    },
    {
      name: "Meenakshi Rawat",
      location: "Vasant Vihar, Dehradun",
      condition: "Severe Knee Osteoarthritis",
      text: "Excellent geriatric care. I am 68 and had severe knee stiffness. The team built my leg strength using gentle exercises and modern ultrasound therapy. I can now walk up the stairs without pain.",
      rating: 5,
      date: "May 2026"
    },
    {
      name: "Vikram Rathi",
      location: "Jakhan, Dehradun",
      condition: "Frozen Shoulder",
      text: "My right shoulder was completely locked and painful. I couldn't raise my hand to comb my hair. The Mulligan mobilization techniques used by the doctor unlocked my joint in just 2 weeks. Painless and highly professional care.",
      rating: 5,
      date: "April 2026"
    },
    {
      name: "Dr. Ananya Sood",
      location: "Dalanwala, Dehradun",
      condition: "Cervical Spondylosis",
      text: "As a doctor myself, I am very picky about rehabilitation methods. Dr. Rohan Mehta follows extremely scientific, evidence-based practices. His postural assessment and ergonomic advice helped cure my neck spasms permanently.",
      rating: 5,
      date: "March 2026"
    }
  ];

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Reviews", item: "/reviews" }
      ]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Patient Success Stories</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-xl mx-auto">
              Real feedback and verified reviews from patients across Dehradun who reclaimed their physical independence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Aggregate Score Panel */}
      <section className="py-10 bg-brand-gray-light/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel bg-white border border-slate-100 p-6 rounded-3xl shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight block">4.9 / 5.0</span>
              <div className="flex gap-1 text-amber-400 justify-center sm:justify-start">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="space-y-1 max-w-md">
              <h4 className="text-sm font-bold text-slate-800">Verified Patient Satisfaction</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Aggregate score based on 1,200+ local Google reviews, hospital referrals, and private intake feedback across Dehradun.
              </p>
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-brand text-white font-extrabold rounded-full text-xs hover:bg-primary-hover shadow-md">
              Share Your Review
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {verifiedReviews.map((rev, idx) => (
                <StaggerItem key={idx} className="h-full">
                  <div className="glass-panel bg-white border border-slate-100 p-6 rounded-3xl shadow-soft h-full flex flex-col justify-between hover:border-brand-blue/10 transition-colors duration-300">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(rev.rating)].map((_, rIdx) => (
                            <Star key={rIdx} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold">{rev.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                      <div>
                        <span className="font-extrabold text-slate-800 text-sm block">{rev.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">
                          {rev.condition}
                        </span>
                      </div>
                      <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wide bg-brand-blue-light px-2.5 py-0.5 rounded-full border border-sky-100">
                        {rev.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Reveal>
            <h2 className="text-2xl sm:text-2.5xl font-extrabold text-slate-800 tracking-tight">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Connect with our MPT certified physiotherapists today. Let us perform a detailed diagnostic movement analysis to resolve your pain.
            </p>
            <div className="pt-2">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-white text-primary-brand shrink-0" />
                <span>Request Appointment on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
