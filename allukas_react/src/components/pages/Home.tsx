import { useQuery } from "@tanstack/react-query";
import { string, z } from "zod";

import { CategoryProps } from "../../types/types";
import { getProducts } from "../utils/api";
import {
  Banner,
  Categories,
  Clients,
  FeaturedProducts,
  FollowUs,
  MiniBanner,
  NewArrivals,
  SalesFeatures,
  StoresNearYou,
  Testimonials,
} from "../utils/helper";

// https://demo-alukas.myshopify.com/#

const productSchema = z.object({
  id: string(),
  title: string(),
  brand: string(),
  price: string(),
  categories: string().array(),
  priceCrossed: string(),
  imgSrc1: string().url(),
  imgSrc2: string().url(),
});

export type ProductsProps = z.infer<typeof productSchema>;

const Home = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const uniqueCategories = {} as { [key: string]: string };

  products.forEach((product: ProductsProps) => {
    product?.categories.forEach((category) => {
      if (!uniqueCategories[category]) {
        uniqueCategories[category] = product.imgSrc1;
      }
    });
  });

  const categoriesArray: CategoryProps[] = Object.keys(uniqueCategories)
    .map((category) => ({
      category: category,
      catImgSrc: uniqueCategories[category],
    }))
    .filter(
      (cat) =>
        cat.category !== "new arrivals" &&
        cat.category !== "featured" &&
        cat.category !== "bestseller",
    );

  return (
    <main>
      <Banner />
      <Categories categoryArr={categoriesArray} />
      <NewArrivals />
      <StoresNearYou />
      <MiniBanner />
      <FeaturedProducts />
      <Testimonials />
      <Clients />
      <FollowUs />
      <SalesFeatures />
    </main>
  );
};

export default Home;
