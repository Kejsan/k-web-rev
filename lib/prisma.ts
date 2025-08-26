let PrismaClient: any
try {
  PrismaClient = require('@prisma/client').PrismaClient
} catch {
  PrismaClient = class {}
}

const globalForPrisma = globalThis as { prisma?: any }

export const prisma: any = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
