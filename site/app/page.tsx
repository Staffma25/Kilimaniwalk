import Image from "next/image";
import {
  Building2,
  Car,
  Clapperboard,
  Coffee,
  Landmark,
  Store,
} from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";

const offers = [
  { icon: Store, title: "Retail", text: "Prime customer-facing units for high-impact brands." },
  { icon: Coffee, title: "Dining", text: "Terrace-ready concepts for modern food experiences." },
  { icon: Clapperboard, title: "Entertainment", text: "Destination spaces for social and family leisure." },
  { icon: Building2, title: "Offices", text: "Professional suites designed for ambitious businesses." },
  { icon: Landmark, title: "Conference", text: "Flexible halls and meeting rooms for events." },
  {
    icon: Car,
    title: "Visitor Parking",
    text: "Convenient on-site visitor parking supports easy access for customers and guests.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-[#FFFDF5] to-white text-[#1A1A2E]">
      <SiteNav />
      <main>
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
          <Image
            src="/hero-kilimani-walk.png"
            alt="Kilimani Walk mixed-use development exterior"
            fill
            className="scale-105 object-cover hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#123A67]/70 via-[#1A1A2E]/65 to-[#B8960C]/45" />
          <div className="relative z-10 px-6 text-center text-white animate-fade-up">
            <h1 className="font-heading text-6xl md:text-8xl">Kilimani Walk</h1>
            <p className="mt-4 text-lg tracking-[0.25em] text-[#F5E6B3] md:text-xl">
              Shop, Dine, Work and Play.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-100 md:text-base">
              A premium mixed-use destination on Ring Road Kilimani, Nairobi,
              blending business, lifestyle, and modern urban convenience in one
              iconic address.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/enquiry"
                className="rounded bg-[#B8960C] px-7 py-3 font-semibold text-[#1A1A2E] transition duration-300 hover:bg-[#F5E6B3]"
              >
                Enquire Now
              </a>
              <a
                href="/about"
                className="rounded border border-white px-7 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#1A1A2E]"
              >
                View Floor Plans
              </a>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F5E6B3]/30 to-[#FFFFFF] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-6 overflow-hidden rounded-2xl border border-[#B8960C]/45 bg-white p-6 shadow-md md:grid-cols-2 md:gap-8 md:p-8">
              <div className="relative mx-auto aspect-[5/3] w-full max-w-sm md:mx-0 md:max-w-none">
                <Image
                  src="/carefour.jpg"
                  alt="Carrefour — ground-floor supermarket anchor at Kilimani Walk"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-[#123A67] md:text-3xl">Ground floor</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A2E] md:text-base">
                  <span className="font-semibold text-[#123A67]">Carrefour</span> is allocated to the
                  ground-floor supermarket.{" "}
                  <span className="font-semibold text-[#123A67]">Restaurant</span> space on the same
                  level is allocated for complementary dining.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#B8960C]">
              Ring Road Kilimani
            </p>
            <h2 className="mt-2 text-center font-heading text-2xl text-[#123A67] md:text-3xl">
              A destination built for visibility and experience
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#B8960C]/45 bg-white shadow-md ring-1 ring-[#B8960C]/10 transition duration-300 hover:shadow-xl md:aspect-[5/4]">
                <Image
                  src={encodeURI("/WhatsApp Image 2026-02-17 at 14.44.41.jpeg")}
                  alt="Kilimani Walk street-level retail and arrival experience"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white drop-shadow md:text-base">
                  Street-level presence on Ring Road Kilimani
                </p>
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#B8960C]/45 bg-white shadow-md ring-1 ring-[#B8960C]/10 transition duration-300 hover:shadow-xl md:aspect-[5/4]">
                <Image
                  src={encodeURI("/WhatsApp Image 2026-02-17 at 14.44.43 (1).jpeg")}
                  alt="Kilimani Walk retail and lifestyle levels"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white drop-shadow md:text-base">
                  Premium offices &amp; conference spaces above
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        <section className="relative overflow-hidden px-6 py-20 text-white">
          <Image
            src="/hero-kilimani-walk.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#0E1D33]/76" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#123A67]/45 via-[#1A1A2E]/55 to-[#B8960C]/25" />
          <div className="relative mx-auto max-w-7xl">
            <h2 className="font-heading text-center text-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              What We Offer
            </h2>
            <div
              className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#B8960C]/35 via-[#F5E6B3]/85 to-[#B8960C]/35"
              aria-hidden
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {offers.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#F5E6B3]/45 bg-white/92 p-6 text-[#1A1A2E] shadow-xl backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-[#F5E6B3]/65 hover:bg-white"
                >
                  <item.icon className="h-9 w-9 text-[#123A67]" />
                  <h3 className="mt-4 text-2xl font-semibold text-[#123A67]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
