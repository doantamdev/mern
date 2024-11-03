import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/actions/cartActions";

const ProductDetailsPage = () => {
  const products = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart());
  };

  return (
    <ProductDetailsPageComponent
      addToCartHandler={addToCartHandler}
      products={products}
    />
  );
};

export default ProductDetailsPage;
