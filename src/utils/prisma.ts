// import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();

// src/utils/prisma.ts
// src/utils/prisma.ts
import { PrismaClient } from "@/generated/prisma"; // 👈 use the correct output path

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}


