import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`} className='item__link'>
            <Card style={{ width: '18rem' }} className='item__card' >
                <Card.Img variant="top" src={item.img} className='item__img' />
                <Card.Body>
                    <Card.Title className='item__title'>{item.title}</Card.Title>
                    <Card.Text className='item__text'>${item.price}</Card.Text>
                    <Button variant="danger" id={item.id}>Comprar</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}

Item.proptype = {
    id: Proptypes.element.isRequired,
    title: Proptypes.element.isRequired,
    pictureUrl: Proptypes.element.isRequired,
    price: Proptypes.element.isRequired,
}

export default Item;