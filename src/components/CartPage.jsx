/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateCartTotal } from "../redux/cartSlice";
import CartItem from "./CartItem";


const CartPage = () => {
  const cartItems = useSelector(state => state.cartItems.cart);
  const totalPrice = useSelector(state=>state.cartItems.totalPrice)
  const totalQuantity = useSelector(state=>state.cartItems.totalQuantity);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(calculateCartTotal());
  },[cartItems])


  console.log('cart-items', cartItems);
  if (cartItems.length === 0) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-lg font-semibold text-gray-700">
                Your cart is empty! 🛒
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Start adding items to see them here.
            </p>
        </div>
    );
}

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Side: Cart Items */}
      <div className="lg:w-3/4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Cart - {cartItems.length} items</h2>
        <div className="space-y-6">
          {/* Product 1 */}
          {cartItems && cartItems.map((item,index)=>{
            return(
              <CartItem key={item.id} item={item} />
            )
          })}
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="lg:w-1/4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Total Quantity:</p>
          <p className="text-lg font-semibold">{totalQuantity}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Total Price:</p>
          <p className="text-lg font-semibold">$ {totalPrice.toFixed(2)}</p>
        </div>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage