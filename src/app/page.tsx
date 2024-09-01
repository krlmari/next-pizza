import {
  Container,
  TopBar,
  Title,
  Filters,
  ProductList,
} from "@/components/blocks";
import { products } from "@/content/products";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-9 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
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
