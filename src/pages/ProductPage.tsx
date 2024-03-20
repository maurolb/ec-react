import { ItemCard } from "../components/ItemCard";
import { SearchSettings } from "../components/SearchSettings";

export const ProductPage = () => {
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

  return (
    <div className="flex gap-4">
      <div className="w-1/4">
        <SearchSettings />
      </div>

      <div className="my-4 w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {items.map((item, index) => (
            <div className="my-4">
              <ItemCard key={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
