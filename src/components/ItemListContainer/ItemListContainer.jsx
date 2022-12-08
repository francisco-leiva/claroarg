import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { Categories } from '../../mock';

const ItemListContainer = () => {

  return (
    <div className='itemListContainer'>
      <div className='itemListContainer__filtros'>
        <h4 className='itemListContainer__title'>Categorías</h4>
        <ul>
          {
            Categories.map((category) => {
              const key = `category-${category.name}-${category.id}`;
              return (
                <li key={key}><Link to={`/category/${category.id}`} className='itemListContainer__category'>{category.name}</Link></li>
              )
            })
          }
        </ul>
      </div>
      <div className='itemListContainer__catalogo'>
        <ItemList />
      </div>
    </div>

  )
}

export default ItemListContainer;