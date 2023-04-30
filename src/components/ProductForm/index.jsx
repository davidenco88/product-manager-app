import { useState } from 'react';

import './ProductForm.css';

const ProductForm = ({onAddContac}) => {
  const [product, setProduct] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
      setProduct({
        ... product,
        [name]:value,
      })
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddContac(product)

    // Clear form
    setProduct({})
  };

  return (
    <div className='container'>
      <h2 className="product-form__title">Agregar producto</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div>
          <div className="product-form__column">
            <label className="product-form__label">
              Valor 1:
            </label>
            <input
              type="text"
              name="value1"
              placeholder='Enter value 1'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Valor 2:
            </label>
            <input
              type="text"
              name="value2"
              placeholder='Enter value 2'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Valor 3:
            </label>
            <input
              type="text"
              name="value3"
              placeholder='Enter value 3'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Valor 4:
            </label>
            <input
              type="text"
              name="value4"
              placeholder='Enter value 4'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="product-form__button">
          Agregar
        </button>
      </form>
    </div>

  );
};

export default ProductForm;
