import React from 'react';

const ProductDescription = ({ products, onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-gray-300 shadow-lg z-50 w-full max-w-md md:max-w-lg lg:max-w-xl overflow-y-auto">
      <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>X</button>
      <h2 className="text-xl font-bold mb-4">{products.name}</h2>
      <p>{products.price}</p>
      <p>{products.category}</p>
      <p className='text-base'>{products.description}</p>
    </div>
  );
};

export default ProductDescription;
