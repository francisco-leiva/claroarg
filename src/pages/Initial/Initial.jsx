import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Initial = () => {
    return (
        <Layout>
            <header>
                <Navbar />
            </header>
            <main>
                <ItemListContainer name={"Francisco"} />
            </main>
        </Layout>
    )
}

export default Initial;