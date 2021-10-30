import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const sliderArray = [
    {
        img: "/slider-1",
        bg: "rgb(58, 175, 210)",
        text: "Has just arrived",
        title: "Huge Summer Collection",
        description: "Swimwear, Tops, Shorts, Sunglasses & much more...",
    },
    {
        img: "/slider-2",
        bg: "rgb(245, 177, 176)",
        text: "Hurry up! Limited time offer",
        title: "Women Sportswear Sale",
        description: "Sneakes, Keds, Sweatshirts, Hoodies & much more...",
    },
    {
        img: "/slider-3",
        bg: "rgb(235, 161, 112)",
        text: "Complete your look with",
        title: "New Men's Accessories",
        description: "Hats & Caps, Sunglasses, Bags, & much more...",
    },
];

export default function Slider() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {sliderArray.map((slider) => (
                <SwiperSlide key={slider.img}>
                    <div
                        style={{ backgroundColor: `${slider.bg}` }}
                        className="slider-container w-full flex items-center justify-end"
                    >
                        <img src={`${slider.img}.webp`} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
