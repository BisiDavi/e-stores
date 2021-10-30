import Nav from "@/components/Nav";

export default function Header() {
    return (
        <header className="bg-gray-700">
            <div className="topbar flex justify-around p-2 container m-auto text-white">
                <p>Support (00) 33 169 7720</p>

                <span>Free shipping for order over $200</span>

                <div className="orderTracking">
                    <span>
                        <p>Order tracking</p>
                    </span>
                </div>
            </div>
            <Nav />
        </header>
    );
}
