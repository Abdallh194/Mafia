import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Portfilo from "./components/Portfilo/Portfilo";
import Plan from "./components/Plan/Plan";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
function App() {
  let cartInfo = useSelector((state) => state.car.CartCar);
  return (
    <BrowserRouter>
      {cartInfo.length > 0 ? (
        <i
          className="bi bi-basket CartSection"
          data-lenght={cartInfo.length}
          onClick={() => {
            document.querySelector(".Cart").style.left = "0%";
          }}
        ></i>
      ) : (
        ""
      )}
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfilo />
      <Shop />
      <Cart />
      <Plan />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
