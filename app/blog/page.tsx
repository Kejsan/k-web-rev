"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import NewsletterSignup from "@/components/newsletter-signup"
import Image from "next/image"

export default function BlogPage() {
  const blogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load anime.js dynamically
    const loadAnime = async () => {
      try {
        const anime = (await import("animejs")).default as any

        anime({
          targets: ".blog-header",
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 800,
          easing: "easeOutExpo",
        })

        anime({
          targets: ".blog-post-card",
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(100),
          easing: "easeOutExpo",
        })
      } catch (error) {
        console.log("Anime.js not available, using CSS animations as fallback")
        // Fallback: just show elements without animations
        const elements = document.querySelectorAll(".blog-header, .blog-post-card")
        elements.forEach((el) => {
          ;(el as HTMLElement).style.opacity = "1"
        })
      }
    }

    loadAnime()
  }, [])

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
      featured: true,
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
      featured: true,
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
      featured: false,
    },
    {
      slug: "ecommerce-seo-category-optimization",
      title: "E-commerce SEO: Optimizing 3000+ Category Pages That Actually Convert",
      excerpt:
        "Lessons learned from optimizing thousands of e-commerce category pages. Technical strategies, content frameworks, and performance metrics that matter.",
      category: "E-commerce SEO",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      image: "/ecommerce-category-optimization.png",
      featured: false,
    },
    {
      slug: "linkedin-newsletter-growth-strategy",
      title: "From 0 to 3200+ Subscribers: My LinkedIn Newsletter Growth Strategy",
      excerpt:
        "The exact strategy I used to grow a LinkedIn newsletter from zero to over 3200 subscribers in just two editions. Content planning, distribution, and engagement tactics.",
      category: "Social Media",
      readTime: "7 min read",
      date: "Nov 20, 2024",
      image: "/linkedin-newsletter-growth.png",
      featured: false,
    },
    {
      slug: "website-migration-seo-checklist",
      title: "Website Migration Without Losing Rankings: A Complete SEO Checklist",
      excerpt:
        "How I managed a complete website redesign and migration at Cardo AI without losing any search rankings. Step-by-step process and critical checkpoints.",
      category: "Technical SEO",
      readTime: "9 min read",
      date: "Nov 15, 2024",
      image: "/website-migration-seo.png",
      featured: false,
    },
    {
      slug: "affiliate-marketing-impact-optimization",
      title: "Scaling Affiliate Programs: My Experience with Impact.com",
      excerpt:
        "How I managed and optimized affiliate marketing programs for e-commerce brands, including partner research, outreach strategies, and performance analysis.",
      category: "Affiliate Marketing",
      readTime: "8 min read",
      date: "Nov 10, 2024",
      image: "/affiliate-marketing-dashboard.png",
      featured: false,
    },
    {
      slug: "social-media-content-calendar-strategy",
      title: "Building Content Calendars That Actually Drive Engagement",
      excerpt:
        "My approach to creating editorial calendars for LinkedIn and Instagram that serve founders and product teams. From ideation to execution.",
      category: "Social Media",
      readTime: "6 min read",
      date: "Nov 5, 2024",
      image: "/social-media-calendar.png",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Technical SEO",
    "Content Marketing",
    "Social Media",
    "Podcast Marketing",
    "E-commerce SEO",
    "Affiliate Marketing",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Kejsan
            </Link>
            <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center blog-header">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SEO & Marketing Insights</h1>
            <p className="text-xl text-white/80 mb-8">
              Real-world strategies, case studies, and lessons learned from scaling digital presence for tech companies
              and e-commerce brands.
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#54a09b] w-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup
              title="Never Miss an SEO Insight"
              description="Get my latest strategies, case studies, and actionable tips delivered to your inbox. Join the 3200+ marketers who trust my insights to grow their digital presence."
            />
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-[#54a09b]/20 text-[#54a09b] hover:bg-[#54a09b]/40 cursor-pointer px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="blog-post-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
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
                          <Badge variant="secondary" className="bg-[#54a09b]/20 text-[#54a09b]">
                            {post.category}
                          </Badge>
                          <span className="text-white/40">•</span>
                          <div className="flex items-center gap-1 text-white/60 text-sm">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
                        <p className="text-white/70 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-white/60 text-sm">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#54a09b] hover:text-[#54a09b]/80">
                            Read More →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="blog-post-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
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
                      <Badge variant="secondary" className="bg-[#54a09b]/20 text-[#54a09b] text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-white/40">•</span>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <Button size="sm" variant="ghost" className="text-[#54a09b] hover:text-[#54a09b]/80 text-xs">
                        Read →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
