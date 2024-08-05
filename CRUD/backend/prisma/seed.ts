import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const kid1 = await prisma.kid.create({
    data: {
      fullname: 'John Doe',
      age: 10,
      email: 'john@example.com',
      score: 95.5,
    },
  });

  const kid2 = await prisma.kid.create({
    data: {
      fullname: 'Jane Smith',
      age: 12,
      email: 'jane@example.com',
      score: 88.0,
    },
  });

  console.log({ kid1, kid2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
