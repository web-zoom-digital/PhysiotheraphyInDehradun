import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOGS_DATA, BlogPost } from "@/config/blogs";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import { ChevronRight, Calendar, User, Clock, Phone, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((b) => b.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `${CLINIC_CONFIG.domain}/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `${CLINIC_CONFIG.domain}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author]
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((b) => b.slug === slug);

  if (!post) {
    return notFound();
  }

  // Related posts selection
  const otherPosts = BLOGS_DATA.filter((b) => b.slug !== slug).slice(0, 3);

  const customWaMessage = `Hi Physiotherapy Dehradun, I read your article "${post.title}" and would like to ask a question.`;
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(customWaMessage)}`;

  return (
    <>
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: post.title, item: `/blog/${post.slug}` }
      ]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-tr from-primary-brand to-brand-blue py-12 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <nav className="mb-4 flex items-center gap-1 text-xs text-blue-200 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-white font-bold truncate max-w-xs">{post.title}</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 mt-4">
              <span className="flex items-center gap-1"><User className="w-4 h-4 text-sky-400" /> Written by {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-sky-400" /> {post.publishedDate}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-sky-400" /> {post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Article Content */}
          <div className="lg:col-span-8 space-y-8">
            
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-primary-brand transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all recovery guides</span>
            </Link>

            {/* Rich Text Body */}
            <article 
              className="prose prose-slate max-w-none text-slate-500 text-sm leading-relaxed space-y-5
                prose-headings:text-slate-800 prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-xl prose-h2:pt-4 prose-h2:border-t prose-h2:border-slate-50
                prose-h3:text-base prose-h3:font-bold
                prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-2
                prose-a:text-brand-blue prose-a:font-bold prose-a:underline hover:prose-a:text-primary-brand"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author box */}
            <div className="p-6 rounded-3xl bg-brand-gray-light border border-slate-100 flex gap-4 mt-10">
              <div className="w-12 h-12 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-primary-brand shrink-0">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-sm">{post.author}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{post.authorTitle}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Medical expert reviewing muscular therapies, neurological stroke adaptations, and pediatric milestones to ensure patient compliance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Lead Booking Form */}
            <LeadForm />

            {/* Side Callout */}
            <div className="glass-panel border-slate-100 rounded-3xl p-6 shadow-soft space-y-3 bg-gradient-to-tr from-white to-brand-blue-light/10">
              <h4 className="font-extrabold text-slate-800 text-sm">Have Questions on this Guide?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our physical therapists. We will explain how these exercises apply to your pain parameters.
              </p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-primary-brand hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-sm">
                <span>Ask on WhatsApp</span>
              </a>
            </div>

            {/* Related articles */}
            <div className="glass-panel border-slate-100 rounded-3xl p-6 shadow-soft space-y-3 bg-white">
              <h4 className="font-extrabold text-slate-800 text-sm">Other Clinical Guides</h4>
              <div className="flex flex-col gap-3">
                {otherPosts.map((op) => (
                  <Link 
                    key={op.slug} 
                    href={`/blog/${op.slug}`}
                    className="group block space-y-1 border-b border-slate-50 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-xs text-slate-400 font-semibold block">{op.publishedDate}</span>
                    <span className="font-bold text-slate-700 text-xs group-hover:text-primary-brand transition-colors block line-clamp-2 leading-snug">
                      {op.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
