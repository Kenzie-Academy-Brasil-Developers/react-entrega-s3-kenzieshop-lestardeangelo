import { useSelector } from "react-redux";
import Product from "../ProductCard";
import { Container } from './styles'

const Cart = ({display}) => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <Container display={display}>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable></Product>
      ))}
    </Container>
  );
};

export default Cart;
