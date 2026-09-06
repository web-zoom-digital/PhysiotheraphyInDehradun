import { NextRequest, NextResponse } from "next/server";
import { CLINIC_CONFIG } from "@/config/clinic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { urlList } = body;

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json({ error: "Missing or invalid urlList array" }, { status: 400 });
    }

    const host = new URL(CLINIC_CONFIG.domain).host;
    const key = CLINIC_CONFIG.analytics.indexNowKey;
    const keyLocation = `${CLINIC_CONFIG.domain}/${key}.txt`;

    const indexNowPayload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(indexNowPayload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedUrls: urlList.length,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to submit IndexNow request" }, { status: 500 });
  }
}
