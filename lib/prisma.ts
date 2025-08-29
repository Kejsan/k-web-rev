import type { PrismaClient } from "@prisma/client"

// Require PrismaClient at runtime to avoid type errors when the package is not generated
// eslint-disable-next-line
const { PrismaClient } = require("@prisma/client")

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
