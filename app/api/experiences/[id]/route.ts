import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'

type Params = { params: { id: string } }

export async function GET(_req: Request, { params }: Params) {
  const session = await auth()
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const experience = await prisma.experience.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(experience)
}

export async function PUT(request: Request, { params }: Params) {
  const session = await auth()
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const data = await request.json()
  const experience = await prisma.experience.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(experience)
}

export async function DELETE(_req: Request, { params }: Params) {
  const session = await auth()
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  await prisma.experience.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ deleted: true })
}
