import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

type Params = { params: { id: string } }

export async function GET(_req: Request, { params }: Params) {
  const experience = await prisma.experience.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(experience)
}

export async function PUT(request: Request, { params }: Params) {
  const data = await request.json()
  const experience = await prisma.experience.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(experience)
}

export async function DELETE(_req: Request, { params }: Params) {
  await prisma.experience.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ deleted: true })
}
