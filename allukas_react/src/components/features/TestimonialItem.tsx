import { TestimonialProps } from "../sections/Testimonials";
import { Ratings } from "../utils/helper";

const TestimonialItem = ({
  rating,
  author,
  imgSrc,
  review,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Ratings stars={rating} />
      <p className="w-2/3 py-6 text-3xl leading-10">{review}</p>
      <figure>
        <img src={imgSrc} alt={author} />
      </figure>
      <span className="mt-4 text-sm font-medium">{author}</span>
    </div>
  );
};

export default TestimonialItem;
