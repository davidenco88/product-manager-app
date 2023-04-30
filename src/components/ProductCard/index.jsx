import './style.css';

const ProductCard = (props) => {
const  {value1, value2, value3, value4} = props;
  return (
    <div className="product-card">     
      <div className="product-card__info">
      <table>
            <tr>
              <th>Campo1</th>
              <th>Campo2</th>
              <th>Campo3</th>
              <th>Campo4</th>
            </tr>
            <tr>
              <td className="product-card__value1">{value1}</td>
              <td className="product-card__value2">{value2}</td>
              <td className="product-card__value3">{value3}</td>
              <td className="product-card__value4">{value4}</td>
            </tr>
          </table>
      </div>
    </div>
  );
};

export default ProductCard;
