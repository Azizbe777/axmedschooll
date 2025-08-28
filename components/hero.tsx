"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className={`absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="text-white text-2xl">🇺🇸</span>
            </div>
            <div
              className={`absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-red-500 rounded-full flex items-center justify-center transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="text-white text-2xl">🇰🇷</span>
            </div>
            <div
              className={`absolute bottom-10 left-20 w-12 h-12 bg-gradient-to-br from-green-400 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="text-white text-lg">📚</span>
            </div>
            <div
              className={`absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="text-white text-xl">🎓</span>
            </div>
          </div>

          <div
            className={`relative z-10 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ingliz va Koreys tillarini <br />
              Professional{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">O'rganing</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ingliz va Koreys tillarini professional darajada o'rganing. Tajribali o'qituvchilar bilan birga til
              ko'nikmalaringizni rivojlantiring va karyerangizni yangi bosqichga olib chiqing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
                Kurslarni ko'rish
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-red-500 hover:text-red-600 transition-all duration-300 font-medium">
                Biz bilan bog'laning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
