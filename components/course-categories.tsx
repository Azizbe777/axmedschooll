"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, BookOpen, Users, Briefcase, Globe, Award } from "lucide-react"

const categories = [
  {
    icon: MessageCircle,
    title: "Ingliz tili - Gaplashish",
    description: "Ingliz tilida erkin gaplashishni o'rganing",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Ingliz tili - Grammatika",
    description: "Ingliz tili grammatikasini chuqur o'rganing",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Koreys tili - Boshlang'ich",
    description: "Koreys tilini noldan o'rganishni boshlang",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Briefcase,
    title: "Business English",
    description: "Biznes uchun ingliz tilini o'rganing",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "IELTS/TOEFL tayyorgarlik",
    description: "Xalqaro imtihonlarga tayyorgarlik ko'ring",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Award,
    title: "Konsalting xizmatlari",
    description: "Chet elda ta'lim olish bo'yicha maslahat",
    color: "from-teal-500 to-teal-600",
  },
]

export default function CourseCategories() {
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
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bizning{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Kurslarimiz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
