import { useState } from 'react';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

import { products as productList } from './assets/data';

import './App.css'


function App() {
  const [products, setProducts] = useState(productList);
  const handleAddProduct = (newProduct) =>{
    newProduct.id = new Date().getTime();
    console.log(newProduct)
    setProducts([...products,newProduct]);
 }
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductList products={products}/>
      <ProductForm onAddContac ={handleAddProduct}/>
     
    </div>
  )
}

export default App
