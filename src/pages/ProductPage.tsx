import { Breadcrumb, Button, Dropdown } from "flowbite-react";
import { ItemCard } from "../components/ItemCard";
import { SearchSettings } from "../components/SearchSettings";
import { useState } from "react";
import { PaginationComponent } from "../components/Pagination";

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

  const [order, setOrder] = useState("");

  const handleOrder = (sorted: string) => {
    setOrder(sorted);
  };

  return (
    <div className="flex gap-4">
      <div className="hidden md:block md:w-2/4 lg:w-1/4">
        <SearchSettings />
      </div>

      <div className="my-4 w-full md:w-2/4 lg:w-3/4">
        <div className="justify-between hidden lg:flex md:pe-20 lg:pe-40 xl:pe-10">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
            <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
          </Breadcrumb>

          <Dropdown
            arrowIcon={true}
            inline
            label={order ? order : "Ordernar por"}
          >
            <Dropdown.Item onClick={() => handleOrder("Menor precio")}>
              Menor precio
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOrder("Mayor precio")}>
              Mayor precio
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOrder("Mas relevantes")}>
              Más relevantes
            </Dropdown.Item>
          </Dropdown>
        </div>

        <div className="flex w-full md:hidden">
          <div className="w-2/4 flex justify-center">
            {/* agregar filtro correctamente */}
            <Button color="">Filtros</Button>
          </div>
          <div className="w-2/4 flex justify-center">
            <Dropdown
              arrowIcon={true}
              color=""
              label={order ? order : "Ordernar por"}
            >
              <Dropdown.Item onClick={() => handleOrder("Menor precio")}>
                Menor precio
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleOrder("Mayor precio")}>
                Mayor precio
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleOrder("Mas relevantes")}>
                Más relevantes
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center md:justify-start gap-4">
          {items.map((item, index) => (
            <div className="my-4">
              <ItemCard key={index} item={item} />
            </div>
          ))}
        </div>
        {/* pagination o lazy loading*/}
        <div className="flex justify-center">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};
