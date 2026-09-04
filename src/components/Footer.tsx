import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Doctors", href: "/doctor" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book Appointment", href: "/book-appointment" },
  ];

  const serviceLinks = [
    { name: "Physiotherapy in Dehradun", href: "/services/physiotherapy-in-dehradun" },
    { name: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy" },
    { name: "Stroke Rehabilitation", href: "/services/stroke-rehabilitation-dehradun" },
    { name: "Sports Injury Treatment", href: "/services/sports-injury-physiotherapy-dehradun" },
    { name: "Paralysis Treatment", href: "/services/paralysis-treatment-dehradun" },
    { name: "Chiropractic Treatment", href: "/services/chiropractic-chiropractor-dehradun" },
    { name: "Back Pain Treatment", href: "/services/back-pain-treatment-dehradun" },
    { name: "Dry Needling Therapy", href: "/services/dry-needling-therapy-dehradun" },
  ];

  const locationLinks = [
    { name: "Rajpur Road", href: "/locations/rajpur-road" },
    { name: "GMS Road", href: "/locations/gms-road" },
    { name: "Sahastradhara Road", href: "/locations/sahastradhara-road" },
    { name: "Jakhan", href: "/locations/jakhan" },
    { name: "Vasant Vihar", href: "/locations/vasant-vihar" },
    { name: "Dalanwala", href: "/locations/dalanwala" },
    { name: "Patel Nagar", href: "/locations/patel-nagar" },
    { name: "Prem Nagar", href: "/locations/prem-nagar" },
  ];

  return (
    <footer className="bg-teal-800 text-white pt-10 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-3 space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-teal-800 flex items-center justify-center font-black text-lg shadow-md">
                P
              </div>
              <h3 className="text-base font-black tracking-tight text-white">
                {CLINIC_CONFIG.name}
              </h3>
            </Link>

            <p className="text-xs leading-relaxed text-white opacity-95">
              Dehradun's trusted physiotherapy and rehabilitation clinic.
              Providing advanced manual therapy, stroke rehabilitation, sports
              injury treatment and home physiotherapy services.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="text-white">
                  Mon-Sat: 9 AM - 10 PM | Sun: 10 AM - 6 PM
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <a
                  href={CLINIC_CONFIG.contact.phoneUrl}
                  className="hover:underline text-white transition"
                >
                  {CLINIC_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <a
                  href={`mailto:${CLINIC_CONFIG.contact.email}`}
                  className="hover:underline text-white transition break-all"
                >
                  {CLINIC_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 pt-0.5">
              <a
                href="https://www.facebook.com/people/RonEx-Physiotherapy-Rehabilitation-centre/61582957640581/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xs hover:bg-white hover:text-teal-800 transition"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/ronex_physiotherapy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xs hover:bg-white hover:text-teal-800 transition"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Navigation (About, Blog, etc) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/20 pb-1.5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <p className="text-xs text-white">
                    <Link
                      href={link.href}
                      className="text-white hover:text-teal-200 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/20 pb-1.5">
              Services
            </h3>
            <ul className="flex flex-col gap-1.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <p className="text-xs text-white">
                    <Link
                      href={service.href}
                      className="text-white hover:text-teal-200 transition-colors inline-block"
                    >
                      {service.name}
                    </Link>
                  </p>
                </li>
              ))}
              <li>
                <p className="text-xs font-semibold text-teal-200 mt-0.5">
                  <Link
                    href="/services"
                    className="hover:text-white flex items-center gap-1 transition-colors"
                  >
                    View All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </p>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/20 pb-1.5">
              Locations
            </h3>
            <ul className="flex flex-col gap-1.5">
              {locationLinks.map((location) => (
                <li key={location.name}>
                  <p className="text-xs text-white">
                    <Link
                      href={location.href}
                      className="text-white hover:text-teal-200 transition-colors inline-block"
                    >
                      {location.name}
                    </Link>
                  </p>
                </li>
              ))}
              <li>
                <p className="text-xs font-semibold text-teal-200 mt-0.5">
                  <Link
                    href="/locations"
                    className="hover:text-white flex items-center gap-1 transition-colors"
                  >
                    View All Locations <ArrowRight className="w-3 h-3" />
                  </Link>
                </p>
              </li>
            </ul>
          </div>

          {/* Maps Column */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/20 pb-1.5">
              Clinic Location
            </h3>
            <div>
              <h3 className="font-semibold text-white text-xs">
                Rajpur Road Clinic
              </h3>
              <p className="text-[11px] text-white opacity-90">Dehradun, Uttarakhand</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/20 shadow-md h-36">
              <iframe
                title="Physiotherapy Dehradun"
                src={CLINIC_CONFIG.contact.googleMapRajpurRoad}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white">
          <p>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-teal-200 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-teal-200 transition">
              Terms
            </Link>

            <Link href="/sitemap.xml" className="hover:text-teal-200 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


