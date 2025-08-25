import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-20 w-2 h-2 bg-[#fb6163] rounded-full opacity-60 animate-bounce"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-1 h-1 bg-[#fb6163] rounded-full opacity-80 animate-ping"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center z-10 max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 opacity-0">Kejsan</h1>
          <p className="hero-subtitle text-xl md:text-2xl text-[#fb6163] mb-6 opacity-0">
            Digital Marketing Specialist
          </p>
          <p className="hero-description text-lg text-white/80 mb-8 opacity-0">
            Driving organic growth through strategic SEO, compelling content, and data-driven marketing. Specialized in scaling digital presence for tech companies and e-commerce brands.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0">
            <Link href="/work-samples">
              <Button size="lg" className="bg-[#fb6163] hover:bg-[#fb6163]/90 text-white px-8 py-3">
                View My Work
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hero-image relative opacity-0">
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fb6163] to-[#000080] rounded-full opacity-20 animate-pulse"></div>
              <Image
                src="/kejsan-profile.png"
                alt="Kejsan Çoku - Digital Marketing Specialist"
                width={320}
                height={320}
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
