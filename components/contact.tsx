"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending message
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({ name: "", phone: "", telegram: "", message: "" })

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Bog'lanish</h2>
          <p className="text-lg text-gray-600">Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bog'lanish ma'lumotlari</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:scale-110 transition">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-gray-600">+998 70-108-47-47</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:scale-110 transition">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">axmedschool@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:scale-110 transition">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Manzil</p>
                    <p className="text-gray-600">
                      Jizzax shahar, Islom.Karimov ko'chasi  <br />
                      Mo'ljal: Prospekt yoshlar markaziga yetmasdan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Xabar yuborish</h3>
              <p className="text-gray-600 mb-6">Bizga xabar yuboring va biz tez orada siz bilan bog'lanamiz</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "phone", "telegram"].map((field, idx) => (
                  <div key={idx}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                    >
                      {field === "name"
                        ? "Ism *"
                        : field === "phone"
                        ? "Telefon raqami *"
                        : "Telegram username"}
                    </label>
                    <input
                      type={field === "phone" ? "tel" : "text"}
                      id={field}
                      name={field}
                      required={field !== "telegram"}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                        focus:ring-2 focus:ring-red-500 focus:border-transparent 
                        transition-all duration-200 hover:shadow-md"
                      placeholder={
                        field === "name"
                          ? "Ismingizni kiriting"
                          : field === "phone"
                          ? "+998 70-108-47-47"
                          : "@username"
                      }
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                      focus:ring-2 focus:ring-red-500 focus:border-transparent 
                      transition-all duration-200 resize-none hover:shadow-md"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg 
                    hover:from-gray-900 hover:to-black transition-all duration-200 flex items-center justify-center 
                    space-x-2 font-medium shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Yuborish</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-2xl"
                  >
                    <div className="text-center">
                      <CheckCircle className="mx-auto text-green-500 mb-3" size={40} />
                      <p className="text-lg font-semibold text-gray-800">Xabar yuborildi!</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
