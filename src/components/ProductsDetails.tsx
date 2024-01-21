import { Product } from "../types/types";

type ProductProps = {
  product: Product;
};
const ProductsDetails = ({ product }: ProductProps) => {
  return (
    <div>
      {product?.title} |{product?.price}|{product?.category}
    </div>
  );
};

export default ProductsDetails;
