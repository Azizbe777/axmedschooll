"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { BookOpen, Clock, Users, CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react"

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", phone: "", course: "", level: "", message: "" })
  const [loading, setLoading] = useState(false)

  const BOT_TOKEN = "8012308771:AAGaMvQuqylGZ-ETvRR5p9SbhxW9MUcCGgE"
  const CHAT_ID = "-4910162726"

  // Ingliz tili kurslari (darajalar bo‘yicha)
  const englishCourses = [
    { id: "beginner", title: "Beginner", level: "A1", duration: "2-3 oy", students: "10-15 kishi", price: "280 000 so'm",
      features: ["Asosiy grammatika", "Oddiy so‘zlar va iboralar", "O‘qish va tinglash asoslari"], 
      schedule: "Har kuni (09:00-11:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "elementary", title: "Elementary", level: "A2", duration: "2-3 oy", students: "10-15 kishi", price: "280 000 so'm",
      features: ["Kundalik suhbat", "Oddiy matnlarni tushunish", "Asosiy yozish amaliyoti"], 
      schedule: "Har kuni (11:00-13:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "preintermediate", title: "Pre-Intermediate", level: "B1", duration: "2-3 oy", students: "10-15 kishi", price: "300 000 so'm",
      features: ["Murakkabroq gap tuzish", "Dialoglar va suhbatlar", "O‘rta darajali matnlarni o‘qish"], 
      schedule: "Har kuni (14:00-16:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "intermediate", title: "Intermediate", level: "B1+", duration: "2-3 oy", students: "10-15 kishi", price: "300 000 so'm",
      features: ["Erkinroq suhbat", "Maqolalar bilan ishlash", "O‘rta darajali yozuv"], 
      schedule: "Har kuni (16:00-18:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "preielts", title: "Pre-IELTS", level: "B2", duration: "2-3 oy", students: "8-12 kishi", price: "300 000 so'm",
      features: ["IELTS asoslari", "Listening va Reading mashqlari", "Speaking mashqlari"], 
      schedule: "Dush, Chor, Juma (18:00-20:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "ielts", title: "IELTS", level: "B2-C1", duration: "3-6 oy", students: "8-12 kishi", price: "350 000 so'm",
      features: ["4 ta modul (L, R, W, S)", "Real imtihon materiallari", "Mock testlar va maslahatlar"], 
      schedule: "Sesh, Pay, Shanba (18:00-20:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "individual", title: "Individual", level: "A1-C2", duration: "2-3 oy", students: "1 kishi", price: "1 199 000 so'm",
      features: ["Shaxsiy darslar", "Moslashuvchan jadval", "O‘qituvchi bilan 1x1 ishlash"], 
      schedule: "Kelishilgan vaqtda", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" }
  ]

  // Koreys tili kurslari (siz tashlagan koddan o‘zgarmagan holda)
  const koreanCourses = [
    { id: "topik", title: "TOPIK Tayyorgarlik", level: "Topik 1-6", duration: "6-12 oy", students: "6-12 kishi", price: "350 000 so'm",
      features: ["TOPIK I va II darajalari", "Hangul va grammatika", "Koreys madaniyati", "Imtihon strategiyalari", "Xalqaro sertifikat"],
      schedule: "Dushanba, Chorshanba, Juma (17:00-19:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "business", title: "Individual", level: "Topic 1-4", duration: "3-5 oy", students: "1 kishi", price: "1 199 000 so'm",
      features: ["Biznes terminologiya", "Rasmiy yozishmalar", "Mijozlar bilan muloqot", "Koreys biznes madaniyati", "Sertifikat"],
      schedule: "Seshanba, Payshanba, Shanba (20:00-22:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" },
    { id: "conversation", title: "Koreys Tili Ishchiga", level: "Topic-1-6", duration: "3-6 oy", students: "10-15 kishi", price: "350 000 so'm",
      features: ["Kundalik muloqot", "Slang va iboralar", "Koreys seriallari orqali", "Madaniy kontekst", "Progress sertifikati"],
      schedule: "Har kuni (16:00-18:00)", location: "Jizzax,Prospekt mo'ljal yoshlar-markazi" }
  ]

  const sendTelegram = async () => {
    setLoading(true)
    const text = `
📝 Yangi Ariza:
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
📚 Kurs: ${formData.course}
🎯 Daraja: ${formData.level}
💬 Izoh: ${formData.message}
    `
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    })
    setLoading(false)
    setFormData({ name: "", phone: "", course: "", level: "", message: "" })
    alert("✅ Arizangiz yuborildi!")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-black mb-4">
          Professional <span className="text-red-600">Til Kurslari</span>
        </motion.h1>
        <p className="text-gray-600 text-lg">Ingliz va Koreys tillarini minimalistik uslubda o‘rganing ✨</p>
      </section>

      {/* Courses */}
      <section className="px-6 lg:px-16 py-12">
        {/* English */}
        <h3 className="text-2xl font-semibold text-red-600 mb-6">🇺🇸 Ingliz Tili Kurslari</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {englishCourses.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedCourse(selectedCourse === c.id ? null : c.id)}>
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">{c.title}</h4>
                <ArrowRight className={`w-5 h-5 transition-transform ${selectedCourse === c.id ? "rotate-90" : ""}`} />
              </div>
              <p className="text-red-400 font-semibold mt-2">{c.price}</p>
              {selectedCourse === c.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-2">
                  <p><BookOpen className="inline w-4 h-4 mr-2" />Daraja: {c.level}</p>
                  <p><Clock className="inline w-4 h-4 mr-2" />{c.duration}</p>
                  <p><Users className="inline w-4 h-4 mr-2" />{c.students}</p>
                  <ul className="mt-2 space-y-1">
                    {c.features.map((f, idx) => <li key={idx} className="text-sm"><CheckCircle className="inline w-4 h-4 mr-1 text-red-500" />{f}</li>)}
                  </ul>
                  <p className="mt-2"><Calendar className="inline w-4 h-4 mr-2" />{c.schedule}</p>
                  <p><MapPin className="inline w-4 h-4 mr-2" />{c.location}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Korean */}
        <h3 className="text-2xl font-semibold text-red-600 mb-6">🇰🇷 Koreys Tili Kurslari</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {koreanCourses.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedCourse(selectedCourse === c.id ? null : c.id)}>
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">{c.title}</h4>
                <ArrowRight className={`w-5 h-5 transition-transform ${selectedCourse === c.id ? "rotate-90" : ""}`} />
              </div>
              <p className="text-red-400 font-semibold mt-2">{c.price}</p>
              {selectedCourse === c.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-2">
                  <p><BookOpen className="inline w-4 h-4 mr-2" />Daraja: {c.level}</p>
                  <p><Clock className="inline w-4 h-4 mr-2" />{c.duration}</p>
                  <p><Users className="inline w-4 h-4 mr-2" />{c.students}</p>
                  <ul className="mt-2 space-y-1">
                    {c.features.map((f, idx) => <li key={idx} className="text-sm"><CheckCircle className="inline w-4 h-4 mr-1 text-red-500" />{f}</li>)}
                  </ul>
                  <p className="mt-2"><Calendar className="inline w-4 h-4 mr-2" />{c.schedule}</p>
                  <p><MapPin className="inline w-4 h-4 mr-2" />{c.location}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-100 py-16 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Ariza yuborish</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Ismingiz" className="border p-3 rounded-lg"
              value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            <input type="tel" placeholder="Telefon raqamingiz" className="border p-3 rounded-lg"
              value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            <select className="border p-3 rounded-lg" value={formData.course}
              onChange={e => setFormData({ ...formData, course: e.target.value })}>
              <option>Kursni tanlang</option>
              <option>Beginner</option>
              <option>Elementary</option>
              <option>Pre-Intermediate</option>
              <option>Intermediate</option>
              <option>Pre-IELTS</option>
              <option>IELTS</option>
              <option>Individual</option>
              <option>TOPIK</option>
              <option>Biznes Koreys</option>
              <option>Koreys Tili Ishchiga</option>
            </select>
            <select className="border p-3 rounded-lg" value={formData.level}
              onChange={e => setFormData({ ...formData, level: e.target.value })}>
              <option>Darajani tanlang</option>
              <option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>C1</option><option>C2</option>
            </select>
          </div>
          <textarea rows={4} placeholder="Qo‘shimcha izoh..." className="w-full border p-3 rounded-lg mt-4"
            value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
          <button onClick={sendTelegram} disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-black text-white py-4 rounded-lg mt-6 hover:opacity-90 transition">
            {loading ? "⏳ Yuborilmoqda..." : "🚀 Arizani yuborish"}
          </button>
        </div>
      </section>
    </div>
  )
}
