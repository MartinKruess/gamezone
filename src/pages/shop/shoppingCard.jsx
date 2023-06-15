import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../global/useContext";
import { loadData } from "../../global/loadData";

export const ShopCard = (props) => {
  const {type, filter} = useContext(ShopContext)
  const [merches, setMerches] = useState()
  const [merchArr, setMerchArr] = useState(merches)

  useEffect(() => {
    const dataFetch = async () => {
      const result = await loadData("shop/merchArticles")
      setMerches(result)
    }
    dataFetch()
  }, [])

  const filteredArticles = merches && merches.filter((merch => merch.type === type))

  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price - b.price) },
    descending: { method: (a, b) => (b.price - a.price) },
    new: { method: (a, b) => (a.timestamp - b.timestamp) },
    sells: { method: (a, b) => (b.sells - a.sells) },
  };
  
  useEffect(() => {
    type === "default" ? setMerchArr(merches) : setMerchArr(filteredArticles)
  }, [type])

  useEffect(() => {
  }, [filter])

  useEffect(() => {
    console.log("filteredArticles", filteredArticles)
    console.log("merchArr", merchArr[0].image)
  }, [merchArr])

  return (
    <article>
      {merches && merchArr.sort(sortMethods[filter].method).map((article, i) => (
        <div key={i} className="shopPreviewContainer">
          <h3>{article.title}</h3>
          <div className="shopPreviewCard">
            <img src={article.image} alt="" ></img>
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
