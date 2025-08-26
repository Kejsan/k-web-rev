import prisma from './prisma'

export async function getWorkSamples() {
  return prisma.workSample.findMany({ orderBy: { createdAt: 'desc' } })
}
