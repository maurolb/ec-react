import { useState } from "react";
import { ProductDetailCaroucel } from "../components/ProductDetailCaroucel";
import { Recomended } from "../components/Recomended";

export const ProductDetails = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="grid gap-4 mb-4">
      <div className="flex flex-col lg:flex-row p-4 bg-white rounded-md">
        <div className="w-full lg:w-1/2">
          <ProductDetailCaroucel />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 w-3/4 items-center lg:w-2/4 ms-auto me-auto mt-20 lg:mt-4">
            <div>
              <span className=" text-cyan-700 font-semibold">
                Special Sneaker
              </span>
              <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
            </div>
            <p className="text-gray-700 text-left">
              Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
              chilometri, Invincible 3 offre un livello di comfort elevatissimo
              sotto il piede per aiutarti a dare il massimo oggi, domani e
              oltre. Questo modello incredibilmente elastico e sostenitivo, è
              pensato per dare il massimo lungo il tuo percorso preferito e fare
              ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
            <h6 className="text-2xl font-semibold mt-4">$ 199.00</h6>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-cyan-700 text-white font-semibold p-3 rounded-md h-full">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <Recomended title={"Artículos relacionados"} />
    </div>
  );
};
