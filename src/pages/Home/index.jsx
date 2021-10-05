import React from "react";
import Product from "../../components/Product";
import "./styles.css";
export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.tourinews.es/uploads/s1/15/70/62/amazon-el-actor-clave-en-la-industria-hotelera.png"
        alt="img"
      />
      <div className="home__row">
        <Product
          id="1231"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://depor.com/resizer/oClhVPZAKjRk0GGJtwk-z95cDeo=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3NGKVSHNCJHI7CZTEIHI7PLB3U.jpg"
        />
        <Product
          id="12313"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://exitocol.vtexassets.com/arquivos/ids/4526538-800-auto?width=800&height=auto&aspect=true"
        />
      </div>
      <div className="home__row">
        <Product
          id="123134"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/assets/latin/2108/home/HOME_Q2_KV_IM-KV_624X352.jpg?$624_352_PNG$"
        />
        <Product
          id="123121"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/71fiGVM88cL._AC_SS450_.jpg"
        />
        <Product
          id="123179"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://www.geekets.com/wp-content/uploads/2015/01/camara-apple.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231086"
          title="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
          price={11.49}
          rating={5}
          image="https://icdn.dtcn.com/image/digitaltrends_es/samsung-smart-tv-720x480.jpg"
        />
      </div>
    </div>
  );
}
