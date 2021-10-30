import Image from "next/image";

export default function Nav() {
    return (
        <nav className="bg-white">
            <div className="content flex justify-around p-4 container flex-column m-auto">
                <div className="menu">
                    <Image
                        height="35px"
                        width="150px"
                        alt="logo"
                        src="/logo-dark.png"
                        layout="fixed"
                    />
                    <input placeholder="Search for products" />
                    <div className="icons"></div>
                </div>
                <div className="links">

									<span className="divider"></span>
									
								</div>
            </div>
        </nav>
    );
}
