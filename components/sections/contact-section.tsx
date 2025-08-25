import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Let&apos;s Grow Your Digital Presence</h2>
        <p className="text-white/80 text-lg mb-12">
          Ready to scale your brand&apos;s digital presence? I specialize in SEO strategy, content marketing, and
          growth-driven campaigns that deliver measurable results. Let&apos;s discuss your next project.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:kejsan@example.com">
            <Button size="lg" className="bg-[#fb6163] hover:bg-[#fb6163]/90 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </a>
          <a href="https://linkedin.com/in/kejsan" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
