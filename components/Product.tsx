interface ProductProps {
    product: {
        name: string;
        img: string;
        category: string;
        price: number;
        oldPrice?: number;
        colorOption?: string[];
        sizeOption?: string[];
    };
}
export default function Product({ product }: ProductProps) {
    return (
        <div className="product flex flex-col mx-4">
            <span className="bg-white rounded-full p-4 h-20 w-20">
                <i className="far fa-heart mx-4"></i>
            </span>
            <img src={product.img} alt={product.name} />
            <div className="product-details flex flex-col">
                <h6 className="text-gray-500 text-md">{product.category}</h6>
                <h3 className="text-gray-900 text-lg text-loose">
                    {product.name}
                </h3>
                <span className="flex justify-between items-center">
                    <h6 className="text-blue-400 text-xl mr-3">
                        {product.price}
                    </h6>
                    {product.oldPrice && (
                        <h6 className="text-line-through">{product.price}</h6>
                    )}
                </span>
            </div>
        </div>
    );
}
