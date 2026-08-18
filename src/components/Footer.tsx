import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctor" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "/book-appointment" },
  ];

  return (
    <footer className="bg-teal-700 text-white pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Clinic Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-700 flex items-center justify-center font-black text-xl shadow-lg">
                P
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                {CLINIC_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-md text-white">
              Dehradun's trusted physiotherapy and rehabilitation clinic.
              Providing advanced manual therapy, stroke rehabilitation, sports
              injury treatment and home physiotherapy services.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-teal-50">
                  Mon-Sat: 9 AM - 10 PM | Sun: 10 AM - 6 PM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <a
                  href={CLINIC_CONFIG.contact.phoneUrl}
                  className="hover:text-white text-teal-50 transition"
                >
                  {CLINIC_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <a
                  href={`mailto:${CLINIC_CONFIG.contact.email}`}
                  className="hover:text-white text-teal-50 transition"
                >
                  {CLINIC_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/RonEx-Physiotherapy-Rehabilitation-centre/61582957640581/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-teal-700 transition"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/ronex_physiotherapy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-teal-700 transition"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-100">
              Quick Navigation
            </h4>

            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-teal-50 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maps */}
          <div className="lg:col-span-4 space-y-4">
            {/* Main Map */}
            <div>
              <h4 className="font-bold text-white uppercase text-sm">
                Rajpur Road Clinic
              </h4>
              <p className="text-sm text-white mt-1">Dehradun, Uttarakhand</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/20 shadow-xl h-52">
              <iframe
                title="Physiotherapy Dehradun"
                src="https://maps.google.com/maps?q=Rajpur%20Road%20Dehradun&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-teal-100">
          <p>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. All Rights
            Reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
