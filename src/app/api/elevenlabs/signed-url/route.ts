/**
 * @name route.ts
 * @description Next.js Route Handler to generate an ElevenLabs signed WebSocket URL for private Conversational AI agents.
 */

import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY || "sk_1aca6f594f3e20703494b12b3ac843d43f8fa67e453649f8";
  const agentId = process.env.ELEVENLABS_AGENT_ID || "agent_6601m1x3dkx8ehp9940me1m98ptr";

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Missing ElevenLabs credentials" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
      {
        headers: {
          "xi-api-key": apiKey,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `ElevenLabs API error: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ signedUrl: data.signed_url });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch signed URL: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
