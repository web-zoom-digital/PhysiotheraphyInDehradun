import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { CLINIC_CONFIG } from "@/config/clinic";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  FaqAccordion,
} from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import {
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Activity,
  Star,
  Shield,
  Clock,
  Users,
  MapPin,
  MessageSquare,
  Award,
  Zap,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords.join(", "),
    alternates: {
      canonical: `${CLINIC_CONFIG.domain}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${CLINIC_CONFIG.domain}/services/${service.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: CLINIC_CONFIG.name,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  // Other services for internal linking
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(
    0,
    5,
  );

  // Related conditions for internal linking
  const relatedConditions = CONDITIONS_DATA.filter((c) =>
    service.conditions.includes(c.slug),
  );

  const customWaMessage = `Hi RonEx Physiotherapy, I want to book an appointment for ${service.title}. Please let me know the availability.`;
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(customWaMessage)}`;

  const trustBadges = [
    { icon: Award, label: "MPT Certified Experts" },
    { icon: Shield, label: "Evidence-Based Care" },
    { icon: Clock, label: "Same-Day Appointments" },
    { icon: Users, label: "10,000+ Patients Treated" },
  ];

  return (
    <>
      {/* Schema Injection */}
      <ClinicSchema
        type="service"
        slug={service.slug}
        name={service.title}
        description={service.shortDesc}
      />
      <ClinicSchema type="faq" faqs={service.faqs} />
      <ClinicSchema
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services/physiotherapy-in-dehradun" },
          { name: service.title, item: `/services/${service.slug}` },
        ]}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Reveal>
            <nav
              className="mb-6 flex items-center gap-1.5 text-xs text-teal-300 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <Link
                href="/services/physiotherapy-in-dehradun"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <span className="text-white font-semibold">{service.title}</span>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <Reveal delay={0.05}>
                <span className="inline-block text-xs font-black tracking-widest text-teal-800 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full">
                  Expert Physiotherapy in Dehradun
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  {service.title}
                  <span className="block text-teal-800 text-2xl sm:text-3xl mt-1">
                    in Dehradun
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {service.shortDesc}
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
                    <MessageSquare className="w-4 h-4 fill-white" />
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

              {/* Trust Badges */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4 pt-2">
                  {trustBadges.map((badge, idx) => {
                    const BadgeIcon = badge.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <BadgeIcon className="w-4 h-4 text-teal-800 shrink-0" />
                        <span>{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Stat Card - Right Side */}
            <div className="lg:col-span-4">
              <Reveal delay={0.3}>
                <div className="relative rounded-3xl max-h-[65vh] overflow-hidden border border-white/20">
                  <img
                    src="/blog/knee-pain-physio.png"
                    alt="Physiotherapy"
                    className="w-full h-full"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: Main Content */}
            <div className="lg:col-span-7 space-y-14">
              {/* What This Treats / Key Benefits */}
              <section aria-labelledby="benefits-heading">
                <Reveal>
                  <span className="text-sm text-teal-500 font-bold uppercase block mb-2">
                    CLINICAL BENEFITS
                  </span>
                  <h2
                    id="benefits-heading"
                    className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6"
                  >
                    What You Gain from {service.title}
                  </h2>
                </Reveal>
                <StaggerContainer>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, idx) => (
                      <StaggerItem key={idx}>
                        <div className="flex items-start gap-3.5 p-4 bg-brand-blue-light/30 border border-teal-100 rounded-2xl">
                          <CheckCircle2 className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </section>

              {/* Detailed Content */}
              <section aria-labelledby="about-heading">
                <Reveal>
                  <h2
                    id="about-heading"
                    className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6"
                  >
                    About {service.title} at RonEx
                  </h2>
                </Reveal>
                <div
                  className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4 prose-headings:text-slate-800 prose-headings:font-bold prose-h3:text-lg"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </section>

              {/* How It Works — 4 Step Process */}
              <section aria-labelledby="process-heading">
                <Reveal>
                  <span className="text-sm font-black  text-primary-brand uppercase  mb-2">
                    OUR APPROACH
                  </span>
                  <h2
                    id="process-heading"
                    className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6"
                  >
                    How We Treat {service.title.split(" ").slice(-1)[0]}
                  </h2>
                </Reveal>
                <StaggerContainer>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer">
                    {service.approach.map((step, idx) => (
                      <StaggerItem key={idx}>
                        <div className="relative flex gap-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-100 ">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary-brand to-brand-blue text-white flex items-center justify-center font-black ">
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm group-hover:text-primary-brand transition-colors">
                              {step}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                              {idx === 0
                                ? "Thorough clinical evaluation"
                                : idx === 1
                                  ? "Targeted hands-on intervention"
                                  : idx === 2
                                    ? "Progressive rehabilitation"
                                    : "Long-term self-management"}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </section>

              {/* Who Is This For */}
              <section aria-labelledby="whofor-heading">
                <Reveal>
                  <span className="text-sm font-black  text-primary-brand uppercase mb-2">
                    IDEAL CANDIDATES
                  </span>
                  <h2
                    id="whofor-heading"
                    className="text-2xl sm:text-2xl font-extrabold text-slate-900  mb-6"
                  >
                    Who Should Choose {service.title}?
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Patients with acute or chronic pain",
                    "Post-surgical recovery patients",
                    "Sports athletes with injuries",
                    "Elderly with mobility limitations",
                    "Office workers with postural issues",
                    "Patients seeking non-surgical care",
                  ].map((who, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-brand shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">
                        {who}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Conditions */}
              {relatedConditions.length > 0 && (
                <section aria-labelledby="conditions-heading">
                  <Reveal>
                    <span className="text-sm font-black  text-primary-brand uppercase mb-2">
                      RELATED CONDITIONS
                    </span>
                    <h2
                      id="conditions-heading"
                      className="text-2xl sm:text-2xl font-extrabold text-slate-900  mb-6"
                    >
                      Conditions We Treat with {service.title}
                    </h2>
                  </Reveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedConditions.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/conditions/${c.slug}`}
                        className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-brand-blue-light hover:border-primary-brand/20 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary-brand transition-colors block">
                            {c.title}
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5 block line-clamp-1">
                            {c.description}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-brand transform group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              

              {/* FAQs */}
              <section aria-labelledby="faq-heading">
                <Reveal>
                  <span className="text-xs font-black tracking-widest text-primary-brand uppercase block mb-2">
                    FAQ
                  </span>
                  <h2
                    id="faq-heading"
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6"
                  >
                    Frequently Asked Questions
                  </h2>
                </Reveal>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <FaqAccordion
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </section>

              {/* Internal Links — Locations */}
              <section className="bg-slate-50 rounded-3xl border border-slate-100 p-6">
                <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-brand" />
                  Available Near You in Dehradun
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Rajpur Road",
                    "GMS Road",
                    "Patel Nagar",
                    "Sahastradhara Road",
                    "Vasant Vihar",
                    "Clement Town",
                  ].map((area) => (
                    <Link
                      key={area}
                      href={`/locations/${area.toLowerCase().replace(/ /g, "-")}`}
                      className="text-xs font-semibold text-primary-brand bg-white border border-teal-100 px-3 py-1.5 rounded-full hover:bg-brand-blue-light transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT: Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              {/* Lead Booking Form */}
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                {/* Form header bar */}
                <div className="bg-gradient-to-r from-teal-800 to-teal-800 px-6 py-5">
                  <h2 className="text-white font-black text-base tracking-tight">Book a Consultation</h2>
                  <p className="text-teal-100 text-xs mt-1">Secure your slot — redirects to WhatsApp for instant confirmation.</p>
                </div>
                <div className="p-8 sm:p-6">
                  <LeadForm />
                </div>
              </div>

              {/* Quick Call Box */}
              {/* <div className="bg-gradient-to-tr from-white to-teal-50 border border-teal-100 rounded-3xl p-5 space-y-3">
                <h4 className="font-extrabold text-slate-800 text-sm">
                  Need Consultation Guidance?
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Speak directly with our clinic about {service.title} — we'll
                  help you understand the right course of treatment.
                </p>
                <a
                  href={CLINIC_CONFIG.contact.phoneUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 bg-white text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary-brand" />
                  <span>Call {CLINIC_CONFIG.contact.phone}</span>
                </a>
                <Link
                  href="/book-appointment"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary-brand text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </Link>
              </div> */}

              {/* Other Services */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-3">
                <h3 className="font-extrabold text-slate-800 text-md">
                  Other Specialized Therapies
                </h3>
                <div className="flex flex-col divide-y divide-slate-50">
                  {otherServices.map((os) => (
                    <Link
                      key={os.slug}
                      href={`/services/${os.slug}`}
                      className="flex items-center justify-between py-2.5 text-sm text-slate-600 hover:text-primary-brand font-semibold group"
                    >
                      <span className="truncate pr-2">{os.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary-brand shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA SECTION ── */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-widest text-teal-800 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full mb-3">
              START RECOVERY TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Begin {service.title}?
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed mt-2">
              Book your first session with our senior physiotherapists in
              Dehradun. In-clinic at Rajpur Road or home visit anywhere across
              Dehradun.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                Book on WhatsApp
              </a>
              <a
                href={CLINIC_CONFIG.contact.phoneUrl}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/book-appointment"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-primary-brand font-bold rounded-full hover:bg-slate-50 shadow-lg transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
