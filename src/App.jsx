import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

import { useState } from 'react'
import './App.css'


function App() {

  return (
    <>
      <Header />
      <div className='main-container'>
        <ProductList />
      </div>
    </>
  )
}

export default App
