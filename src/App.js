import React,{useState} from 'react';
import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import ProductsGrid from './pages/store/ProductsGrid'

function App() {
  
 
 
return(
    <HelmetProvider>
      <ProductsContextProvider>
        
        <CartContextProvider>
         
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider> 
);
}
export default App;