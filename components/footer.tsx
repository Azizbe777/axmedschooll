import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 relative">
                <Image src="/logo.png" alt="Til Markazi Logo" width={32} height={32} className="rounded-lg" />
              </div>
              <span className="text-xl font-bold">Til Markazi</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dunyo bo'ylab o'quvchilarni zamonaviy til kurslari va innovatsion o'qitish usullari bilan quvvatlantirish.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tezkor havolalar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  O'qituvchilar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kurs turlari</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Ingliz tili
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Koreys tili
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Business English
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  IELTS/TOEFL
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Konsalting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Aloqa ma'lumotlari</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-red-400" />
                <span className="text-gray-400">info@tilmarkazi.uz</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400" />
                <span className="text-gray-400">+998 (90) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-400 mt-1" />
                <span className="text-gray-400">
                  Amir Temur ko'chasi, 123
                  <br />
                  Toshkent, O'zbekiston
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Til Markazi. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Maxfiylik siyosati
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Foydalanish shartlari
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie siyosati
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
