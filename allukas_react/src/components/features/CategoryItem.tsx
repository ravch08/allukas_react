import { Link } from "react-router-dom";
import { CategoryProps } from "../../types/types";

const CategoryItem = ({ catImgSrc, category }: CategoryProps) => {
  return (
    <Link to={"#!"} className="group flex flex-col items-center">
      <figure className="w-44 overflow-hidden rounded-full">
        <img src={catImgSrc} alt={category} />
      </figure>
      <h3 className="mt-4 font-medium uppercase transition-colors duration-300 ease-in-out group-hover:text-yellow-700">
        {category}
      </h3>
    </Link>
  );
};

export default CategoryItem;
