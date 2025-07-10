import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderProduct = products.map((product) => (
    <div className='w-[30%] mr-4 mb-4  border shadow' key={product.id}>
      <img className='w-full h-[30vh] object-cover' src={product.image} alt="product" />
      <h1>{product.title}</h1>
      <small>{product.description ? product.description.slice(0, 100) : ''}...</small>
      <div className='flex justify-between items-center p-3 mt-3'>
        <p>{product.price}</p>
        <button>Add to cart</button>
      </div>
      <Link className='block text-center w-full' to={`/product/${product.id}`}>More Info</Link>
    </div>
  ));

  return products.length > 0 ? (
    <div className='overflow-auto flex flex-wrap'>
      {renderProduct}
    </div>
  ) : (
    <div>Loading..</div>
  );
}

export default Products;
