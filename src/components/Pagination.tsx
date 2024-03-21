import { useState } from "react";
import { Pagination } from "flowbite-react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
};
