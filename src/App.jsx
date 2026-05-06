import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Button from "@mui/material/Button";

const App = () => {
  // TODO: Define initial product data
  const initialProducts = 
  [
    {id: 1, name: "Laptop", price: 999, inStock: true},
    {id: 2, name: "Phone", price: 699, inStock: false},
    {id: 3, name: "Tablet", price: 199, inStock: true},
    {id: 4, name: "Keyboard", price: 99, inStock: false},
  ];
const [products, setProducts] = useState(initialProducts);

const handleRemove = (id) => {
 setProducts((prev) => prev.filter((product) => product.id !== id));

};
  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState("all");
  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter((products) => 
    {
      if (filter === "inStock") return products.inStock;
      if (filter === "outOfStock") return !products.inStock;
      return true;
    });
    
    

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <Button
        variant="contained"
        onClick={() => setFilter("all")}
        style={{ marginRight: "10px"}}
      >
        All
        </Button>

      <Button
        variant="contained"
        color="success"
        onClick={() => setFilter("inStock")}
        style={{ marginRight: "10px" }}
      >
        In Stock
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() => setFilter("outOfStock")}
      >
        Out of Stock
      </Button>

      {/* Product List */}
      <ProductList products={filteredProducts} onRemove={handleRemove} />
      {/* TODO: Render the ProductList component and pass filtered products */}
      
    </div>
  );
};

export default App;
