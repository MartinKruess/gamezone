import { useContext, useEffect, useState } from "react";
import { merches } from "../merch";
import { ShopContext } from "../../global/useContext";

export const ShopCard = () => {
  const {type, setType, filter,  setFilter} = useContext(ShopContext)
  const [merchArr, setMerchArr] = useState(merches)

  const filteredArticles = merches.filter((merch => merch.type === type))

  const sortArticles = (arr) => {
    const sorted = arr.sort((a, b) => {
      if(filter === "low"){
        return a.price - b.price
      }else if(filter === "high"){
        return b.price - a.price
      }else if(filter === "new"){
        return a.timestamp - b.timestamp
      }else if(filter === "sells"){
        return a.sells - b.sells
      }else{
        return a - b
      }
      return sorted;
    })
  }
  
  useEffect(() => {
    type === "default" ? setMerchArr(merches) : setMerchArr(filteredArticles)
  }, [type])

  useEffect(() => {
    // filter === "default" ? setMerchArr(merches) : setMerchArr(sortArticles(merchArr))
    //console.log("sortedArticles", sortedArticles)
    console.log("sortArticles", sortArticles)
  }, [filter])

  useEffect(() => {
    console.log("filteredArticles", filteredArticles)
    console.log("merchArr", merchArr)
  }, [merchArr])

  return (
    <article>
      {merchArr.sort((a, b) => sortArticles(merches)).map((article, i) => (
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
