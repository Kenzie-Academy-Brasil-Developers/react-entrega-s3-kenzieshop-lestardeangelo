import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../store/modules/cart/actions";
import {} from './styles'
import Button from '../Button'

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, description, image, } = product;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <span>{price}</span>
      {isRemovable ? (
        <Button onClick={() => dispatch(removeFromCart(id))}>
          Remover
        </Button>
      ) : (
        <Button onClick={() => dispatch(addToCart(product))}>
          Adicionar
        </Button>
      )}
    </div>
  );
};

export default Product;
