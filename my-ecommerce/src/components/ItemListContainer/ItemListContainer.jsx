import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return(
        <section className='contenedor'>
            <div className="divGreeting">
                <h1>{greeting}</h1>
            </div>
        </section>
    )

}
export default ItemListContainer