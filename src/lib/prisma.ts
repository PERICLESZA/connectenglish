//isso já é atualizado no git
import { PrismaClient } from "@prisma/client";  // <- note as chaves

declare global {
  // Permite cache do client no Node durante hot reload
  var prisma: PrismaClient | undefined;
}

// Evita criar múltiplas instâncias no desenvolvimento
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
