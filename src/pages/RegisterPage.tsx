import { IconArrowRight } from "@tabler/icons-react";
import { Button, Card, FloatingLabel } from "flowbite-react";

export const RegisterPage = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Card className="w-96">
        <h1 className="font-bold text-2xl me-auto mb-4 text-blue-900">
          Registrate
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FloatingLabel variant="filled" label="Nombre" type="text" />
          <FloatingLabel variant="filled" label="Correo" type="email" />
          <FloatingLabel variant="filled" label="Contraseña" type="password" />
          <div>
            <Button pill className="ms-auto">
              <IconArrowRight />
            </Button>
          </div>
        </form>

        <h2 className="mt-4 font-bold text-lg text-blue-900">
          Otras Alternativas
        </h2>
        <div className="mb-4 flex justify-center flex-wrap gap-2">
          <Button gradientMonochrome="info">Google</Button>
          <Button gradientMonochrome="success">Facebook</Button>
          <Button gradientMonochrome="success">GitHub</Button>
        </div>

        <hr />
        <div className="mt-2 flex justify-center items-center gap-2">
          <h2 className="font-bold text-blue-900">Ya tengo una cuenta -</h2>
          <span className=" text-blue-500 cursor-pointer font-bold ">
            Iniciar Sesion
          </span>
        </div>
      </Card>
    </div>
  );
};
