"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import { EffectCards, Navigation, Pagination,Autoplay } from "swiper/modules";
const listImage = [ "/thiep_2.jpg","/thiep_1.png",];
export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Navigation,Autoplay]}
      autoplay={true}
      speed={1000}
      loop={true}
      lazy={true}
      breakpoints={{ 640: { slidesPerView: 2 } }}
      slidesPerView={1}
      grabCursor={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      {listImage.map((el, idx) => {
        return (
          <SwiperSlide key={idx} className="flex justify-center" style={{display:"flex"}}>
            <Image src={el} width={600} height={300} alt="text" className="md:w-[400px] md:h-[600px]" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
