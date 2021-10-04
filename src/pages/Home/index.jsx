import React from "react";
import Product from "../../components/Product";
import "./styles.css";
export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://cdn.moreappslike.com/com.amazon.avod.thirdpartyclient-header.png"
        alt="img"
      />
      <div className="home__row">
        <Product
          id="1231"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
        <Product
          id="12313"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123134"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
        <Product
          id="123121"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
        <Product
          id="123179"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231086"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://inducol.com.co/wp-content/uploads/2021/03/Lavadora-Inducol-Semiautomatica-7kg-06.jpg"
        />
      </div>
    </div>
  );
}
