import Categories from "@/components/Categories";
import productArray from "@/json/trending-product.json";
import Product from "./Product";

export default function Products() {
    return (
        <section className="products container bg-white relative">
            <Categories />
            <h3 className="text-center">Trending products</h3>
            <div className="products-group flex">
                {productArray.map((product) => (
                    <Product product={product} key={product.name} />
                ))}
            </div>
        </section>
    );
}
