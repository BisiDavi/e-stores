import Link from "next/link";

export default function Categories() {
    const categories = [
        { img: "", name: "Men", link: "#men" },
        { img: "", name: "Women", link: "#women" },
        { img: "", name: "Kids", link: "#kids" },
    ];
    return (
        <div className="container">
            <div className="categories p-4 bordered border-rounded bg-white">
                {categories.map((category) => (
                    <Link key={category.name} href={category.link} passHref>
                        <a>
                            <div className="category">
                                <img src={category.img} alt={category.name} />
                                <h6>{category.name}</h6>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
