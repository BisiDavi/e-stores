import Link from "next/link";

export default function Categories() {
    const categories = [
        { img: "/men-category.webp", name: "Men", link: "#men" },
        { img: "/women-category.webp", name: "Women", link: "#women" },
        { img: "/kid-category.webp", name: "Kids", link: "#kids" },
    ];
    return (
        <div style={{ height: "180px" }} className="productCategories relative">
            <div className="container absolute bottom-8 z-10 w-1/2 left-52">
                <div className="categories p-4 bordered border-rounded bg-white flex my-4 shadow-lg rounded-md">
                    {categories.map((category) => (
                        <Link key={category.name} href={category.link} passHref>
                            <a className="category m-4">
                                <img src={category.img} alt={category.name} />
                                <h6 className="text-center my-2 text-lg">
                                    {category.name}
                                </h6>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
