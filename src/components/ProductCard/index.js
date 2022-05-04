import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../store/modules/cart/actions";
import { Container, DescriptionContainer, NameContainer, PriceContainer, Content } from './styles'
import Button from '../Button'


const Product = ({ product, isRemovable = false }) => {

  const dispatch = useDispatch();

  const { id, name, price, description, image, } = product;

  return (
    <Container>
        <NameContainer>{name}</NameContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
        <PriceContainer>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceContainer>
        {isRemovable ? (
          <Button onClick={() => dispatch(removeFromCart(id))}>
            Remover
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToCart(product))}>
            Adicionar
          </Button>
        )}
    </Container>
  );
};

export default Product;
