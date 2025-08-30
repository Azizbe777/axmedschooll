"use client"

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

  // Telegram bot API token va chat ID
  const TELEGRAM_BOT_TOKEN = "8012308771:AAGaMvQuqylGZ-ETvRR5p9SbhxW9MUcCGgE"  // Sizning bot tokeningiz
  const CHAT_ID = "-4910162726"  // Sizning chat ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Telegramga xabar yuborish
    const message = `Yangi xabar: \nIsm: ${formData.name} \nTelefon: ${formData.phone} \nTelegram: ${formData.telegram} \nXabar: ${formData.message}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      })

      const data = await res.json()
      if (data.ok) {
        setLoading(false)
        setSuccess(true)
        setFormData({ name: "", phone: "", telegram: "", message: "" })
        
        setTimeout(() => {
          setSuccess(false)
        }, 2500)
      }
    } catch (error) {
      console.error("Error sending message to Telegram", error)
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50/40 to-white relative overflow-hidden text-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Biz bilan <span className="text-red-600">bog‘laning</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Savollaringiz bormi? Quyidagi ma’lumotlar yoki forma orqali biz bilan aloqaga chiqing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Chap: Kontakt ma’lumotlar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-bold text-gray-900">Aloqa ma’lumotlari</h3>
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Telefon",
                  text: "+998 70-108-47-47",
                },
                {
                  icon: Mail,
                  title: "Email",
                  text: "axmedschool@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Manzil",
                  text: "Jizzax shahar, Islom Karimov ko‘chasi\nMo‘ljal: Prospekt yoshlar markaziga yetmasdan",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="bg-red-100 p-4 rounded-full group-hover:scale-110 transition">
                    <item.icon className="text-red-600" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* O‘ng: Forma */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white border border-red-100 rounded-2xl shadow-xl p-10 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Xabar yuborish</h3>
              <p className="text-gray-600 mb-8">
                Forma orqali yozib qoldiring, biz imkon qadar tezda aloqaga chiqamiz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "phone", "telegram"].map((field, idx) => (
                  <div key={idx}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-800 mb-2"
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
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg 
                        focus:ring-2 focus:ring-red-500 focus:border-transparent 
                        transition-all duration-200 hover:shadow-md text-gray-900"
                      placeholder={
                        field === "name"
                          ? "Ismingizni kiriting"
                          : field === "phone"
                          ? "+998 XX XXX XX XX"
                          : "@username"
                      }
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg 
                      focus:ring-2 focus:ring-red-500 focus:border-transparent 
                      transition-all duration-200 resize-none hover:shadow-md text-gray-900"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-xl 
                    hover:from-red-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center 
                    space-x-2 font-medium shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                  ) : (
                    <>
                      <Send size={22} />
                      <span>Yuborish</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-2xl"
                  >
                    <div className="text-center">
                      <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
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
