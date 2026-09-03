import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";

export interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Home", url: "/" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.url.startsWith("http") ? item.url : `${CLINIC_CONFIG.domain}${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 text-xs sm:text-sm text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <div key={item.url} className="flex items-center gap-1.5 sm:gap-2">
                {index > 0 && <span className="text-slate-400 select-none">/</span>}
                {isLast ? (
                  <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-[300px]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-teal-600 transition-colors font-medium hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
