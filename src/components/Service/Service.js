import React from "react";
import Fade from "react-reveal/Fade";
function Service() {
  return (
    <div className="Service" id="Service">
      <div className="container">
        <div className="row">
          <Fade right>
            <div className="col-md-6 service_card_lg">
              <div className="head">We provide latest and best services</div>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Officia, quisquam quaerat
                quia omnis ut porro
              </div>
              <div className="Learn">Learn More</div>
            </div>
            <div className="col-md-2 service_card_sm">
              <i class="bi bi-battery-charging"></i>
              <h2 className="head">ReCharge</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro
              </div>
              <div className="showMore">Show More</div>
            </div>
            <div className="col-md-2 service_card_sm center_card">
              <i class="bi bi-cpu-fill"></i>
              <h2 className="head">CPU</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro
              </div>
              <div className="showMore">Show More</div>
            </div>
            <div className="col-md-2 service_card_sm">
              <i class="bi bi-speedometer"></i>
              <h2 className="head">SPPED</h2>
              <div className="desc">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quisquam quaerat quia omnis ut porro
              </div>
              <div className="showMore">Show More</div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
    // <div className="Service">
    //   <div className="container">
    //     <div className="row">
    //       {Data.map((el) => {
    //         return (
    //           <div key={el.id} className="">
    //             <p>{el.id}</p>
    //             <p>{el.title}</p>
    //             <p>{el.icon_name}</p>
    //             <p>{el.body}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Service;
