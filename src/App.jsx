import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cellphones from './components/Cellphones/Cellphones';
import Accessories from './components/Accessories/Accessories';
import Help from './components/Help/Help';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/cellphones' element={<Cellphones />}>
                            <Route exact path='category/:categoryId' element={<Cellphones />} />
                        </Route>
                        <Route exact path='/accessories' element={<Accessories />}>
                            <Route exact path='category/:categoryId' element={<Accessories />} />
                        </Route>
                        <Route exact path='/help' element={<Help />} />
                        <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route exact path='/cart' element={<CartContainer />} />
                        <Route exact path='/checkout' element={<Checkout />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
};

export default App;