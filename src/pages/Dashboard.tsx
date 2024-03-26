import { IconHistory, IconId, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, ToggleSwitch } from "flowbite-react";
import { Recomended } from "../components/Recomended";
import { useState } from "react";

export const Dashboard = () => {
  //todo: sacar despues
  const [view, setView] = useState(true);

  const handleView = () => {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <div>
      {view ? (
        <>
          {/* Contenido para vista 1 */}
          <div className="px-10 sm:px-32 xl:px-0 flex justify-between items-center">
            <h1 className="text-left font-bold text-2xl mb-2 pl-2">
              Su Cuenta
            </h1>
            <ToggleSwitch
              checked={view}
              label={view ? "Vista 1" : "Vista 2"}
              onChange={handleView}
            />
          </div>
          <div className="flex flex-wrap gap-16 justify-center">
            <div className="flex flex-col gap-2 px-5 py-10 min-w-96 transition-transform transform hover:scale-105 cursor-pointer bg-white rounded-md">
              <div className="flex items-center justify-center">
                <IconId size={35} />
              </div>
              <span className="font-bold">Información</span>
            </div>

            <div className="flex flex-col gap-2 p-5 py-10 min-w-96 transition-transform transform hover:scale-105 cursor-pointer bg-white rounded-md">
              <div className="flex items-center justify-center">
                <IconHistory size={35} />
              </div>
              <span className="font-bold">Historial</span>
            </div>

            <div className="flex flex-col gap-2 p-5 py-10 min-w-96 transition-transform transform hover:scale-105 cursor-pointer bg-white rounded-md">
              <div className="flex items-center justify-center">
                <IconMapPin size={35} />
              </div>
              <span className="font-bold">Historial</span>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <Button>Cerrar Sesion</Button>
          </div>

          <div className="mt-20">
            <Recomended title={"Ofertas"} />
          </div>
        </>
      ) : (
        <>
          {/* Contenido para vista 2 */}
          <div className="w-full lg:w-2/4 ms-auto me-auto">
            <div className="flex justify-between items-center px-2">
              <h1 className="text-left font-bold text-2xl mb-2 pl-2">
                Su Cuenta
              </h1>
              <ToggleSwitch
                checked={view}
                label={view ? "Vista 1" : "Vista 2"}
                onChange={handleView}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center mt-2">
            <div className="w-full lg:w-2/4 px-8 py-10 flex gap-4 bg-white rounded-md">
              <div className="me-6">
                <Avatar
                  size={"md"}
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">Juampi Tocorto</span>
                <span>email@fmasd-com</span>
              </div>
            </div>

            <div className="w-full lg:w-2/4 bg-white px-6 py-6 rounded-md">
              <ul>
                <li className="flex gap-4 my-4 cursor-pointer border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <IconId width={64} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Información personal</span>
                    <span className="text-gray-500">
                      Información de tus datos personales
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 my-4 cursor-pointer border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <IconHistory width={64} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Historial</span>
                    <span className="text-gray-500">
                      Información de tu historial de compras
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 my-4 cursor-pointer border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <IconMapPin width={64} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Direcciones</span>
                    <span className="text-gray-500">
                      Direcciones guardadas en tu cuenta
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-2 mb-4 w-full lg:w-2/4 flex justify-center">
              <span className="me-auto ps-2 underline font-semibold text-cyan-700">
                Cerrar sesión
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
