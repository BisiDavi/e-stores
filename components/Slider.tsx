import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    EffectFade,
    Autoplay,
    Mousewheel,
    Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

const sliderArray = [
    {
        img: "/slider-1",
        bg: "rgb(58, 175, 210)",
        text: "Has just arrived",
        title: "Huge Summer Collection",
        description: "Swimwear, Tops, Shorts, Sunglasses & much more...",
        type: "first",
    },
    {
        img: "/slider-2",
        bg: "rgb(245, 177, 176)",
        text: "Hurry up! Limited time offer",
        title: "Women Sportswear Sale",
        description: "Sneakes, Keds, Sweatshirts, Hoodies & much more...",
        type: "second",
    },
    {
        img: "/slider-3",
        bg: "rgb(235, 161, 112)",
        text: "Complete your look with",
        title: "New Men's Accessories",
        description: "Hats & Caps, Sunglasses, Bags, & much more...",
        type: "third",
    },
];
interface SliderProps {
    edit?: boolean;
}
export default function Slider({ edit }: SliderProps) {
    const autoplaySlider = edit ? false : true;
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[
                Autoplay,
                Navigation,
                Pagination,
                Mousewheel,
                Keyboard,
                EffectFade,
            ]}
            autoplay={autoplaySlider}
            effect="fade"
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
        >
            {sliderArray.map((slider) => (
                <SwiperSlide key={slider.img}>
                    <div
                        style={{ backgroundColor: `${slider.bg}` }}
                        className="slider-container w-full flex items-center justify-end"
                    >
                        <div className="slider-text text-white flex flex-col">
                            <h3 className="text-3xl">
                                {slider.text}
                                {edit && <i className="fas fa-pencil-alt ml-4"></i>}
                            </h3>
                            <h1 className="text-5xl leading-relaxed">
                                {slider.title}{" "}
                                {edit && <i className="fas fa-pencil-alt ml-4"></i>}
                            </h1>
                            <p className="text-xl">
                                {slider.description}
                                {edit && <i className="fas fa-pencil-alt ml-4"></i>}
                            </p>
                            <button className="bg-red-400 hover:bg-red-600 bordered rounded w-40 h-12 my-6 text-xl">
                                Shop Now
                            </button>
                        </div>
                        <img src={`${slider.img}.webp`} alt={slider.title} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
