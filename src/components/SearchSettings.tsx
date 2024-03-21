import { Checkbox, Label } from "flowbite-react";
import { useState } from "react";

export const SearchSettings = () => {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPriceChange = (e: any) => {
    setMinPrice(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] pt-6 ps-6 text-left">
      <h2 className="font-bold text-lg">Filtros</h2>
      <h2 className="text-lg">Promociones</h2>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">2x1</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">20% Off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">30% Off</Label>
        </div>
      </div>

      <h2 className="text-lg mt-4">Marca</h2>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Lg</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Samsung</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Sowie</Label>
        </div>
      </div>

      <h2 className="text-lg mt-4">Precio</h2>
      <div className="flex flex-col items-start">
        <label htmlFor="minPrice" className="mb-2 text-gray-700">
          Hasta: ${minPrice}
        </label>
        <input
          type="range"
          id="small-range"
          name="minPrice"
          min="0"
          max="10000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-44 h-3 rounded-md bg-cyan-700 appearance-none focus:outline-none"
        />
      </div>

      <h2 className="text-lg mt-4">Otros filtros</h2>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Racondicionados</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Usados</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">pepito</Label>
        </div>
      </div>
    </div>
  );
};
