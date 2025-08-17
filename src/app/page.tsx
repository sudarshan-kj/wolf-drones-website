// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#training", label: "Training" },
];

export default function Home() {
  // simple fade-in on mount
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
      requestAnimationFrame(() => {
        el.classList.remove("opacity-0", "translate-y-3");
        el.classList.add("opacity-100", "translate-y-0");
      });
    });
  }, []);

  return (
    <div className="relative min-h-dvh">
      {/* Header: translucent glass */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-md ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              {/* Logo left */}
              <a href="#" className="inline-flex items-center gap-3">
                <Image
                  src="/wolf-logo.png"
                  alt="Wolf Drones Logo"
                  width={150}
                  height={150}
                  priority
                  className="h-auto w-[140px]"
                />
              </a>

              {/* Nav right */}
              <nav className="flex items-center gap-2 sm:gap-4">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1.5 text-sm font-sans text-neutral-200/90 transition hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="ml-2 rounded-full bg-[#9bb985] px-4 py-2 text-sm font-medium text-black transition hover:brightness-95 active:brightness-90"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent overlap */}
      <div className="h-28" aria-hidden />

      {/* ---- Spacer to prevent header overlapping content ---- */}
      <div className="h-24" aria-hidden />

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6">
        {/* Hero */}
        <section
          id="hero"
          className="grid items-center gap-10 md:grid-cols-2 scroll-mt-36"
          data-fade
        >
          <div className="space-y-6">
            <h1 className="text-balance font-horizon text-3xl tracking-tight text-white sm:text-4xl">
              FPV & Cinematic flights by{" "}
              <span className="text-[#9bb985]">Sudarshan K&nbsp;J</span>
            </h1>
            <p className="text-pretty font-sans text-base leading-relaxed text-neutral-300 sm:text-lg">
              We craft immersive aerial visuals with precision and restraint.
              Minimalist aesthetics, maximum impact—every frame designed to feel
              clean, intentional, and cinematic.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#gallery"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-100 transition hover:bg-white/10"
              >
                View Work
              </a>
              <a
                href="tel:+919686678568"
                className="rounded-full bg-[#9bb985] px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-95 active:brightness-90"
              >
                +91&nbsp;96866&nbsp;78&nbsp;568
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[#9bb985]/10 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <Image
                src="/images/sudarshan.jpg"
                alt="Aerial still"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-36 mt-24 space-y-4"
          data-ffade
          data-fade
        >
          <h2 className="font-horizon text-2xl text-white">About</h2>
          <p className="max-w-2xl text-pretty font-sans text-neutral-300">
            Wolf Drones specializes in high-performance FPV and elegant
            cinematic flights. All flights are piloted by{" "}
            <span className="text-[#9bb985]">Sudarshan K&nbsp;J</span>, who also
            conducts hands-on trainings—teaching you to build FPV drones and fly
            them with confidence.
          </p>
        </section>

        {/* Gallery */}
        <section
          id="gallery"
          className="scroll-mt-36 mt-24"
          aria-label="Gallery"
          data-fade
        >
          <h2 className="mb-6 font-horizon text-2xl text-white">Gallery</h2>

          {/* Subsection: Gear */}
          <div id="gear" className="mt-6">
            <h3 className="mb-4 font-horizon text-xl text-white">Gear</h3>
            <div className="grid grid-cols-2 gap-8   sm:grid-cols-2">
              {[
                { src: "/images/drone4-1.png", alt: "drone1" },
                { src: "/images/drone2-1.png", alt: "drone2" },
                { src: "/images/drone3.png", alt: "drone3" },
                { src: "/images/drone4.png", alt: "drone4" },
              ].map((img) => (
                <figure
                  key={img.alt}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          </div>

          {/* Subsection: Aerial Shots */}
          <div id="aerial-shots" className="mt-10">
            <h3 className="mb-4 font-horizon text-xl text-white">
              Aerial Shots
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { src: "/images/shot1.png", alt: "shot1" },
                { src: "/images/shot2.jpg", alt: "shot2" },
                { src: "/images/shot3.jpg", alt: "shot3" },
                { src: "/images/shot1.png", alt: "shot4" },
              ].map((img) => (
                <figure
                  key={img.alt}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    className="h-128 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Training */}
        <section
          id="training"
          className="scroll-mt-36 mt-24 space-y-4"
          data-fade
        >
          <h2 className="font-horizon text-2xl text-white">Training</h2>
          <p className="max-w-2xl text-pretty font-sans text-neutral-300">
            Learn by doing. Our workshops cover{" "}
            <span className="text-neutral-200">
              building custom FPV drones, tuning, safety
            </span>
            , and{" "}
            <span className="text-neutral-200">practical flight skills</span>.
            Led by Sudarshan—focused, clear, and beginner-friendly.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-36 mt-24"
          aria-label="Contact"
          data-fade
        >
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center">
            <h3 className="font-horizon text-xl text-white">Contact</h3>
            <p className="font-sans text-neutral-300">
              Bookings & enquiries—call or message.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919686678568"
                className="rounded-full bg-[#9bb985] px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-95 active:brightness-90"
              >
                +91&nbsp;96866&nbsp;78&nbsp;568
              </a>
              <a
                href="mailto:sudarshan@wolfdrones.in"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-100 transition hover:bg-white/10"
              >
                sudarshan@wolfdrones.in
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="font-mono text-xs text-neutral-400">
              © {new Date().getFullYear()} Wolf Drones. All rights reserved.
            </p>
            <p className="font-mono text-xs text-neutral-500">
              FPV • Cinematic • Training
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
