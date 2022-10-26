import React from "react";
import img from "./plan.png";
import Bounce from "react-reveal/Bounce";
function Plan() {
  return (
    <div className="Plan" id="Plan">
      <div className="container">
        <h1 className="headMobile">OUR PLAN</h1>
        <div className="row">
          <Bounce bottom>
            <div className="col-md-4 plan_card plan_card_01 ">
              <i class="bi bi-broadcast-pin"></i>
              <h2 className="head">BROADCAST</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia,
              </div>
            </div>
            <div className="col-md-4 plan_card plan_card_02">
              <i class="bi bi-bar-chart-line-fill"></i>
              <h2 className="head">CONNECT</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia,
              </div>
            </div>
            <div className="col-md-6 plan_card lg_card">
              <img src={img} alt="plan img" className="img-fluid" />
            </div>
            <div className="col-md-6  lg_card Text_lg_Card">
              <p>OUR PLAN</p>
              <div className="head">
                We offer you the best and cheapest plans
              </div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Officia, quisquam quaerat
                quia omnis ut porro
              </div>
              <div className="more">View More Plans</div>
            </div>
            <div className="col-md-4 plan_card plan_card_01">
              <i class="bi bi-envelope-paper-fill"></i>
              <h2 className="head">ENVELOPE</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro Lorem, ipsum dolor
                sit amet
              </div>
            </div>
            <div className="col-md-4 plan_card plan_card_02">
              <i class="bi bi-pc-display"></i>
              <h2 className="head">DISPLAY</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro Lorem, ipsum dolor
                sit amet
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Plan;
