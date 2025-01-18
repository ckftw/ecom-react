/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductCard from "./ProductCard";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import styles for react-toastify
import SearchComponent from "./SearchComponent";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState('all')
  const products = useSelector((state) => state.cartItems.products);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchTerm);

  const addProducttoCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`,{
      autoClose:1500
    })
  };

  const filteredProducts  = products.filter((product)=>{
    const matchesSearch = product.title.toLowerCase().includes(debouncedValue.toLowerCase());
    const matchesCategory = category==="all" || product.category===category;
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Search and Category Filters */}
      <div className="flex gap-4 mb-4 mt-2">
      <SearchComponent value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        >
          <option value="all">All Products</option>
          <option value="mobiles">Mobiles</option>
          <option value="laptops">Laptops</option>
          <option value="watches">Watches</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Product List */}
      <div className="flex items-center flex-wrap justify-between">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              addProducttoCart={addProducttoCart}
              product={product}
              key={product.id}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Products;
