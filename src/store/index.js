import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import cartReducer from "./modules/cart/reducer"
import productsReducer from "./modules/productsObject/reducer"
import thunk from "redux-thunk"


const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
