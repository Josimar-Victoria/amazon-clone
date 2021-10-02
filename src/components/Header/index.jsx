import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/login">
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
          <Link className="header__link">
            <div className="header__option">
              <spn className="header__optionLineOne">Hello qazi</spn>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <Link className="header__link">
            <div className="header__option">
              <spn className="header__optionLineOne">Returns</spn>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link className="header__link">
            <div className="header__option">
              <spn className="header__optionLineOne">Your</spn>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
