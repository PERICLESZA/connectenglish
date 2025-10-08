import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.customer.findMany();
  console.log(users);

  return <div>Banco conectado com sucesso!</div>;
}