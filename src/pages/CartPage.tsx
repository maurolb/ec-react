import { Button } from "flowbite-react";
import { ItemCart } from "../components/ItemCart";
import { IconChevronLeft } from "@tabler/icons-react";
import { Recomended } from "../components/Recomended";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const items: any[] = [
    {
      id: 1,
      img: "https://quintapata.com.ar/481-large_default/per-ros-mueble-importado-pgato-n-3-2076.jpg",
      name: "Rascador de gato 3000 turbo max",
      price: 123,
      quantity: 1,
    },
    // {
    //   id: 2,
    //   img: "https://quintapata.com.ar/481-large_default/per-ros-mueble-importado-pgato-n-3-2076.jpg",
    //   name: "Rascador de gato 3000 turbo max",
    //   price: 123,
    //   quantity: 1,
    // },
  ];

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="p-6 bg-white rounded-md w-full lg:w-3/4">
          <h2 className="text-left font-bold text-xl">Carrito</h2>
          <hr className="my-2" />
          <div className="flex flex-col gap-2 justify-center">
            {items.map((item: any) => (
              <ItemCart key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="  p-6 bg-white rounded-md w-full lg:w-1/4 h-max">
          <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-full ms-auto me-auto flex flex-col gap-2">
            <div className="flex justify-between text-md font-semibold">
              <span>arituculo1</span>
              <span>$21321</span>
            </div>
            <div className="flex justify-between text-md font-semibold">
              <span>costo de envio</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-100 text-lg font-bold">
              <span>Costo Total</span>
              <span>$12321</span>
            </div>
            <span className="my-2 text-md text-cyan-700 underline cursor-pointer">
              Codigo de descuento
            </span>
            <div className="my-2 flex justify-center">
              <Button>Pasar por caja</Button>
            </div>
          </div>
        </div>
      </div>
      <span
        onClick={() => handleNavigate("/")}
        className="text-md font-semibold text-left flex gap-2 cursor-pointer"
      >
        <IconChevronLeft className="w-5" />
        Continuar comprando
      </span>

      <div className="mt-8">
        <Recomended title="Ofertas" />
      </div>
    </>
  );
};
