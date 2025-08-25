import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#000080]/20 to-[#fb6163]/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with SEO & Marketing Insights</h2>
        <p className="text-white/80 text-lg mb-8">
          Join 3200+ marketers who get actionable SEO strategies, content marketing tips, and growth insights
          delivered weekly. No spam, just valuable content that helps you scale your digital presence.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#fb6163] focus:bg-white/15"
            />
            <Button className="bg-[#fb6163] hover:bg-[#fb6163]/90 text-white px-6 py-3 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-3">✓ Weekly insights ✓ No spam ✓ Unsubscribe anytime</p>
        </div>
      </div>
    </section>
  )
}
