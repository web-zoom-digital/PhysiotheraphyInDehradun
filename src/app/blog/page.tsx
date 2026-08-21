import React from "react";
import Link from "next/link";
import { BLOGS_DATA } from "@/config/blogs";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Clock, Calendar, ArrowRight, MessageSquare, Phone, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Physiotherapy Blog & Recovery Guides | Physiotherapy Dehradun",
  description: "Read physical therapy guidelines, exercises, and rehabilitation guides written by our expert physiotherapists in Dehradun."
};

export default function BlogIndexPage() {
  const globalWaMsg = "Hello RonEx Physiotherapy, I have a question after reading your blog post and would like to book an appointment.";
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(globalWaMsg)}`;

  // Extract unique categories for blog tags / pills
  const categories = Array.from(new Set(BLOGS_DATA.map((post) => post.category)));

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" }
      ]} />

      {/* Breadcrumb Nav */}
      <nav
        className="bg-slate-50 border-b border-slate-100 py-3"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-primary-brand transition-colors"
              >
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <li className="text-slate-700 font-bold" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
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
                <span className="inline-block text-xs font-black tracking-widest text-teal-400 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  Physiotherapy Blog &amp; Recovery Guides
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Health &amp; Rehabilitation
                  <span className="block text-teal-400 text-2xl sm:text-3xl mt-1">
                    Blog &amp; Articles
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Evidence-based exercise guides, clinical timelines, and health advice from our physiotherapy team in Dehradun.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book on WhatsApp
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {CLINIC_CONFIG.contact.phone}
                  </a>
                </div>
              </Reveal>

            </div>

            {/* RIGHT: Image */}
            <div className="lg:col-span-5">
              <Reveal delay={0.3}>
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">
                  <img
                    src="/services/sports_rehab.png"
                    alt="Physiotherapy Blog Dehradun"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOGS_DATA.map((post) => (
                <StaggerItem key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full   "
                      />
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-teal-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-teal-100">
                        {post.category}
                      </span>
                      <span className="absolute top-3 right-3 bg-black/50 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-4 flex flex-col flex-1">
                      

                      <h2 className="italic text-slate-800 text-[10px] line-clamp-2  flex-1">
                        {post.title}
                      </h2>

                      <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2 mt-2 mb-4">
                        {post.shortDesc}
                      </p>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-brand">
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue-light border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <Reveal>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Need Personalised Physiotherapy Advice?
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Book a consultation with our expert physiotherapists and get a custom rehabilitation plan.
            </p>
            <div className="pt-8">
              <a
                href={`${CLINIC_CONFIG.contact.whatsapp}?text=Hi%2C%20I%20want%20to%20schedule%20a%20physiotherapy%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary-brand text-white font-extrabold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Book on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
