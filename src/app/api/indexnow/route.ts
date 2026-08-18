import { NextRequest } from "next/server";
import { CLINIC_CONFIG } from "@/config/clinic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { urlList } = body;

    if (!urlList || !Array.isArray(urlList)) {
      return new Response(JSON.stringify({ error: "Invalid URL list parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const host = CLINIC_CONFIG.domain.replace("https://", "").replace("http://", "");

    const payload = {
      host: host,
      key: "indexnowkey1234567890abcdef",
      keyLocation: `${CLINIC_CONFIG.domain}/indexnow-key.txt`,
      urlList: urlList
    };

    // IndexNow API accepts POST requests to notify indexing engines
    const response = await fetch("https://api.indexnow.org", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    return new Response(
      JSON.stringify({
        success: response.ok,
        status: response.status,
        message: response.ok ? "IndexNow notifications sent" : "Failed to notify IndexNow api"
      }),
      {
        status: response.ok ? 200 : 502,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
