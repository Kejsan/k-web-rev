import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getAdminSession } from '@/lib/auth'

export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }
  const data = await request.json()
  const post = await prisma.post.create({ data })
  return NextResponse.json(post)
}
