import { ItemCard } from "./ItemCard";

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

  return (
    <div className="flex flex-col">
      <h2 className="text-gray-700 font-bold text-xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item: dataItem) => (
          <ItemCard key={item.id} item={item!} />
        ))}
      </div>
    </div>
  );
};
