import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer />} />
                        <Route exact path='/equipos' element={<ItemListContainer />} />
                        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                        <Route exact path='/accesorios' element={<ItemListContainer />} />
                        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route exact path='/ayuda' element={<ItemListContainer />} />
                    </Routes>
                </main>
            </Layout>
        </BrowserRouter>
    );
};

export default App;