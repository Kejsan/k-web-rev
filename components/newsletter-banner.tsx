"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Mail } from "lucide-react"

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#54a09b] to-[#000080] text-white py-3 px-4 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5" />
          <span className="font-medium">🚀 Join 3200+ marketers getting weekly SEO insights</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-[#54a09b] hover:bg-white/90"
            onClick={() => {
              // Scroll to newsletter section or open popup
              const newsletterSection = document.querySelector("#newsletter-signup")
              if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Subscribe Free
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 p-1"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
