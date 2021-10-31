import Image from "next/image";
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
        <section className="product flex flex-col m-4 p-8 relative hover:shadow-lg">
            <span className="bg-gray-300 rounded-full p-4 h-10 w-10 flex justify-center items-center absolute right-6 top-6">
                <i className="far fa-heart mx-4 hover:text-red-500"></i>
            </span>
            <Image
                src={product.img}
                alt={product.name}
                height="250px"
                width="250px"
                layout="fixed"
            />
            <div className="product-details flex flex-col">
                <h6 className="text-gray-500 text-md">{product.category}</h6>
                <h3 className="text-gray-900 text-lg text-loose">
                    {product.name}
                </h3>
                <span className="flex justify-start items-center">
                    <h6 className="text-blue-400 text-xl mr-3">
                        $ {product.price.toFixed(2)}
                    </h6>
                    {product.oldPrice && (
                        <h6 className="line-through">
                            $ {product.price.toFixed(2)}
                        </h6>
                    )}
                </span>
            </div>
        </section>
    );
}
