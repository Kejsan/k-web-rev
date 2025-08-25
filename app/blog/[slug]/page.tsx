"use client"

import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import NewsletterSignup from "@/components/newsletter-signup"

export default function BlogPost() {
  const params = useParams()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load anime.js dynamically
    const loadAnime = async () => {
      try {
        const anime = (await import("animejs")).default as any

        anime({
          targets: ".blog-post-header",
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 800,
          easing: "easeOutExpo",
        })

        anime({
          targets: ".blog-post-content",
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
          delay: 200,
          easing: "easeOutExpo",
        })
      } catch (error) {
        console.log("Anime.js not available, using CSS animations as fallback")
        // Fallback: just show elements without animations
        const elements = document.querySelectorAll(".blog-post-header, .blog-post-content")
        elements.forEach((el) => {
          ;(el as HTMLElement).style.opacity = "1"
        })
      }
    }

    loadAnime()
  }, [])

  // This would typically come from a CMS or API
  const blogPosts = {
    "technical-seo-audit-checklist-2024": {
      title: "The Complete Technical SEO Audit Checklist for 2024",
      excerpt:
        "A comprehensive guide to conducting technical SEO audits that actually move the needle. Based on auditing 3000+ pages across multiple e-commerce sites.",
      category: "Technical SEO",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "/technical-seo-dashboard.png",
      content: `
# The Complete Technical SEO Audit Checklist for 2024

After auditing over 3000+ e-commerce category pages and managing SEO across multiple brands at Division5, I've developed a systematic approach to technical SEO audits that consistently delivers results.

## Why Technical SEO Audits Matter

During my time optimizing e-commerce sites, I discovered that 70% of ranking issues stem from technical problems that are completely fixable. The challenge isn't identifying these issues—it's prioritizing them based on impact.

## My 5-Phase Technical SEO Audit Process

### Phase 1: Crawlability & Indexation Analysis

**Tools I use:** Google Search Console, Screaming Frog, BrightEdge

- **Crawl budget optimization**: Check for crawl errors and unnecessary pages consuming crawl budget
- **XML sitemap validation**: Ensure all important pages are included and accessible
- **Robots.txt analysis**: Verify no critical pages are blocked
- **Index coverage review**: Identify pages that should be indexed but aren't

**Real example:** At the e-commerce company, I found 40% of category pages weren't being crawled due to infinite scroll implementation. Fixing this increased organic traffic by 35%.

### Phase 2: Core Web Vitals & Performance

**Key metrics I track:**
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms  
- Cumulative Layout Shift (CLS) < 0.1

**Common fixes I implement:**
- Image optimization and lazy loading
- Critical CSS inlining
- JavaScript bundle optimization
- Server response time improvements

### Phase 3: URL Structure & Internal Linking

**What I analyze:**
- URL structure consistency
- Internal linking architecture
- Orphaned pages identification
- Link equity distribution

**Case study:** During the Cardo AI website migration, I restructured the internal linking to create clear topic clusters, resulting in a 25% improvement in average session duration.

### Phase 4: Schema Markup & Structured Data

**Priority schema types for most sites:**
- Organization markup
- Article/BlogPosting markup
- Product markup (e-commerce)
- FAQ markup
- Breadcrumb markup

### Phase 5: Mobile-First & Accessibility

**Mobile optimization checklist:**
- Responsive design validation
- Touch target sizing
- Mobile page speed
- Mobile-specific crawl errors

## Tools I Can't Live Without

1. **Google Search Console** - Primary data source
2. **Screaming Frog** - Comprehensive crawl analysis  
3. **BrightEdge** - Enterprise-level insights
4. **SEMrush** - Competitive analysis
5. **PageSpeed Insights** - Core Web Vitals monitoring

## Prioritization Framework

Not all technical issues are created equal. Here's how I prioritize:

**High Priority (Fix First):**
- Pages returning 4xx/5xx errors
- Critical pages not indexed
- Core Web Vitals failures
- Mobile usability issues

**Medium Priority:**
- Duplicate content issues
- Missing schema markup
- Suboptimal internal linking
- Image optimization opportunities

**Low Priority:**
- Minor HTML validation errors
- Non-critical redirect chains
- Cosmetic URL improvements

## Measuring Success

**KPIs I track post-audit:**
- Organic traffic growth
- Average position improvements
- Click-through rate increases
- Core Web Vitals scores
- Crawl error reduction

## Key Takeaways

1. **Start with the basics**: Ensure Google can crawl and index your important pages
2. **Focus on user experience**: Core Web Vitals directly impact rankings
3. **Think holistically**: Technical SEO supports your content and link building efforts
4. **Monitor continuously**: Set up alerts for critical technical issues
5. **Document everything**: Keep detailed records of changes and their impact

Technical SEO isn't glamorous, but it's the foundation that makes everything else possible. In my experience, fixing technical issues often provides the biggest quick wins in any SEO campaign.

---

*Want to discuss your technical SEO challenges? Connect with me on LinkedIn or reach out directly.*
      `,
    },
    "scaling-content-marketing-ai-companies": {
      title: "How I Scaled Content Marketing for AI Companies: A Case Study",
      excerpt:
        "From launching newsletters to 3200+ subscribers to managing multi-platform content strategies. Real tactics that worked at Cardo AI.",
      category: "Content Marketing",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "/content-marketing-growth-chart.png",
      content: `
# How I Scaled Content Marketing for AI Companies: A Case Study

During my time at Cardo AI, I had the opportunity to build a content marketing strategy from the ground up. Here's exactly how I grew our LinkedIn newsletter from 0 to 3200+ subscribers in just two editions and scaled our overall content presence.

## The Challenge

When I joined Cardo AI as a Digital Marketing Specialist, the company had:
- Limited content output
- No systematic content strategy
- Minimal social media presence
- No email marketing infrastructure

The goal was clear: establish Cardo AI as a thought leader in the AI space while driving qualified leads.

## Strategy 1: LinkedIn Newsletter Launch

### The Planning Phase

**Research & Positioning:**
- Analyzed 50+ AI company newsletters
- Identified content gaps in the market
- Defined our unique angle: practical AI implementation for businesses

**Content Framework:**
- Industry insights and trends
- Case studies from our work
- Actionable tips for AI adoption
- Guest expert perspectives

### Execution & Results

**Edition 1 Launch:**
- Leveraged existing network and company connections
- Created compelling launch announcement
- Result: 1,800 subscribers in first week

**Edition 2 Growth:**
- Implemented referral incentives
- Cross-promoted on other channels
- Added interactive elements (polls, Q&As)
- Result: 3,200+ total subscribers

**Key Success Factors:**
1. **Consistent value delivery**: Every edition provided actionable insights
2. **Community engagement**: Responded to every comment and message
3. **Cross-platform promotion**: Leveraged LinkedIn posts, company page, and employee networks
4. **Data-driven optimization**: A/B tested subject lines and content formats

## Strategy 2: Multi-Platform Content Distribution

### Content Repurposing System

**One piece of long-form content became:**
- LinkedIn newsletter section
- 3-5 LinkedIn posts
- Instagram carousel
- Blog article
- Email campaign content
- Social media quotes/graphics

### Platform-Specific Adaptations

**LinkedIn:**
- Professional insights and industry commentary
- Behind-the-scenes company content
- Employee spotlights and thought leadership

**Instagram:**
- Visual infographics
- Quote cards
- Behind-the-scenes stories
- Company culture content

**Blog:**
- In-depth technical articles
- Case studies
- How-to guides
- Industry analysis

## Strategy 3: SEO-Driven Content Creation

### Keyword Research Process

**Tools used:**
- SEMrush for competitive analysis
- Google Search Console for existing performance
- Answer The Public for question-based content

**Content clusters created:**
- AI implementation guides
- Machine learning tutorials
- Industry-specific AI applications
- AI ethics and regulation

### On-Page Optimization

- Optimized meta titles and descriptions
- Implemented proper heading structure
- Added relevant internal linking
- Created topic clusters for authority building

## Strategy 4: Email Marketing Integration

### Campaign Types Developed

**Weekly Client Newsletter:**
- Industry updates
- Company news
- Educational content
- Client spotlights

**Lead Nurture Sequences:**
- Welcome series for new subscribers
- Educational email courses
- Product-focused campaigns
- Re-engagement campaigns

### Performance Metrics

**Email Marketing Results:**
- 35% average open rate (industry average: 21%)
- 8% click-through rate (industry average: 2.6%)
- 15% conversion rate from email to consultation

## Strategy 5: Content Performance Analysis

### KPIs Tracked

**Engagement Metrics:**
- Social media engagement rates
- Email open and click rates
- Website time on page
- Content shares and saves

**Business Metrics:**
- Lead generation from content
- Content-attributed conversions
- Brand mention increases
- Organic search traffic growth

### Optimization Process

**Monthly content audits:**
- Identified top-performing content types
- Analyzed audience engagement patterns
- Adjusted content calendar based on data
- Refined messaging and positioning

## Key Lessons Learned

### What Worked

1. **Consistency beats perfection**: Regular publishing schedule built audience trust
2. **Community-first approach**: Engaging with audience comments and messages drove loyalty
3. **Data-driven decisions**: Let performance metrics guide content strategy
4. **Cross-platform synergy**: Integrated approach amplified reach and impact

### What Didn't Work

1. **Over-promotion**: Content that was too sales-focused performed poorly
2. **Generic industry content**: Unique perspectives and experiences resonated more
3. **Inconsistent posting**: Gaps in content schedule hurt engagement
4. **Ignoring platform nuances**: One-size-fits-all content didn't optimize for each platform

## Actionable Takeaways

### For AI Companies

1. **Focus on practical applications**: Show how AI solves real business problems
2. **Demystify complex concepts**: Make technical content accessible
3. **Share behind-the-scenes insights**: People want to see how AI companies actually work
4. **Address concerns and ethics**: Don't shy away from AI challenges and limitations

### For Content Marketers

1. **Start with one platform and do it well**: Master one channel before expanding
2. **Build systems for repurposing**: Create content once, distribute everywhere
3. **Engage authentically**: Genuine interactions build stronger communities
4. **Measure what matters**: Focus on metrics that tie to business outcomes

## The Results

**6-month content marketing impact:**
- 3,200+ newsletter subscribers
- 150% increase in organic website traffic
- 40% increase in qualified leads
- 25% improvement in brand awareness metrics
- 60% increase in social media following

The key to scaling content marketing for AI companies isn't just creating more content—it's creating the right content for the right audience at the right time, then distributing it strategically across multiple channels.

---

*Want to discuss content marketing strategies for your AI company? Let's connect and share insights.*
      `,
    },
    // Add more blog posts here...
  }

  const currentPost = blogPosts[params.slug as keyof typeof blogPosts]

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-[#54a09b] hover:bg-[#000080]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Kejsan
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <Button size="sm" variant="ghost" className="text-white/80 hover:text-white">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto blog-post-header">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-[#54a09b]/20 text-[#54a09b] mb-4">
                {currentPost.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{currentPost.title}</h1>
              <p className="text-xl text-white/80 mb-8">{currentPost.excerpt}</p>
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {currentPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {currentPost.readTime}
                </div>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={currentPost.image || "/placeholder.svg"}
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between py-4 border-y border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#54a09b] to-[#000080] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Kejsan</div>
                  <div className="text-white/60 text-sm">Digital Marketing Specialist</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="ghost" className="text-white/80 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white/80 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div
              ref={contentRef}
              className="blog-post-content prose prose-lg prose-invert max-w-none"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: currentPost.content
                    .replace(/\n/g, "<br>")
                    .replace(/#{1,6}\s/g, (match) => {
                      const level = match.trim().length
                      return `<h${level} style="color: white; margin-top: 2rem; margin-bottom: 1rem;">`
                    })
                    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: white;">$1</strong>'),
                }}
              />
            </div>

            {/* Newsletter Signup */}
            <section className="px-4 py-12 border-t border-white/10 mt-12">
              <div className="max-w-4xl mx-auto">
                <NewsletterSignup
                  variant="sidebar"
                  title="Enjoyed this article?"
                  description="Get more insights like this delivered weekly. Join 3200+ marketers growing their digital presence."
                  className="max-w-md mx-auto"
                />
              </div>
            </section>

            {/* Related Articles Teaser */}
            <section className="px-4 pb-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4">More SEO & Marketing Insights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-white/70">
                      <h4 className="font-semibold text-white mb-2">📈 E-commerce SEO Guide</h4>
                      <p className="text-sm">How I optimized 3000+ category pages for maximum conversions</p>
                    </div>
                    <div className="text-white/70">
                      <h4 className="font-semibold text-white mb-2">🎙️ Podcast Marketing Strategy</h4>
                      <p className="text-sm">Complete guide to podcast SEO and multi-platform distribution</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/blog">
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        View All Articles →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
