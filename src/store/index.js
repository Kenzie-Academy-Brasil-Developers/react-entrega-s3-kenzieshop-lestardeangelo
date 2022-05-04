import { legacy_createStore as createStore, combineReducers } from "redux";
import cartReducer from "./modules/cart/reducer";
import productsReducer from "./modules/productsObject/reducer";


const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(reducers);

export default store;
