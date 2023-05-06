import './CartItem.css'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const [totalSubPrice, setTotalSubPrice] = useState(price * quantity);

  
  useEffect(() => {
    setTotalSubPrice(price * quantity); 
  }, [quantity, price]);


  
  return (
    
    <tr>
      <td><Button className='SupButton' variant="danger" onClick={() => removeItem(id)}>X</Button></td>
      <td>{name}</td>
      <td><img className='CartThumb' src={img} alt={name}></img></td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>${totalSubPrice}</td>
    </tr>
      
  );
};

export default CartItem;