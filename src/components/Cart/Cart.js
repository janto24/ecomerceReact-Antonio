import './Cart.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Cart = () => {
  const { cart, clearCart, totalQuantity, updateTotal } = useContext(CartContext)

  const total = updateTotal();

  if(totalQuantity === 0 ) {
    return (
      <div>
        <h1>No hay elementos en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div> 
    )
  }

  return (
    <div className='CartCointeiner'>
      <h3 className='CartTitle'>Carrito de compras</h3>
      <Table className='CartTable'>
      <thead>
        <tr>
          <th>x</th>
          <th>Producto</th>
          <th>Img</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>subTotal</th>
        </tr>
      </thead>
      <tbody>
        
       { cart.map(p => <CartItem key={p.id} {...p}/>) } 
      </tbody>
      </Table>
      
      <h3>Total: ${total}</h3>
      <Button onClick={() => clearCart()} className='Button'>Limpiar carrito</Button>
      <Link to='/checkout' className='Option'>
      <Button variant="warning">Pagar</Button>
      </Link>
    </div>
  )
}

export default Cart;