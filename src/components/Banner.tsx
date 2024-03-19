import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";

export const Banner = () => {
  return (
    // <div className="h-56 md:h-72 xl:h-80">
    //   <Carousel>
    //     <img
    //       src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
    //       alt="..."
    //     />
    //     <img
    //       src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
    //       alt="..."
    //     />
    //     <img
    //       src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
    //       alt="..."
    //     />
    //     <img
    //       src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
    //       alt="..."
    //     />
    //     <img
    //       src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
    //       alt="..."
    //     />
    //   </Carousel>
    // </div>
    <div className="">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="max-w-[100%] max-h-80"
      >
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/701/690/original/abstract-polygonal-banner-background-vector.jpg"
            alt="..."
            className="w-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/381/988/original/vector-abstract-colorful-dotted-banner-background.jpg"
            alt="..."
            className="w-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/552/477/original/abstract-banner-background-with-lines-pattern-illustration-free-vector.jpg"
            alt="..."
            className="w-screen"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
