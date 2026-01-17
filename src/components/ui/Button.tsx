import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-400";

  const variants = {
    primary: "bg-amber-500 text-black hover:bg-amber-400",
    outline: "border border-white/40 text-orange-400 hover:bg-white/30",
    whatsapp: "bg-green-700 text-white hover:bg-green-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
