import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderButtom({LineOne, LineTwo}) {
    return (
        <div>
            <Link className="header__link">
            <div className="header__option">
              <spn className="header__optionLineOne">{LineOne}</spn>
              <span className="header__optionLineTwo">{LineTwo}</span>
            </div>
          </Link>
        </div>
    )
}
