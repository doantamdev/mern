import { Alert, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom"

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Container className="mt-2">
   <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Đã thêm sản phẩm vào giỏ hàng! </Alert.Heading>
      <p>
        <Button variant="success">
            Trở về  
        </Button> {" "}
        <Link to="/cart">
        <Button variant="danger">
            Đi tới giỏ hàng
        </Button>
        </Link>   
      </p>
    </Alert>
    </Container>
  );
};

export default AddedToCartMessageComponent;
