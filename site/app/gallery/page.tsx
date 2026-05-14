import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const images = [
  "WhatsApp Image 2026-02-17 at 14.44.41.jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.42 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.42 (2).jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.43 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.43 (2).jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.44.jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.44 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.45.jpeg",
  "WhatsApp Image 2026-02-17 at 14.44.45 (2).jpeg",
];

export default function GalleryPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#FFF8E1] to-white text-[#1A1A2E]">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="font-heading text-5xl text-[#123A67]">Gallery</h1>
        <p className="mt-3 text-slate-700">Architectural and lifestyle renders of Kilimani Walk.</p>

        <div className="mt-10 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {images.map((img) => (
            <div key={img} className="group relative overflow-hidden rounded-xl border border-[#B8960C]/40 bg-white p-1 shadow-sm">
              <Image
                src={encodeURI(`/${img}`)}
                alt={img}
                width={900}
                height={700}
                className="w-full rounded-xl transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="gold-divider mt-16" />

        <section className="bg-gradient-to-b from-[#FFF8E1] to-white pb-4 pt-2">
          <div className="rounded-3xl border border-[#B8960C]/60 bg-gradient-to-r from-white via-[#F5E6B3]/40 to-white p-8 text-center text-[#1A1A2E] md:p-12">
            <h2 className="font-heading text-3xl text-[#123A67] md:text-4xl">
              Secure Your Space at Kilimani Walk
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-700">
              Limited premium units are available across key categories.
              Connect with our leasing team for availability, pricing, and floor
              plan options.
            </p>
            <a
              href="/enquiry"
              className="mt-8 inline-block rounded bg-[#B8960C] px-8 py-3 font-semibold text-[#1A1A2E] transition duration-300 hover:bg-[#F5E6B3]"
            >
              Start Enquiry
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
