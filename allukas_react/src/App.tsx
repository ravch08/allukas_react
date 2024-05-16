import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  AboutUs,
  Contact,
  Home,
  Layout,
  Page404,
  Products,
} from "./components/utils/helper";
import { productsLoader } from "./components/utils/loaders";
import "./styles/App.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} loader={productsLoader} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
