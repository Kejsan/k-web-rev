import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const tools = await prisma.tool.findMany()
  return NextResponse.json(tools)
}

export async function POST(request: Request) {
  const data = await request.json()
  const newTool = await prisma.tool.create({
    data: {
      name: data.name,
      url: data.url,
      description: data.description,
    },
  })
  return NextResponse.json(newTool, { status: 201 })
}
