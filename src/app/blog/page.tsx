import React from "react";
import Link from "next/link";
import { BLOGS_DATA } from "@/config/blogs";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/FramerWrapper";
import { ClinicSchema } from "@/components/ClinicSchema";
import { Clock, Calendar, ArrowRight, MessageSquare, Phone,ChevronLeft, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Physiotherapy Blog & Recovery Guides | Physiotherapy Dehradun",
  description: "Read physical therapy guidelines, exercises, and rehabilitation guides written by our expert physiotherapists in Dehradun."
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const pageParam = resolvedSearchParams?.page;
  let currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 21;
  
  const totalPages = Math.max(1, Math.ceil(BLOGS_DATA.length / postsPerPage));
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = BLOGS_DATA.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav
              className="flex items-center gap-1.5 text-xs text-teal-300 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <Link
                href="/blog"
                className="hover:text-white text-white transition-colors"
              >
                Blog
              </Link>
            </nav>
          </Reveal>

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
                    // href={waUrl}
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
              {currentPosts.map((post) => (
                <StaggerItem key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
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
                      
                      <h2 className="italic text-slate-800 text-lg font-semibold line-clamp-2 flex-1">
                        {post.title}
                      </h2>

                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mt-2 mb-4">
                        {post.shortDesc}
                      </p>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-brand mt-auto">
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary-brand"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Link>
              ) : (
                <div className="p-2 rounded-full border border-slate-100 text-slate-300 cursor-not-allowed">
                  <ChevronLeft className="w-5 h-5" />
                </div>
              )}
              
              <span className="text-sm font-medium text-slate-600">
                Page {currentPage} of {totalPages}
              </span>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary-brand"
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              ) : (
                <div className="p-2 rounded-full border border-slate-100 text-slate-300 cursor-not-allowed">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          )}
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
