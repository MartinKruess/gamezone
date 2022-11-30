import { useContext, useEffect, useState } from "react";
import { CelestArticleContext } from "../../global/useContext";

export const CreateArticle = ({ i }) => {
  const {newArticle, setNewArticle} = useContext(CelestArticleContext)
  const [paraTitle, setParaTitle] = useState(newArticle.paragraphs[i].paraTitle || "")
  const [paraContext, setParaContext] = useState(newArticle.paragraphs[i].paraContext || "")
  
  const handleChange = (e) => {
    setParaTitle(e.target.value)
    console.log("paragraphObj", paragraphObj)
  };

  const textFunktions = (e) => {
    (e) => setCount(e.target.value.length), (e) => handleChange(e);
    setParaContext(e.target.value)
  };

  useEffect(() => {
    newArticle.paragraphs[i].paraTitle = paraTitle
  },[paraTitle]);

  useEffect(() => {
    newArticle.paragraphs[i].paraContext = paraContext
  },[paraContext]);

  const [count, setCount] = useState(0);
  return (
    <form className="createForm" action="">
      <label htmlFor="">Abschnitt</label>
      <input name="titel" type="text" onChange={(e) => setParaTitle(e.target.value)} value={paraTitle} />
      <label className="content" htmlFor="">
        Content
      </label>
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        maxLength={3000}
        onChange={(e) => textFunktions(e)}
        value={paraContext}
      ></textarea>
      <p className="counter">{count}/3000</p>
      <input name="img" type="file" onChange={(e) => handleChange(e)} />
    </form>
  );
};