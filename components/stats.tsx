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
      const studentsTarget = 5000

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
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bilimni Ochish <br />
            Bizning{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Til Markazi</span>{" "}
            bilan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Til Markazi innovatsion o'qitish usullari va shaxsiy yondashuv bilan til o'rganish tajribasini taklif etadi.
            Professional o'qituvchilar bilan birga til ko'nikmalaringizni rivojlantiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-gray-600 font-medium mb-2">O'rtacha kurs yakunlash darajasi</h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                {counts.completion}%
              </div>
              <p className="text-gray-500 text-sm">
                Talabalar bizning samarali o'qitish usullarimiz bilan kurslarni muvaffaqiyatli yakunlaydi
              </p>
            </div>
          </div>

          <div
            className={`text-center transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-gray-600 font-medium mb-2">Ro'yxatdan o'tgan talabalar</h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                {counts.students.toLocaleString()}+
              </div>
              <p className="text-gray-500 text-sm">5000+ talaba bizning Til Markazi bilan til o'rganmoqda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
