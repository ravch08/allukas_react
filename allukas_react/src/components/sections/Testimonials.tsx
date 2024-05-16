import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getTestimonials } from "../utils/api";
import { Loading, SectionHeading, TestimonialItem } from "../utils/helper";

const testimonialSchema = z.object({
  id: string().optional(),
  review: string().min(10, { message: "The minimum character length is 10" }),
  author: string().min(4, { message: "The minimum character length is 4" }),
  imgSrc: string().url(),
  rating: number(),
});

export type TestimonialProps = z.infer<typeof testimonialSchema>;

const Testimonials = () => {
  const {
    data: testimonials,
    status,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  return (
    <section aria-labelledby="Testimonials" className="bg-testimonial">
      <div className="container mx-auto">
        <SectionHeading
          heading="Our Testimonials"
          subHeading="Allukas is my favorite store"
        />

        <Swiper
          speed={1000}
          className="pb-12"
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <div className="flex items-center justify-center">
            {status === "pending" ? <Loading /> : null}
            {status === "error" ? (
              <p className="w-full bg-red-400 p-4 text-center text-white">
                {error.message}
              </p>
            ) : null}
          </div>

          {testimonials
            ? testimonials?.map((testimonial: TestimonialProps) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialItem
                    author={testimonial?.author}
                    rating={testimonial?.rating}
                    review={testimonial?.review}
                    imgSrc={testimonial?.imgSrc}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
