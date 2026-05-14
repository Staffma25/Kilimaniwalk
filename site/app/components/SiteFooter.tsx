import { Mail, MessageCircle } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#123A67] via-[#1A1A2E] to-[#1A1A2E] px-6 py-10 text-[#F5E6B3]">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-heading text-2xl text-white">Kilimani Walk</p>
        <p className="mt-3 text-sm text-slate-200">Shop, Dine, Work and Play.</p>

        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:mx-auto sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="https://wa.me/254724419991"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-[#B8960C]/50 hover:bg-white/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366] ring-1 ring-[#25D366]/30">
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                WhatsApp
              </span>
              <span className="text-sm font-semibold text-[#F5E6B3] group-hover:text-white">
                +254724419991
              </span>
            </span>
          </a>
          <a
            href="mailto:info@kilimaniwalk.com"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-[#B8960C]/50 hover:bg-white/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8960C]/20 text-[#F5E6B3] ring-1 ring-[#B8960C]/30">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Email
              </span>
              <span className="truncate text-sm font-semibold text-[#F5E6B3] group-hover:text-white">
                info@kilimaniwalk.com
              </span>
            </span>
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">Copyright © Huri Hills Company Limited</p>
      </div>
    </footer>
  );
}
