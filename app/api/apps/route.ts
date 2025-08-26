import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const apps = await prisma.webApp.findMany()
  return NextResponse.json(apps)
}

export async function POST(request: Request) {
  const data = await request.json()
  const app = await prisma.webApp.create({ data })
  return NextResponse.json(app)
}
