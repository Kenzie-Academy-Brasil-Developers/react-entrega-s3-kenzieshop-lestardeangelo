const defaultState = [

  { id: 1, name: "Smart TV ", 
  price: 2699, 
  description: 'Smart TV 50” Crystal 4K Samsung 50AU7700 - Wi-Fi Bluetooth HDR Alexa Built in 3 HDMI 1 USB', 
  image: 'https://a-static.mlcdn.com.br/618x463/smart-tv-50-crystal-4k-samsung-50au7700-wi-fi-bluetooth-hdr-alexa-built-in-3-hdmi-1-usb/magazineluiza/193441200/dcdbdf49e5bfb2e7259c948e72708a8a.jpg'},

  { id: 2, 
    name: "iPhone 11", 
    price: 3989, 
    description: 'iPhone 11 Apple 128GB Branco 6,1” 12MP iOS', 
    image: 'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-128gb-branco-61-12mp-ios/magazineluiza/155611200/af1cd7d9c89d7306b52490a0ce1b8b34.jpg'},

  { id: 3, 
    name: "Samsung Galaxy A20s", 
    price: 1299, 
    description: 'Smartphone Samsung Galaxy A20s 32GB Azul 4G - 3GB RAM Tela 6,5” Câm. Tripla + Câm. Selfie 8MP', 
    image: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a20s-32gb-azul-4g-octa-core-3gb-ram-cam-tripla-cam-selfie-8mp/magazineluiza/155568900/838801ba49e3a336b611b8f7475445fc.jpg'},

  { id: 4, 
    name: "Fritadeira Elétrica", 
    price: 279.00, 
    description: 'Fritadeira Elétrica sem Óleo/Air Fryer Nell Smart - Preta 2,4L com Timer', 
    image: 'https://a-static.mlcdn.com.br/1500x1500/fritadeira-eletrica-sem-oleo-air-fryer-nell-smart-preta-24l-com-timer/magazineluiza/222478900/2bad1a94a6d8f75b3f84e6f194680b83.jpg'},

  { id: 5, 
    name: "Samsung Galaxy A33", 
    price: 2249, 
    description: 'Smartphone Samsung Galaxy A33 128GB Azul 5G - 6GB RAM 6,4” Câm. Quádrupla + Selfie 13MP', 
    image: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a33-128gb-azul-5g-6gb-ram-64-cam-quadrupla-selfie-13mp/magazineluiza/234750700/86971072fcd3b0782a8c6c3d73627dc4.jpg'},

  { id: 6, 
    name: "Notebook Gamer", 
    price: 7067, 
    description: 'Notebook Gamer Acer Nitro 5 Intel Core i7 8GB - 512GB SSD 15,6” FULL HD NVIDIA GeForce GTX 1650', 
    image: 'https://a-static.mlcdn.com.br/618x463/notebook-gamer-acer-nitro-5-intel-core-i7-8gb-512gb-ssd-156-full-hd-nvidia-geforce-gtx-1650/magazineluiza/233854400/d784178188b6dfb25023a71512ad0573.jpg'},

]

const productsReducer = (state = defaultState, action) => {
  return state
}

export default productsReducer
