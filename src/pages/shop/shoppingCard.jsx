import { useContext, useEffect, useState } from "react";
import { merches } from "../merch";
import { ShopContext } from "../../global/useContext";

export const ShopCard = () => {
  const {type, setType, filter,  setFilter} = useContext(ShopContext)
  const [merchArr, setMerchArr] = useState(merches)

  const filteredArticles = merches.filter((merch => merch.type === type))

  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price - b.price) },
    descending: { method: (a, b) => (b.price - a.price) },
    new: { method: (a, b) => (a.timestamp - b.timestamp) },
    sells: { method: (a, b) => (b.sells - a.sells) },
  };

  // const sortArticles = (arr) => {
  //   const sorted = arr.sort((a, b) => {
  //     if(filter === "low"){
  //       return a.price - b.price
  //     }else if(filter === "high"){
  //       return b.price - a.price
  //     }else if(filter === "new"){
  //       return a.timestamp - b.timestamp
  //     }else if(filter === "sells"){
  //       return a.sells - b.sells
  //     }else{
  //       return a - b
  //     }
  //     return sorted;
  //   })
  // }
  
  useEffect(() => {
    type === "default" ? setMerchArr(merches) : setMerchArr(filteredArticles)
  }, [type])

  useEffect(() => {
    //filter === "default" ? setMerchArr(merches) : setMerchArr(sortArticles())
    console.log("merchArr", merchArr)
  }, [filter])

  useEffect(() => {
    console.log("filteredArticles", filteredArticles)
    console.log("merchArr", merchArr)
  }, [merchArr])

  return (
    <article>
      {merchArr.sort(sortMethods[filter].method).map((article, i) => (
        <div key={i} className="shopPreviewContainer">
          <h3>{article.title}</h3>
          <div className="shopPreviewCard">
            <img src={article.img} alt="" ></img>
          </div>
          <p>{article.type}</p>
          <p>{article.sells}</p>
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
