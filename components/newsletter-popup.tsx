"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Mail } from "lucide-react"
import NewsletterSignup from "./newsletter-signup"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before or user has subscribed
    const popupShown = localStorage.getItem("newsletter-popup-shown")
    const hasSubscribed = localStorage.getItem("newsletter-subscribed")

    if (popupShown || hasSubscribed) {
      setHasShown(true)
      return
    }

    // Show popup after 30 seconds or when user scrolls 50% down the page
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
      }
    }, 30000)

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("newsletter-popup-shown", "true")
  }

  const handleSubscribe = () => {
    setIsVisible(false)
    localStorage.setItem("newsletter-popup-shown", "true")
    localStorage.setItem("newsletter-subscribed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-slate-900 border-white/20 max-w-md w-full relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 text-white/60 hover:text-white"
          onClick={handleClose}
        >
          <X className="w-4 h-4" />
        </Button>
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Before You Go...</h2>
            <p className="text-white/80">
              Join 3200+ marketers getting weekly SEO strategies and growth insights that actually work.
            </p>
          </div>

          <div className="space-y-4">
            <NewsletterSignup
              variant="compact"
              title=""
              description=""
              placeholder="Your email address"
              className="border-0 bg-transparent p-0"
              showNameFields={false}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm mb-4">✓ Actionable SEO tips ✓ Real case studies ✓ No spam ever</p>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-sm" onClick={handleClose}>
              Maybe later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
