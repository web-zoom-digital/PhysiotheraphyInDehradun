import React from "react";
import Link from "next/link";
import { BLOGS_DATA } from "@/config/blogs";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Physiotherapy Blog & Recovery Guides | Physiotherapy Dehradun",
  description: "Read physical therapy guidelines, exercises, and rehabilitation guides written by our expert physiotherapists in Dehradun."
};

export default function BlogIndexPage() {
  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-25 sm:pb-40 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 min-h-[80vh] overflow-hidden">
          <img
            src="/blog/best-physiotherapy.png"
            alt="Physiotherapy Blog Dehradun"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal delay={0.1} yOffset={25}>
            <h1 className="text-2xl sm:text-3xl lg:text-4.5xl font-bold text-white">
              Physiotherapy Blog<br />
              <span className="text-teal-800">&amp; Recovery Guides</span>
            </h1>
            <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-xl">
              Evidence-based exercise guides, clinical timelines, and health advice from our physiotherapy team in Dehradun.
            </p>
          </Reveal>
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
