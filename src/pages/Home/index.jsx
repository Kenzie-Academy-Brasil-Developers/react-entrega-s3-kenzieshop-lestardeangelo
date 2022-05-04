import {Container, Content, Header} from './styles'
import Button from '../../components/Button'
import Products from "../../components/ProductsRender";
import Cart from "../../components/Cart";

function Home(){

    return<>
    <Header>
        <header>
            <h1>Kenzie Shop</h1>
            <Button >Carrinho</Button>
        </header>
    </Header>
     <Container>
        <Content>
            <Products />
            <Cart />
        </Content>
    </Container>
    </>
}

export default Home