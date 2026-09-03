import { NextResponse } from "next/server";
import { CLINIC_CONFIG } from "@/config/clinic";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { LOCATIONS_DATA } from "@/config/locations";

export async function GET() {
  const publicData = {
    clinic: {
      name: CLINIC_CONFIG.name,
      tagline: CLINIC_CONFIG.tagline,
      domain: CLINIC_CONFIG.domain,
      contact: {
        phone: CLINIC_CONFIG.contact.phone,
        email: CLINIC_CONFIG.contact.email,
        whatsapp: CLINIC_CONFIG.contact.whatsapp,
      },
      doctor: {
        name: CLINIC_CONFIG.doctor.name,
        title: CLINIC_CONFIG.doctor.title,
        credentials: CLINIC_CONFIG.doctor.credentials,
        experience: CLINIC_CONFIG.doctor.experience,
        certifications: CLINIC_CONFIG.doctor.certifications,
      },
      branches: CLINIC_CONFIG.branches.map((b) => ({
        id: b.id,
        name: b.name,
        address: b.address,
        city: b.city,
        openingHours: b.openingHours,
        geo: b.geo,
      })),
    },
    services: SERVICES_DATA.map((s) => ({
      name: s.title,
      slug: s.slug,
      url: `${CLINIC_CONFIG.domain}/services/${s.slug}`,
      shortDescription: s.shortDesc || s.metaDesc,
    })),
    conditionsTreated: CONDITIONS_DATA.map((c) => ({
      name: c.title,
      slug: c.slug,
      url: `${CLINIC_CONFIG.domain}/conditions/${c.slug}`,
      overview: c.description || c.metaDescription,
    })),
    locationsServed: LOCATIONS_DATA.map((l) => ({
      areaName: l.name,
      slug: l.slug,
      url: `${CLINIC_CONFIG.domain}/locations/${l.slug}`,
    })),
    appointment: {
      bookingUrl: `${CLINIC_CONFIG.domain}/book-appointment`,
      phone: CLINIC_CONFIG.contact.phone,
      whatsapp: CLINIC_CONFIG.contact.whatsapp,
    },
  };

  return NextResponse.json(publicData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
