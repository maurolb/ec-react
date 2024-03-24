import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "flowbite-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";

type TitleProps = {
  title: string;
};

export const Recomended: React.FC<TitleProps> = ({ title }) => {
  let items: any[] = [
    {
      id: 1,
      name: "LG x54 19",
      price: 40,
    },
    {
      id: 2,
      name: "Samsung m84 21",
      price: 80,
    },
    {
      id: 3,
      name: "Samsung xu82 24",
      price: 72,
    },
    {
      id: 4,
      name: "LG flatron 19",
      price: 23,
    },
    {
      id: 5,
      name: "Samsung m84 21",
      price: 80,
    },
    {
      id: 6,
      name: "Samsung xu82 24",
      price: 72,
    },
    {
      id: 7,
      name: "LG flatron 19",
      price: 23,
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <span className="font-bold text-lg text-center md:text-start md:ms-2 xl:ms-0 text-gray-800 mt-16">
        {title}
      </span>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "rgb(14, 116, 144)",
          } as React.CSSProperties
        }
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          740: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1366: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        modules={[Navigation, Autoplay]}
        className="max-w-[100%]"
      >
        {items.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => handleNavigate("/products/details")}
              className="flex justify-center my-3"
            >
              <Card
                className="w-60 cursor-pointer"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              >
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $ {item.price}
                  </span>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
