"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, Globe, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Barchasi", icon: BookOpen },
    { id: "english", name: "Ingliz tili", icon: Globe },
    { id: "korean", name: "Koreys tili", icon: GraduationCap },
    { id: "tips", name: "Maslahatlar", icon: BookOpen },
    { id: "culture", name: "Madaniyat", icon: Globe }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "IELTS imtihonida muvaffaqiyatli bo'lishning 10 ta siri",
      excerpt: "IELTS imtihonida yuqori ball olish uchun professional maslahatlar va amaliy ko'rsatmalar...",
      category: "english",
      author: "Aziza Karimova",
      date: "2024-01-15",
      readTime: "5 daqiqa",
      image: "/web-development-coding-screen.png",
      tags: ["IELTS", "Ingliz tili", "Imtihon"]
    },
    {
      id: 2,
      title: "Koreys tilini o'rganishda eng keng tarqalgan xatolar",
      excerpt: "Koreys tilini o'rganayotgan o'quvchilar qiladigan asosiy xatolar va ularni tuzatish yo'llari...",
      category: "korean",
      author: "Kim Min-ji",
      date: "2024-01-12",
      readTime: "7 daqiqa",
      image: "/ui-ux-design-mockups.png",
      tags: ["Koreys tili", "Xatolar", "O'rganish"]
    },
    {
      id: 3,
      title: "Til o'rganishda motivatsiyani saqlash usullari",
      excerpt: "Uzoq vaqt davomida til o'rganishda motivatsiyani saqlash va natijalarga erishish...",
      category: "tips",
      author: "Dilfuza Rahimova",
      date: "2024-01-10",
      readTime: "6 daqiqa",
      image: "/person-studying-online-with-laptop.png",
      tags: ["Motivatsiya", "O'rganish", "Maslahatlar"]
    },
    {
      id: 4,
      title: "Koreys madaniyati va til o'rganish",
      excerpt: "Koreys madaniyatini tushunish orqali tilni yaxshiroq o'rganish va tushunish...",
      category: "culture",
      author: "Park Ji-sung",
      date: "2024-01-08",
      readTime: "8 daqiqa",
      image: "/photography-camera-equipment.png",
      tags: ["Koreys madaniyati", "Madaniyat", "Til"]
    },
    {
      id: 5,
      title: "TOEFL vs IELTS: Qaysi imtihon sizga mos?",
      excerpt: "TOEFL va IELTS imtihonlari o'rtasidagi farqlar va qaysi birini tanlash kerakligi...",
      category: "english",
      author: "John Smith",
      date: "2024-01-05",
      readTime: "9 daqiqa",
      image: "/digital-marketing-analytics.png",
      tags: ["TOEFL", "IELTS", "Taqqoslash"]
    },
    {
      id: 6,
      title: "Online til o'rganish platformalari",
      excerpt: "Eng yaxshi online platformalar orqali til o'rganish va ularning afzalliklari...",
      category: "tips",
      author: "Marina Ivanova",
      date: "2024-01-03",
      readTime: "4 daqiqa",
      image: "/happy-student-with-books-and-laptop.png",
      tags: ["Online", "Platformalar", "Texnologiya"]
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

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
              Til o'rganish <span className="text-red-600">blogi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Til o'rganish bo'yicha foydali maqolalar, maslahatlar va yangiliklar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Maqolalarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-red-500 hover:text-red-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Maqolalar topilmadi
              </h3>
              <p className="text-gray-500">
                Qidiruv so'zingizga mos maqolalar yo'q. Boshqa kalit so'zlar bilan urinib ko'ring.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        post.category === "english" ? "bg-red-500" :
                        post.category === "korean" ? "bg-blue-500" :
                        post.category === "tips" ? "bg-green-500" :
                        "bg-purple-500"
                      }`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('uz-UZ')}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      
                      <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 hover-dark transition-colors duration-200">
                        <span className="text-sm font-medium">O'qish</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Yangi maqolalardan xabardor bo'ling
            </h2>
            <p className="text-gray-600 mb-8">
              Email orqali yangi maqolalar va maslahatlarni oling
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingizni kiriting"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                Obuna bo'lish
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
