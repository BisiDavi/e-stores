import Image from "next/image";
import Link from "next/link";
import menuLinks from "@/json/menu-links.json";

export default function Nav() {
    return (
        <nav className="bg-white">
            <div className="content flex py-4 container flex-col m-auto">
                <div className="menu justify-between flex items-center">
                    <Image
                        height="35px"
                        width="150px"
                        alt="logo"
                        src="/logo-dark.webp"
                        layout="fixed"
                    />
                    <input
                        className="border border-gray-200 focus:ring-red-200 focus:border-transparent focus:outline-none focus:ring-2 focus:border-red-500 focus:border-red-500 p-2 rounded px-4 w-1/2"
                        placeholder="Search for products"
                    />
                    <div className="icons flex items-center justify-between">
                        <i className="far fa-heart mx-4"></i>
                        <div className="flex mx-4 items-center">
                            <i className="far fa-user mr-2"></i>
                            <div className="flex-col flex mx-2">
                                <p className="text-gray-500 text-sm">
                                    Hello, Sign in
                                </p>
                                <h6>My Account</h6>
                            </div>
                        </div>
                        <div className="cart-icon rounded bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center relative">
                            <div className="badge bg-red-500 text-white rounded-full w-4 h-4 p-3 flex items-center justify-center absolute bottom-8 left-8">
                                4
                            </div>
                            <i className="fas fa-shopping-cart  mx-3"></i>
                        </div>
                        <div className="my-cart flex flex-col mx-4">
                            <p className="text-gray-500 text-sm">My Cart</p>
                            <h6>$265.00</h6>
                        </div>
                    </div>
                </div>
                <div className="links">
                    {menuLinks.map((menu) =>
                        menu.subCategories ? (
                            <button key={menu.name} className="m-3 ml-0">
                                {menu.name}
                            </button>
                        ) : (
                            <Link href={menu.link} key={menu.name} passHref>
                                <a className="m-3">{menu.name}</a>
                            </Link>
                        ),
                    )}
                    <span className="divider"></span>
                </div>
            </div>
        </nav>
    );
}
