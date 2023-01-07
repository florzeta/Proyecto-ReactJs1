import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { consultarBDD } from '../../assets/funciones.js'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        if (category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }


    },[category]);

    return (
        <div className='row cardProductos m-6 ' >
            {productos}
        </div>

    );
}

export default ItemListContainer;
