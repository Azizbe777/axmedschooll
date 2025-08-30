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
          {/* Minimalistik rasmlar — shakllarsiz, faqat tasvirlar */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Qiz */}
            <div
              className={`absolute top-12 left-10 w-28 h-28 transition-transform duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qiz.png"
                alt="Qiz"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-xl shadow-md border border-gray-100 bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Qiz B */}
            <div
              className={`absolute top-28 right-12 w-24 h-24 transition-transform duration-500 delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qizb.png"
                alt="Qiz B"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-xl shadow-md border border-gray-100 bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Bola */}
            <div
              className={`absolute bottom-20 left-20 w-24 h-24 transition-transform duration-500 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/bola.png"
                alt="Bola"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-100 bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            {/* Qizo.avif */}
            <div
              className={`absolute bottom-2 right-16 w-32 h-32 transition-transform duration-500 delay-450 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/qizo.avif"
                alt="Qizo"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-xl shadow-md border border-gray-100 bg-white/70 hover:scale-105 transform transition-transform duration-300"
              />
            </div>
          </div>

          {/* Matnlar */}
          <div
            className={`relative z-10 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight font-satoshi">
              Ingliz va Koreys tillarini <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-extrabold">
                Professional
              </span>{" "}
              O‘rganing
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-bold font-satoshi">
              Tajribali o‘qituvchilar bilan birga zamonaviy metodlarda ingliz va koreys tillarini o‘rganing.
              Bilimingizni kuchaytirib, karyerangizni yangi bosqichga olib chiqing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/courses"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full hover:from-gray-900 hover:to-black hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium font-satoshi"
              >
                Kurslarni ko‘rish
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-medium font-satoshi"
              >
                Biz bilan bog‘laning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}