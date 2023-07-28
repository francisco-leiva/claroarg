import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Item from '../Item/Item'
import { getProducts } from '../../functions/firebase'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  const filterPhones = products
    .filter((prod) => prod.type === 'cellphones')
    .slice(0, 3)
  const filterAccessories = products
    .filter((prod) => prod.type === 'accessories')
    .slice(0, 3)

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <picture>
            <source
              media='(max-width: 845px)'
              srcSet='https://images.ctfassets.net/weuwbjv1v9lc/6Y8Gs9kv0STCRuqfb7eByB/751c0fc76c8337a93941f7142a5ed841/descuento-celulares-accesorios-40-tienda-claro-mobile.webp'
            />
            <img
              className='d-block w-100'
              src='https://images.ctfassets.net/weuwbjv1v9lc/5nOszX8ZwSjbHxtzq9naaY/031b4d21169713f03f5628b209fc5cdb/descuento-celulares-accesorios-45-tienda-claro-desktop.webp'
              alt='Descuento 45% celulares y accesorios'
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              media='(max-width: 845px)'
              srcSet='https://images.ctfassets.net/weuwbjv1v9lc/5bugJ9tmaTbtjwBCbJOYOB/226a485b8d78d742bcfb0be49d963e9f/moto-edge-30-ultra-neo-12-cuotas-tienda-claro-mobile.webp'
            />
            <img
              className='d-block w-100'
              src='https://images.ctfassets.net/weuwbjv1v9lc/4m0bFuLcCj0WGqbg55eHbU/8d4ed942a548a78725cfaf1c11d4e0af/moto-edge-30-ultra-neo-12-cuotas-tienda-claro-desktop.webp'
              alt='12 cuotas tienda claro'
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              media='(max-width: 845px)'
              srcSet='https://images.ctfassets.net/weuwbjv1v9lc/3UiWrzUkcMpUidY5zXgDF6/ead9af183225169d0c95d678c3abdfc4/galaxy-s23-series-lanzamiento-tienda-claro-mobile.webp'
            />
            <img
              className='d-block w-100'
              src='https://images.ctfassets.net/weuwbjv1v9lc/1bWgGnliGUsLuAPz4sj4IH/ea0ec02408d6e7fe7eeb0cbc29ef5b42/galaxy-s23-series-lanzamiento-tienda-claro-desktop.webp'
              alt='12 cuotas galaxy watch y buds2 pro'
            />
          </picture>
        </Carousel.Item>
      </Carousel>

      <div className='home__sections'>
        <div className='home__title'>
          <div>
            <h5>Celulares destacados</h5>
          </div>
          <div>
            <Link to={'/cellphones'}>Ver todos {'>'}</Link>
          </div>
        </div>

        <div className='home__products'>
          {filterPhones.map((prod) => {
            return <Item item={prod} key={prod.id} />
          })}
        </div>
      </div>

      <div className='home__sections'>
        <div className='home__title'>
          <div>
            <h5>Accesorios destacados</h5>
          </div>
          <div>
            <Link to={'/accessories'}>Ver todos {'>'}</Link>
          </div>
        </div>

        <div className='home__products'>
          {filterAccessories.map((prod) => {
            return <Item item={prod} key={prod.id} />
          })}
        </div>
      </div>
    </>
  )
}
