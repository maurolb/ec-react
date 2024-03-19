import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { searchIcon } from "./icons/searchIcon";

export const Nav = () => {
  // todo : hacer bien esto
  const isLogged: boolean = true;

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col gap-0">
      <Navbar fluid>
        <Navbar.Brand className="hidden sm:flex sm:w-1/4 md:w-1/3 items-center">
          <img src={logo} className="mr-3 lg:h-20 sm:h-14 h-14" alt="Logo" />
          <span className="text-gray-700/90 font-bold hidden md:block">
            ShoppApp
          </span>
        </Navbar.Brand>
        <TextInput
          className="w-2/4 sm:w-2/4 md:w-1/3"
          icon={searchIcon}
          id="search"
          placeholder="Buscar producto"
          type="text"
        />
        <div className="w-2/4 sm:w-1/4 md:w-1/3">
          {isLogged ? (
            <div className="flex gap-4 lg:gap-8 justify-end pe-0 md:pe-4">
              <button className="bg-cyan-700 w-10 h10 rounded-full text-white">
                <IconShoppingCart className="ms-auto me-auto" />
              </button>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    size={"md"}
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item onClick={() => handleNavigate("/cuenta")}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
            <div className="flex gap-4 lg:gap-8 justify-end pe-0 md:pe-4">
              <button className="bg-cyan-700 w-10 h10 rounded-full text-white">
                <IconShoppingCart className="ms-auto me-auto" />
              </button>
              <button className="bg-cyan-700 w-10 md:w-max h-10 md:h-max rounded-full md:rounded-lg flex p-2 text-white">
                <IconUser className="md:mr-2 md:w-5 md:h-5" />
                <span className="hidden md:block">Iniciar Sesion</span>
              </button>
            </div>
          )}
        </div>
      </Navbar>
      <Navbar fluid>
        <Navbar.Toggle />
        <Navbar.Collapse className="ms-auto me-auto">
          <Navbar.Link
            className="text-lg cursor-pointer font-bold text-gray-700/90 me-6"
            onClick={() => handleNavigate("/")}
          >
            Inicio
          </Navbar.Link>
          <Navbar.Link
            className="text-lg cursor-pointer font-bold text-gray-700/90 me-6"
            onClick={() => handleNavigate("/products")}
          >
            En oferta
          </Navbar.Link>
          <Navbar.Link className="text-lg cursor-pointer font-bold text-gray-700/90 flex justify-center">
            <Dropdown arrowIcon={true} inline label="Categorias">
              <Dropdown.Item onClick={() => handleNavigate("/products")}>
                Monitores
              </Dropdown.Item>
              <Dropdown.Item>Teclados</Dropdown.Item>
              <Dropdown.Item>Procesadores</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
