import { PrismaClient } from "@prisma/client";

let prismaVar;
if (process.env.NODE_ENV === "production") {
  prismaVar = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prismaVar = global.cachedPrisma;
}

export const prisma = prismaVar;
