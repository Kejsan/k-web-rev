import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  const data = await request.json()
  const updatedTool = await prisma.tool.update({
    where: { id },
    data: {
      name: data.name,
      url: data.url,
      description: data.description,
    },
  })
  return NextResponse.json(updatedTool)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  await prisma.tool.delete({
    where: { id },
  })
  return new NextResponse(null, { status: 204 })
}
