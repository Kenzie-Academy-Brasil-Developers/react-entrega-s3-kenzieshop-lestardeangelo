import { useSelector } from "react-redux";
import Product from "../ProductCard";
import {} from './styles'

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable></Product>
      ))}
    </div>
  );
};

export default Cart;
