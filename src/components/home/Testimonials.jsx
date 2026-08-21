import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    review:
      "CarGuard made my claim process so easy and hassle-free. Excellent support!",
    name: "John D.",
    role: "Verified Customer",
    image: "/assets/images/customer-1.jpg",
  },
  {
    id: 2,
    review:
      "Great coverage options and amazing customer service. Highly recommended!",
    name: "Sarah M.",
    role: "Verified Customer",
    image: "/assets/images/customer-2.jpg",
  },
  {
    id: 3,
    review:
      "The roadside assistance was quick and really helped me on a bad day.",
    name: "Michael R.",
    role: "Verified Customer",
    image: "/assets/images/customer-3.jpg",
  },
  {
    id: 4,
    review:
      "The entire warranty process was simple and transparent. I felt completely protected.",
    name: "David K.",
    role: "Verified Customer",
    image: "/assets/images/customer-4.jpg",
  },
  {
    id: 5,
    review:
      "Excellent service and very quick response from the CarGuard team.",
    name: "Emily R.",
    role: "Verified Customer",
    image: "/assets/images/customer-5.jpg",
  },
  {
    id: 6,
    review:
      "I had a repair issue during my trip and CarGuard handled everything perfectly.",
    name: "Robert S.",
    role: "Verified Customer",
    image: "/assets/images/customer-6.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  return (
    <section className="flex flex-col items-center justify-center  w-full bg-[#10192d] px-6 h-[600px] py-14">

      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          What Our Customers Say
        </h2>

        <div className="mx-auto mt-2 h-[2px] w-20 bg-orange-500" />
      </div>

      {/* Carousel wrapper */}
      <div className="mx-auto flex max-w-[1050px] items-center gap-5">

        {/* LEFT BUTTON */}
        <button
          onClick={previous}
          className="
            flex h-8 w-8 shrink-0 items-center justify-center
            rounded-full border border-indigo-400
            text-indigo-300 transition
            hover:bg-indigo-500/20
          "
        >
          <ChevronLeft size={20} />
        </button>

        {/* VIEWPORT */}
        <div className="w-full p-2 overflow-hidden">

          {/* TRACK */}
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(
                -${currentIndex * (100 / 3 + 5 / 3)}%
              )`,
            }}
          >

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  w-[calc((100%-40px)/3)]
                  min-w-[calc((100%-40px)/3)]
                "
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="
            flex h-8 w-8 shrink-0 items-center justify-center
            rounded-full border border-indigo-400
            text-indigo-300 transition
            hover:bg-indigo-500/20
          "
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        relative h-[180px]
        rounded-2xl bg-white
        px-5 py-5
        shadow-lg
      "
    >
      {/* Review */}
      <p className="min-h-[45px] text-[10px] italic leading-4 text-slate-500">
        "{testimonial.review}"
      </p>

      {/* Stars */}
      <div className="mt-3 flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={11}
            fill="currentColor"
            className="text-yellow-400"
          />
        ))}
      </div>

      {/* User */}
      <div className="mt-4 flex items-center gap-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-7 w-7 rounded-full border-2 border-indigo-400 object-cover"
        />

        <div>
          <p className="text-[9px] font-semibold text-slate-800">
            {testimonial.name}
          </p>

          <p className="text-[7px] text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <Quote
        size={32}
        className="absolute bottom-4 right-5 text-slate-100"
        fill="currentColor"
        strokeWidth={0}
      />
    </div>
  );
};

export default Testimonials;