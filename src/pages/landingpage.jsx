import { MyGames } from "./landingparts/mygames";
import { NewArticles } from "./landingparts/myshop";
import { NewBlog } from "./landingparts/newBlog";

export const Landingpage = () => {
  return (
    <section className="landingpage">
      <MyGames />
      <NewArticles />
      <NewBlog />
    </section>
  );
};
