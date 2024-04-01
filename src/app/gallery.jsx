"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import { EffectCards, Navigation ,Pagination} from "swiper/modules";
const listImage = [
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/0BIA.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/001-002.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/003-004.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/005-006.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/007-008.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/009-010.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/011-012.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/013-014.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/015-016.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/017-018.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/019-020.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/021-022.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/023-024.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/025-026.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/027-028.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/029-030.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/031-032.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/033-034.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/035-036.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/037-038.jpg",
  "https://ralokcjslljsqmqdbtaj.supabase.co/storage/v1/object/public/wedding-thien-trang/039-040.jpg",
];
export default function GalleryImage() {
  return (
    <Swiper
      modules={[Pagination,Navigation]}
      autoplay
      effect={"cards"}
      loop={true}
      lazy={true}
      grabCursor={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      {listImage.map((el,idx) => {
        return (
          <SwiperSlide key={idx} >
            <Image quality={50} src={el} width={1200} height={400} alt="text" style={{width:'100%',height:'100%'}} />

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
