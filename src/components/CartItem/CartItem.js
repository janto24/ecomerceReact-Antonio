import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const [totalSubPrice, setTotalSubPrice] = useState(price * quantity);

  useEffect(() => {
    setTotalSubPrice(price * quantity);
  }, [quantity, price]);

  return (
    <div className='CartItem'>
      <div className='CartItemInfo'>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
          <p>subTotal: ${totalSubPrice}</p>
        </div>
      </div>
      <button onClick={() => removeItem(id)}>Remover</button>
    </div>
  );
};

export default CartItem;
