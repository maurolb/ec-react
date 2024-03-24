import { IconArrowDown, IconArrowUp, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

type CartProps = {
  item: any;
};

export const ItemCart: React.FC<CartProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSumarQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleRestarQuantity = () => {
    if (quantity >= 2) setQuantity(quantity - 1);
  };

  return (
    <div className=" flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full flex gap-2 lg:w-3/5">
        <div className="w-1/4 md:w-2/5">
          <img src={item.img} alt="item-img" className="w-[170px]" />
        </div>
        <div className="w-3/4 md:w-3/5 flex items-center">
          <h2 className="text-md ms-auto me-auto xl:text-left">{item.name}</h2>
        </div>
      </div>

      <div className="mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-full lg:mt-0 flex w-full gap-4 lg:w-2/5">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <button
              onClick={handleSumarQuantity}
              className="p-1 bg-cyan-700 text-white rounded-sm hover:bg-cyan-800"
            >
              <IconArrowUp />
            </button>
            <span className="font-bold text-lg p-1">{quantity}</span>
            <button
              onClick={handleRestarQuantity}
              className="p-1 bg-cyan-700 text-white rounded-sm hover:bg-cyan-800"
            >
              <IconArrowDown />
            </button>
          </div>
          <span className="font-bold text-lg">{item.price}</span>
          <button className="p-1">
            <IconTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
