"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"

const courses = [
  {
    title: "Beginner-Elementary daraja",
    instructor: "",
    rating: 4.9,
    students: 15,
    duration: "2 oy",
    price: "280,000 so'm",
    image: "/bg.jpg",
    category: "Ingliz tili",
  },
  {
    title: "Pre-intermediate-Intermediate",
    instructor: "",
    rating: 4.8,
    students: 18,
    duration: "2 oy",
    price: "300,000 so'm",
    image: "/pe.jpg",
    category: "Ingliz tili",
  },
  {
    title: "Pre-IELTS-IELTS Teacher 8.5",
    instructor: "",
    rating: 5,
    students: 12,
    duration: "2 oy",
    price: "400,000 so'm",
    image: "/pre.avif",
    category: "Ingiliz tili",
  },
  {
    title: "Topic",
    instructor: "",
    rating: 4.9,
    students: 25,
    duration: "2 oy",
    price: "350,000 so'm",
    image: "/ielt.jpg",
    category: "Koreys tili",
  },
]

export default function PopularCourses() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const router = useRouter()

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
            Top{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Kurslar</span>
          </h2>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-300">
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
                <p className="text-gray-600 text-sm mb-3"> {course.instructor}</p>

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
                  <button 
                    onClick={() => router.push('/contact#contact-form')}
                    className="bg-gray-100 hover:bg-black hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
                  >
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
