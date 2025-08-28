import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const experiences = await prisma.experience.findMany()
  return NextResponse.json(experiences)
}

export async function POST(request: Request) {
  const data = await request.json()
  const experience = await prisma.experience.create({ data })
  return NextResponse.json(experience)
}
