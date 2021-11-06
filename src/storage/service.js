export const getProductos = new Promise((res, rej) => {
  const listaProductos = require('./products.json')
  res(listaProductos);
})