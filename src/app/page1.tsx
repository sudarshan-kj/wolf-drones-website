import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-dvh bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-800 selection:text-white">
      {/* Subtle vignette + glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(120,120,120,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center px-6 sm:px-8">
        {/* Card */}
        <section className="w-full rounded-3xl border border-neutral-800/60 bg-neutral-900/40 p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src="/wolf-logo.png"
              alt="Wolf Drones Logo"
              width={180}
              height={38}
              priority
              className="mx-auto drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
            />

            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Wolf Drones specializes in FPV and cinematic flights, flown by
              lead pilot{" "}
              <span className="whitespace-nowrap">Sudarshan K&nbsp;J</span>.
            </h1>

            <p className="text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
              Every shot is crafted with precision and creativity. Sudarshan
              also leads our hands-on training programs—learn to build your own
              FPV drone and fly it with skill and confidence.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a
                href="tel:+919686678568"
                className="rounded-full border border-neutral-700 bg-neutral-800/60 px-5 py-2.5 text-sm font-medium text-neutral-100 shadow-sm transition hover:bg-neutral-700/70 hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300/30"
              >
                +91&nbsp;96866&nbsp;78&nbsp;568
              </a>
              <span className="text-xs text-neutral-400">
                Call for bookings & details
              </span>
            </div>
          </div>
        </section>

        <footer className="mt-10 w-full pb-8 text-center sm:mt-12">
          <div className="mx-auto h-px w-24 bg-neutral-800/80" />
          <div className="mt-6 space-y-1.5">
            <p className="text-sm font-medium tracking-wide text-neutral-300">
              Wolf Drones
            </p>
            <p className="text-xs text-neutral-400">
              FPV&nbsp;•&nbsp;Cinematic
            </p>
            <p className="text-[11px] text-neutral-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
