const ItemList = ({productos }) => {
    return(
        <div>
            {productos.map(prod => <item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList