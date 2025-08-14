"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Search, TrendingUp, Users, Podcast, BarChart3, PenTool } from "lucide-react"

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    anime
      .timeline({
        easing: "easeOutExpo",
      })
      .add({
        targets: ".hero-title",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1200,
      })
      .add(
        {
          targets: ".hero-subtitle",
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 800,
        },
        "-=600",
      )
      .add(
        {
          targets: ".hero-description",
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
        },
        "-=400",
      )
      .add(
        {
          targets: ".hero-buttons",
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 400,
        },
        "-=200",
      )

    // Floating animation for hero elements
    anime({
      targets: ".floating-element",
      translateY: [-10, 10],
      duration: 3000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      delay: anime.stagger(200),
    })

    // Skills animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("skills-section")) {
              anime({
                targets: ".skill-card",
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(100),
                easing: "easeOutBack",
              })
            }
            if (entry.target.classList.contains("experience-section")) {
              anime({
                targets: ".experience-card",
                translateX: [-50, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(150),
                easing: "easeOutExpo",
              })
            }
            if (entry.target.classList.contains("services-section")) {
              anime({
                targets: ".service-card",
                rotateY: [90, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(100),
                easing: "easeOutExpo",
              })
            }
            if (entry.target.classList.contains("blog-section")) {
              anime({
                targets: ".blog-card",
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(150),
                easing: "easeOutExpo",
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) observer.observe(skillsRef.current)
    if (experienceRef.current) observer.observe(experienceRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)
    if (blogRef.current) observer.observe(blogRef.current)

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "SEO Strategy", level: 95, icon: <Search className="w-8 h-8" /> },
    { name: "Content Marketing", level: 92, icon: <PenTool className="w-8 h-8" /> },
    { name: "Social Media Marketing", level: 90, icon: <Users className="w-8 h-8" /> },
    { name: "Analytics & Reporting", level: 88, icon: <BarChart3 className="w-8 h-8" /> },
    { name: "Podcast Production", level: 85, icon: <Podcast className="w-8 h-8" /> },
    { name: "Growth Marketing", level: 87, icon: <TrendingUp className="w-8 h-8" /> },
  ]

  const experiences = [
    {
      title: "Digital Marketing Specialist",
      company: "Division5",
      period: "Feb 2025 - Present",
      location: "Tirana, Albania",
      description:
        "Leading end-to-end digital presence management, SEO strategy across multiple brands, and podcast production for 'Scaling the Unscalable'",
      achievements: [
        "Managing SEO across Division5, EngjellRraklli.com, and sub-brands",
        "Leading podcast post-production and multi-platform distribution",
        "Creating design assets and managing social media strategy",
      ],
    },
    {
      title: "SEO & Affiliate Marketing Specialist",
      company: "E-Commerce Company (US)",
      period: "Jul 2024 - Jan 2025",
      location: "Remote",
      description:
        "Drove organic growth for multiple e-commerce websites through integrated SEO and affiliate marketing strategies",
      achievements: [
        "Optimized content across 3000+ category pages",
        "Managed affiliate program on Impact.com",
        "Used BrightEdge, SEMrush, and GSC for performance analysis",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      company: "Cardo AI",
      period: "Jan 2024 - Jul 2024",
      location: "Tirana, Albania",
      description:
        "Enhanced digital presence through comprehensive SEO, content strategy, and email marketing initiatives",
      achievements: [
        "Launched LinkedIn newsletter with 3200+ subscribers",
        "Led website redesign and migration without ranking loss",
        "Managed multi-channel email campaigns and social media",
      ],
    },
  ]

  const services = [
    {
      title: "SEO Strategy & Implementation",
      description: "Complete SEO audits, keyword research, technical optimization, and performance tracking",
      icon: <Search className="w-12 h-12" />,
      features: ["Technical SEO", "On-page Optimization", "Keyword Research", "Performance Tracking"],
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation, editorial calendars, and multi-platform content distribution",
      icon: <PenTool className="w-12 h-12" />,
      features: ["Blog Content", "Social Media Copy", "Email Campaigns", "Content Strategy"],
    },
    {
      title: "Social Media Management",
      description: "End-to-end social media strategy, content creation, and community management",
      icon: <Users className="w-12 h-12" />,
      features: ["LinkedIn Marketing", "Instagram Strategy", "Community Management", "Social Analytics"],
    },
    {
      title: "Podcast Production",
      description: "Complete podcast post-production, editing, and multi-platform distribution",
      icon: <Podcast className="w-12 h-12" />,
      features: ["Audio Editing", "Thumbnail Design", "Multi-platform Publishing", "Content Repurposing"],
    },
  ]

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
    {
      slug: "ecommerce-seo-category-optimization",
      title: "E-commerce SEO: Optimizing 3000+ Category Pages That Actually Convert",
      excerpt:
        "Lessons learned from optimizing thousands of e-commerce category pages. Technical strategies, content frameworks, and performance metrics that matter.",
      category: "E-commerce SEO",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      image: "/ecommerce-category-optimization.png",
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
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Kejsan</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#blog" className="text-white/80 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
          <div className="floating-element absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
          <div className="floating-element absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-80"></div>
          <div className="floating-element absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-50"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-6xl md:text-8xl font-bold text-white mb-6 opacity-0">Kejsan</h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-purple-300 mb-8 opacity-0">
            Digital Marketing Specialist
          </p>
          <p className="hero-description text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0">
            Driving organic growth through strategic SEO, compelling content, and data-driven marketing. Specialized in
            scaling digital presence for tech companies and e-commerce brands.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center opacity-0">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-white/80 text-lg mb-6">
                I'm a results-driven Digital Marketing Specialist with 5+ years of experience helping brands scale their
                digital presence. Currently at Division5, I manage end-to-end digital marketing strategies, from SEO
                optimization to podcast production.
              </p>
              <p className="text-white/80 text-lg mb-8">
                My expertise spans technical SEO, content strategy, social media marketing, and affiliate marketing.
                I've successfully managed campaigns for AI companies, e-commerce brands, and tech startups, consistently
                delivering measurable growth in organic traffic and engagement.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3000+</div>
                  <div className="text-white/60">Pages Optimized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3200+</div>
                  <div className="text-white/60">Newsletter Subscribers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="skills-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="skill-card bg-white/5 border-white/10 backdrop-blur-sm opacity-0">
                <CardContent className="p-6 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-white/60">{skill.level}% Proficiency</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="experience-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="experience-card bg-white/5 border-white/10 backdrop-blur-sm opacity-0">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-300 text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80">{exp.period}</p>
                      <p className="text-white/60">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/70">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="services-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Services I Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="service-card bg-white/5 border-white/10 backdrop-blur-sm opacity-0 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" ref={blogRef} className="blog-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card
                key={post.slug}
                className="blog-card bg-white/5 border-white/10 backdrop-blur-sm opacity-0 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 text-sm">{post.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              onClick={() => (window.location.href = "/blog")}
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
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
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-3">✓ Weekly insights ✓ No spam ✓ Unsubscribe anytime</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Grow Your Digital Presence</h2>
          <p className="text-white/80 text-lg mb-12">
            Ready to scale your brand's digital presence? I specialize in SEO strategy, content marketing, and
            growth-driven campaigns that deliver measurable results. Let's discuss your next project.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2024 Kejsan. Digital Marketing Specialist based in Tirana, Albania</p>
        </div>
      </footer>
    </div>
  )
}
