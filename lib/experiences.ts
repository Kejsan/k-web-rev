import prisma from './prisma'

export async function getExperiences() {
  return prisma.experience.findMany({ orderBy: { startDate: 'desc' } })
}
