import { useSelector } from "react-redux";
import Product from "../ProductCard";
import {} from './styles'

const Products = () => {
  const products = useSelector(({ products }) => products);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
