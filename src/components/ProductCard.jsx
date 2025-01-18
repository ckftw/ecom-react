/* eslint-disable react/prop-types */

const ProductCard = ({ product, addProducttoCart }) => {
    return (
        <div className="w-64 h-auto bg-white my-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col">
            <img
                src={product.image}
                alt="Product"
                className="w-full h-60  rounded-t-lg"
            />

            <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 truncate">
                    {product.title}
                </h2>
                <p className="text-gray-700 mt-1 text-lg font-medium">
                    $ {product.price}
                </p>
                <button
                    onClick={() => addProducttoCart(product)}
                    className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
