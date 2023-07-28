import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.scss'

export default function Item({ item }) {
  return (
    <Link to={`/item/${item.id}`} className='item__link'>
      <Card style={{ width: '18rem' }} className='item__card'>
        <Card.Img variant='top' src={item.img} className='item__card__img' />
        <Card.Body className='item__card__body'>
          <Card.Title className='item__card__title'>{item.title}</Card.Title>
          <Card.Text className='item__card__price'>${item.pagePrice}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
