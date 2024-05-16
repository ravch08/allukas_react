import { queryClient } from "../../App";
import { getProducts } from "./api";

export async function productsLoader() {
  return queryClient.fetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
