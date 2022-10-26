import React, { useState } from "react";
import { useSelector } from "react-redux";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import ModalView from "./Modal";
function Cart() {
  let cartInfo = useSelector((state) => state.car.CartCar);
  let totalPrice = 0;
  let [SubmitCart, setSubmitCart] = useState(null);
  let [modalInfo, setmodalInfo] = useState("");
  let [username, setuserName] = useState("");
  for (let i = 0; i < cartInfo.length; i++) {
    totalPrice += cartInfo[i].price * cartInfo[i].qty;
  }
  let OpenModal = (data) => {
    setmodalInfo(data);
  };
  let CloseModal = () => {
    setmodalInfo(false);
  };
  return (
    <div className="Cart">
      <h1>Purchase List</h1>

      {cartInfo.map((item) => {
        return (
          <Bounce left>
            <div className="CartInfo" key={item.id}>
              <img src={item.CarImg} className="img-fluid" alt="" />
              <div className="title">{item.CarTitle}</div>
              <div className="price">
                {item.price}$ x {item.qty}
              </div>
            </div>
          </Bounce>
        );
      })}

      <hr />
      <div className="totol">Total : {totalPrice}</div>
      <i
        className="bi bi-x CloseCart"
        onClick={() => {
          document.querySelector(".Cart").style.left = "-100%";
        }}
      ></i>
      <div
        className="submitCart"
        onClick={() => {
          setSubmitCart(true);
        }}
      >
        Confirm and pay now
      </div>
      {SubmitCart ? (
        <Zoom>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              OpenModal(username);
              document.querySelector(".Cart").style.left = "-100%";
            }}
          >
            <h1>Fill info</h1>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control"
                  onChange={(e) => setuserName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Mobile No"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Country"
                  className="form-control"
                  required
                />
              </div>
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Zoom>
      ) : (
        ""
      )}
      <ModalView
        closeModal={CloseModal}
        username={username}
        openModal={modalInfo}
      />
    </div>
  );
}

export default Cart;
