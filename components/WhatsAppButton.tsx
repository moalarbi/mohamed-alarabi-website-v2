'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '966500000000'
const DEFAULT_MESSAGE = 'مرحباً محمد، أريد الاستفسار عن خدماتك في التجارة الإلكترونية'

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-64
                        animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p className="font-bold text-navy text-sm">محمد العربي</p>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                متاح الآن
              </p>
            </div>
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            مرحباً! كيف يمكنني مساعدتك في تطوير متجرك؟ 👋
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 
                       bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 
                       text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            ابدأ المحادثة
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full 
                   flex items-center justify-center shadow-lg 
                   hover:shadow-green-500/30 hover:shadow-xl
                   transition-all duration-300 hover:scale-110
                   whatsapp-pulse"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </button>
    </div>
  )
}
