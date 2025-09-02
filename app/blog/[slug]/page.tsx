import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import BlogPostClient from "./blog-post-client"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  })

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  })

  return <BlogPostClient post={post} />
}
