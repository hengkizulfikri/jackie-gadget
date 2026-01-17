import { SITE } from "@/constants/site";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Jackie Gadget"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-3
        rounded-full bg-green-500
        px-4 py-2
        text-sm font-medium text-white
        shadow-lg
        transition
        hover:bg-green-600
        hover:scale-105
        active:scale-95
      "
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
