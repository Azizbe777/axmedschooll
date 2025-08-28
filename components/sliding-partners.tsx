"use client"

export default function SlidingPartners() {
  const partners = [
    { name: "Cambridge", logo: "CAMBRIDGE" },
    { name: "IELTS", logo: "IELTS" },
    { name: "TOEFL", logo: "TOEFL" },
    { name: "British Council", logo: "BRITISH COUNCIL" },
    { name: "TOPIK", logo: "TOPIK" },
  ]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizning hamkorlarimiz</h2>
          <p className="text-lg text-gray-600">Xalqaro tan olingan sertifikatlar va imtihonlar</p>
        </div>
      </div>

      {/* Sliding Animation */}
      <div className="relative">
        <div className="flex animate-slide space-x-16">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 px-8 py-6 min-w-[200px] flex items-center justify-center"
            >
              <span className="text-xl font-bold text-gray-800 tracking-wide">{partner.logo}</span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 px-8 py-6 min-w-[200px] flex items-center justify-center"
            >
              <span className="text-xl font-bold text-gray-800 tracking-wide">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>

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
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
