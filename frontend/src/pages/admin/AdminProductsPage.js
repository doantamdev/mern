import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";

const fetchProducts = async (abctrl) => {
  try {
    const { data } = await axios.get("/api/products/admin", {
      signal: abctrl.signal,
    });
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const { data } = await axios.delete(`/api/products/admin/${productId}`);
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

const AdminProductsPage = () => {
  return (
    <ProductsPageComponent
      fetchProducts={fetchProducts}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsPage;
