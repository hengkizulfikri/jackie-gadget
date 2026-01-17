import { NextResponse } from "next/server";

export async function POST() {
  console.log("WhatsApp clicked:", new Date().toISOString());
  return NextResponse.json({ ok: true });
}
