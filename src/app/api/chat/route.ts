import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Intent sederhana
    const text = message.toLowerCase();

    if (text.includes("harga")) {
      return NextResponse.json({
        reply:
          "Harga tergantung produk 😊 Sebutkan tipe iPhone, laptop, atau PC.",
      });
    }

    if (text.includes("garansi")) {
      return NextResponse.json({
        reply: "Semua produk bergaransi resmi 1 tahun 🙌",
      });
    }

    // 🔐 PAKAI OPENAI UNTUK GENERAL
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        reply:
          "Untuk pertanyaan detail, silakan hubungi admin via WhatsApp ya 🙏",
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Kamu adalah customer service toko gadget. Jawab singkat, ramah, dan jelas.",
        },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);
    return NextResponse.json(
      { reply: "Terjadi kesalahan, coba lagi ya 🙏" },
      { status: 500 }
    );
  }
}
