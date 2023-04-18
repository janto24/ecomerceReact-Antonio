import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <>
      <Card className='CardItem'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>
           <h3>{name}</h3>
           <p>{description}</p>
           <p>Categoría: {category} | Stock disponible: {stock}</p>
           <p className='price'>${price}</p>
           <div className='ItemFooter'>
              <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(quantity)} />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>

    /*
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Categoría: {category}
        </p>
        <p className='Info'>
          Descripción: {description}
        </p>
        <p className='Info'>
          Precio: {price}
        </p>
        <p className='Info'>
          Stock: {stock}
        </p>
      </section>
      
    </article>
    */
  )
}

export default ItemDetail