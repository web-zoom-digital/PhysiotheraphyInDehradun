import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS_DATA } from "@/config/locations";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Reveal, StaggerContainer, StaggerItem, FaqAccordion } from "@/components/FramerWrapper";
import { LeadForm } from "@/components/LeadForm";
import { ClinicSchema } from "@/components/ClinicSchema";
import {
  Phone, CheckCircle2, ChevronRight, MapPin, Landmark, ShieldCheck,
  MessageSquare, Calendar, Star, Activity, Bone, Brain, ArrowRight,
  Home, Users, Clock, Award, BadgeCheck
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords.join(", "),
    alternates: {
      canonical: `${CLINIC_CONFIG.domain}/locations/${location.slug}`
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${CLINIC_CONFIG.domain}/locations/${location.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: CLINIC_CONFIG.name
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription
    }
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((l) => l.slug === slug);

  if (!location) {
    return notFound();
  }

  const otherLocations = LOCATIONS_DATA.filter((l) => l.slug !== slug).slice(0, 6);
  const internalServices = SERVICES_DATA.slice(0, 6);
  const internalConditions = CONDITIONS_DATA.slice(0, 6);

  const customWaMessage = `Hi RonEx Physiotherapy, I'd like to book a physiotherapy session in ${location.name}, Dehradun. Please let me know the availability.`;
  const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(customWaMessage)}`;

  // Service icons mapping
  const serviceIcons = [Activity, Bone, Brain, ShieldCheck, Users, Home];

  const whyChooseUs = [
    { icon: Award, title: "MPT Certified Therapists", desc: "All physiotherapists hold postgraduate degrees and national certifications." },
    { icon: Home, title: "Home Visits Available", desc: "We come to you — comfortable, safe, and professional home physiotherapy." },
    { icon: Clock, title: "Flexible Timings", desc: "Morning to late evening slots. Weekend availability on request." },
    { icon: ShieldCheck, title: "Evidence-Based Care", desc: "All treatments follow latest physiotherapy clinical guidelines and research." },
  ];

  return (
    <>
      {/* Schema Injection */}
      <ClinicSchema
        type="location"
        slug={location.slug}
        name={location.name}
        description={location.metaDescription}
      />
      <ClinicSchema type="faq" faqs={location.faqs} />
      <ClinicSchema type="breadcrumb" breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Locations", item: "/locations" },
        { name: `Physiotherapy in ${location.name}`, item: `/locations/${location.slug}` }
      ]} />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-800/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-teal-300 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <ChevronRight className="w-3 h-3 text-teal-500" />
              <span className="text-white font-semibold">{location.name}</span>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <Reveal delay={0.05}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-xs font-black tracking-widest text-teal-400 uppercase">
                    {location.name}, Dehradun, Uttarakhand
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Physiotherapist in
                  <span className="text-teal-400 block">{location.name} Dehradun</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {location.tagline}. Expert in-clinic & home visit physiotherapy by MPT-certified specialists. Serving {location.name} and surrounding areas.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    Book Home Visit
                  </a>
                  <a
                    href={CLINIC_CONFIG.contact.phoneUrl}
                    className="flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {CLINIC_CONFIG.contact.phone}
                  </a>
                </div>
              </Reveal>

              {/* Areas Quick Nav */}
              {/* <Reveal delay={0.25}>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-teal-300 font-bold uppercase tracking-wider mb-3">
                    Other Areas We Serve:
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-blue-100">
                    {otherLocations.slice(0, 5).map((ol) => (
                      <Link key={ol.slug} href={`/locations/${ol.slug}`} className="hover:text-white transition-colors underline decoration-teal-500/50 underline-offset-4">
                        Physiotherapy in {ol.name}
                      </Link>
                    ))}
                    <Link href="/locations" className="font-bold text-teal-800 hover:text-white transition-colors">
                      + View All Locations
                    </Link>
                  </div>
                </div>
              </Reveal> */}
            </div>

            {/* Rating Card */}
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

              {/* Services Available in [Area] */}
              <section aria-labelledby="services-heading">
                <Reveal>
                  <span className="text-xs font-black tracking-widest text-primary-brand uppercase block mb-2">AVAILABLE TREATMENTS</span>
                  <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Physiotherapy Services Available in {location.name}
                  </h2>
                </Reveal>
                <StaggerContainer>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {internalServices.map((service, idx) => {
                      const ServiceIcon = serviceIcons[idx % serviceIcons.length];
                      return (
                        <StaggerItem key={service.slug} className="h-full">
                          <Link
                            href={`/services/${service.slug}`}
                            className="flex flex-col gap-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-100 transition-all group h-full"
                          >
                            <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center group-hover:bg-primary-brand group-hover:scale-110 transition-all">
                              <ServiceIcon className="w-5 h-5 text-primary-brand group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-800 group-hover:text-primary-brand transition-colors leading-snug">
                                {service.title}
                              </h3>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{service.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-primary-brand mt-auto">
                              <span>Learn more</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </Link>
                        </StaggerItem>
                      );
                    })}
                  </div>
                </StaggerContainer>
              </section>

              {/* About this location */}
              <section aria-labelledby="about-heading">
                <Reveal>
                  <h2 id="about-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Physiotherapy in {location.name}, Dehradun
                  </h2>
                </Reveal>
                <div
                  className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4 prose-headings:text-slate-800 prose-headings:font-bold prose-h3:text-lg"
                  dangerouslySetInnerHTML={{ __html: location.content }}
                />
              </section>


              

              {/* Google Map Embed */}
              

              {/* Why Choose RonEx */}
              {/* <section aria-labelledby="why-heading">
                <Reveal>
                  <h2 id="why-heading" className="text-2xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                    Why Patients in {location.name} Choose Us
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-primary-brand/10 flex items-center justify-center shrink-0">
                          <ItemIcon className="w-5 h-5 text-primary-brand" />
                        </div>
                        <div>
                          <h3 className="font-base text-slate-800 text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section> */}
<section aria-labelledby="map-heading">
                <Reveal>
                  <h3 id="map-heading" className="text-lg font-extrabold text-slate-800 mb-4">
                    Visit Our Nearest Clinic to {location.name}
                  </h3>
                </Reveal>
                <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                  <iframe
                    src={CLINIC_CONFIG.contact.googleMapRajpurRoad}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`RonEx Physiotherapy - Nearest Clinic to ${location.name}`}
                    aria-label={`Google Maps showing RonEx Physiotherapy near ${location.name}, Dehradun`}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  📍 Main Clinic: 13, Rajpur Road, near Clock Tower, Dehradun · <a href={CLINIC_CONFIG.contact.phoneUrl} className="text-primary-brand font-bold hover:underline">{CLINIC_CONFIG.contact.phone}</a>
                </p>
              </section>
              {/* Conditions We Treat */}
              {/* <section aria-labelledby="conditions-heading">
                <Reveal>
                  <h3 id="conditions-heading" className="text-lg font-extrabold text-slate-800 mb-4">
                    Common Conditions Treated in {location.name}
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {internalConditions.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/conditions/${c.slug}`}
                      className="flex items-center justify-between text-xs text-slate-600 hover:text-primary-brand font-semibold py-2.5 px-4 border border-slate-100 rounded-xl hover:bg-brand-blue-light hover:border-teal-100 transition-all group"
                    >
                      <span>{c.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary-brand" />
                    </Link>
                  ))}
                </div>
              </section> */}

             

              {/* FAQs */}
              {/* <section aria-labelledby="faq-heading">
                <Reveal>
                  <span className="text-xs font-black tracking-widest text-primary-brand uppercase block mb-2">FAQ</span>
                  <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                    FAQs — Physiotherapy in {location.name}
                  </h2>
                </Reveal>
                <div className="space-y-3">
                  {location.faqs.map((faq, idx) => (
                    <FaqAccordion
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div> */}
              {/* </section> */}
              {/* Landmarks Served */}
              <section aria-labelledby="landmarks-heading">
                <Reveal>
                  <h3 id="landmarks-heading" className="text-lg font-extrabold text-slate-800 flex items-center gap-2 mb-4">
                    <Landmark className="w-5 h-5 text-primary-brand" />
                    Landmarks & Societies We Serve near {location.name}
                  </h3>
                </Reveal>
                <div className="flex flex-wrap gap-2">
                  {location.landmarks.map((landmark, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-150 px-3.5 py-1.5 rounded-xl shadow-sm"
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {landmark}
                    </span>
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

              {/* Other Locations */}

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-3">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-primary-brand" />
                  Other Neighborhoods Served
                </h3>
                <div className="flex flex-col divide-y divide-slate-50">
                  {otherLocations.map((ol) => (
                    <Link
                      key={ol.slug}
                      href={`/locations/${ol.slug}`}
                      className="flex items-center justify-between py-2 text-xs text-slate-600 hover:text-primary-brand font-semibold group"
                    >
                      <span>Physiotherapist in {ol.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary-brand shrink-0" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/locations"
                  className="text-sm font-bold text-primary-brand hover:underline flex items-center gap-1"
                >
                  View All 15+ Areas <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-widest text-teal-800 uppercase bg-teal-800/10 border border-teal-800/20 px-3.5 py-1.5 rounded-full mb-3">
              BOOK A SESSION IN {location.name.toUpperCase()}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Start Your Recovery in {location.name} Today
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed mt-2">
              Expert physiotherapy at our Rajpur Road clinic or at your doorstep in {location.name}. Same-day appointments available.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary-brand text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:scale-105 transition-all"
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
