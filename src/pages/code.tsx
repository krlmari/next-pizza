import { GET } from "@/app/api/categories/route";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  const res = await GET();
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: any[];
}>;

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return repo.map((r: { title: string }) => r.title).join(", ");
}
