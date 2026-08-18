"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC_CONFIG } from "@/config/clinic";
import {
  Menu, X, ChevronDown, Calendar, MapPin, Activity, Bone, Brain,
  Zap, Heart, Stethoscope, Home, ArrowRight, Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "#", hasDropdown: "services" },
    { name: "Locations", href: "#", hasDropdown: "locations" },
    { name: "Doctors", href: "/doctor" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Services mega-menu: 2 columns
  const serviceGroups = [
    {
      label: "CORE THERAPIES",
      items: [
        { name: "Advanced Physiotherapy", desc: "Evidence-based, MPT-led rehabilitation.", href: "/services/physiotherapy-in-dehradun", icon: Activity },
        { name: "Orthopedic Physiotherapy", desc: "Back, knee, neck & joint pain relief.", href: "/services/orthopedic-physiotherapy", icon: Bone },
        { name: "Neurological Physiotherapy", desc: "Stroke, paralysis & Parkinson's rehab.", href: "/services/neuro-physiotherapy", icon: Brain },
        { name: "Sports Physiotherapy", desc: "ACL, ligament & athletic injury rehab.", href: "/services/sports-physiotherapy", icon: Zap },
      ]
    },
    {
      label: "SPECIALIZED CARE",
      items: [
        { name: "Post-Surgery Rehabilitation", desc: "Knee/hip replacement recovery protocols.", href: "/services/post-surgery-rehabilitation", icon: Stethoscope },
        { name: "Stroke Rehabilitation", desc: "Intensive mobility & gait retraining.", href: "/services/stroke-rehabilitation", icon: Brain },
        { name: "Home Visit Physiotherapy", desc: "Therapist at your doorstep in Dehradun.", href: "/home-visit-physiotherapy", icon: Home },
        { name: "All Services & Modalities", desc: "Electrotherapy, dry needling & more.", href: "/services/physiotherapy-in-dehradun", icon: Activity },
      ]
    }
  ];

  // Locations mega-menu: 2 columns
  const locationGroups = [
    {
      label: "NORTH & EAST DEHRADUN",
      items: [
        { name: "Rajpur Road", desc: "Main clinic near Clock Tower.", href: "/locations/rajpur-road" },
        { name: "GMS Road", desc: "Serving GMS & surrounding areas.", href: "/locations/gms-road" },
        { name: "Jakhan", desc: "Physiotherapy in Jakhan colony.", href: "/locations/jakhan" },
        { name: "Sahastradhara Road", desc: "Nearest therapist in this zone.", href: "/locations/sahastradhara-road" },
        { name: "Vasant Vihar", desc: "Home visits & in-clinic sessions.", href: "/locations/vasant-vihar" },
        { name: "Race Course", desc: "Rehabilitation near Race Course area.", href: "/locations/race-course" },
        { name: "Dalanwala", desc: "Expert physio in Dalanwala.", href: "/locations/dalanwala" },
        { name: "Canal Road", desc: "Serving Canal Road & Kaonli.", href: "/locations/canal-road" },
      ]
    },
    {
      label: "SOUTH & WEST DEHRADUN",
      items: [
        { name: "Patel Nagar", desc: "Ortho & neuro rehab services.", href: "/locations/patel-nagar" },
        { name: "Kargi Chowk", desc: "Physiotherapy near Kargi Chowk.", href: "/locations/kargi-chowk" },
        { name: "Balliwala", desc: "Home visits across Balliwala.", href: "/locations/balliwala" },
        { name: "Clement Town", desc: "Physiotherapy in Clement Town.", href: "/locations/clement-town" },
        { name: "ISBT", desc: "Nearest clinic to ISBT area.", href: "/locations/isbt" },
        { name: "Garhi Cantt", desc: "Serving Garhi Cantt & nearby.", href: "/locations/garhi-cantt" },
        { name: "Prem Nagar", desc: "Expert physio in Prem Nagar.", href: "/locations/prem-nagar" },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white border-b border-slate-100/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-brand to-teal-800 flex items-center justify-center text-white font-extrabold text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                P
              </div>
              <div>
                <span className="text-lg font-black text-slate-800 tracking-tight block group-hover:text-primary-brand transition-colors leading-none">
                  {CLINIC_CONFIG.name}
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase leading-none block mt-0.5">
                  DEHRADUN
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase leading-none block mt-0.5">
                  via Ronex 
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isServices = link.hasDropdown === "services";
                const isLocations = link.hasDropdown === "locations";

                let isActive = pathname === link.href;
                if (isServices) isActive = pathname.startsWith("/services") || pathname === "/home-visit-physiotherapy";
                if (isLocations) isActive = pathname.startsWith("/locations");

                if (isServices) {
                  return (
                    <div
                      key={link.name}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-xl cursor-pointer ${
                          isActive ? "text-primary-brand font-bold" : "text-slate-600 hover:text-primary-brand hover:bg-slate-50"
                        }`}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary-brand" : "text-slate-400"}`} />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute left-0 mt-2 w-[540px] rounded-2xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-5 z-50"
                            role="menu"
                          >
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {serviceGroups.map((group) => (
                                <div key={group.label}>
                                  <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-3 px-1">{group.label}</p>
                                  <div className="space-y-0.5">
                                    {group.items.map((item) => {
                                      const ItemIcon = item.icon;
                                      return (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() => setServicesOpen(false)}
                                          role="menuitem"
                                          className="flex items-start gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover/item:bg-primary-brand group-hover/item:border-primary-brand transition-all">
                                            <ItemIcon className="w-4 h-4 text-primary-brand group-hover/item:text-white transition-colors" />
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-sm font-bold text-slate-800 group-hover/item:text-primary-brand transition-colors leading-tight truncate">{item.name}</p>
                                            <p className="text-[11px] text-slate-400 mt-0.5 leading-tight line-clamp-1">{item.desc}</p>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Footer row */}
                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                              {/* <Link
                                href="/services/physiotherapy-in-dehradun"
                                onClick={() => setServicesOpen(false)}
                                className="text-xs font-bold text-primary-brand hover:underline flex items-center gap-1"
                              >
                                View All Services <ArrowRight className="w-3 h-3" />
                              </Link> */}
                              <Link
                                href="/book-appointment"
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center gap-1.5 px-4 py-2 bg-primary-brand text-white text-xs font-bold rounded-full hover:bg-primary-hover transition-colors"
                              >
                                <Calendar className="w-3 h-3" />
                                Book Appointment
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (isLocations) {
                  return (
                    <div
                      key={link.name}
                      ref={locationsRef}
                      className="relative"
                      onMouseEnter={() => setLocationsOpen(true)}
                      onMouseLeave={() => setLocationsOpen(false)}
                    >
                      <button
                        onClick={() => setLocationsOpen(!locationsOpen)}
                        className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-xl cursor-pointer ${
                          isActive ? "text-primary-brand font-bold" : "text-slate-600 hover:text-primary-brand hover:bg-slate-50"
                        }`}
                        aria-expanded={locationsOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsOpen ? "rotate-180 text-primary-brand" : "text-slate-400"}`} />
                      </button>

                      <AnimatePresence>
                        {locationsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute left-0 mt-2 w-[520px] rounded-2xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-5 z-50"
                            role="menu"
                          >
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {locationGroups.map((group) => (
                                <div key={group.label}>
                                  <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-3 px-1">{group.label}</p>
                                  <div className="space-y-0.5">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setLocationsOpen(false)}
                                        role="menuitem"
                                        className="flex items-start gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                      >
                                        <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary-brand group-hover/item:border-primary-brand transition-all">
                                          <MapPin className="w-3.5 h-3.5 text-primary-brand group-hover/item:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0">
                                          <p className="text-sm font-bold text-slate-800 group-hover/item:text-primary-brand transition-colors leading-tight">{item.name}</p>
                                          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight line-clamp-1">{item.desc}</p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                              {/* <Link
                                href="/locations"
                                onClick={() => setLocationsOpen(false)}
                                className="text-xs font-bold text-primary-brand hover:underline flex items-center gap-1"
                              >
                                View All 15+ Areas <ArrowRight className="w-3 h-3" />
                              </Link> */}
                              {/* <Link
                                href="/home-visit-physiotherapy"
                                onClick={() => setLocationsOpen(false)}
                                className="flex items-center gap-1.5 px-4 py-2 bg-primary-brand text-white text-xs font-bold rounded-full hover:bg-primary-hover transition-colors"
                              >
                                <Home className="w-3 h-3" />
                                Book Home Visit
                              </Link> */}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-xl hover:bg-slate-50 ${
                      isActive ? "text-primary-brand font-bold" : "text-slate-600 hover:text-primary-brand"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] bg-primary-brand rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Book Appointment (Desktop) */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/book-appointment"
                className="px-5 py-2.5 bg-primary-brand text-white text-sm font-bold rounded-full hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_14px_rgba(13,148,136,0.2)] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Premium Dark Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[99] bg-white  overflow-y-auto"
          >

            {/* Drawer Header */}
            <div className="sticky top-0 z-10 bg-teal-800 px-5 py-4 flex items-center justify-between shadow-lg">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-extrabold text-base">
                  P
                </div>
                <div>
                  <span className="text-base font-black text-white block leading-none">{CLINIC_CONFIG.name}</span>
                  <span className="text-[9px] text-teal-100 font-bold tracking-widest uppercase block mt-0.5">DEHRADUN</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-5 space-y-6">

              {/* Main Links */}
              <div className="space-y-1">
                {["Home", "About Us", "Doctors", "Blog", "Contact"].map((name) => {
                  const link = navLinks.find(l => l.name === name);
                  if (!link) return null;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold border transition-all ${
                        isActive
                          ? "bg-teal-800 text-white border-teal-800"
                          : "bg-slate-50 border border-slate-200 text-slate-500 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-200"
                      }`}
                    >
                      <span>{name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </Link>
                  );
                })}
              </div>

              {/* Services Section */}
              <div>
                <div className="inline-block px-3 py-1 bg-teal-800 text-white rounded-md mb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest">Services</p>
                </div>
                {serviceGroups.map((group) => (
                  <div key={group.label} className="mb-4">
                    <div className="inline-block px-2.5 py-0.5 bg-teal-800 rounded mb-2">
                      <p className="text-[9px] font-semibold text-white uppercase tracking-widest">{group.label}</p>
                    </div>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center rounded-xl gap-3 px-3 py-2.5 text-sm transition-all border group/item ${
                              isActive
                                ? "bg-teal-800 text-white border-teal-800"
                                : "bg-slate-50 border border-slate-100 text-slate-700 hover:text-teal-800 hover:bg-teal-50 hover:border-teal-200"
                            }`}
                          >
                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                              <ItemIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-teal-800"}`} />
                            </div>
                            <span className="font-semibold leading-tight">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Locations Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block px-3 py-1 bg-teal-800 rounded-md">
                    <p className="text-[10px] text-white uppercase">Locations</p>
                  </div>
                  <Link href="/locations" onClick={() => setIsOpen(false)} className="text-[10px] font-bold text-teal-800 hover:underline flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                {locationGroups.map((group) => (
                  <div key={group.label} className="mb-4">
                    <div className="inline-block px-2.5 py-0.5 bg-teal-800 rounded mb-2">
                      <p className="text-[9px] text-white uppercase">{group.label}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                              isActive
                                ? "bg-teal-800 text-white border-teal-800"
                                : "bg-slate-50 border border-slate-200 text-slate-650 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-800"
                            }`}
                          >
                            <MapPin className={`w-3 h-3 shrink-0 ${isActive ? "text-white" : "text-teal-800"}`} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <a
                  href={CLINIC_CONFIG.contact.phoneUrl}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all"
                >
                  <Phone className="w-4 h-4 text-teal-800" />
                  <span>Call {CLINIC_CONFIG.contact.phone}</span>
                </a>
                <Link
                  href="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-800 text-white text-sm font-bold shadow-[0_6px_20px_rgba(20,184,166,0.35)] hover:from-teal-800 hover:to-teal-800 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
