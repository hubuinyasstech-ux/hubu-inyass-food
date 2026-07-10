import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="bg-orange-500 py-20 text-white">
      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="font-semibold uppercase tracking-wider">Mobile App</p>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Download the Hubu-Inyass Food App
          </h2>

          <p className="mt-6 text-lg text-orange-100">
            Order your favourite meals anywhere, anytime. Track deliveries,
            receive exclusive discounts, and enjoy a seamless experience on
            Android and iOS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-black px-6 py-3 font-semibold transition hover:scale-105">
              🍎 App Store
            </button>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-500 transition hover:scale-105">
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/images/mobile-app/mobile-app.avif"
            alt="Hubu-Inyass Food Mobile App"
            width={320}
            height={400}
            className="h-auto w-full max-w-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
