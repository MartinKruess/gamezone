import { useEffect, useState } from "react"
import { backendURL } from "../../App";
import { getFromLocalStorage, saveInLocalStorage } from "../../reusables/localstorage";

export const CreateMerchArticle = () => {
    const [title, setTitle] = useState("");
    const [collection, setCollection] = useState("");
    const [brand, setBrand] = useState("");
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const newMerch = {
        title: "",
        collection: "Gamer4Ever",
        brand: "Gamezone",
        creator: "Raikun",
        category: "V-Shirt",
        gender: "female",
        price: 17.99, 
        img: "../../public/images/logo.svg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus provident praesentium voluptatem illum fugiat voluptate nihil ex magni quam natus possimus impedit dolorem hic adipisci temporibus dignissimos ratione aliquid esse consectetur, distinctio itaque nisi vero.",
        url: "htttps://www.cde.de",
      }

  const handleTextarea = (e) => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    newMerch.title = title
    newMerch.collection = collection
    newMerch.brand = brand
    newMerch.creator = creator
    newMerch.category = category
    newMerch.gender = gender
    newMerch.price = price
    newMerch.img = img
    newMerch.description = description
    newMerch.url = url
   
    console.log("newMerch", newMerch)
  }, [title, collection, brand, creator, category, gender, price, img, url, description]);

  const handleCreateArticle = async (merch) => {
    console.log("merch", merch)

    const res = await fetch(`${backendURL}/management/merch`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(merch),
    })
    const newMerches = await res.json()
    console.log(newMerches)
  }

  return (
    <form className="createForm" action="">
      <div>
        <label htmlFor="">Titel</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title && title}/>
      </div>
      <div>
        <label htmlFor="">Collection</label>
        <input type="text" onChange={(e) => setCollection(e.target.value)} value={collection && collection}/>
      </div>
      <div>
        <label htmlFor="">Brand</label>
        <input type="text" onChange={(e) => setBrand(e.target.value)} value={brand && brand}/>
      </div>
      <div>
        <label htmlFor="">Creator</label>
        <input type="text" onChange={(e) => setCreator(e.target.value)} value={creator && creator}/>
      </div>
      <div>
        <label htmlFor="">Category</label>
        <input type="text" onChange={(e) => setCategory>(e.target.value)} value={category && category}/>
      </div>
      <div>
        <label htmlFor="">Gender</label>
        <input type="text" onChange={(e) => setGender(e.target.value)} value={gender && gender}/>
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input type="text" onChange={(e) => setPrice(e.target.value)} value={price && price}/>
      </div>
      <div>
        <label htmlFor="">IMG</label>
        <input type="text" onChange={(e) => setImg(e.target.value)} value={img && img}/>
      </div>
      <label className="content" htmlFor="">
        Short Description
      </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        maxLength={400}
        onChange={(e) => handleTextarea(e)}
        className="textarea"
        value={description && description}
      ></textarea>
      <div>
        <label htmlFor="">URL</label>
        <input type="text" onChange={(e) => setUrl(e.target.value)} value={url && url}/>
      </div>
      
      <input type="file" />
      <button type="submit" onClick={() => handleCreateArticle(newMerch)}>Create Merch</button>
    </form>
  );
};