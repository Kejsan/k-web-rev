import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const footer = await prisma.footer.findFirst()
  return NextResponse.json(footer)
}

export async function POST(request: Request) {
  const data = await request.json()
  const footer = await prisma.footer.create({ data })
  return NextResponse.json(footer)
}

export async function PUT(request: Request) {
  const data = await request.json()
  const { id, ...rest } = data
  const footer = await prisma.footer.upsert({
    where: { id: id ?? 1 },
    update: rest,
    create: rest,
  })
  return NextResponse.json(footer)
}

export async function DELETE() {
  await prisma.footer.deleteMany()
  return NextResponse.json({ deleted: true })
}
