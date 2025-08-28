"use client"

import { useEffect, useRef, useState } from "react"

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              <img
                src="/person-studying-online-with-laptop.png"
                alt="Online til o'rganish"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div
            className={`text-center transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-red-400 to-red-500 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Bizda 15+</h3>
              <p className="text-white/90">Professional O'qituvchi</p>
            </div>

            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-6">
              <blockquote className="text-white">
                <p className="mb-4 font-medium">
                  "O'zingizga ishoning, o'rganishda davom eting va muvaffaqiyat sizni kuzatib boradi."
                </p>
                <footer className="text-white/90">
                  <cite className="font-semibold">Aziz A.</cite>
                  <p className="text-sm">Til kursi o'quvchisi</p>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              <img
                src="/happy-student-with-books-and-laptop.png"
                alt="Baxtli talaba"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-gray-500 mb-8">Taniqli tashkilotlar tomonidan tavsiya etilgan</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Cambridge</div>
            <div className="text-2xl font-bold text-gray-400">IELTS</div>
            <div className="text-2xl font-bold text-gray-400">TOEFL</div>
            <div className="text-2xl font-bold text-gray-400">British Council</div>
            <div className="text-2xl font-bold text-gray-400">TOPIK</div>
          </div>
        </div>
      </div>
    </section>
  )
}
