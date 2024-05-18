import { useQuery } from "@tanstack/react-query";
import { string, z } from "zod";

import { CategoryProps } from "../../types/types";
import { getProducts } from "../utils/api";
import {
  Banner,
  Categories,
  Clients,
  FollowUs,
  MiniBanner,
  SalesFeatures,
  SortedProducts,
  StoresNearYou,
  Testimonials,
} from "../utils/helper";

// https://demo-alukas.myshopify.com/#

const productSchema = z.object({
  id: string().optional(),
  title: string(),
  brand: string(),
  price: string(),
  categories: string().array().optional(),
  priceCrossed: string(),
  imgSrc1: string().url(),
  imgSrc2: string().url(),
});

export type ProductsProps = z.infer<typeof productSchema>;

const Home = () => {
  const {
    data: products,
    status,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const uniqueCategories = {} as { [key: string]: string };

  products.forEach((product: ProductsProps) => {
    product?.categories!.forEach((category) => {
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

  const newArrivals = products.filter((prod: ProductsProps) =>
    prod.categories!.includes("new arrivals"),
  );

  const featuredProducts = products.filter((prod: ProductsProps) =>
    prod.categories!.includes("featured"),
  );

  return (
    <main>
      <Banner />
      <Categories categoryArr={categoriesArray} />
      <SortedProducts
        error={status === "error" ? error.message : ""}
        status={status}
        products={newArrivals}
        heading={"New Arrivals"}
        subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque nulla aliquid veniam rerum."
      />
      <MiniBanner />
      <StoresNearYou />
      <SortedProducts
        error={status === "error" ? error.message : ""}
        status={status}
        products={featuredProducts}
        heading={"Featured Products"}
        subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque nulla aliquid veniam rerum."
      />
      <Testimonials />
      <Clients />
      <FollowUs />
      <SalesFeatures />
    </main>
  );
};

export default Home;
