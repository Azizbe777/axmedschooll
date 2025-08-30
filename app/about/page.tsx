"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, CheckCircle, Users, Award, BookOpen, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [success, setSuccess] = useState(false)

  const TELEGRAM_BOT_TOKEN = "8012308771:AAGaMvQuqylGZ-ETvRR5p9SbhxW9MUcCGgE"
  const CHAT_ID = "-4910162726"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const message = `📩 Yangi xabar:\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
      })
      const data = await res.json()
      if (data.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error("❌ Xabar yuborishda xatolik:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto text-center z-10"
        >
          <h1 className="font-heading-black text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            <span className="text-white">Axmed</span>{" "}
            <span className="text-red-500">School</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed">
            🇺🇿 O'zbekistondagi eng kuchli <span className="text-red-400 font-body-semibold">til ta'lim markazi</span>  
            – Sizning kelajagingiz uchun ishonchli qadam!
          </p>
          <div className="mt-10 w-28 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-black relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading-bold text-4xl font-bold mb-8">
              Biz <span className="text-red-600">kimmiz?</span>
            </h2>
            <p className="font-body text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-body-semibold">Axmed School</span> – xalqaro standartlarga mos keluvchi, 
              <span className="text-red-500 font-body-semibold"> IELTS, TOEFL, CEFR </span>
              kurslari orqali minglab talabalarni orzulariga yetkazgan markaz.
            </p>
            <p className="font-body text-lg text-gray-700 leading-relaxed">
              Bizning ustozlar – tajribali va natijador.  
              Sizning muvaffaqiyatingiz – bizning asosiy maqsadimiz.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-500/40 group">
              <Image
                src="/happy-student-with-books-and-laptop.png"
                alt="Happy student"
                width={600}
                height={400}
                className="rounded-3xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-red-500/20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading-bold text-4xl font-bold mb-10"
          >
            Bizning <span className="text-red-500">yutuqlarimiz</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { num: "1000+", label: "Muvaffaqiyatli talabalar", icon: Users },
              { num: "95%", label: "IELTS natijasi", icon: Award },
              { num: "50+", label: "Ustozlar", icon: BookOpen },
              { num: "2+", label: "Yillik tajriba", icon: Globe }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg shadow-red-500/20 hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading-bold text-3xl font-bold text-red-500">{item.num}</h3>
                <p className="font-body text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading-bold text-4xl font-bold mb-6">
              Biz bilan <span className="text-red-500">bog'laning</span>
            </h2>
            <p className="font-body text-gray-400 text-lg mb-8">
              Savollaringiz bo'lsa, biz doimo yordam berishga tayyormiz.
            </p>

            {[
              { icon: MapPin, title: "Manzil", text: "Jizzax, Islom Karimov ko'chasi" },
              { icon: Phone, title: "Telefon", text: "+998 70-108-47-47" },
              { icon: Mail, title: "Email", text: "axmedschool@gmail.com" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500">
                  <item.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body-semibold text-white">{item.title}</h3>
                  <p className="font-body text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl shadow-2xl border border-gray-800"
          >
            <div className="space-y-6">
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    name={field}
                    placeholder={field === "name" ? "Ismingiz" : field === "email" ? "Email" : "Telefon"}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-red-500 text-white font-body"
                    required={field !== "phone"}
                  />
                </div>
              ))}
              <textarea
                name="message"
                placeholder="Xabaringizni yozing..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-red-500 text-white font-body resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white font-body-semibold text-lg shadow-lg hover:scale-105 transition-all"
              >
                Xabar yuborish
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Success */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl flex items-center space-x-4 border border-red-500">
            <CheckCircle className="w-10 h-10 text-green-400" />
            <p className="text-xl font-body-semibold text-white">✅ Xabar yuborildi!</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
