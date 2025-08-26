import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

type Params = { params: { id: string } }

export async function GET(_req: Request, { params }: Params) {
  const post = await prisma.post.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(post)
}

export async function PUT(request: Request, { params }: Params) {
  const data = await request.json()
  const post = await prisma.post.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(post)
}

export async function DELETE(_req: Request, { params }: Params) {
  await prisma.post.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ deleted: true })
}
