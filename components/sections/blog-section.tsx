import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllPosts } from "@/lib/posts"

export default async function BlogSection() {
  const posts = await getAllPosts()
  return (
    <section id="blog" className="blog-section py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 3).map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="blog-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={"/placeholder.svg"}
                    alt={post.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  {post.content && (
                    <p className="text-white/70 mb-4 line-clamp-3">{post.content}</p>
                  )}
                  <div className="flex items-center justify-between">
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
}
