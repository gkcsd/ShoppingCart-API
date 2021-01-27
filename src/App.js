import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const alreadyItemAdded = cartItem.findIndex((array) => {
      return array.id == item.id;
    });

    if (alreadyItemAdded !== -1) {
      toast("already added item", {
        type: "error",
      });
    }

    setCartItem([...cartItem, item]);
  };

  //Buy Now Method:
  const buyNow = () => {
    setCartItem([]);

    toast("Purchase Complete", {
      type: "success",
    });
  };

  //Remove Method:
  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} />
    </div>
  );
}

export default App;
