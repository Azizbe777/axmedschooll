"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const englishCourses = [
    {
      id: "ielts",
      title: "IELTS Tayyorgarlik",
      level: "B1-C2",
      duration: "3-6 oy",
      students: "8-12 kishi",
      price: "350 000 so'm",
      features: [
        "4 ta modul (Listening, Reading, Writing, Speaking)",
        "Real imtihon materiallari",
        "Individual maslahat",
        "Mock testlar",
        "Sertifikat"
      ],
      schedule: "Dushanba, Chorshanba, Juma (18:00-20:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    },
    {
      id: "toefl",
      title: "Cefr Tayyorgarlik",
      level: "B2-C2",
      duration: "3-4 oy",
      students: "6-10 kishi",
      price: "280 000 so'm",
      features: [
        "Internet asosida imtihon",
        "Akademik ingliz tili",
        "Test strategiyalari",
        "Vaqt boshqaruvi",
        "Sertifikat"
      ],
      schedule: "Seshanba, Payshanba, Shanba (19:00-21:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    },
    {
      id: "general",
      title: "Umumiy Ingliz Tili",
      level: "A1-C1",
      duration: "6-12 oy",
      students: "10-15 kishi",
      price: "300 000 so'm",
      features: [
        "Grammatika va leksika",
        "Nutq va tinglash",
        "Yozish va o'qish",
        "Konversatsiya darslari",
        "Progress sertifikati"
      ],
      schedule: "Har kuni (09:00-11:00, 14:00-16:00, 18:00-20:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    }
  ]

  const koreanCourses = [
    {
      id: "topik",
      title: "TOPIK Tayyorgarlik",
      level: "Topik 1-6",
      duration: "6-12 oy",
      students: "6-12 kishi",
      price: "350 000 so'm",
      features: [
        "TOPIK I va II darajalari",
        "Hangul va grammatika",
        "Koreys madaniyati",
        "Imtihon strategiyalari",
        "Xalqaro sertifikat"
      ],
      schedule: "Dushanba, Chorshanba, Juma (17:00-19:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    },
    {
      id: "business",
      title: "Individual",
      level: "Topic 1-4",
      duration: "3-5 oy",
      students: "1 kishi",
      price: "1 199 000so'm",
      features: [
        "Biznes terminologiya",
        "Rasmiy yozishmalar",
        "Mijozlar bilan muloqot",
        "Koreys biznes madaniyati",
        "Sertifikat"
      ],
      schedule: "Seshanba, Payshanba, Shanba (20:00-22:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    },
    {
      id: "conversation",
      title: "Koreys Tili Ishchiga",
      level: "Topic-1-6",
      duration: "3-6 oy",
      students: "10/15 kishi",
      price: "350 000 so'm",
      features: [
        "Kundalik muloqot",
        "Slang va iboralar",
        "Koreys seriallari orqali",
        "Madaniy kontekst",
        "Progress sertifikati"
      ],
      schedule: "Har kuni (16:00-18:00)",
      location: "Toshkent shahri, Chilonzor tumani"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="text-red-600">til kurslari</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ingliz va Koreys tillarini professional darajada o'rganing. Xalqaro sertifikatlar va yuqori natijalar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kurslarimiz
            </h2>
            <p className="text-gray-600">
              Har xil darajadagi o'quvchilar uchun maxsus tayyorlangan kurslar
            </p>
          </motion.div>

          {/* English Courses */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                🇺🇸
              </span>
              Ingliz Tili Kurslari
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {englishCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{course.title}</h4>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedCourse === course.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Daraja: {course.level}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Davomiyligi: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      O'quvchilar: {course.students}
                    </div>
                    <div className="text-lg font-bold text-red-600">
                      Narxi: {course.price}
                    </div>
                  </div>

                  {selectedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4"
                    >
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Kurs xususiyatlari:</h5>
                        <ul className="space-y-2">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Dars jadvali:</h5>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {course.schedule}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {course.location}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                        Kursga yozilish
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Korean Courses */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                🇰🇷
              </span>
              Koreys Tili Kurslari
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {koreanCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{course.title}</h4>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedCourse === course.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Daraja: {course.level}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Davomiyligi: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      O'quvchilar: {course.students}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      Narxi: {course.price}
                    </div>
                  </div>

                  {selectedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4"
                    >
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Kurs xususiyatlari:</h5>
                        <ul className="space-y-2">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Dars jadvali:</h5>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {course.schedule}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {course.location}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                        Kursga yozilish
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kursga yozilish uchun
            </h2>
            <p className="text-gray-600 mb-8">
              Quyidagi ma'lumotlarni to'ldiring va biz siz bilan bog'lanamiz
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Telefon raqamingizni kiriting"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qiziqish bildirgan kurs
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200">
                    <option>Kursni tanlang</option>
                    <option>IELTS Tayyorgarlik</option>
                    <option>TOEFL Tayyorgarlik</option>
                    <option>Umumiy Ingliz Tili</option>
                    <option>TOPIK Tayyorgarlik</option>
                    <option>Biznes Koreys Tili</option>
                    <option>Koreys Tili Konversatsiya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Darajangiz
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200">
                    <option>Darajani tanlang</option>
                    <option>Boshlang'ich (A1)</option>
                    <option>Elementar (A2)</option>
                    <option>O'rta (B1)</option>
                    <option>O'rta yuqori (B2)</option>
                    <option>Yuqori (C1)</option>
                    <option>Juda yuqori (C2)</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qo'shimcha ma'lumot
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Qo'shimcha ma'lumotlaringizni yozing..."
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-lg hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium mt-6">
                Arizani yuborish
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
