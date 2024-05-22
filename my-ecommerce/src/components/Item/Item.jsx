const Item = ({id, nombre, img, precio, stock}) => {

    return(
        <article>
            <div>
                <h2>
                    {nombre}
                </h2>
            </div>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <div>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Unidades disponibles: {stock}
                </p>
            </div>
            <footer>
                <link to={`/item/${id}`} >Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item 