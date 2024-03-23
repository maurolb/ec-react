import { useState } from "react";

export const ProductDetailCaroucel = () => {
  const [images] = useState({
    img1: "https://quintapata.com.ar/481-large_default/per-ros-mueble-importado-pgato-n-3-2076.jpg",
    img2: "https://quintapata.com.ar/366-large_default/0100202_VITALCAN-BALANCED-GATO-CTRL--PESOCSTRDO--X-2-KG.jpg",
    img3: "https://quintapata.com.ar/279-large_default/0202946_PER-ROS-MUEBLE-IMPORTADO-PGATO--N10-2845.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className="flex w-3/4 lg:w-full flex-col justify-center lg:flex-row gap-16 lg:items-center ms-auto me-auto">
      <div className="flex flex-col gap-6 lg:w-3/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-md"
        />
        <div className="flex flex-row justify-evenly h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
        </div>
      </div>
    </div>
  );
};
