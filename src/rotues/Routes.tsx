import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { AppLayout } from "../pages/AppLayout";
import { LoginPage } from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <AppLayout>
        <ProductPage />
      </AppLayout>
    ),
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
