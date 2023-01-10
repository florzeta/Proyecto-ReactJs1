import './App.css';
//Router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//context
import { DarkModeProvider } from '../context/DarkModeContext';
//components
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/producto/:id' element={<ItemDetailContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </DarkModeProvider>

      </BrowserRouter>
    </>
    
  );
}

export default App;
