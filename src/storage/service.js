export const getProductos = new Promise((res, rej) => {
  const listaProductos = require('./products.json')
  setTimeout(() => {
    res(listaProductos)    
  }, 3000);
})