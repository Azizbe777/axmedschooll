"use client"

import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ completion: 0, students: 0 })
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const completionTarget = 95
      const studentsTarget = 500

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounts({
          completion: Math.round(completionTarget * easeOut),
          students: Math.round(studentsTarget * easeOut),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-red-900 text-white"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
            🔥 Biz bilim bilan muvaffaqiyat ulashamiz!  
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Akxmed School
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ingliz va koreys tillarini zamonaviy uslublarda, energiyaga to‘la darslar bilan o‘rganing.  
            <br /> “Kelajaging – bugungi tanlovingdan boshlanadi.”
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Completion */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="backdrop-blur-lg bg-white/5 border border-red-600 rounded-3xl p-10 shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300">
              <h3 className="text-gray-300 font-medium mb-3">O‘rtacha kursni tugatish darajasi</h3>
              <div className="text-6xl font-extrabold text-red-500 mb-3">{counts.completion}%</div>
              <p className="text-gray-400 text-sm">
                Talabalarimizning 95% kurslarni muvaffaqiyatli tugatmoqda
              </p>
            </div>
          </div>

          {/* Students */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="backdrop-blur-lg bg-white/5 border border-red-600 rounded-3xl p-10 shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300">
              <h3 className="text-gray-300 font-medium mb-3">Ro‘yxatdan o‘tgan talabalar</h3>
              <div className="text-6xl font-extrabold text-red-500 mb-3">
                {counts.students.toLocaleString()}+
              </div>
              <p className="text-gray-400 text-sm">500+ talaba biz bilan ingliz va koreys tillarini o‘rganmoqda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
