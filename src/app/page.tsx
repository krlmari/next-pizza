import {
  Container,
  TopBar,
  Title,
  Filters,
  ProductList,
} from "@/components/blocks";

import { products } from "@/content/products";

import { GET as GetCategories } from "@/app/api/categories/route";
// import { GET as GetProducts } from "@/app/api/products/route";

export default async function Home() {
  const resCategories = await GetCategories();
  const categories = (await resCategories.json()) as {
    name: string;
    title: string;
  }[];

  // const resProducts = await GetProducts();

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories} />

      <Container className="mt-9 pb-14">
        <div className="flex flex-col gap-[80px] xl:flex-row">
          <div className="w-auto xl:w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {products.map((list, index) => (
                <ProductList
                  key={index}
                  title={list.title}
                  items={list.items}
                  categoryName={list.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
