import Item from '../Item/Item'

export default function ItemList({ list }) {
  return list.map((prod) => {
    return <Item item={prod} key={prod.id} />
  })
}
