import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  const [ quantityAdded, setQuantityAdded ] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

      const item = {
        id, name, price, img
      }

      addItem(item, quantity)
  }

  return (
    <>
      <div className='TitleConteiner'>
        <h4 className='Title'>Detalle producto:</h4>
      </div>
      <Card className='CardItem'>
        <Card.Img className='itemImg' variant="top" src={img} />
        <Card.Body>
          <Card.Text>
           <h3>{name}</h3>
           <p>{description}</p>
           <p>Categoría: {category} | Stock disponible: {stock}</p>
           <p className='price'>${price}</p>
           <div className='ItemFooter'>
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className='Option'>
                    <Button variant="warning">Ir al carrito</Button>
                  </Link>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
              }
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail