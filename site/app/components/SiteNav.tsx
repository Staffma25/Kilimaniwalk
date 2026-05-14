"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/** Bust browser/CDN cache when replacing `public/kilimani-walk-logo.png`. */
const LOGO_SRC = "/kilimani-walk-logo.png?v=9";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/enquiry", label: "Enquiry" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#B8960C]/40 bg-gradient-to-r from-white via-[#FFF8E1] to-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Kilimani Walk home"
        >
          <Image
            src={LOGO_SRC}
            alt="Kilimani Walk"
            width={1024}
            height={1024}
            className="h-14 w-auto object-contain object-center drop-shadow-[0_1px_5px_rgba(26,26,46,0.15)] sm:h-[3.75rem] md:h-[4.25rem] lg:h-[4.5rem]"
            priority
            unoptimized
          />
        </Link>

        <button
          className="shrink-0 rounded-lg p-1.5 text-[#123A67] hover:bg-[#F5E6B3]/80 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} strokeWidth={2.25} /> : <Menu size={26} strokeWidth={2.25} />}
        </button>

        <nav className="hidden items-center gap-2 text-sm text-[#123A67] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                pathname === link.href
                  ? "bg-[#B8960C] text-[#1A1A2E]"
                  : "hover:bg-[#F5E6B3] hover:text-[#1A1A2E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-20 z-40 bg-[#1A1A2E]/20 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            className="absolute right-0 top-full z-50 w-[min(5.75rem,36vw)] rounded-bl-2xl border-b border-l border-[#B8960C]/35 bg-white px-2 py-2 shadow-[-8px_16px_36px_rgba(26,26,46,0.18)] md:hidden"
            aria-label="Main navigation"
          >
            <div className="flex w-full flex-col gap-1 text-[#123A67]">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-1.5 py-1.5 text-center text-xs leading-snug transition ${
                    pathname === link.href
                      ? "bg-[#B8960C] text-[#1A1A2E]"
                      : "hover:bg-[#F5E6B3] hover:text-[#1A1A2E]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
