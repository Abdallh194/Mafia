import React from "react";
import Bounce from "react-reveal/Bounce";
function Home() {
  return (
    <div className="Home">
      <div className="overlay">
        <div className="container">
          <Bounce top cascade>
            <div className="PageName_01">MAFIA</div>
            <div className="PageName_02">CRASH</div>
            <div className="PageDesc">
              Imagine that your dream car is now available to us Buy your
              favorite car now
            </div>
            <a href="#About" className="start">
              Start Now
            </a>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Home;
