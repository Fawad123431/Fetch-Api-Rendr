import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set products data
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.substring(0, 100)}...</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Category: {product.category}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;