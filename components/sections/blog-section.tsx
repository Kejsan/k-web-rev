import { forwardRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    slug: "technical-seo-audit-checklist-2024",
    title: "The Complete Technical SEO Audit Checklist for 2024",
    excerpt:
      "A comprehensive guide to conducting technical SEO audits that actually move the needle. Based on auditing 3000+ pages across multiple e-commerce sites.",
    category: "Technical SEO",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "/technical-seo-dashboard.png",
  },
  {
    slug: "scaling-content-marketing-ai-companies",
    title: "How I Scaled Content Marketing for AI Companies: A Case Study",
    excerpt:
      "From launching newsletters to 3200+ subscribers to managing multi-platform content strategies. Real tactics that worked at Cardo AI.",
    category: "Content Marketing",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    image: "/content-marketing-growth-chart.png",
  },
  {
    slug: "podcast-seo-distribution-strategy",
    title: "The Complete Guide to Podcast SEO and Multi-Platform Distribution",
    excerpt:
      "How I manage post-production for 'Scaling the Unscalable' and distribute across YouTube, Spotify, and social platforms for maximum reach.",
    category: "Podcast Marketing",
    readTime: "10 min read",
    date: "Dec 5, 2024",
    image: "/podcast-studio-setup.png",
  },
]

const BlogSection = forwardRef<HTMLDivElement>(function BlogSection(_, ref) {
  return (
    <section id="blog" ref={ref} className="blog-section py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="blog-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#fb6163] text-sm">{post.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <Button size="sm" variant="ghost" className="text-[#fb6163] hover:text-[#fb6163]/80">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})

export default BlogSection
