import React from 'react';
import Product from './components/Product';

function App() {  
  return (
    <div>
      <Product name = "Apple" price = "1$" description = "fresh" />
      <Product name = "Banana" price = "2$" description = "fresh" />
    </div>
  );
}

export default App;
