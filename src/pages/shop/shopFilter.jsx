import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../global/useContext"
import { merches } from "../merch"

export const ShopFilter = () => {
    const {type, setType, filter,  setFilter} = useContext(ShopContext)

    const getTypeTarget = (e) => {
        setType(e.target.value)
        filterMerchesByType(type)
    }

    const filterMerchesByType = (type) => {
       const filteredArticles = merches.filter((merch => merch.type === type))
       console.log("filteredArticles", filteredArticles)
    }

    const getFilterTarget = (e) => {
        setFilter(e.target.value)
    }

return(
    <form action="" className="shopFilter">
        <select name="typeTarget" id=""
        onChange={(e) => getTypeTarget(e)}>
            <option  value="T-Shirt">T-Shirt</option>
            <option value="V-Shirt">V-Shirt</option>
            <option value="">Hoodie</option>
            <option value="">Kaputzen-Hoodie</option>
        </select>
        <select name="filterTarget" id=""
        onChange={(e) => getFilterTarget(e)}>
            <option value="low">Preis up</option>
            <option value="high">Preis down</option>
            <option value="new">Neuheiten</option>
            <option value="top">Topseller</option>
        </select>
    </form>
)
}