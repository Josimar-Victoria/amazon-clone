import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import HeaderButtom from "./HeaderButtom";
import "./styles.css";
export default function Header() {
  const [{ basket }] = useStateValue();
  console.log('===>',basket)
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img
            className="header__logo"
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt="logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <HeaderButtom LineOne="Hello qazi" LineTwo="Sign In" />
          <HeaderButtom LineOne="Returns" LineTwo="& Orders" />
          <HeaderButtom LineOne="Your" LineTwo="Prime" />

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
