"use client"

import { useState } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  const BOT_TOKEN = "8012308771:AAGaMvQuqylGZ-ETvRR5p9SbhxW9MUcCGgE"
  const CHAT_ID = "-4910162726"

  const sendMessage = async () => {
    if (!message.trim()) return
    setStatus("loading")
    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      })
      if (res.ok) {
        setStatus("sent")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Xatolik:", error)
      setStatus("error")
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-72">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
          </div>
          <textarea
            className="w-full border rounded-md p-2 mb-2"
            rows={3}
            placeholder="Xabar yozing..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            disabled={status === "loading"}
            className="bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600"
          >
            {status === "loading" ? "Yuborilmoqda..." : "Yuborish"}
          </button>
          {status === "sent" && <p className="text-green-500 mt-2">✅ Xabar yuborildi!</p>}
          {status === "error" && <p className="text-red-500 mt-2">❌ Xatolik yuz berdi!</p>}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-600"
        >
          💬
        </button>
      )}
    </div>
  )
}
