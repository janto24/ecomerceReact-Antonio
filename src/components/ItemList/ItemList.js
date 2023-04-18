import './ItemList.css'
import Item from "../Item/Item"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"

const ItemList = ({products}) => {
  return (
    <div className='Body'>
      <Row xs={1} md={2} className="g-4">
        {products.map((prod, id) => (
          <Col key={id}>
            <Card>
              <Card.Img variant="top" src={prod.img} />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                  {prod.description}
                </Card.Text>
                <Card.Text>
                <Button as={Link} to={`/item/${prod.id}`} className="Option">Ver detalle</Button>  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ItemList;
