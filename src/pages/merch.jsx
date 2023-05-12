import { backendURL } from "../App";
import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";

//  export const merches = [
//   {
//     title: "Kaputzen Hoodie",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "Kaputzen-Hoodie",
//     gender: "female",
//     price: 33.99, 
//     img: "/images/shirts/levelCompleted/kaputzenhoodieLv30.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "https://www.amazon.de/gp/product/B09VJQ63JX/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&customId=B0753657ZZ&psc=1",
//     sells: 15,
//     drachenmünzen: 75,
//   },
//   {
//     title: "2",
//     collection: "Gamer4Ever Zero",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "T-Shirt",
//     gender: "female",
//     price: 17.99, 
//     img: "/images/shirts/levelCompleted/Lv18shirt.gif",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 0,
//     drachenmünzen: 75,
//   },
//   {
//     title: "3",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "V-Shirt",
//     gender: "female",
//     price: 17.99, 
//     img: "/images/shirts/levelCompleted/Lv30Hoodie.gif",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 12,
//     drachenmünzen: 75,
//   },
//   {
//     title: "4",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "Langarmshirt",
//     gender: "female",
//     price: 17.99, 
//     img: "/images/shirts/levelCompleted/Lv30Langarmshirt.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 2,
//     drachenmünzen: 75,
//   },
//   {
//     title: "5",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "Hoodie",
//     gender: "female",
//     price: 17.99, 
//     img: "/images/shirts/levelCompleted/Lv30Shirt.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 5,
//     drachenmünzen: 75,
//   },
//   {
//     title: "6",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "Hoodie",
//     gender: "female",
//     price: 37.99, 
//     img: "/images/shirts/levelCompleted/Lv30shirt.gif",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 12,
//     drachenmünzen: 75,
//   },
//   {
//     title: "6",
//     collection: "Gamer4Ever",
//     brand: "Gamezone",
//     creator: "Raikun",
//     type: "Sweater",
//     gender: "female",
//     price: 37.99, 
//     img: "/images/shirts/levelCompleted/Lv30sweater.gif",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
//     url: "htttps://www.cde.de",
//     sells: 12,
//     drachenmünzen: 75,
//   },
// ];


const res = await fetch(`http://localhost:5500/merchArticles`, {
  method: 'post',
  withCredentials: true,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export const merches = await res.json()

export const Merch = () => {
  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard />
    </section>
  );
};
