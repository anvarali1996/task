import React, { useEffect, useState } from 'react'
import ProductDescription from './components/ProductDescrip';
import Nav from './components/Nav';
import PaginationButton from './components/Pagination';
const Yangi = () => {
     const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [product, setProduct] = useState([]);
    const recordsPerPage = 5;
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = currentPage * recordsPerPage;

      const filteredProducts = product.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.name.toUpperCase().includes(search.toUpperCase()));
  const records = filteredProducts.slice(firstIndex, lastIndex);

    
    useEffect(() => {
    setCurrentPage(1); 
  }, [search]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        fetch('https://apigenerator.dronahq.com/api/b5U_puJf/dhshs', {

        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res[0].products);
                setProduct(res[0].products);
            })
    }, []);
     const handleProductClick = (products) => {
    setSelectedProduct(products);
  };

    const handleButtonClick = (event, product) => {
    event.stopPropagation();
    setSelectedProduct(product);
    };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
      <div className='container mx-auto px-4'>
          <h1 className='text-center text-lg font-semibold py-4 bg-blue-600 text-white'>Products</h1>
          <Nav searchQuery={search} setSearchQuery={setSearch} />
          {product.length > 0 ? (
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                  {records.filter((products)=> products.name.toLowerCase().includes(search)).map((products) => (
                  
                    <div id='products'  key={products.id} onClick={() => handleProductClick(products.id)} className='bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition duration-300 transform hover:scale-105'>
                      {/* <p>ID: {products.id}</p> */}
                      <div className='p-4'>
              <p> <h2 className='text-lg font-semibold mb-2'>{products.name}</h2></p>
              <p className='text-gray-700 mb-2'>Price: {products.price} {products.currency}</p>
              <p className='text-gray-500'>Category: {products.category}</p>
                          {/* <p>Description: {products.description}</p> */}
                          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => handleButtonClick(event, products)}>Show Description</button>
          {selectedProduct && selectedProduct.name === products.name && (
                              <ProductDescription products={products} onClose={handleClose} />
                              
                        )}
                      </div>
            </div>

              ))}
 {filteredProducts.length === 0 && (
            <p className='text-gray-600 text-lg'>There is <b>no</b> such product</p>
          )}

          </div>
          ): (
              <h5>Loading...</h5>
          )}
          
          <PaginationButton currentPage={currentPage} totalPages={Math.ceil(product.length / recordsPerPage)} setCurrentPage={setCurrentPage} />
    </div>
    )
    
}

export default Yangi