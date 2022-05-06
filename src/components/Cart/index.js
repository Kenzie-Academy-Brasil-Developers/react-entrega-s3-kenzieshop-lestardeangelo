import { useSelector } from "react-redux";
import Product from "../ProductCard";
import { Container, ContainerInfo, MessageH1, MessageP } from './styles'

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <Container>
       {cart.length === 0 ?
          <ContainerInfo>
            <MessageH1>Sua sacola está vazia</MessageH1>
              <MessageP>Adicione itens</MessageP>
          </ContainerInfo>
       :<>
          {cart.map((product) => (
            <Product key={product.id} product={product} isRemovable/>
          ))}
        </>
      }
    </Container>
  )
}

export default Cart
