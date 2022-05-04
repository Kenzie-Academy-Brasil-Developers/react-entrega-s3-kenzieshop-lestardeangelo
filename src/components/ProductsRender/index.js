import { useSelector } from "react-redux";
import Product from "../ProductCard";
import { Container } from './styles'

const Products = () => {
  const products = useSelector(({ products }) => products);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
