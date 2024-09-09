import { PrismaClient } from "@prisma/client";
import { CATEGORIES, INGREDIENTS, PRODUCTS, PIZZA } from "./data/content";
import { generateProductItem } from "./utils";
import { USERS } from "./data/users";

const prisma = new PrismaClient();

async function up() {
  await prisma.user.createMany({
    data: USERS,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  await prisma.ingredient.createMany({
    data: INGREDIENTS,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  const pizza1 = await prisma.product.create({
    data: PIZZA[0],
  });

  const pizza2 = await prisma.product.create({
    data: PIZZA[1],
  });

  const pizza3 = await prisma.product.create({
    data: PIZZA[2],
  });

  const generateAllProductItems = () => {
    const pizzas = [
      { pizza: pizza1, types: [1, 2] as const, sizes: [20, 30, 40] as const },
      { pizza: pizza2, types: [1, 2] as const, sizes: [20, 30, 40] as const },
      { pizza: pizza3, types: [1, 2] as const, sizes: [20, 30, 40] as const },
    ];

    const pizzaItems = pizzas.flatMap(({ pizza, types, sizes }) =>
      types.flatMap((type) =>
        sizes.map((size) =>
          generateProductItem({ productId: pizza.id, pizzaType: type, size })
        )
      )
    );

    const otherProductItems = Array.from({ length: 24 }, (_, index) =>
      generateProductItem({ productId: index + 1 })
    );

    return [...pizzaItems, ...otherProductItems];
  };

  await prisma.productItem.createMany({
    data: generateAllProductItems(),
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
