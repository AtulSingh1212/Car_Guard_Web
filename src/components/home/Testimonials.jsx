"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John D.",
    role: "Verified Customer",
    text: "CarGuard made my claim process so easy and hassle-free. Excellent support!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Verified Customer",
    text: "Great coverage options and amazing customer service. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    name: "Michael R.",
    role: "Verified Customer",
    text: "The roadside assistance was quick and really helped me on a bad day.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 4,
    name: "Emily W.",
    role: "Verified Customer",
    text: "The entire insurance process was simple, fast, and completely stress-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 5,
    name: "David K.",
    role: "Verified Customer",
    text: "Excellent customer support. They were always available whenever I needed help.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    id: 6,
    name: "Jessica T.",
    role: "Verified Customer",
    text: "I would definitely recommend CarGuard to anyone looking for reliable coverage.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=44",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 18;

  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateResponsive();
    
    window.addEventListener("resize", updateResponsive);

    return () => {
      window.removeEventListener("resize", updateResponsive);
    };
  }, []);

  
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setContainerWidth(width);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    const maxIndex = Math.max(
      0,
      testimonials.length - visibleCards
    );

    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCards]);

  
  const cardWidth =
    (containerWidth - gap * (visibleCards - 1)) / visibleCards;

  
  const translateX =
    currentIndex * (cardWidth + gap);

  const maxIndex = Math.max(
    0,
    testimonials.length - visibleCards
  );

  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= maxIndex;

  const handlePrevious = () => {
    if (isFirst) return;

    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (isLast) return;

    setCurrentIndex((prev) =>
      Math.min(maxIndex, prev + 1)
    );
  };

  return (
    <section className="w-full bg-[#101a30] px-4 py-12 sm:px-6 md:py-16 lg:px-10">
      <div className="mx-auto w-full max-w-[1000px]">

        
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-[26px] font-bold leading-tight text-white sm:text-[28px] md:text-[30px]">
            What Our Customers Say
          </h2>

          {/* Orange underline */}
          <div className="mx-auto mt-3 h-[2px] w-[200px] bg-[#f59e0b] sm:w-[230px]" />
        </div>

      
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isFirst}
            aria-label="Previous testimonials"
            className={`
              absolute left-0 top-1/2 z-20
              flex h-[30px] w-[30px]
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full border
              transition-all duration-200

              sm:h-[30px] sm:w-[30px]

              ${
                isFirst
                  ? "cursor-not-allowed border-[#6070a0] text-[#6070a0] opacity-60"
                  : "border-[#7d8cff] text-[#b9c0ff] hover:bg-[#7d8cff] hover:text-white active:scale-90"
              }
            `}
          >
            <ChevronLeft
              size={18}
              strokeWidth={1.7}
            />
          </button>

         
          <div
            ref={containerRef}
            className="mx-auto w-[calc(100%-40px)] overflow-hidden sm:w-[calc(100%-56px)]"
          >
            
            <div
              className="flex"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${translateX}px)`,
                transition:
                  "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="relative flex-shrink-0 overflow-hidden rounded-[15px] bg-white px-[18px] py-[18px] sm:px-5 sm:py-5"
                  style={{
                    width: `${cardWidth}px`,
                    minHeight: "162px",
                  }}
                >
                  
                  <p
                    className="
                      max-w-[95%]
                      text-[9px]
                      font-normal
                      italic
                      leading-[1.45]
                      text-[#667085]
                      sm:text-[10px]
                    "
                  >
                    "{testimonial.text}"
                  </p>

                  
                  <div className="mt-4 flex items-center gap-[2px]">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={11}
                        strokeWidth={0}
                        fill="#fbbd05"
                        className="text-[#fbbd05]"
                      />
                    ))}
                  </div>

                  
                  <div className="mt-3 flex items-center gap-2">

                    {/* Avatar */}
                    <div className="h-[25px] w-[25px] flex-shrink-0 overflow-hidden rounded-full border border-[#7181ff]">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.innerHTML = `
                            <div class="flex h-full w-full items-center justify-center bg-[#eef1ff] text-[9px] font-bold text-[#5362d9]">
                              ${testimonial.name.charAt(0)}
                            </div>
                          `;
                        }}
                      />
                    </div>

                    
                    <div className="min-w-0">
                      <p className="truncate text-[8px] font-bold leading-tight text-[#1d2939] sm:text-[9px]">
                        {testimonial.name}
                      </p>

                      <p className="mt-[2px] text-[6px] leading-tight text-[#98a2b3] sm:text-[7px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  
                  <div className="pointer-events-none absolute bottom-[10px] right-[17px]">
                    <Quote
                      size={30}
                      strokeWidth={0}
                      fill="#edf1f7"
                      className="rotate-180 text-[#edf1f7]"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          
          <button
            type="button"
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next testimonials"
            className={`
              absolute right-0 top-1/2 z-20
              flex h-[30px] w-[30px]
              translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full border
              transition-all duration-200

              sm:h-[30px] sm:w-[30px]

              ${
                isLast
                  ? "cursor-not-allowed border-[#6070a0] text-[#6070a0] opacity-60"
                  : "border-[#7d8cff] text-[#b9c0ff] hover:bg-[#7d8cff] hover:text-white active:scale-90"
              }
            `}
          >
            <ChevronRight
              size={18}
              strokeWidth={1.7}
            />
          </button>
        </div>

        
        <div className="mt-7 flex justify-center gap-1.5">
          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-5 bg-[#fbbd05]"
                    : "w-1.5 bg-[#5b6681]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}