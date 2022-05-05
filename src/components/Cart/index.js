import { useSelector } from "react-redux";
import Product from "../ProductCard";
import { Container } from './styles'

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <Container>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable></Product>
      ))}
    </Container>
  )
}

export default Cart
