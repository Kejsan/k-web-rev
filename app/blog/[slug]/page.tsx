import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import NewsletterSignup from "@/components/newsletter-signup"
import { getPostBySlug } from "@/lib/posts"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Kejsan
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-20 px-4">
        <div className="max-w-3xl mx-auto blog-post-content">
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          {post.content && (
            <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </article>

      <section className="px-4 my-16">
        <div className="max-w-3xl mx-auto">
          <NewsletterSignup
            title="Never Miss an SEO Insight"
            description="Get my latest strategies, case studies, and actionable tips delivered to your inbox."
          />
        </div>
      </section>
    </div>
  )
}
