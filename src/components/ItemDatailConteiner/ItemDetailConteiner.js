import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../FiberbaseEcommerce/database';


const ItemDetailConteiner = ( {gretting} ) => {
  const [ product, setProduct ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error => {
        console.error(error)
      })
     .finally(() => {
        setLoading(false)
      }) 
  }, [itemId])

  return(
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailConteiner
