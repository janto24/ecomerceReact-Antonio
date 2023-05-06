import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, collection, writeBatch, getDocs, query, where, doc, documentId, addDoc } from 'firebase/firestore';
import { db } from '../FiberbaseEcommerce/database';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const Checkout = () => {
  const [ loading, setLoading ] = useState(false)
  const [ orderId, setOrderId ] = useState('')

  const { cart, clearCart, updateTotal } = useContext(CartContext)

  const total = updateTotal();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: total, 
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)
      
      const outOfStock = []

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'products')

      const productsAddedFromFirebase = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirebase

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const productQuantity = productAddedToCart?.quantity

        if(stockDb >= productQuantity) {
          batch.update(doc.ref, { stock: stockDb - productQuantity})
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc})
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id);
        clearCart()
      } else {
        console.error('Hay productos fuera de stock')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }
  
  if(loading) {
    return <h1>Se está generando su orden</h1>
  }

  if(orderId) {
    return <h1>El id de su compra es: {orderId}</h1>
  } else {
  return (
    <div>
      <h1>CheckOut</h1>
      <CheckOutForm onConfirm={createOrder} />
    </div>
  )
  }
}


export default Checkout;



