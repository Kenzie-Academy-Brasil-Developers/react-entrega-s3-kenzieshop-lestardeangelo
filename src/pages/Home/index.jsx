import {Container, Content, Header} from './styles'
import Button from '../../components/Button'
import Products from "../../components/ProductsRender";
import Cart from "../../components/Cart";
import {useState} from 'react'

function Home(){

    const [display, setDisplay] = useState("none");

    const GoToCart = () => {

        if (display === "none") {
            setDisplay("flex");
          }

        if (display === "flex") {
            setDisplay("none")
        }
    }

    return<>
    <Header>
        <header>
            <h1>Kenzie Shop</h1>
            <Button onClick={() => GoToCart()}>Carrinho</Button>
        </header>
    </Header>
     <Container>
        <Content>
            <Products />
            <Cart GoToCart={GoToCart} display={display}/>
        </Content>
    </Container>
    </>
}

export default Home