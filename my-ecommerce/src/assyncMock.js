const productos = [
  {
    id: '1',
    nombre: 'Potus Lemon',
    precio: 1500,
    categoria: 'plantas',
    stock: '10',
    img: './img/POTUS LEMON.webp',
    detalle: 'Potus variedad Lemon. Diferentes tamaños. Es de interior'
  },
  {
    id: '2',
    nombre: 'Fitonia',
    precio: 2100,
    categoria: 'plantas',
    stock: '8',
    img: './img/FITONIA.webp',
    detalle: 'Fitonia. Diferentes tamaños. Es de interior'
  },
  {
    id: '3',
    nombre: 'Cordatum Verde',
    precio: 900,
    categoria: 'plantas',
    stock: '15',
    img: './img/CORDATUM VERDE.webp',
    detalle: 'Cordatum Verde. Diferentes tamaños. Es de interior'
  }
]




export const getProductos = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}

export const getIdProductos = (productosId) => {
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve(productos.find(prod => prod.id === productosId))
    }, 1000)
  })
}

export const getProdCategoria = (productosCategoria) => {
  return new Promise((resolve) => {
      setTimeout(() =>{
        resolve(productos.find(prod => prod.categoria === productosCategoria))
      }, 1000)
  })
}

