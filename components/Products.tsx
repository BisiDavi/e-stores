import Categories from "@/components/Categories";
import productArray from "@/json/trending-product.json";
import Product from "./Product";

export default function Products() {
    return (
        <section className="trending-product mb-20 container bg-white relative m-auto">
            <Categories />
            <div className="content">
                <h3 className="text-center font-semibold text-3xl mb-20">
                    Trending products
                </h3>
                <div className="products-group grid grid-cols-4">
                    {productArray.map((product) => (
                        <Product product={product} key={product.name} />
                    ))}
                </div>
            </div>
            <a
                href="#more-products"
                className="border justify-center items-center border-blue-400 bg-white p-4 text-blue-400 hover:text-white hover:bg-blue-500 rounded-lg flex m-auto w-40 font-medium"
            >
                More Products
            </a>
        </section>
    );
}
