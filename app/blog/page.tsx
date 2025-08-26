import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getAllPosts } from "@/lib/posts"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Kejsan
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              SEO & Marketing Insights
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Real-world strategies and lessons learned.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {post.title}
                    </h3>
                    {post.content && (
                      <p className="text-white/70 mb-4 line-clamp-3">
                        {post.content}
                      </p>
                    )}
                    <span className="text-white/60 text-sm">
                      {new Date(post.createdAt).toDateString()}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
