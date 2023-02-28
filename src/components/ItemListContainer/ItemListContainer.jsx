import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ productsList, categories }) => {
  return (
    <>
      <img src='https://images.ctfassets.net/weuwbjv1v9lc/2K87mIHbP6vUHj1AzwTfAz/1bfcaf7a53b8c23118b09561d1f7b8d3/protege-tu-celu-tienda-claro-45-desktop.webp' alt='Protege tu celular' className='d-block w-100' />

      <div className='itemListContainer'>
        <div className='itemListContainer__categories'>
          <h4 className='itemListContainer__title'>Categorías</h4>
          <ul>
            {
              categories.map((category) => {
                const key = `category-${category.name}-${category.id}`;
                return (
                  <li key={key}><Link to={`/${category.from}/category/${category.id}`} className='itemListContainer__category'>{category.name}</Link></li>
                )
              })
            }
          </ul>
        </div>

        <div className='itemListContainer__catalogo'>
          <ItemList list={productsList} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;