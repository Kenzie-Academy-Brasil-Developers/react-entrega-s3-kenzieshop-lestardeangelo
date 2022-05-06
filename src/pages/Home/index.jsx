import {Container, CartContent, Content, Header, HeaderCart, CartContainer, TransitionContainer} from './styles'
import Button from '../../components/Button'
import Products from "../../components/ProductsRender"
import Cart from "../../components/Cart"
import {useState} from 'react'
import cartimage from  '../../assets/cart.svg'

function Home(){

    const [display, setDisplay] = useState("none")

    const GoToCart = () => {

        if (display === "none") {
            setDisplay("flex")

        }else if (display === "flex") {
            setDisplay("none")
        }
    }

    return<>
    <Header>
        <header>
            <h1>Kenzie Shop</h1>
            <Button onClick={() => GoToCart()}>
                <img src={cartimage} alt="carrinho de compras" />
            </Button>
        </header>
    </Header>
    
     <Container>

        <Products />
  
    </Container>
    <TransitionContainer display={display}>
        <HeaderCart>
            <header>
                <h1>Carrinho de compras</h1>
            </header>
        </HeaderCart>

    <CartContainer>
        <CartContent>
            <Cart >
                <h1>Sua sacola está vasia</h1>
            </Cart>        
        </CartContent>
    </CartContainer>
    </TransitionContainer>
    </>
}

export default Home