import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyimage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Price: $ {item.productPrice}</span>
                <Button onClick={() => removeItem(item)}>Remove Item</Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* If everything is empty */}

      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Totoal</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button className="success" onClick={buyNow}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart Is empty</h1>
      )}
    </Container>
  );
};
export default Cart;
