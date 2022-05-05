import { useDispatch } from "react-redux";
import { Container, DescriptionContainer, NameContainer, PriceContainer, ImageContainer, styleContainer} from './styles'
import Button from '../Button'
import {addToCartMiddler, removeFromCartMiddler} from '../../store/modules/cart/middler'


const Product = ({ product, isRemovable}) => {

  const dispatch = useDispatch()

  const { id, name, price, description, image, } = product

  return (<>
      {isRemovable ? (
        <Container>
          <ImageContainer src={image} alt={name}/>
          <NameContainer>{name}</NameContainer>
          <Button onClick={() => dispatch(removeFromCartMiddler(id))}>
            Remover item
          </Button>
        </Container>
      ) : (
        <Container>
          <ImageContainer src={image} alt={name}/>
          <NameContainer>{name}</NameContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
          <PriceContainer>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceContainer>
          <Button onClick={() => dispatch(addToCartMiddler(product))}>
            Adicionar
          </Button>
       </Container>
      )}
    </>
  )
}

export default Product
