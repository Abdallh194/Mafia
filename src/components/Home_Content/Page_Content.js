import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Plan from "../Plan/Plan";
import Portfilo from "../Portfilo/Portfilo";

import Service from "../Service/Service";

function PageContent() {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Portfilo />
      <Plan />
      <Footer />
    </div>
  );
}

export default PageContent;
