import Image from "next/image";
import Rating from "@/components/Rating";

export default function AdminBanner() {
    return (
        <div className="bg-indigo-600">
            <div className="container m-auto flex justify-between h-64 py-8 items-start">
                <div className="logo flex items-center">
                    <span className="m-2">
                        <Image
                            src="/user-adminAvatar.webp"
                            alt="avatar"
                            height="100px"
                            className="m-2 rounded-full border border-transparent"
                            width="100px"
                        />
                    </span>
                    <div className="profile-details">
                        <h3 className="text-white font-semibold text-loose">
                            John Doe Studio
                        </h3>
                        <p className="text-gray-100">Member since ...</p>
                    </div>
                </div>
                <div className="sales-details flex justify-around text-white w-1/4 items-center">
                    <div className="total-sales">
                        <h3 className="font-medium">Total sales</h3>
                        <h1 className="font-bold text-2xl">426</h1>
                    </div>
                    <div className="seller-rating">
                        <h6 className="font-medium">Seller rating</h6>
                        <Rating rate={4} />
                        <p className="text-sm text-gray-400">
                            Based on 98 reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
