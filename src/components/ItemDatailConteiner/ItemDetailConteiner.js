import { useState, useEffect } from "react";
import { getProductsById } from '../../asyncMok';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailConteiner = () => {
  const [ product, setProduct ] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getProductsById(itemId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])

  return(
    <div className='ItemDetailConteiner' >
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailConteiner
