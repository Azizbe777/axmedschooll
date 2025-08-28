"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Clock, Users } from "lucide-react"

const courses = [
  {
    title: "Ingliz tili - Boshlang'ich daraja",
    instructor: "Malika Karimova",
    rating: 4.9,
    students: 2500,
    duration: "60 soat",
    price: "500,000 so'm",
    image: "/web-development-coding-screen.png",
    category: "Ingliz tili",
  },
  {
    title: "Business English - Biznes uchun",
    instructor: "Jasur Rahimov",
    rating: 4.8,
    students: 1800,
    duration: "45 soat",
    price: "750,000 so'm",
    image: "/ui-ux-design-mockups.png",
    category: "Ingliz tili",
  },
  {
    title: "Koreys tili - Boshlang'ich (TOPIK 1)",
    instructor: "Park Min-jung",
    rating: 4.7,
    students: 1200,
    duration: "80 soat",
    price: "800,000 so'm",
    image: "/digital-marketing-analytics.png",
    category: "Koreys tili",
  },
  {
    title: "IELTS tayyorgarlik kursi",
    instructor: "Dilnoza Abdullayeva",
    rating: 4.9,
    students: 3200,
    duration: "50 soat",
    price: "900,000 so'm",
    image: "/photography-camera-equipment.png",
    category: "IELTS",
  },
]

export default function PopularCourses() {
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
        <div
          className={`flex flex-col sm:flex-row justify-between items-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Eng Mashhur{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Kurslar</span>
          </h2>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            Barcha kurslarni ko'rish
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">O'qituvchi: {course.instructor}</p>

                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">{course.price}</span>
                  <button className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 px-4 py-2 rounded-lg transition-all duration-300">
                    Ro'yxatdan o'tish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
