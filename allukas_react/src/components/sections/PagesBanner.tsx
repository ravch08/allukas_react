import { PageBannerProps } from "../../types/types";

const PagesBanner = ({ pageTitle, subTitle }: PageBannerProps) => {
  return (
    <section aria-labelledby={pageTitle}>
      <div className="container mx-auto w-1/2 text-center">
        <h1 className="mb-2 text-4xl font-normal">{pageTitle}</h1>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default PagesBanner;
