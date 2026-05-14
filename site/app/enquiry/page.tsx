import Image from "next/image";
import { Download, Mail, MessageCircle } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function EnquiryPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#FFFDF5] to-white text-[#1A1A2E]">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="font-heading text-4xl text-[#123A67] md:text-5xl">Enquiry</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-700 md:text-base">
          Download the Kilimani Walk enquiry form, fill in your details, then send it to us
          directly via WhatsApp or email.
        </p>

        <div className="relative mt-8 h-44 overflow-hidden rounded-xl border border-[#B8960C]/35 shadow-sm md:h-52">
          <Image
            src="/kilimani-walk-enquiry-banner.png"
            alt="Kilimani Walk — modern mixed-use building at sunset"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/40 via-transparent to-[#B8960C]/15" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-[#B8960C]/40 bg-gradient-to-br from-white to-[#FFF8E1]/50 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8960C]/15 text-[#B8960C]">
                <Download className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-heading text-lg text-[#123A67] md:text-xl">Download form</h2>
                <p className="mt-1 text-xs text-slate-600 md:text-sm">
                  Get the PDF, fill it in, then return it via WhatsApp or email.
                </p>
                <a
                  href="/Kilimani-Walk-Enquiry-Form.pdf"
                  download="Kilimani-Walk-Enquiry-Form.pdf"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#B8960C] px-4 py-2 text-sm font-semibold text-[#1A1A2E] transition hover:bg-[#F5E6B3]"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[#B8960C]/40 bg-gradient-to-br from-white to-[#FFF8E1]/50 p-4 shadow-sm">
            <h2 className="font-heading text-lg text-[#123A67] md:text-xl">Contact us</h2>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              Send your completed form using either channel below.
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/254724419991"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200/80 bg-white p-3 transition hover:border-[#25D366]/40 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/12 text-[#128C7E]">
                    <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#B8960C]">
                      +254724419991
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kilimaniwalk.com"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200/80 bg-white p-3 transition hover:border-[#B8960C]/50 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8960C]/12 text-[#B8960C]">
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </span>
                    <span className="truncate text-sm font-semibold text-[#1A1A2E] group-hover:text-[#B8960C]">
                      info@kilimaniwalk.com
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
