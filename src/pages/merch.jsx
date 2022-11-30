import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";

export const merches = [
  {
    title: "Gamezone - Level 30 completed 4gamers T-Shirt mit V-Ausschnitt",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "https://www.amazon.de/gp/product/B09VJQ63JX/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&customId=B0753657ZZ&psc=1",
  },
  {
    title: "CDE",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/mainboard02.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
  },
  {
    title: "CDE",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/mainboard01.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
  },
  {
    title: "CDE",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
  },
  {
    title: "CDE",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
  },
];

export const Merch = () => {
  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard />
    </section>
  );
};
