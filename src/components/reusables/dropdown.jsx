import { Link } from "react-router-dom"

export const Dropdown = () => {
return (
    <div className="dropdownMenu">
        <Link to="/">Home</Link>
        <Link to="shop/extras">Sonstiges</Link>
        <Link to="/live/streamplan" >Streamplan</Link>
        <Link to="/mygame/celestabyss" >Celest Abyss</Link>
        <Link to="/shop/merch">Merch Shop</Link>
        <Link to="shop/extras">Sonstiges</Link>
        <Link to="shop/extras">Sonstiges</Link>
        
    </div>
    )
}