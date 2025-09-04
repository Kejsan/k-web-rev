import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getAdminSession } from '@/lib/auth'

export async function GET() {
  const settings = await prisma.siteSettings.findFirst()
  return NextResponse.json(settings)
}

export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }
  const data = await request.json()
  const settings = await prisma.siteSettings.create({ data })
  return NextResponse.json(settings)
}

export async function PUT(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }
  const data = await request.json()
  const { id, ...rest } = data
  const settings = await prisma.siteSettings.upsert({
    where: { id: id ?? 1 },
    update: rest,
    create: rest,
  })
  return NextResponse.json(settings)
}

export async function DELETE() {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }
  await prisma.siteSettings.deleteMany()
  return NextResponse.json({ deleted: true })
}
