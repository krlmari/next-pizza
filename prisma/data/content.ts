export const CATEGORIES = [
  {
    title: "Пиццы",
    name: "pizza",
  },
  {
    title: "Комбо",
    name: "combo",
  },
  {
    title: "Закуски",
    name: "snacks",
  },
  {
    title: "Коктейли",
    name: "cocktails",
  },
  {
    title: "Кофе",
    name: "coffee",
  },
  {
    title: "Напитки",
    name: "drinks",
  },
  {
    title: "Десерты",
    name: "desserts",
  },
];

export const INGREDIENTS = [
  {
    name: "Сырный бортик",
    price: 179,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const PRODUCTS = [
  {
    title: "Омлет с ветчиной и грибами",
    description: "Сытный омлет с ветчиной и шампиньонами.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    categoryName: "combo",
  },
  {
    title: "Омлет с пепперони",
    description: "Омлет с острыми ломтиками пепперони.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryName: "combo",
  },
  {
    title: "Комбо обед с наггетсами",
    description: "Комбо с куриными наггетсами и гарниром.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee7971df0b44d5a2343b7b15bbf4d0.png",
    categoryName: "combo",
  },
  {
    title: "Комбо обед с додстером",
    description: "Комбо с сытным додстером и картошкой.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee79734d9340a6a4e5d14d25c0b16e.png",
    categoryName: "combo",
  },
  {
    title: "Куриные наггетсы",
    description: "Хрустящие куриные наггетсы.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
    categoryName: "snacks",
  },
  {
    title: "Картофель из печи с соусом 🌱",
    description: "Запеченный картофель с соусом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryName: "snacks",
  },
  {
    title: "Додстер",
    description: "Сочный ролл с курицей и соусом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryName: "snacks",
  },
  {
    title: "Острый Додстер 🌶️🌶️",
    description: "Ролл с курицей и острым соусом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryName: "snacks",
  },
  {
    title: "Банановый молочный коктейль",
    description: "Кремовый коктейль с банановым вкусом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryName: "cocktails",
  },
  {
    title: "Карамельное яблоко молочный коктейль",
    description: "Нежный коктейль с яблоком и карамелью.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryName: "cocktails",
  },
  {
    title: "Молочный коктейль с печеньем Орео",
    description: "Классический коктейль с крошкой Орео.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryName: "cocktails",
  },
  {
    title: "Классический молочный коктейль 👶",
    description: "Простой и любимый классический вкус.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryName: "cocktails",
  },
  {
    title: "Ирландский Капучино",
    description: "Ароматный капучино с ирландскими нотками.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryName: "coffee",
  },
  {
    title: "Кофе Карамельный капучино",
    description: "Капучино с нежным карамельным сиропом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryName: "coffee",
  },
  {
    title: "Кофе Кокосовый латте",
    description: "Латте с кокосовым вкусом и молочной пенкой.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryName: "coffee",
  },
  {
    title: "Кофе Американо",
    description: "Классический американо с насыщенным вкусом.",
    image:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryName: "coffee",
  },
  {
    title: "Лимонад классический",
    description: "Освежающий лимонад с ярким вкусом.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee797437ab41f5a918785347b84677.png",
    categoryName: "drinks",
  },
  {
    title: "Лимонад с малиной",
    description: "Лимонад с натуральным вкусом малины.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee79752dff4fbc8d0bdb78958749e6.png",
    categoryName: "drinks",
  },
  {
    title: "Морс клюквенный",
    description: "Традиционный клюквенный морс.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee7976a73743bda80568cb162b0e55.png",
    categoryName: "drinks",
  },
  {
    title: "Чай зелёный с мятой",
    description: "Зелёный чай с мятой для свежести.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee797729c346a28a596c46c8a3b063.png",
    categoryName: "drinks",
  },
  {
    title: "Чизкейк Нью-Йорк",
    description: "Классический чизкейк с нежным вкусом.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee79781e6a4cb1a9645c9e1379e13e.png",
    categoryName: "desserts",
  },
  {
    title: "Тирамису",
    description: "Итальянский десерт с маскарпоне и кофе.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee7979160d4c6787082b08d8f5fbb4.png",
    categoryName: "desserts",
  },
  {
    title: "Брауни с орехами",
    description: "Шоколадный брауни с орехами.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee797a2d9e4e5c90588beed3a1e23b.png",
    categoryName: "desserts",
  },
  {
    title: "Пирог с яблоком",
    description: "Нежный пирог с сочной яблочной начинкой.",
    image:
      "https://cdn.dodostatic.net/static/Img/Products/11ee797b3eb5472c8ebea63f72be6a8d.png",
    categoryName: "desserts",
  },
];

export const PIZZA = [
  {
    title: "Пепперони фреш",
    image:
      "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
    categoryName: "pizza",
    description:
      "Сочные ломтики пепперони, нежный сыр и томатный соус для яркого вкуса с легкой остринкой.",
    ingredients: {
      connect: INGREDIENTS.slice(0, 5),
    },
  },
  {
    title: "Сырная",
    image:
      "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
    categoryName: "pizza",
    description:
      "Нежное сочетание Моцареллы, Пармезана и Чеддера для настоящего сырного удовольствия.",
    ingredients: {
      connect: INGREDIENTS.slice(5, 10),
    },
  },
  {
    title: "Чоризо фреш",
    image:
      "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
    categoryName: "pizza",
    description:
      "Пикантный чоризо, сочные помидоры и свежая зелень для насыщенного и сбалансированного вкуса.",
    ingredients: {
      connect: INGREDIENTS.slice(10, 40),
    },
  },
];
