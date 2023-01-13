import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContex";
const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }
    
    return (
        <div className={`row ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
            <div className="col-md-4 imgBody">
                <img src={item.img} alt="img" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary border border-dark'}`}><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
            
            </div>
         
         </div>
    );
}

export default ItemDetail;