import { IconCalendar, IconUser } from "@tabler/icons-react";
import { Button, Card } from "flowbite-react";
import { Recomended } from "../components/Recomended";

export const Dashboard = () => {
  return (
    <div>
      <h1 className="text-left font-bold text-2xl mb-2 pl-2">Su Cuenta</h1>
      <div className="flex gap-4">
        <Card className="flex flex-col gap-2 p-5 min-w-96 transition-transform transform hover:scale-105 cursor-pointer">
          <div className="flex items-center justify-center">
            <IconUser size={35} />
          </div>
          <span className="font-bold">Información</span>
        </Card>

        <Card className="flex flex-col gap-2 p-5 min-w-96 transition-transform transform hover:scale-105 cursor-pointer">
          <div className="flex items-center justify-center">
            <IconCalendar size={35} />
          </div>
          <span className="font-bold">Historial</span>
        </Card>
      </div>

      <div className="flex justify-center mt-5">
        <Button>Cerrar Sesion</Button>
      </div>

      <div className="mt-20">
        <Recomended title={"Ofertas"} />
      </div>
    </div>
  );
};
