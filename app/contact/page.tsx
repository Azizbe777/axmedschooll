"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Manzil",
      details: "Jizzax shahar, Islom Karimov ko‘chasi Mo‘ljal Prospekt",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+998 70-108-47-47",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "axmedschool@gmail.com",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      details: "Dushanba - Shanba: 08:00 - 20:00\nYakshanba: 10:00 - 18:00",
      color: "bg-red-100 text-red-600"
    }
  ]

  

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/axmed_school/", label: "Instagram" },
  { icon: Send, href: "https://t.me/Axmed_school", label: "Telegram" },
]


  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Biz bilan bog'laning
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Savollaringiz bormi? Biz sizga yordam berishdan xursand bo'lamiz. 
              Quyidagi ma'lumotlar orqali biz bilan bog'laning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 group-hover:text-white transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.details}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Xabar yuboring
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Ismingiz *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
                  <select name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                    <option value="">Mavzuni tanlang</option>
                    <option value="general">Umumiy savol</option>
                    <option value="courses">Kurslar haqida</option>
                    <option value="registration">Ro'yxatdan o'tish</option>
                    <option value="pricing">Narxlar</option>
                    <option value="schedule">Dars jadvali</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Xabaringizni yozing..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none" />
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Xabar yuborish</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/loc.jpg" alt="Xarita joylashuvi" className="w-full h-64 object-cover" />
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tezkor bog'lanish</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefon orqali</p>
                      <p className="text-gray-600">+998  70-108-47-47</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telegram</p>
                      <p className="text-gray-600">@axmed_school_admin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ijtimoiy tarmoqlar</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200">
                        <Icon className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
