import Image from "next/image";
import Button from "./Button";

export default function AdBanner() {
    return (
        <div className="banner grid grid-cols-3 container m-auto gap-12 my-4 px-20">
            <div className="adbanner-1 flex rounded-lg border border-transparent col-start-1 col-end-3 w-full bg-gray-50">
                <div className="text flex flex-col p-12 w-full">
                    <h6 className="text-gray-400 my-2 font-light">
                        Hurry up! Limited time offer
                    </h6>
                    <h2 className="text-3xl text-loose font-semibold text-gray-700">
                        Converse All Star on Sale
                    </h2>
                    <Button className="lg:w-32 lg:text-sm" text="Shop Now" />
                </div>
                <img
                    src="/banner-1.webp"
                    //height="300px"
                    //width="600px"
                    alt="ad-banner"
                    className="border rounded-lg border-transparent"
                    //layout="fixed"
                />
            </div>
            <div
                style={{ backgroundImage: 'url("/banner-2-bg.webp")' }}
                className="adbanner-2 flex flex-col justify-center items-center"
            >
                <h4 className="font-semibold text-loose text-2xl text-gray">
                    Your Ad Banner Here
                </h4>
                <p className="font-medium text-gray-500 mt-2 mb-6 text-md">
                    Hurry up to reserve your spot
                </p>
                <Button className="lg:w-32 lg:text-sm" text="Contact us" />
            </div>
        </div>
    );
}
