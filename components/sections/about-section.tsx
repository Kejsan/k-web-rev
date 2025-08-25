import { TrendingUp } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-white/80 text-lg mb-6">
              I&apos;m a results-driven Digital Marketing Specialist with 5+ years of experience helping brands scale their
              digital presence. Currently at Division5, I manage end-to-end digital marketing strategies, from SEO
              optimization to podcast production.
            </p>
            <p className="text-white/80 text-lg mb-8">
              My expertise spans technical SEO, content strategy, social media marketing, and affiliate marketing.
              I&apos;ve successfully managed campaigns for AI companies, e-commerce brands, and tech startups, consistently
              delivering measurable growth in organic traffic and engagement.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#fb6163]">5+</div>
                <div className="text-white/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#fb6163]">3000+</div>
                <div className="text-white/60">Pages Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#fb6163]">3200+</div>
                <div className="text-white/60">Newsletter Subscribers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fb6163] to-[#000080] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-[#000080] to-[#fb6163] rounded-full opacity-30"></div>
              <div className="absolute inset-8 bg-slate-800 rounded-full flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-[#fb6163]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
