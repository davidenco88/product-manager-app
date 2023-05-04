import { useState } from 'react';

import './ProductForm.css';

const ProductEditForm = ({productEdit}) => {
  const [product, setProduct] = useState({});
  console.log(productEdit)
  const handleChange = (event) => {
    const {name, value} = event.target;
      /*  //Find index of specific object using findIndex method.    
        objIndex = myArray.findIndex((obj => obj.id == 1));

//Log object to Console.
console.log("Before update: ", myArray[objIndex])

//Update object's name property.
      myArray[objIndex].name = "Laila"

            //Log object to console again.
     console.log("After update: ", myArray[objIndex])*/
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
              Poroduct Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={productEdit.name}
              placeholder='Enter product name'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Color:
            </label>
            <input
              type="text"
              name="color"
              defaultValue={productEdit.color}
              placeholder='Enter product color'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              Category:
            </label>
            <input
              type="text"
              name="category"
              defaultValue={productEdit.category}
              placeholder='Enter product category '
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="product-form__column">
            <label className="product-form__label">
              price:
            </label>
            <input
              type="String"
              name="price"
              defaultValue={productEdit.price}
              placeholder='Enter price value'
              className="product-form__input"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="product-form__button">
          Editar
        </button>
      </form>
    </div>

  );
};

export default ProductEditForm;