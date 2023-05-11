import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from 'firebase/firestore';
import Item from '../Item/Item';

const Home = () => {
  const [cellphones, setCellphones] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    // getting cellphones and accessories from db
    const cellphonesCollection = query(
      collection(db, 'itemsCollection'),
      where('type', '==', 'cellphones'),
      limit(3)
    );
    const accessoriesCollection = query(
      collection(db, 'itemsCollection'),
      where('type', '==', 'accessories'),
      limit(3)
    );

    // setting cellphones
    getDocs(cellphonesCollection).then((snapshot) => {
      setCellphones(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    // setting accessories
    getDocs(accessoriesCollection).then((snapshot) => {
      setAccessories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

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
          {cellphones.map((prod) => {
            return <Item item={prod} key={prod.id} />;
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
          {accessories.map((prod) => {
            return <Item item={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
