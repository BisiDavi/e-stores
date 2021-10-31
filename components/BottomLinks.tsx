export default function BottomLinks() {
    return (
        <section className="grid grid-cols-2">
            <div className="blog-section flex flex-col p-20 bg-pink-200 justify-center items-center">
                <i className="far fa-edit text-red-400 fa-2x m-3"></i>
                <h4 className="text-center font-semibold text-2xl text-loose">
                    Read the blog
                </h4>
                <p className="text-sm text-gray-800">
                    Latest store, fashion news and trends
                </p>
            </div>
            <div className="socia-links flex flex-col p-20 bg-purple-200 justify-center items-center">
                <i className="fab fa-instagram text-blue-400 fa-2x m-3"></i>
                <h4 className="text-center font-semibold text-2xl text-loose">
                    Follow on Instagram{" "}
                </h4>
                <p className="text-sm text-gray-800">#Sailfishcommerce</p>
            </div>
        </section>
    );
}
