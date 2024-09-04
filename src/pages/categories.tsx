import { GET } from "@/app/api/categories/route";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async () => {
  const res = await GET();
  const categories = await res.json();

  return { props: { categories } };
}) satisfies GetStaticProps<{
  categories: any[];
}>;

export default function Page({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return categories
    .map((category: { title: string }) => category.title)
    .join(", ");
}
