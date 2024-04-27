import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type TPrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma?: TPrismaClientSingleton
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if ( process.env.NODE_ENV === 'production' ) globalForPrisma.prisma = prisma

