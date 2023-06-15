import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";

export const merches = [
  {
    title: "abc"
  },
  {
    title: "fgd"
  }
]

export const Merch = () => {
  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard  merches={merches}/>
    </section>
  );
};