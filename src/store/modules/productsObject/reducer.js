const defaultState = [
  { id: 1, name: "Smart TV ", price: 2.699, description: 'Smart TV 50” Crystal 4K Samsung 50AU7700 - Wi-Fi Bluetooth HDR Alexa Built in 3 HDMI 1 USB', image: ''},
  { id: 2, name: "iPhone 11", price: 3.989, description: 'iPhone 11 Apple 128GB Branco 6,1” 12MP iOS', image: ''},
  { id: 3, name: "Samsung Galaxy A20s", price: 1.299, description: 'Smartphone Samsung Galaxy A20s 32GB Azul 4G - 3GB RAM Tela 6,5” Câm. Tripla + Câm. Selfie 8MP', image: ''},
  { id: 4, name: "Fritadeira Elétrica", price: 279.00, description: 'Fritadeira Elétrica sem Óleo/Air Fryer Nell Smart - Preta 2,4L com Timer', image: ''},
  { id: 5, name: "Samsung Galaxy A33", price: 2.249, description: 'Smartphone Samsung Galaxy A33 128GB Azul 5G - 6GB RAM 6,4” Câm. Quádrupla + Selfie 13MP', image: ''},
  { id: 6, name: "Notebook Gamer", price: 7.067, description: 'Notebook Gamer Acer Nitro 5 Intel Core i7 8GB - 512GB SSD 15,6” FULL HD NVIDIA GeForce GTX 1650', image: ''},
];

const productsReducer = (state = defaultState, action) => {
  console.log("Products", action);
  return state;
};

export default productsReducer;
