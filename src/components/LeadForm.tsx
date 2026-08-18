"use client";

import React, { useState } from "react";
import { CLINIC_CONFIG } from "@/config/clinic";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { Calendar, User, Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    condition: "",
    branch: "rajpur-road",
    date: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in Name, Phone, and Preferred Date.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

      const selectedService = SERVICES_DATA.find(s => s.slug === formData.service)?.title || "General Physiotherapy";
      const branchName = CLINIC_CONFIG.branches.find(b => b.id === formData.branch)?.name || "Home Visit";

      const whatsappMessage = `Hi ${CLINIC_CONFIG.name}, I would like to confirm my appointment booking request:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${selectedService}\n- Branch: ${branchName}\n- Date: ${formData.date}\n- Note: ${formData.message || "None"}`;

      const waUrl = `${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
      setTimeout(() => { window.open(waUrl, "_blank"); }, 2000);
    }, 1200);
  };

  // Shared input classes
  const inputCls = "w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200";
  const selectCls = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200 appearance-none";
  const labelCls = "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2";

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className="py-16 text-center space-y-4">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-teal-800" />
          </div>
          <h3 className="text-xl font-black text-slate-800">Booking Confirmed!</h3>
          <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
            Thank you, <strong className="text-slate-700">{formData.name}</strong>. Redirecting you to WhatsApp to confirm your slot.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
            <span>Opening WhatsApp...</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className={labelCls}>Full Name *</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label className={labelCls}>Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>
          </div>

          {/* Service & Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Service</label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="">General Assessment</option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={labelCls}>Condition</label>
              <div className="relative">
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="">Select condition</option>
                  {CONDITIONS_DATA.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.title}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Date & Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Preferred Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label className={labelCls}>Branch / Visit</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200 appearance-none"
                >
                  {CLINIC_CONFIG.branches.map((b) => (
                    <option key={b.id} value={b.id}>{b.name.split(" Branch")[0]}</option>
                  ))}
                  <option value="home-visit">Home Visit</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className={labelCls}>Notes / Symptoms</label>
            <textarea
              name="message"
              placeholder="Briefly describe your symptoms or any special requirements..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-teal-200 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Confirm Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-400">
            By submitting, you agree to be contacted via WhatsApp for appointment confirmation.
          </p>
        </form>
      )}
    </div>
  );
};
