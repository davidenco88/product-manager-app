import './ProductList.css'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function ProductList({ products, onDeleteProduct}) {

  const handleDelete = (event, key) => {
    onDeleteProduct(key);
  }

  const handleEdit = (event, key) => {
    console.log('Edit');
  }

  return (
    <div className='product-list'>

      <div className='product-list__main-title'>
        <h2 className="title">Product List</h2>
        <button className="button">Add</button>
      </div>

      <div className="background-list">
        <div className="product-list__titles">
          <span className="detail-type1">PRODUCT NAME</span>
          <span className="detail-type1">COLOR</span>
          <span className="detail-type1">CATEGORY</span>
          <span className="detail-type1">PRICE</span>
        </div>

        {products.map((product) => (
          <div key={product.id} className="product-list__item" >
            <div className="detail-type1"><span>{product.name}</span></div>
            <div className="detail-type2"><span>{product.color}</span></div>
            <div className="detail-type2"><span>{product.category}</span></div>
            <div className="detail-type2"><span>{product.price}</span></div>
            <div className="detail-type3">
              <span className='icons' onClick={event => handleEdit(event, product.id)}>
                <FaEdit />
              </span>
              <span className='icons' onClick={event => handleDelete(event, product.id)}>
                <FaTrash />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;

