import { PrismaClient } from "@prisma/client";

import { generateProductItem } from "./utils";

import { CATEGORIES, INGREDIENTS, PRODUCTS, PIZZA } from "./testData/content";
import { USERS } from "./testData/users";
import { CARTS } from "./testData/carts";

const prisma = new PrismaClient();

async function up() {
  await prisma.user.createMany({
    data: USERS,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  // pizza
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

  // productItem
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

  // cart
  await prisma.cart.createMany({
    data: CARTS,
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
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
