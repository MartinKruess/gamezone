import { useContext, useEffect, useState } from "react"
import { CelestArticleContext } from "../../global/useContext";
import { getFromLocalStorage, saveInLocalStorage } from "../../reusables/localstorage";


export const CreatePreview = () => {
  const {newArticle, setNewArticle} = useContext(CelestArticleContext)
  var today = new Date();
  const dateOfDay = today.toLocaleDateString("de-DE");
  
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(newArticle.title || "");
  const [description, setDescription] = useState( newArticle.description || "");


  const handleTextarea = (e) => {
    setCount(e.target.value.length)
    setDescription(e.target.value)
  }

  useEffect(() => {
    newArticle.title = title
    newArticle.description = description
    newArticle.date = dateOfDay
    console.log("newArticle",newArticle)
  }, [title, description]);

  return (
    <form className="createForm" action="">
      <label htmlFor="">Titel</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title && title}/>
      <label htmlFor="">{dateOfDay}</label>
      <label className="content" htmlFor="">
        Short Description
      </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        maxLength={3000}
        onChange={(e) => setCount(e.target.value.length)}
      ></textarea>
      <p className="counter">{count}/3000</p>
      <input type="file" />
      <button type="submit">Create</button>
    </form>
  );
};
