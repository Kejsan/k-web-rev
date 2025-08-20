"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Search, TrendingUp, Users, Podcast, BarChart3, PenTool, X } from "lucide-react"

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const [selectedExperience, setSelectedExperience] = useState<any>(null)

  useEffect(() => {
    // Load anime.js dynamically
    const loadAnime = async () => {
      try {
        const anime = (await import("animejs")).default

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
        if (blogRef.current) observer.observe(blogRef.current)

        return () => observer.disconnect()
      } catch (error) {
        console.log("Anime.js not available, using CSS animations as fallback")
        // Fallback: just show elements without animations
        const elements = document.querySelectorAll(".hero-title, .hero-subtitle, .hero-description, .hero-buttons")
        elements.forEach((el) => {
          ;(el as HTMLElement).style.opacity = "1"
        })
      }
    }

    loadAnime()
  }, [])

  const skills = [
    { name: "SEO Strategy", level: 95, icon: <Search className="w-8 h-8 text-[#fb6163]" /> },
    { name: "Content Marketing", level: 92, icon: <PenTool className="w-8 h-8 text-[#fb6163]" /> },
    { name: "Social Media Marketing", level: 90, icon: <Users className="w-8 h-8 text-[#fb6163]" /> },
    { name: "Analytics & Reporting", level: 88, icon: <BarChart3 className="w-8 h-8 text-[#fb6163]" /> },
    { name: "Podcast Production", level: 85, icon: <Podcast className="w-8 h-8 text-[#fb6163]" /> },
    { name: "Growth Marketing", level: 87, icon: <TrendingUp className="w-8 h-8 text-[#fb6163]" /> },
  ]

  const experiences = [
    {
      id: "division5",
      title: "Digital Marketing Specialist",
      company: "Division5",
      period: "Feb 2025 - Present",
      location: "Tirana, Albania · Hybrid",
      description:
        "Leading end-to-end digital presence management, SEO strategy across multiple brands, and podcast production for 'Scaling the Unscalable'",
      achievements: [
        "Managing SEO across Division5, EngjellRraklli.com, and sub-brands",
        "Leading podcast post-production and multi-platform distribution",
        "Creating design assets and managing social media strategy",
      ],
      fullDescription: `I manage Division5's digital presence end to end. I run the website, plan and publish content for LinkedIn and Instagram, and create most design assets for social, blog articles, and infographics. I lead SEO across Division5, EngjellRraklli.com, and our sub-brands, covering strategy, audits, on-page improvements, technical fixes, and reporting. I also own post-production for the "Scaling the Unscalable" podcast, turning recordings into full episodes, shorts, and publishing across YouTube, Instagram, TikTok, Spotify, and other podcast platforms.`,
      responsibilities: [
        "SEO leadership: define the SEO roadmap, run site audits, manage keyword research and mapping, drive on-page optimisation, internal linking, and technical SEO, track KPIs, and report results across Division5, EngjellRraklli.com, and related brands.",
        "Website ownership: plan content, update pages, improve information architecture, fix issues affecting crawlability, indexation, and Core Web Vitals, and ensure accurate metadata and structured content.",
        "Content and social strategy: build editorial calendars, write and publish posts for LinkedIn and Instagram, and adapt long-form insights into carousels, polls, and commentary that serve founders and product teams.",
        "Design and publishing: create visuals for social, blog articles, and infographics, align copy and design, and ensure brand consistency across assets and channels.",
        "Podcast and video: manage post-production for 'Scaling the Unscalable,' edit main episodes and shorts, create thumbnails and captions, and distribute across YouTube, Instagram, TikTok, Spotify, and major podcast directories.",
        "Communications support: prepare marketing documents and presentations, maintain clear messaging, and coordinate with stakeholders for timely reviews and approvals.",
        "Analytics and reporting: monitor organic performance and engagement, use data to prioritise sprints, and iterate on topics, formats, and landing pages to improve reach and conversions.",
      ],
      skills: [
        "Search Engine Optimization (SEO)",
        "Web Design",
        "Social Media Marketing",
        "On-Page Optimization",
        "Copywriting",
        "SEO Copywriting",
        "Content Management",
        "Content Strategy",
        "Content Marketing",
      ],
    },
    {
      id: "ecommerce",
      title: "SEO & Affiliate Marketing Specialist",
      company: "E-Commerce Company (US)",
      period: "Jul 2024 - Jan 2025",
      location: "Chicago, Illinois, United States · Remote",
      description:
        "Drove organic growth for multiple e-commerce websites through integrated SEO and affiliate marketing strategies",
      achievements: [
        "Optimized content across 3000+ category pages",
        "Managed affiliate program on Impact.com",
        "Used BrightEdge, SEMrush, and GSC for performance analysis",
      ],
      fullDescription: `A multifaceted role focused on driving organic growth and expanding brand reach for multiple e-commerce websites through integrated SEO and affiliate marketing strategies.`,
      responsibilities: [
        "Optimizing content across over 3000 category pages",
        "Collaborating with development teams to ensure seamless SEO implementation",
        "Leveraging data analytics to enhance performance",
        "Using platforms like BrightEdge, SEMrush, and Google Search Console to analyze rankings, identify trends, and recommend improvements to refine keyword targeting and boost site traffic",
        "Staying attuned to the latest SEO practices and developments and adopting them when necessary",
        "Owned the affiliate marketing program on Impact.com, overseeing all aspects from partner research and strategic outreach to ongoing relationship management and performance analysis",
        "Collaborated with development teams to guide flawless technical SEO implementation and supported content marketing initiatives",
      ],
      skills: [
        "Analytical Skills",
        "E-commerce SEO",
        "SEO Copywriting",
        "Search Engine Optimization (SEO)",
        "Content Creation",
        "Content Management Systems (CMS)",
      ],
    },
    {
      id: "cardo-ai",
      title: "Digital Marketing Specialist",
      company: "Cardo AI",
      period: "Jan 2024 - Jul 2024",
      location: "Tirana, Albania · Hybrid",
      description:
        "Enhanced digital presence through comprehensive SEO, content strategy, and email marketing initiatives",
      achievements: [
        "Launched LinkedIn newsletter with 3200+ subscribers",
        "Led website redesign and migration without ranking loss",
        "Managed multi-channel email campaigns and social media",
      ],
      fullDescription: `As a Digital Marketing Specialist at Cardo AI, I played a crucial role in driving our digital marketing efforts and enhancing our online presence. My responsibilities encompassed a range of activities aimed at optimizing our content, engaging our audience, and supporting our overall marketing strategy.`,
      responsibilities: [
        "Content Creation & Strategy: Research and develop new topics and ideas for content creation. Write compelling copy for social media captions and perform hashtag & trend research to maximize reach and engagement.",
        "SEO Optimization: Involved in all aspects of SEO, including conducting keyword research, performing technical SEO audits, and implementing SEO fixes. Responsible for maintaining and updating the company website with SEO-optimized content, new pages, and articles. Provided major involvement and support during a website redesign, restructuring & migration with the purpose of keeping the website healthy and not lose rankings.",
        "Email Marketing: Managed and wrote email campaigns targeted towards existing clients and potential leads. Create engaging content that nurtures relationships and drives conversions.",
        "Newsletter Management: Launched and managed an internal weekly newsletter for our clients, providing them with valuable insights and updates. Additionally, supported the development of a monthly LinkedIn newsletter that has gained 3200+ subscribers after just two editions.",
        "Collaboration & Analysis: Collaborated closely with other marketing team members on strategy development, design initiatives, and performance analysis to ensure alignment with our goals. Provided actionable insights based on data analysis to optimize future campaigns.",
      ],
      skills: [
        "Content Management Systems (CMS)",
        "Web Design",
        "Digital Marketing",
        "Content Management",
        "Content Development",
        "Content Marketing",
        "Email Management",
        "Email Newsletter Design",
        "Email Marketing Software",
        "WordPress",
      ],
      previousRole: {
        title: "Social Media & SEO Specialist",
        period: "Oct 2021 - Dec 2023",
        note: "Promoted to Digital Marketing Specialist in January 2024",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
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
          <div className="floating-element absolute top-20 left-20 w-2 h-2 bg-[#fb6163] rounded-full opacity-60 animate-bounce"></div>
          <div className="floating-element absolute bottom-32 left-1/4 w-1 h-1 bg-[#fb6163] rounded-full opacity-80 animate-ping"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-6xl md:text-8xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
            Kejsan
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-[#fb6163] mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            Digital Marketing Specialist
          </p>
          <p className="hero-description text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-600">
            Driving organic growth through strategic SEO, compelling content, and data-driven marketing. Specialized in
            scaling digital presence for tech companies and e-commerce brands.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-900">
            <Button size="lg" className="bg-[#fb6163] hover:bg-[#fb6163]/90 text-white px-8 py-3">
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

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="skills-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="skill-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-[#fb6163] mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-[#fb6163] to-[#000080] h-2 rounded-full transition-all duration-1000"
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
              <Card
                key={index}
                className="experience-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedExperience(exp)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fb6163] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[#54a09b] text-lg">{exp.company}</p>
                      {exp.previousRole && (
                        <p className="text-[#fb6163] text-sm mt-1">↗ Promoted from {exp.previousRole.title}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-white/80">{exp.period}</p>
                      <p className="text-white/60">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  <div className="space-y-2 mb-4">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#fb6163] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/70">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#fb6163] text-sm font-medium">Click to view full details →</span>
                    <div className="flex gap-2">
                      {exp.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="text-xs bg-[#fb6163]/20 text-[#fb6163] px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
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
                className="blog-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Grow Your Digital Presence</h2>
          <p className="text-white/80 text-lg mb-12">
            Ready to scale your brand's digital presence? I specialize in SEO strategy, content marketing, and
            growth-driven campaigns that deliver measurable results. Let's discuss your next project.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-[#fb6163] hover:bg-[#fb6163]/90 text-white">
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

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedExperience.title}</h2>
                  <p className="text-[#54a09b] text-xl mb-1">{selectedExperience.company}</p>
                  <p className="text-white/80">
                    {selectedExperience.period} • {selectedExperience.location}
                  </p>
                  {selectedExperience.previousRole && (
                    <div className="mt-3 p-3 bg-[#fb6163]/10 border border-[#fb6163]/20 rounded-lg">
                      <p className="text-[#fb6163] text-sm font-medium">Career Progression</p>
                      <p className="text-white/80 text-sm">
                        {selectedExperience.previousRole.title} ({selectedExperience.previousRole.period})
                      </p>
                      <p className="text-white/60 text-xs">{selectedExperience.previousRole.note}</p>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white"
                  onClick={() => setSelectedExperience(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-white/80 leading-relaxed">{selectedExperience.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities & Impact</h3>
                <div className="space-y-3">
                  {selectedExperience.responsibilities.map((responsibility, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#fb6163] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#54a09b]/20 to-[#fb6163]/20 border border-[#54a09b]/30 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2024 Kejsan. Digital Marketing Specialist based in Tirana, Albania</p>
        </div>
      </footer>
    </div>
  )
}

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
