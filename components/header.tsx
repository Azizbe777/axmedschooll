"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image src="/logo.png" alt="Language Center Logo" width={32} height={32} className="rounded-lg" />
            </div>
            <span className="text-xl font-bold text-gray-900">Til Markazi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Bosh sahifa
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Biz haqimizda
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Kurslar
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Blog
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Aloqa
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://t.me"
                target="_blank"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.507-1.114 1.771-1.114 1.771-.357.234-.763.095-.763.095l-3.061-2.33-1.558-1.188-2.504-.953s-.411-.156-.453-.5c-.042-.345.411-.534.411-.534l9.952-3.992s.827-.309.827.204z" />
                </svg>
              </Link>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Biz bilan bog'laning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                Bosh sahifa
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                Biz haqimizda
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                Kurslar
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                Blog
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                Aloqa
              </Link>

              <div className="flex items-center space-x-4 pt-2">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://t.me"
                  target="_blank"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  aria-label="Telegram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.507-1.114 1.771-1.114 1.771-.357.234-.763.095-.763.095l-3.061-2.33-1.558-1.188-2.504-.953s-.411-.156-.453-.5c-.042-.345.411-.534.411-.534l9.952-3.992s.827-.309.827.204z" />
                  </svg>
                </Link>
              </div>

              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full w-fit">
                Biz bilan bog'laning
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
