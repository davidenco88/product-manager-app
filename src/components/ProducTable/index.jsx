import ProductCard from '../ProductCard';

import './ProductList.css';

const ProductList = ({ products = [] }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-list__item">
        <ProductCard value1 ={product.value1} 
          value2 ={product.value2} 
          value3 ={product.value3}
          value4 ={product.value4}/>
        </div>
        
      ))}
    </div>
  );
};

export default ProductList;
