import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#123A67] via-[#1A1A2E] to-[#1A1A2E] px-6 py-10 text-[#F5E6B3]">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="font-heading text-2xl text-white">Kilimani Walk</p>
          <p className="mt-3 text-sm text-slate-200">
            A premium mixed-use destination for shopping, dining, business, and lifestyle on Ring
            Road Kilimani.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F5E6B3]">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-200">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <a href="/about" className="transition hover:text-white">
              About & Floor Plans
            </a>
            <a href="/gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="/enquiry" className="transition hover:text-white">
              Enquiry
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F5E6B3]">
            Contact
          </p>
          <div className="mt-3 flex flex-col gap-3 text-sm text-slate-200">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[#F5E6B3]" />
              <span>Ring Road Kilimani, Nairobi, Kenya</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-[#F5E6B3]" />
              <span>+254724419991</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-[#F5E6B3]" />
              <span>info@kilimaniwalk.com</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 text-[#F5E6B3]" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F5E6B3]">
            Enquiries
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Looking for available retail, office, or conference space?
          </p>
          <a
            href="/enquiry"
            className="mt-4 inline-block rounded-lg border border-[#B8960C]/50 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F5E6B3] transition hover:bg-white/10 hover:text-white"
          >
            Start Enquiry
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5">
        <p className="text-center text-xs text-slate-400">
          Copyright © Huri Hills Company Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
