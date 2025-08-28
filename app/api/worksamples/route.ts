import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const samples = await prisma.workSample.findMany()
  return NextResponse.json(samples)
}

export async function POST(request: Request) {
  const data = await request.json()
  const sample = await prisma.workSample.create({ data })
  return NextResponse.json(sample)
}
