export async function getTestimonials() {
  try {
    const res = await fetch("http://localhost:3000/testimonialItems");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong! Cannot fetch Testimonials.");
  }
}
