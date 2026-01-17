"use client";

import { useEffect, useRef, useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

type Chat = {
  role: "user" | "bot";
  message: string;
};

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* 🚀 Client-only mount (FIX HYDRATION) */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* 💾 Load history */
  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem("chatbot-history");
    if (saved) setChats(JSON.parse(saved));
  }, [mounted]);

  /* 💾 Save + auto scroll */
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("chatbot-history", JSON.stringify(chats));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, mounted]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setChats((prev) => [...prev, { role: "user", message: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setTimeout(() => {
        setChats((prev) => [...prev, { role: "bot", message: data.reply }]);
        setLoading(false);
      }, 600);
    } catch {
      setChats((prev) => [
        ...prev,
        { role: "bot", message: "Terjadi error, coba lagi ya 🙏" },
      ]);
      setLoading(false);
    }
  }

  /* ⛔ Hindari SSR render */
  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 left-5 z-50 rounded-full bg-amber-500 p-3 text-black shadow-lg hover:bg-amber-400"
      >
        <MessageCircle className="h-5 w-5" />
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-16 left-5 z-50 w-80 rounded-xl bg-neutral-900 border border-white/10 shadow-xl">
          <div className="px-4 py-3 font-semibold text-white border-b border-white/10">
            Jackie Gadget Assistant
          </div>

          <div className="h-72 overflow-y-auto px-4 py-3 space-y-3 text-sm">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 ${
                  c.role === "user"
                    ? "ml-auto bg-amber-500 text-black"
                    : "bg-neutral-800 text-white"
                }`}
              >
                {c.message}
              </div>
            ))}

            {loading && (
              <div className="text-neutral-400 text-xs">
                Mengetik…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 p-3 border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Tanya produk..."
              className="flex-1 rounded-lg bg-neutral-800 px-3 py-2 text-sm text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="rounded-lg bg-amber-500 px-3 text-black"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* 📊 WhatsApp Analytics */}
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            onClick={() => fetch("/api/analytics/wa", { method: "POST" })}
            className="block text-center text-xs text-amber-400 py-2 hover:underline"
          >
            Chat langsung via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
