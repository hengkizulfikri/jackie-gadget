"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menus = [
  { label: "Home", href: "#hero" },
  { label: "Produk", href: "#products" },
  { label: "Kenapa Kami", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);


  /* Hide / Show Navbar */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (current / docHeight) * 100;
      setProgress(scrollPercent);

      // hide / show
      if (current > lastScroll && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      // transparent → solid
      setScrolled(current > 40);

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  /* Scroll Spy */
  useEffect(() => {
    const sections = menus.map((m) => document.querySelector(m.href));

    const onScroll = () => {
      sections.forEach((section) => {
        if (!section) return;

        const top = section.getBoundingClientRect().top;
        if (top <= 120 && top >= -200) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
            fixed top-0 left-0 w-full z-50
            transition-all duration-300 ease-in-out
            ${
              scrolled
                ? "bg-black/90 backdrop-blur shadow-lg"
                : "bg-transparent"
            }
            ${show ? "translate-y-0" : "-translate-y-full"}
          `}
    >
      <div className="absolute top-0 left-0 h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-white font-bold text-lg"
        >
          <Image
            src="/favicon.ico"
            alt="Jackie Gadget Logo"
            width={scrolled ? 32 : 36}
            height={scrolled ? 32 : 36}
            className="transition-all duration-300"
          />

          <span className="hidden sm:inline">
            Jackie <span className="text-primary">Gadget</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {menus.map((menu) => {
            const isActive = active === menu.href.replace("#", "");

            return (
              <li key={menu.href} className="relative group">
                <Link
                  href={menu.href}
                  className={`
                    relative
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-white group-hover:text-amber-500"
                    }
                    after:absolute after:left-1/2 after:-bottom-1
                    after:h-0.5
                    after:bg-amber-500 text-amber-500
                    after:transition-all after:duration-300
                    after:-translate-x-1/2
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 group-hover:after:w-full"
                    }
                  `}
                >
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-transparent-100 px-4 pb-4">
          <ul className="flex flex-col gap-4 text-white">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`
                  py-2 borde-b border-white/10 
                  hover:text-amber-500 transition
                `}
              >
                {menu.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
