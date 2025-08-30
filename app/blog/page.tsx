"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center transform perspective-1000 hover:rotate-1 hover:-translate-y-2 transition-all duration-500"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-40 h-40 mb-6"
        >
          <Image
            src="/ali.png"
            alt="Ali Axmedov"
            fill
            className="object-cover rounded-full shadow-xl border-4 border-red-500"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Ali Axmedov <span className="text-red-600">| Shaxsiy Brend</span>
        </motion.h1>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8"
        >
          Men shaxsiy rivojlanish, biznes va hayotiy tajribalarim haqida yozaman. 
          Bu blog orqali sizga ilhom, motivatsiya va foydali bilimlar ulashaman.
        </motion.p>

        {/* About Me Button */}
        <motion.a
          href="https://ali-axmedov.com" // shu joyga shaxsiy web-sayt linkini qo‘ying
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          About Me <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  )
}
