import { Section } from "./Section";

export const Sections = () => {
  return (
    <div className="flex flex-col gap-12 bg-white rounded p-8">
      <Section title="Mas Vendidos" />
      <Section title="En Oferta" />
      <Section title="Mejores Valorados" />
    </div>
  );
};
