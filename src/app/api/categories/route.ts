import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const category = await prisma.category.create({
    data,
  });

  return NextResponse.json(category);
}
