import Item from '../Item/Item';

const ItemList = ({ list }) => {
    return (
        list.map(prod => {
            return (
                <Item item={prod} key={prod.id} />
            )
        })
    );
};

export default ItemList;