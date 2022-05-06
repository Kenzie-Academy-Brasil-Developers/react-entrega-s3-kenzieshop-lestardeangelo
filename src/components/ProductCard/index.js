import { useDispatch } from "react-redux";
import { Container, DescriptionContainer, NameContainer, PriceContainer, ImageContainer, ContainerCartDescription, ImgBuy, ImgRemove } from './styles'
import Button from '../Button'
import {addToCartMiddler, removeFromCartMiddler} from '../../store/modules/cart/middler'
import trashIcon from '../../assets/trash.png'
import cartIcon from '../../assets/cart.png'

const Product = ({ product, isRemovable}) => {

  const dispatch = useDispatch()

  const { id, name, price, description, image, } = product

  return (<>
      {isRemovable ? (
        <Container>
          <ImageContainer src={image} alt={name}/>
          <ContainerCartDescription>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceContainer>
          </ContainerCartDescription>
          <Button onClick={() => dispatch(removeFromCartMiddler(id))}>
            <ImgRemove src={trashIcon} alt="remover item" />
          </Button>
        </Container>
      ) : (
        <Container>
          <ImageContainer src={image} alt={name}/>
          <NameContainer>{name}</NameContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
          <PriceContainer>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceContainer>
          <Button onClick={() => dispatch(addToCartMiddler(product))}>
          <ImgBuy src={cartIcon} alt="adicionar item" />
          </Button>
       </Container>
      )}
    </>
  )
}

export default Product
