import logo from './logo.svg';
import './App.css';
import Navigator from './components/navbar/navBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDatailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navigator />
          <Routes>
          <Route path='/' element={<ItemListConteiner />} />
            <Route path='/category/:categoryId' element={<ItemListConteiner />} />
            <Route path='/item/:itemId' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
