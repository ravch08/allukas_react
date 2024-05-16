import { OurMission, OurStory, PagesBanner } from "../utils/helper";

const AboutUs = () => {
  return (
    <main>
      <PagesBanner
        pageTitle="About Our Online Store"
        subTitle="Alukas providing rare & beautiful items sourced both locally & globally."
      />
      <OurStory />
      <OurMission />
    </main>
  );
};

export default AboutUs;
