import { useDispatch } from "react-redux";
import { removeFromCart, updateItemQuantity } from "../redux/cartSlice";

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 space-y-4 sm:space-y-0"
        >
            {/* Product Image and Details */}
            <div className="flex items-center space-x-4 w-full sm:w-3/5">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                />
                <div className="truncate">
                    <p className="text-lg font-semibold">{item.title}</p>
                </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2 w-full sm:w-1/5 justify-center">
                <button
                    disabled={item.quantity === 1}
                    onClick={() =>
                        dispatch(updateItemQuantity({ type: "DECREASE", id: item.id }))
                    }
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                >
                    -
                </button>
                <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-10 text-center border border-gray-300 rounded"
                />
                <button
                    disabled={item.quantity >= 10}
                    onClick={() =>
                        dispatch(updateItemQuantity({ type: "INCREASE", id: item.id }))
                    }
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                >
                    +
                </button>
            </div>

            {/* Product Price */}
            <div className="w-full sm:w-1/5 flex justify-center">
                <p className="text-lg font-semibold">$ {item.price}</p>
            </div>

            {/* Delete Button */}
            <div className="flex items-center justify-center w-full sm:w-1/5">
                <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-600 font-semibold"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;
