import { useContext, useEffect, useState } from "react";
import { merches } from "../merch";
import { ShopContext } from "../../global/useContext";

export const ShopCard = () => {
  const {type, setType, filter,  setFilter} = useContext(ShopContext)
  const filteredArticles = merches.filter((merch => merch.type === type))
  const [merchArr, setMerchArr] = useState(merches)

  useEffect(() => {
    type === null ? setMerchArr(merches) : setMerchArr(filteredArticles)
  }, [type])

  useEffect(() => {
    console.log("filteredArticles", filteredArticles)
    console.log("merchArr", merchArr)
  }, [merchArr])

  return (
    <article>
      {merchArr.map((article, i) => (
        <div key={i} className="shopPreviewContainer">
          <h3>{article.title}</h3>
          <div className="shopPreviewCard">
            <img src={article.img} alt="" ></img>
          </div>
          <p>{article.type}</p>
          <p className="description">{article.description}</p>
          <div className="cardFooter">
            <p className="price">{article.price} €
            </p>
            <a href={article.url} target="_blank">zum Artikle</a>
          </div>
        </div>
      ))}
    </article>
  );
};
