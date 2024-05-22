import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProductos, getProductoCategoria } from '../../assyncMock'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunc =categoriaId ? getProductoCategoria : getProductos

        asyncFunc(categoriaId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoriaId])


    useEffect(() => {
        getProductos()
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])


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