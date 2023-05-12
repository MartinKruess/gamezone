import { useState } from "react";
import { backendURL } from "../App";
import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";

export const Merch = async () => {
  const [merches, setMerches] = useState([])

    const res = await fetch(`${backendURL}/merchArticles`, {
    method: 'post',
    withCredentials: true,

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  merches = await res.json()

  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard  merches={merches}/>
    </section>
  );
};