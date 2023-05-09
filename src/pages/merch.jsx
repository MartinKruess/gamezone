import { backendURL } from "../App";
import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";

 export const merches = [
  {
    title: "1",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "V-Shirt",
    gender: "female",
    price: 19.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "https://www.amazon.de/gp/product/B09VJQ63JX/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&customId=B0753657ZZ&psc=1",
    sells: 15,
  },
  {
    title: "2",
    collection: "Gamer4Ever Zero",
    brand: "Gamezone",
    creator: "Raikun",
    type: "T-Shirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/mainboard02.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
    sells: 0,
  },
  {
    title: "3",
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
    sells: 12,
  },
  {
    title: "4",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "Langarmshirt",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
    sells: 2,
  },
  {
    title: "5",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "Hoodie",
    gender: "female",
    price: 17.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
    sells: 5,
  },
  {
    title: "6",
    collection: "Gamer4Ever",
    brand: "Gamezone",
    creator: "Raikun",
    type: "Hoodie",
    gender: "female",
    price: 37.99, 
    img: "../../public/images/logo.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
    url: "htttps://www.cde.de",
    sells: 12,
  },
];

// const res = await fetch(`${backendURL}/merchArticles`, {
//   method: 'post',
//   withCredentials: true,

//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(mercheArticles),
// })

// const merches = await res.json()
// console.log('resData', resData)
// setToken(merches)

export const Merch = () => {
  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard />
    </section>
  );
};
