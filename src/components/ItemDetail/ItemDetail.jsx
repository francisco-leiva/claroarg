import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CartContext } from '../../context/CartContext';

const ItemDetail = () => {
  const [prod, setProd] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { itemId } = useParams();
  const { addToCart, totalQuantityCart, totalPrice } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const getProd = doc(db, 'itemsCollection', itemId);

    getDoc(getProd).then((snapshot) => {
      if (snapshot.exists()) {
        setProd([{ id: snapshot.id, ...snapshot.data() }]);
      }
    });
  }, [itemId]);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: quantity,
      totalPrice: product.price * quantity,
    });
    totalQuantityCart();
    totalPrice();
  };

  return (
    prod &&
    prod.map((product) => {
      return (
        <div className='itemDetail' key={product.id}>
          <div className='itemDetail__img'>
            <img src={product.imgDetail} alt={product.title} />
          </div>

          <div className='itemDetail__info'>
            <div className='itemDetail__info__description'>
              <h3 className='itemDetail__info__title'>{product.title}</h3>
              <h4 className='itemDetail__info__price'>${product.pagePrice}</h4>
            </div>

            <div className='itemDetail__info__shop'>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Cantidad
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={quantity}
                    label='Cantidad'
                    onChange={handleChange}
                  >
                    {product.stock.map((number) => {
                      return (
                        <MenuItem key={`menuItem-${number}`} value={number}>
                          {number}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>

              <button
                className='itemDetail__info__addToCart'
                onClick={() => handleAddToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default ItemDetail;
