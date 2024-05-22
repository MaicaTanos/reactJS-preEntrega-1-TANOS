const ItemDetail = ({ id, nombre, img, categoria, precio, detalle, stock }) => {
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
            <section>
                <p>
                    Categoría: {categoria}
                </p>
                <p>
                    datos: {detalle}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad => console.log('Cantidad agregada ', cantidad))} />
            </footer>
        </article>
    )
}

export default ItemDetail