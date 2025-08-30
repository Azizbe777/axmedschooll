import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import ChatWidget from "@/components/chat-widget"

export const metadata: Metadata = {
  title: "AXMED SCHOOL - Ingliz va Koreys tili kurslari",
  description: "Professional ingliz va koreys tili kurslari. IELTS, TOEFL tayyorgarlik va konsalting xizmatlari.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        {children}
        <ScrollToTop />
        <ChatWidget />
      </body>
    </html>
  )
}
