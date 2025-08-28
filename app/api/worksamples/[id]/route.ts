import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

type Params = { params: { id: string } }

export async function GET(_req: Request, { params }: Params) {
  const sample = await prisma.workSample.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(sample)
}

export async function PUT(request: Request, { params }: Params) {
  const data = await request.json()
  const sample = await prisma.workSample.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(sample)
}

export async function DELETE(_req: Request, { params }: Params) {
  await prisma.workSample.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ deleted: true })
}
