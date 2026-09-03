import Link from "next/link";
import { CLINIC_CONFIG } from "@/config/clinic";

interface MedicalReviewBadgeProps {
  reviewerName?: string;
  reviewerTitle?: string;
  lastReviewedDate?: string;
}

export function MedicalReviewBadge({
  reviewerName = CLINIC_CONFIG.doctor.name,
  reviewerTitle = CLINIC_CONFIG.doctor.title,
  lastReviewedDate = "September 2026",
}: MedicalReviewBadgeProps) {
  return (
    <div className="my-4 p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 text-xs shadow-sm">
          ✓
        </div>
        <div>
          <span className="font-semibold text-emerald-900 block sm:inline">
            Medically Reviewed by{" "}
            <Link href="/doctor" className="underline hover:text-emerald-700 font-bold">
              {reviewerName}
            </Link>
          </span>
          <span className="text-emerald-700 text-xs block sm:inline sm:ml-1">
            ({reviewerTitle})
          </span>
        </div>
      </div>
      <div className="text-xs text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md shrink-0 font-medium">
        Verified: {lastReviewedDate}
      </div>
    </div>
  );
}
