import { SearchSettings } from "../components/SearchSettings";
import { Sections } from "../components/Sections";

export const ProductPage = () => {
  return (
    <div className="flex gap-4">
      <SearchSettings />
      <Sections />
    </div>
  );
};
