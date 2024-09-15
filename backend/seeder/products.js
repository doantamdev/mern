const products = [
    {
    name: "Product1 Lenovo Comp1 Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Product2 Lenovo Comp2 Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product3 Dell Comp Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product4 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product5 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product6 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Tablets",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product7 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product8 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product9 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product10 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product11 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Monitors",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product12 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product13 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product14 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product15 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product16 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Games",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product17 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product18 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
]

module.exports = products
