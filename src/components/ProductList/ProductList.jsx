
import './ProductList.css'

function ProductList({products}) {

  return (
    <div className='product-list'>

      <div className='product-list__main-title'>
        <h2 className="title">Product List</h2>
        <button className="add-button">Add</button>
      </div>

      <div className="background-list">
        <div className="product-list__titles">
          <span className="detail-type1">PRODUCT NAME</span>
          <span className="detail-type2">COLOR</span>
          <span className="detail-type2">CATEGORY</span>
          <span className="detail-type2">PRICE</span>
        </div>

        {products.map((product) => (
          <div key={product.id} className="product-list__item">
            <div className="detail-type1"><span>{product.name}</span></div>
            <div className="detail-type2"><span>{product.color}</span></div>
            <div className="detail-type2"><span>{product.category}</span></div>
            <div className="detail-type2"><span>{product.price}</span></div>
            <div className="detail-type3"><span>Iconos</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;

