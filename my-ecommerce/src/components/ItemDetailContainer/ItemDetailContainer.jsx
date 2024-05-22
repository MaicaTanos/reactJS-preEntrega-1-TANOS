import { useEffect, useState } from "react"
import { getIdProductos } from "../../assyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {itemId} = useParams()

    useEffect(() =>{ 
        getIdProductos(itemId)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer