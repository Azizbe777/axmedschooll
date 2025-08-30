"use client"

export default function SlidingPartners() {
  const partners = [
    { name: "Cambridge", logo: "/cambridge.avif" },
    { name: "IELTS", logo: "/ielts.png" },
    { name: "TOEFL", logo: "/ax.jpg" },
    { name: "British Council", logo: "/birt.jpeg" },
    { name: "TOPIK", logo: "/topic.webp" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-red-950 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Bizning{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Hamkorlarimiz
          </span>
        </h2>
        <p className="text-lg text-gray-400">Xalqaro imtihon va sertifikat markazlari</p>
      </div>

      {/* Sliding Logos */}
      <div className="relative">
        <div className="flex animate-slide space-x-20 hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[180px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-125 hover:-translate-y-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 18s linear infinite;
        }
      `}</style>
    </section>
  )
}
