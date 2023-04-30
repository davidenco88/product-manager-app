import './style.css';

const ProductCard = (props) => {
const  {value1, value2, value3, value4} = props;
  return (
    <div className="product-card">
      
      <div className="product-card__info">
          <h2 className="product-card__value1">{value1}</h2>
          <p className="product-card__value2">{value2}</p>
          <p className="product-card__value3">{value3}</p>
          <p className="product-card__value4">{value4}</p>
      </div>
    </div>
  );
};

export default ProductCard;
