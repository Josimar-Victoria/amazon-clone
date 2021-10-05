import React from "react";
import { Link } from "react-router-dom";

export default function HeaderButtom({ LineOne, LineTwo, link }) {
  return (
    <div>
      <Link to={`${link}`} className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">{LineOne}</span>
          <span className="header__optionLineTwo">{LineTwo}</span>
        </div>
      </Link>
    </div>
  );
}
