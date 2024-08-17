const ProductCard = ({ product }) => {
    return (
        <div className="transition-transform transform hover:scale-105 duration-300">
            <div className="card bg-base-100 w-90 shadow-xl">
                <figure className="w-full h-[400px]">
                    <img className="h-full w-96 object-cover"
                        src={product?.image}
                        alt={product?.name || "Product Image"} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between text-gray-500">
                        <p>{product?.created_date}</p>
                        <p>{product?.created_time}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <h2 className="card-title text-xl">{product?.name}</h2>
                        <p className="text-teal-500 text-lg">{product?.ratings}</p>
                    </div>
                    <p className="text-lg mt-2">
                        Brand: <span className="text-teal-500 ml-5">{product?.brand}</span>
                    </p>
                    <p className="mt-2">{product?.description.substring(0, 100)}...</p>
                    <div className="card-actions justify-end text-teal-500 font-bold mt-4">
                        <p className="text-xl">${product?.price}</p>
                        <button className="btn bg-cyan-500 text-white text-lg border-none hover:bg-teal-800">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
