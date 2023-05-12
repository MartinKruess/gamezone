import { backendURL } from "../App";
import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";





export const merches = await res.json()

export const Merch = async () => {

    const res = await fetch(`http://localhost:5500/merchArticles`, {
    method: 'post',
    withCredentials: true,

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard />
    </section>
  );
};
