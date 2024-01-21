import { useEffect, useState } from "react";
import { Product } from "../types/types";
import ProductsDetails from "../components/ProductsDetails";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product: Product) => (
        <ProductsDetails product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default Home;
