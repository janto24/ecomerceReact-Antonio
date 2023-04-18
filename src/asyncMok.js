
const products = [
  {
    id: `boca-01`,
    name: `Boca`,
    price: 2500,
    img: "../img/lscarpia/boca-01.jpg",
    category: `boca`,
    stock: 5,
    description: `Boca Jurniors`
  },
  {
    id: `boca-mutad-uno`,
    name: `Boca`,
    price: 2500,
    img: `../img/lscarpia/boca-mitad-uno.jpg`,
    category: `boca`,
    stock: 5,
    description: `Boca leyenda Mitad más uno`
  },
  {
    id: `racing-01`,
    name: `Racing`,
    price: 2500,
    img: `../img/lscarpia/racing-01.jpg`,
    category: `racing`,
    stock: 5,
    description: `La Academia`
  },
  {
    id: `indpte-01`,
    name: `Independiente`,
    price: 2500,
    img: `../img/lscarpia/indpte-01.jpg`,
    category: `independiente`,
    stock: 5,
    description: `Independiente Rey de Copas`
  },
  {
    id: `rcentral-01`,
    name: `Rosario Central`,
    price: 2500,
    img: `../img/lscarpia/rcentral-01.jpg`,
    category: `rcentral`,
    stock: 5,
    description: `Rosario Central - Canayas`
  },
  {
    id: `river-01`,
    name: `River`,
    price: 2500,
    img: `../img/lscarpia/river-01.jpg`,
    category: `river`,
    stock: 5,
    description: `River Plate`
  },
  {
    id: `river-02`,
    name: `River`,
    price: 2500,
    img: `../img/lscarpia/river-02.jpg`,
    category: `river`,
    stock: 5,
    description: `River Plate`
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsByCategory = (productCategory) => {
  return new Promise ((resolve) => { 
    setTimeout (() => {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
  }) 
}

export const getProductsById = (productId) => {
  return new Promise ((resolve) => { 
    setTimeout (() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  }) 
}