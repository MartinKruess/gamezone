import { merches } from "../merch";

export const ShopCard = () => {

  return (
    <>
      {merches.map((article, i) => (
        <div key={i} className="basicShopCard">
          <h2>{article.title}</h2>
          <div className="image">
            <img src={article.img} alt="" ></img>
          </div>
          <p className="shopContent">{article.description}</p>
          <div className="shopFooter">
            <div className="button">
              {" "}
              <a href={article.url} target="_blank">zum Artikle</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
