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

const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
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
