import { useState } from "react"



const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)
    
    const sumar =() => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    } 

    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div>
            <div>
                <button onClick={sumar}>+</button>
                <h4>{cantidad}</h4>
                <button onClick={restar}>-</button>
            </div>
            <div>
                <button onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount