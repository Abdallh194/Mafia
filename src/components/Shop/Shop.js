import React, { useEffect, useState } from "react";
import axios from "axios";
// import Hy from "./hyundai.png";
// import toy from "./toyota.png";
// import bmw from "./bmw.png";
// import merc from "./mercedce.png";
// import mg from "./mg.png";
// import skda from "./skoda.png";
// import jeep from "./jeep.png";
// import kia from "./kia.png";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import { AddCarToCart } from "../../Redux/CarSlice";

function Shop() {
  let dispatch = useDispatch();

  let [AllCars, setAllCars] = useState([]);
  useEffect(() => {
    axios.get("/Data.json").then((res) => setAllCars(res.data.Cars));
  });

  return (
    <div className="Shop" id="Shop">
      <div className="container">
        <div className="head">Available Cars</div>
        {/* <div className="row">
          <Bounce cascade>
            <div className="col-md-3 ShopCard_01">
              <img src={toy} className="img-fluid" alt="" />
              <div className="title">Toyota Corolla</div>
              <p className="price">30000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("Toyota Corolla"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_02">
              <img src={skda} className="img-fluid" alt="" />
              <div className="title">Škoda</div>
              <p className="price">60000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("Škoda"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_01">
              <img src={kia} className="img-fluid" alt="" />
              <div className="title">KIA Sportage</div>
              <p className="price">100000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("KIA Sportage"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_02">
              <img src={merc} className="img-fluid" alt="" />
              <div className="title">Mercedes-Benz</div>
              <p className="price">200000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("Mercedes-Benz"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_02">
              <img src={bmw} className="img-fluid" alt="" />
              <div className="title">BMW X6 M</div>
              <p className="price">200000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("BMW X6 M"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_01">
              <img src={jeep} className="img-fluid" alt="" />
              <div className="title">Jeep</div>
              <p className="price">300000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("Jeep"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_02">
              <img src={Hy} className="img-fluid" alt="" />
              <div className="title">HYUNDAI</div>
              <p className="price">70000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("HYUNDAI"));
                }}
              >
                buy
              </div>
            </div>
            <div className="col-md-3 ShopCard_01">
              <img src={mg} className="img-fluid" alt="" />
              <div className="title">MG ZS SUV</div>
              <p className="price">60000$</p>
              <div
                className="buy"
                onClick={(e) => {
                  dispatch(AddCarToCart("MG ZS SUV"));
                  e.target.innerText = " ✓ selected";
                  e.target.classList.add("Selected");
                  e.target.parentElement.classList.add("SelectedCart");
                }}
              >
                buy
              </div>
            </div>
          </Bounce>
        </div> */}
        <div className="row">
          {AllCars.map((item) => {
            return (
              <Bounce bottom>
                <div className="col-md-3 ShopCard_01" key={item.id}>
                  <img src={item.CarImg} className="img-fluid" alt="" />
                  <div className="title">{item.CarTitle}</div>
                  <p className="price">{item.price} $</p>
                  <div
                    className="buy"
                    onClick={(e) => {
                      dispatch(AddCarToCart(item));
                    }}
                  >
                    buy
                  </div>
                </div>
              </Bounce>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
