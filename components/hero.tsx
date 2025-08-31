"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative">
          {/* Minimalistik rasmlar — mobil uchun kichik va shaffof */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Qiz */}
            <div
              className={`absolute top-8 left-4 sm:top-12 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 transition-transform duration-500 ${
                isVisible ? "translate-y-0 opacity-60 sm:opacity-80" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qiz.png"
                alt="Qiz"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100 bg-white/50 sm:bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Qiz B */}
            <div
              className={`absolute top-20 right-6 sm:top-28 sm:right-12 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 transition-transform duration-500 delay-150 ${
                isVisible ? "translate-y-0 opacity-60 sm:opacity-80" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qizb.png"
                alt="Qiz B"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100 bg-white/50 sm:bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Bola */}
            <div
              className={`absolute bottom-16 left-12 sm:bottom-20 sm:left-20 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 transition-transform duration-500 delay-300 ${
                isVisible ? "translate-y-0 opacity-60 sm:opacity-80" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/bola.png"
                alt="Bola"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-100 bg-white/50 sm:bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Qizo.avif */}
            <div
              className={`absolute bottom-4 right-8 sm:bottom-2 sm:right-16 w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-transform duration-500 delay-450 ${
                isVisible ? "translate-y-0 opacity-60 sm:opacity-80" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qizo.avif"
                alt="Qizo"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100 bg-white/50 sm:bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>
          </div>

          {/* Matnlart */}
          <div
            className={`relative z-10 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="font-heading-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Ingliz va Koreys tillarini <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-heading-black">
                Professional
              </span>{" "}
              O'rganing
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Tajribali o'qituvchilar bilan birga zamonaviy metodlarda ingliz va koreys tillarini o'ganing.{" "}
              <span className="font-body-semibold text-gray-800">
                Bilimingizni kuchaytirib, karyerangizni yangi bosqichga olib chiqing.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link
                href="/courses"
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 rounded-full hover:from-gray-900 hover:to-black hover:shadow-xl hover:scale-105 transition-all duration-300 font-body-medium text-center"
              >
                Kurslarni ko'rish
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-body-medium text-center"
              >
                Biz bilan bog'laning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}