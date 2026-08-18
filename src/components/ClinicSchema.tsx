import React from "react";
import { CLINIC_CONFIG } from "@/config/clinic";

interface SchemaProps {
  type: "clinic" | "doctor" | "service" | "condition" | "location" | "faq" | "breadcrumb" | "review" | "webpage";
  slug?: string;
  name?: string;
  description?: string;
  faqs?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; item: string }[];
  reviewCount?: number;
  ratingValue?: number;
}

export const ClinicSchema: React.FC<SchemaProps> = ({
  type,
  slug = "",
  name = "",
  description = "",
  faqs = [],
  breadcrumbs = [],
  reviewCount = 847,
  ratingValue = 4.9,
}) => {
  const urlBase = CLINIC_CONFIG.domain;

  let schemaObj: any = null;

  // 1. Organization & MedicalClinic Schemas (Combined for all branches)
  if (type === "clinic") {
    schemaObj = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${urlBase}/#organization`,
          "name": CLINIC_CONFIG.name,
          "url": urlBase,
          "logo": {
            "@type": "ImageObject",
            "url": `${urlBase}/logo.png`,
            "width": 200,
            "height": 60
          },
          "email": CLINIC_CONFIG.contact.email,
          "telephone": CLINIC_CONFIG.contact.phone,
          "foundingDate": "2018",
          "description": `${CLINIC_CONFIG.name} is Dehradun's leading physiotherapy clinic offering advanced orthopedic, neurological, sports, and pediatric rehabilitation services.`,
          "sameAs": [
            "https://www.facebook.com/people/RonEx-Physiotherapy-Rehabilitation-centre/61582957640581/",
            "https://www.instagram.com/ronex_physiotherapy/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CLINIC_CONFIG.contact.phone,
            "contactType": "customer service",
            "areaServed": "Dehradun, Uttarakhand",
            "availableLanguage": ["English", "Hindi"]
          }
        },
        {
          "@type": "Physician",
          "@id": `${urlBase}/doctor#physician`,
          "name": CLINIC_CONFIG.doctor.name,
          "jobTitle": CLINIC_CONFIG.doctor.title,
          "description": `${CLINIC_CONFIG.doctor.name} is a highly experienced physiotherapist in Dehradun with ${CLINIC_CONFIG.doctor.experience} of clinical practice. Specializes in neurological rehabilitation, orthopedic physiotherapy, and sports injury management.`,
          "hasCredential": CLINIC_CONFIG.doctor.certifications.map(cert => ({
            "@type": "EducationalOccupationalCredential",
            "name": cert
          })),
          "worksFor": {
            "@id": `${urlBase}/#organization`
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": CLINIC_CONFIG.branches[0].address,
            "addressLocality": "Dehradun",
            "addressRegion": "Uttarakhand",
            "postalCode": "248001",
            "addressCountry": "IN"
          }
        },
        ...CLINIC_CONFIG.branches.map((branch) => ({
          "@type": ["MedicalClinic", "LocalBusiness"],
          "@id": `${urlBase}/#localBusiness-${branch.id}`,
          "parentOrganization": { "@id": `${urlBase}/#organization` },
          "name": `${CLINIC_CONFIG.name} - ${branch.name}`,
          "description": `${CLINIC_CONFIG.tagline} at ${branch.name}, Dehradun. Specialized physical therapy, orthopedic, neurological and sports rehabilitation.`,
          "url": `${urlBase}/locations/${branch.id}`,
          "telephone": branch.phone,
          "email": CLINIC_CONFIG.contact.email,
          "priceRange": "₹₹",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Credit Card, UPI",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": branch.address.split(", Dehradun")[0],
            "addressLocality": branch.city,
            "addressRegion": branch.state,
            "postalCode": branch.postalCode,
            "addressCountry": branch.country
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": branch.geo.latitude,
            "longitude": branch.geo.longitude
          },
          "hasMap": `https://www.google.com/maps?q=${branch.geo.latitude},${branch.geo.longitude}`,
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday"],
              "opens": "10:00",
              "closes": "18:00"
            }
          ],
          "areaServed": [
            "Dehradun", branch.name, "Uttarakhand",
            "Rajpur Road", "GMS Road", "Patel Nagar", "Sahastradhara Road", "Vasant Vihar"
          ],
          "medicalSpecialty": [
            "Physiotherapy",
            "Orthopedic Rehabilitation",
            "Neurological Rehabilitation",
            "Sports Rehabilitation",
            "Pediatric Rehabilitation",
            "Women's Health Physiotherapy",
            "Home Visit Physiotherapy"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": String(ratingValue),
            "reviewCount": String(reviewCount),
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Priya Sharma" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Excellent physiotherapy care! My back pain of 3 years was resolved in just 8 sessions. Dr. Om Prakash is truly the best physiotherapist in Dehradun.",
              "datePublished": "2024-11-15"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Rajesh Kumar" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "My mother had a stroke and the home visit physiotherapy from RonEx has been life-changing. Professional, caring, and highly skilled team.",
              "datePublished": "2024-12-03"
            }
          ]
        }))
      ]
    };
  }

  // 2. Physician / Doctor Schema
  if (type === "doctor") {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${urlBase}/doctor#physician`,
      "name": CLINIC_CONFIG.doctor.name,
      "honorificSuffix": "PT",
      "jobTitle": CLINIC_CONFIG.doctor.title,
      "description": `${CLINIC_CONFIG.doctor.name} is one of Dehradun's most experienced physiotherapists with ${CLINIC_CONFIG.doctor.experience} of clinical expertise in neurological and orthopedic rehabilitation.`,
      "knowsAbout": [
        "Neurological Physiotherapy",
        "Stroke Rehabilitation",
        "Orthopedic Physiotherapy",
        "Sports Physiotherapy",
        "Manual Therapy",
        "Dry Needling",
        "Parkinson's Disease Rehabilitation",
        "Pediatric Physiotherapy"
      ],
      "telephone": CLINIC_CONFIG.contact.phone,
      "email": CLINIC_CONFIG.contact.email,
      "medicalSpecialty": ["NeurologicalRehabilitation", "Physiotherapy", "SportsMedicine"],
      "worksFor": {
        "@type": "MedicalClinic",
        "name": CLINIC_CONFIG.name,
        "url": urlBase
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC_CONFIG.branches[0].address,
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "postalCode": "248001",
        "addressCountry": "IN"
      },
      "hasCredential": CLINIC_CONFIG.doctor.certifications.map(cert => ({
        "@type": "EducationalOccupationalCredential",
        "name": cert
      }))
    };
  }

  // 3. Service (MedicalTherapy) Schema
  if (type === "service") {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "@id": `${urlBase}/services/${slug}#therapy`,
      "name": name,
      "description": description,
      "relevantSpecialty": "Physiotherapy",
      "recognizingAuthority": {
        "@type": "Organization",
        "name": "Indian Association of Physiotherapists"
      },
      "availableService": CLINIC_CONFIG.branches.map((b) => ({
        "@type": "MedicalClinic",
        "name": `${CLINIC_CONFIG.name} - ${b.name}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": b.address
        },
        "telephone": b.phone
      }))
    };
  }

  // 4. Condition (MedicalCondition) Schema
  if (type === "condition") {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": `${urlBase}/conditions/${slug}#condition`,
      "name": name,
      "description": description,
      "relevantSpecialty": "Physiotherapy",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Physiotherapy",
        "description": `Customized evidence-based physiotherapy treatment for ${name} at ${CLINIC_CONFIG.name}, Dehradun.`
      },
      "recognizingAuthority": {
        "@type": "Organization",
        "name": "Indian Association of Physiotherapists"
      }
    };
  }

  // 5. LocalBusiness location landing Schema
  if (type === "location") {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "MedicalClinic"],
      "@id": `${urlBase}/locations/${slug}#localBusiness`,
      "name": `${CLINIC_CONFIG.name} - Home Visit Physiotherapy in ${name}`,
      "description": description,
      "url": `${urlBase}/locations/${slug}`,
      "telephone": CLINIC_CONFIG.contact.phone,
      "email": CLINIC_CONFIG.contact.email,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": name,
        "addressRegion": "Dehradun, Uttarakhand",
        "addressCountry": "IN"
      },
      "areaServed": [name, "Dehradun", "Uttarakhand"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(ratingValue),
        "reviewCount": String(reviewCount),
        "bestRating": "5"
      }
    };
  }

  // 6. FAQ Page Schema
  if (type === "faq" && faqs.length > 0) {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // 7. Breadcrumb Schema
  if (type === "breadcrumb" && breadcrumbs.length > 0) {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.item.startsWith("http") ? b.item : `${urlBase}${b.item}`
      }))
    };
  }

  if (!schemaObj) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
};
