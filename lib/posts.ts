import prisma from './prisma'

export async function getAllPosts() {
  return prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({ where: { slug } })
}
