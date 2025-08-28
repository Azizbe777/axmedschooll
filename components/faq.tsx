"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Darslar jadvali qanday?",
      answer:
        "Darslar haftada 3 marta, har bir dars 1.5 soat davom etadi. Ertalabki va kechki guruhlar mavjud. Jadval talabalarning qulay vaqtiga moslashtiriladi.",
    },
    {
      question: "Kursga qanday ro'yxatdan o'tiladi?",
      answer:
        "Ro'yxatdan o'tish uchun bizning markazga tashrif buyuring yoki telefon orqali bog'laning. Dastlab darajangizni aniqlash uchun test topshirasiz, so'ngra guruhga biriktirilasiz.",
    },
    {
      question: "Imtihonlar va imtihon oldi sinovlar qanday o'tkaziladi?",
      answer:
        "Har oy oxirida progress testlari o'tkaziladi. IELTS, TOEFL va boshqa xalqaro imtihonlarga tayyorgarlik alohida dastur bo'yicha amalga oshiriladi.",
    },
    {
      question: "Kurs narxi va to'lov imkoniyatlari qanday?",
      answer:
        "Kurs narxi darajaga va davomiylikka bog'liq. Oylik to'lov imkoniyati mavjud. Batafsil ma'lumot uchun bizga murojaat qiling.",
    },
    {
      question: "TOPIK imtihoniga tayyorlaydimi?",
      answer:
        "Ha, biz TOPIK (Test of Proficiency in Korean) imtihoniga maxsus tayyorgarlik dasturimiz mavjud. Barcha darajalar uchun kurslar olib boriladi.",
    },
    {
      question: "Ingliz tili kurslari qanday tashkil etilgan?",
      answer:
        "Ingliz tili kurslari Beginner dan Advanced darajagacha tashkil etilgan. Grammatika, lug'at, gapirish va tinglash ko'nikmalariga alohida e'tibor beriladi.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ko'p so'raladigan savollar</h2>
          <p className="text-lg text-gray-600">Eng muhim savollar va javoblar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
