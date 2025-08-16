import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="font-mono text-sm flex flex-col gap-[32px] row-start-2 text-center">
        <Image
          src="/wolf-logo.png"
          alt="Wolf Drones Logo"
          width={180}
          height={38}
          priority
        />
        <h1>
          Wolf Drones specializes in FPV and Cinematic flights, personally flown
          by our lead pilot, Sudarshan K J.
        </h1>
        <p>
          Every shot is crafted with precision and creativity. Sudarshan also
          leads our training programs, where he teaches you how to build your
          own FPV drone and fly it with skill and confidence.
        </p>
        <p className="text-sm font-mono row-start-3">
          Contact +91 96866-78-568 for more details and bookings ✅
        </p>
      </main>
      <footer className="font-mono row-start-3 text-center">
        <p>Wolf Drones </p>
        <p>FPV | Cinematic</p>
      </footer>
    </div>
  );
}
