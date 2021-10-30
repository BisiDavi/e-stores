import Categories from "@/components/Categories";
import productArray from "@/json/trending-product.json";
import Product from "./Product";

export default function Products() {
    return (
        <section className="trending-product container bg-white relative m-auto">
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
        </section>
    );
}
