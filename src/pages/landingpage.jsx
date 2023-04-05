import { NewsCard } from "../components/newsCard";
import { MyGames } from "./landingparts/mygames";
import { MyShop } from "./landingparts/myshop";

export const Landingpage = () => {
  return (
    <section className="landingpage">
      <MyGames />
      <MyShop />
    </section>
  );
};
