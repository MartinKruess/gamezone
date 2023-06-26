import { createContext, useEffect, useState } from "react"
import { deleteInLocalStorage, getFromLocalStorage, saveInLocalStorage } from "../reusables/localstorage"

export const AppContext = createContext()
export const ShopContext = createContext()

export const CelestArticleContext = createContext()

// ----------------- LS LOAD -----------------
const tokenFromLS = getFromLocalStorage('auth' || "ABC")
const articleFromLS = getFromLocalStorage('newArticle')
console.log({tokenFromLS})

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(tokenFromLS || "null")
  console.log({token})

  useEffect(() => {
    token ? saveInLocalStorage('auth', token) : deleteInLocalStorage('auth')
  }, [token])

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  )
}

export const GlobalShopFilter = ({children}) => {
    const [type, setType] = useState("default")
    const [filter, setFilter] = useState("default")

    useEffect(() => {
        console.log("type", type, "filter", filter)
    }, [type, filter])

    return (
        <ShopContext.Provider value={{ type, setType, filter, setFilter}}>
          {children}
        </ShopContext.Provider>
      )
} 

export const CelestAbyssNewArticle = ({children}) => {
  const [newArticle, setNewArticle] = useState({
    title: articleFromLS ? articleFromLS.title : "",
    date: articleFromLS ? articleFromLS.date : "",
    description: articleFromLS ? articleFromLS.description : "",
    img: "",
    paragraphs: [
      {
        paraTitle: "",
        paraContext: "",
        paraImg: "",
        imgPos: "",
      },
      {
        paraTitle: "",
        paraContext: "",
        paraImg: "",
        imgPos: "",
      },
      {
        paraTitle: "",
        paraContext: "",
        paraImg: "",
        imgPos: "",
      },
      {
        paraTitle: "",
        paraContext: "",
        paraImg: "",
        imgPos: "",
      },
      {
        paraTitle: "",
        paraContext: "",
        paraImg: "",
        imgPos: "",
      },
    ]
  });

  useEffect(() => {
      newArticle ? saveInLocalStorage('newArticle', newArticle) : deleteInLocalStorage('newArticle')
      // console.log("newArticle", newArticle)
  }, [newArticle])

  return (
      <CelestArticleContext.Provider value={{ newArticle, setNewArticle }}>
        {children}
      </CelestArticleContext.Provider>
    )
} 
