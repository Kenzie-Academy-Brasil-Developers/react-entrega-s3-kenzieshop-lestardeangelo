import {Container, CartContent, Header, HeaderCart, CartContainer, TransitionContainer} from './styles'
import Products from "../../components/ProductsRender"
import Cart from "../../components/Cart"


function Home({product}){

    return<>
    <Header>
        <header>
            <h1>Kenzie Shop</h1>
        </header>
    </Header>
    
     <Container>

        <Products />
    </Container>
    <TransitionContainer>

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