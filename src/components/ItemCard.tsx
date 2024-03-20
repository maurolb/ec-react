import { Card } from "flowbite-react";
import { dataItem } from "./Section";
import { useNavigate } from "react-router-dom";

type CardProps = {
  item: dataItem;
};

export const ItemCard: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();

  // todo: hacer bien esto
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Card
      onClick={() => handleNavigate("/products/1")}
      className="w-64 transition-transform transform hover:scale-105 cursor-pointer"
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
  );
};
