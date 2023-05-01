import { products } from "./data"
import './ProductList.css'

function ProductList() {

  return (
    <div className='product-list'>
      <div className='product-list__title'>
        <h2 className="title">Product List</h2>
        <button className="add-button">Add</button>
      </div>
      <ul>
        <li className="product-list__titles">
          <span className="detail-type1">PRODUCT NAME</span>
          <span className="detail-type2">COLOR</span>
          <span className="detail-type2">CATEGORY</span>
          <span className="detail-type2">PRICE</span>
        </li>
        {products.map((product) => (
          <li key={product.id} className="product-list__item">
            <span className="detail-type1">{product.name}</span>
            <span className="detail-type2">{product.color}</span>
            <span className="detail-type2">{product.category}</span>
            <span className="detail-type2">{product.price}</span>
            <span className="detail-type3">Edit / Delete</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList;

