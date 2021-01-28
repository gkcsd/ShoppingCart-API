import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

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
      return;
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
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
