import {
  Container,
  TopBar,
  Title,
  Filters,
  ProductList,
} from "@/components/blocks";

const products = [
  {
    title: "Пиццы",
    items: [
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
      {
        id: 1,
        title: "Сырный цыпленок",
        description:
          "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        image: "/pizza.png",
        price: 550,
      },
    ],
  },
  {
    title: "Комбо",
    items: [],
  },
  {
    title: "Закуски",
    items: [],
  },
  {
    title: "Коктейли",
    items: [],
  },
  {
    title: "Кофе",
    items: [],
  },
  {
    title: "Напитки",
    items: [],
  },
  {
    title: "Десерты",
    items: [],
  },
];

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
                  categoryName={""}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
