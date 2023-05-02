import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import ProductForm from './components/ProductForm'
import { products as productList } from "./data"
import { useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState(productList)

  const handleAddProduct = (newProduct) =>{
    newProduct.id = new Date().getTime();
    console.log(newProduct)
    setProducts([...products,newProduct]);
 }

return (
  <>
    <Header />
    <div className='main-container'>
      <ProductList products={products}/>
      <ProductForm onAddContac ={handleAddProduct}/>
    </div>
  </>
)
}

export default App