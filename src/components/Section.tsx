import React from "react";
import { ItemCard } from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export interface dataItem {
  id: number;
  name: string;
  price: number;
}

type TitleProps = {
  title: string;
};

export const Section: React.FC<TitleProps> = ({ title }) => {
  let items: dataItem[] = [
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
    <div>
      <div className="flex justify-between w-full px-8">
        <h2 className="text-gray-700 font-bold text-2xl mb-4">{title}</h2>
        <span
          onClick={() => handleNavigate("/products")}
          className="font-bold text-cyan-800 underline cursor-pointer"
        >
          Ver todos
        </span>
      </div>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "rgb(14, 116, 144)",
          } as React.CSSProperties
        }
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        modules={[Navigation, Autoplay]}
        className="max-w-[100%] "
      >
        {items.map((item: dataItem) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center my-3">
              <ItemCard key={item.id} item={item!} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
