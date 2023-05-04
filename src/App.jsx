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
  
    setProduct(productEdit);
  }
  const onEditProduct = (event) => {
    //const productsFilter = products.filter((product) => product.id );
    console.log("lo que llega" )
    console.log( event)
    const {name, value} = event;
      setProduct({
        ... product,
        [name]:value,
      })
      //<ProductEditForm productEdit={product} onEdit={onEditProduct} />
  };
  return (
    <>
      <Header />
      <div className='main-container'>
        <ProductList products={products} onDeleteProduct={onDeleteProduct} onSelectProduct ={ onSelectProduct}/>
        <ProductForm onAddContac={handleAddProduct} />
        <ProductEditForm productEdit={product} onEditProduct={onEditProduct} />
      </div>
    </>
  )
}

export default App