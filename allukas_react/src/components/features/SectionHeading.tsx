import { SectionHeadingProps } from "../../types/types";

const SectionHeading = ({ heading, subHeading }: SectionHeadingProps) => {
  return (
    <div className="mb-20 text-center">
      <h2 className="mb-2 text-5xl font-medium">{heading}</h2>
      <p className="text-gray-600">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
