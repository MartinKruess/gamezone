import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
  };
  console.log(drop)

  return (
    <section className="navbarContainer">
      <Link className="spacer"></Link>
      <Link className="button" to="/live/streamplan" >Streamplan</Link>
      <Link className="button" to="/mygame/celestabyss" >Celest Abyss</Link>
      <Link className="button" onClick={toggleDropdown}>
        Shop
        {drop && <Dropdown />}
      </Link>
    </section>
  );
};
