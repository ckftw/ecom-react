import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cartItems.cart);
    console.log('cartitems-navbar   ', cartItems);
    return (
        <nav className="bg-gray-800 text-white px-4 py-2">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">
                    <Link to={'/'}>
                        Safari Electronics
                    </Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li className="hover:text-yellow-300 cursor-pointer">

                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => navigate('/cart')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center"
                    >
                        <span>Cart</span>

                        {/* Number of items beside the cart */}
                        {cartItems.length > 0 && (
                            <span className="ml-2 text-white-300 font-semibold">
                                ({cartItems.length})
                            </span>
                        )}
                    </button>
                </div>


            </div>
        </nav>
    )
}

export default Navbar