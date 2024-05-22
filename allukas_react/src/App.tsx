import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  AboutUs,
  Contact,
  Description,
  Home,
  Layout,
  Page404,
  ProductDetail,
  Products,
  ReturnPolicies,
  Reviews,
  Shipping,
} from "./components/utils/helper";
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
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />}>
        <Route index element={<Description />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="return-policies" element={<ReturnPolicies />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools
        client={queryClient}
        initialIsOpen={false}
        buttonPosition="bottom-left"
      />
    </QueryClientProvider>
  );
}

export default App;
