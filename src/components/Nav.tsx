import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Navbar className="h-24 " fluid rounded>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 lg:h-20 sm:h-14"
          alt="Flowbite React Logo"
        />
        <span className="text-gray-700/90 font-bold">ShoppApp</span>
      </Navbar.Brand>
      <TextInput
        className="w-80"
        id="search"
        placeholder="Buscar producto"
        type="text"
      />
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="text-lg cursor-pointer font-bold text-gray-700/90"
          onClick={() => handleNavigate("/")}
        >
          Inicio
        </Navbar.Link>
        {/* <Navbar.Link
          className="text-lg cursor-pointer"
          onClick={handleNavigate("/products")}
        >
          Productos
        </Navbar.Link> */}
        <Navbar.Link className="text-lg cursor-pointer font-bold text-gray-700/90">
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
  );
};
