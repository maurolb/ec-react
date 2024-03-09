import { IconArrowRight, IconMail } from "@tabler/icons-react";
import { Button, Card, FloatingLabel } from "flowbite-react";

export const LoginPage = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Card className="w-96">
        <h1 className="font-bold text-2xl me-auto mb-4 text-blue-900">
          Inicia Sesion
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FloatingLabel variant="filled" label="Correo" type="email" />
          <FloatingLabel variant="filled" label="Contraseña" type="password" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-500 cursor-pointer">
              Olvidé mi contraseña
            </span>
            <Button pill>
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
          <h2 className="font-bold text-blue-900">No tengo una cuenta -</h2>
          <span className=" text-blue-500 cursor-pointer font-bold ">
            Registrarme
          </span>
        </div>
      </Card>
    </div>
  );
};
