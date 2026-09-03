import type { Metadata, Viewport } from "next";
import { CLINIC_CONFIG } from "@/config/clinic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ClinicSchema } from "@/components/ClinicSchema";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_CONFIG.name} | Best Physiotherapy Clinic in Dehradun`,
    template: `%s | ${CLINIC_CONFIG.name} Dehradun`
  },
  description: `${CLINIC_CONFIG.name} is Dehradun's top-rated physiotherapy clinic. Expert treatment for back pain, neck pain, knee pain, stroke rehab, and sports injuries. In-clinic at Rajpur Road & home visit across Dehradun.`,
  keywords: ["physiotherapy in dehradun", "best physiotherapist in dehradun", "physiotherapy clinic dehradun", "back pain treatment dehradun", "home visit physiotherapy dehradun", "neurological physiotherapy dehradun", "sports physiotherapy dehradun"],
  metadataBase: new URL(CLINIC_CONFIG.domain),
  alternates: {
    canonical: "./"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: CLINIC_CONFIG.domain,
    title: `${CLINIC_CONFIG.name} | Best Physiotherapy in Dehradun`,
    description: `Dehradun's most trusted physiotherapy clinic. Specialized orthopedic, neurological & sports rehab. Clinic at Rajpur Road + home visits across 15+ areas.`,
    siteName: CLINIC_CONFIG.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_CONFIG.name} | Physiotherapy in Dehradun`,
    description: `Expert physiotherapy for back pain, stroke rehab, sports injuries & more in Dehradun. Book now.`
  },
  verification: {
    google: CLINIC_CONFIG.analytics.googleSiteVerification,
  }
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CLINIC_CONFIG.analytics.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${CLINIC_CONFIG.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Tag Manager (GTM) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${CLINIC_CONFIG.analytics.googleTagManagerId}');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLINIC_CONFIG.analytics.microsoftClarityId}");
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* GTM Noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${CLINIC_CONFIG.analytics.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Global MedicalClinic Schema Injection */}
        <ClinicSchema type="clinic" />

        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
