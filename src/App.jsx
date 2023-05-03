import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import ProductForm from './components/ProductForm'
import ProductEditForm from './components/ProductEditForm'
import { products as productList } from "./data"
import { useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState(productList)
  const [product, setProduct] = useState({}) 
  const handleAddProduct = (newProduct) => {
    newProduct.id = new Date().getTime();
    console.log(newProduct)
    setProducts([...products, newProduct]);
  }

  const onDeleteProduct = (idDelete) => {
    const productsFilter = products.filter((product) => product.id !== idDelete);
    setProducts(productsFilter);
  }
   const onSelectProduct = (productEdit) => {
    //console.log(productEdit)
    setProduct(productEdit);
  }
  console.log(product)
  return (
    <>
      <Header />
      <div className='main-container'>
        <ProductList products={products} onDeleteProduct={onDeleteProduct} onSelectProduct ={ onSelectProduct}/>
        <ProductForm onAddContac={handleAddProduct} />
        <ProductEditForm productEdit={product} />
      </div>
    </>
  )
}

export default App