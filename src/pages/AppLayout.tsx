import { Foot } from "../components/Footer";
import { Nav } from "../components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};
