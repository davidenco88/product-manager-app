import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import { products as productList } from "./data"
import { useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState(productList)

  const addProduct = (newProduct) => {
    const newID = new Date();
    newProduct.id = newID;
    setProducts([...products, newProduct])
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