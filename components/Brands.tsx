const brands = [
    "/brand-1.webp",
    "/brand-2.webp",
    "/brand-3.webp",
    "/brand-4.webp",
    "/brand-5.webp",
    "/brand-6.webp",
    "/brand-7.webp",
    "/brand-8.webp",
    "/brand-9.webp",
    "/brand-10.webp",
    "/brand-11.webp",
    "/brand-12.webp",
];

export default function Brands() {
    return (
        <section className="brands container m-auto my-6 mb-24">
                <h4 className='text-center text-4xl my-8 font-medium'>Shop by Brands</h4>
            <div className="grid grid-cols-4 gap-10">
                {brands.map((brand) => (
                    <div
                        key={brand}
                        className="brand p-20 h-24 flex justify-center items-center shadow-lg"
                    >
                        <img src={brand} alt={brand} />
                    </div>
                ))}
            </div>
        </section>
    );
}
