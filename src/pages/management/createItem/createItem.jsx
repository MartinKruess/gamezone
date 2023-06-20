import { useEffect, useState } from "react"

export const CreateItem = () => {
    const [article, setArticle] = useState({
        title: "",
        description: "",
        wash: "max 49°C",
        dry: "Bei niedriger Hitze",
        collection:"Gamer4Ever",
        brand: "Gamezone",
        creator: "Raikun",
        type: "",
        gender: "",
        price: 0,
        image: "",
        url: "",
        sells: 0,
        drachenmünzen: 0,
    })

    useEffect(() => {
        console.log("neu angelegter Artikel", article)
    }, [article])

    const saveArticle = () => {
      const res = fetch('http://localhost:5500/management/item', {
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(article)
      })
      console.log("res", res)
    }

    const onChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
      }

    return(
        <article className="articleForm">
            <h2>Neuen Merch Artikel anlegen</h2>
            <form action="" onChange={(e) => onChange(e)}>
                <label>
                    <span>title</span>
                    <input type="text" name="title" />
                </label>
                <label>
                    <span>description</span>
                    {/* <input type="text" name="description" /> */}
                    <textarea name="description" cols="5" rows="5" maxLength={500} ></textarea>
                </label>
                <label>
                    <span>collection</span>
                    <input type="text" name="drachenmünzen" />
                </label>
                <label>
                    <span>brand</span>
                    <input type="text" name="drachenmünzen" />
                </label>
                <label>
                    <span>creator</span>
                    <input type="text" name="drachenmünzen" />
                </label>
                <label>
                    <span>type</span>
                    <input type="text" name="type" />
                </label>
                <label>
                    <span>gender</span>
                    <input type="text" name="gender" />
                </label>
                <label>
                    <span>price</span>
                    <input type="text" name="price" />
                </label>
                <label>
                    <span>url</span>
                    <input type="text" name="url" />
                </label>
                <label>
                    <span>drachenmünzen</span>
                    <input type="text" name="drachenmünzen" />
                </label>
                <button onClick={() => saveArticle()}>Save</button>
            </form>
        </article>
    )
}