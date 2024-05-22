import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProductos, getProdCategoria } from '../../assyncMock'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunc =categoriaId ? getProdCategoria : getProductos

        asyncFunc(categoriaId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoriaId])

    return(
        <section className='contenedor'>
            <div className="divGreeting">
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
            </div>
        </section>
    )

}
export default ItemListContainer