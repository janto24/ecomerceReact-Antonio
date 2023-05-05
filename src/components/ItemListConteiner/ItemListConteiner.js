import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMok'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListConteiner = ({ gretting }) => {
  const [products, setProducts] = useState ([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts

    asynFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
    }, [categoryId])


  return (
    <div>
        <h1>{gretting}</h1>
        <ItemList products={products}/>
    </div>
  )
}


export default ItemListConteiner;
