import './ItemCount.css'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
  if(quantity < stock) {
    setQuantity(quantity + 1)
  }
}

const decrement = () => {
  if(quantity > 1) {
    setQuantity (quantity - 1)
  }
}


return (
  <div className="Counter">
    <div className="Contorls">
    <Button variant="secondary" className="Button" onClick={decrement}>-</Button>
    <h4 className="Number">{quantity}</h4>
    <Button variant="secondary" className="Button" onClick={increment}>+</Button>
    </div> 
    <div>
      <Button variant="warning"className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</Button>
        
    </div>
  </div>
)
}

export default ItemCount;