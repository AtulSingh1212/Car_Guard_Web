import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  CircleHelp,
  ArrowRight,
} from "lucide-react";

const categories = [
  "All",
  "Warranty Plans",
  "Claims",
  "Roadside Assistance",
  "Payments",
];

const faqs = [
  {
    id: 1,
    question: "What does CarGuard warranty cover?",
    answer:
      "CarGuard warranty plans provide coverage for eligible mechanical and electrical components according to the selected plan.",
    category: "Warranty Plans",
  },
  {
    id: 2,
    question: "How do I file a warranty claim?",
    answer:
      "You can file a warranty claim by contacting our support team or submitting your claim through the customer portal.",
    category: "Claims",
  },
  {
    id: 3,
    question: "How long does it take to process a claim?",
    answer:
      "Most claims are reviewed quickly after all required information and documents have been submitted.",
    category: "Claims",
  },
  {
    id: 4,
    question: "Is roadside assistance available 24/7?",
    answer:
      "Yes. Roadside assistance is available 24 hours a day, 7 days a week for eligible customers.",
    category: "Roadside Assistance",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We support major debit and credit cards and other available payment methods during checkout.",
    category: "Payments",
  },
  {
    id: 6,
    question: "Can I upgrade my warranty plan?",
    answer:
      "Yes. Depending on your vehicle and existing coverage, you may be able to upgrade your plan.",
    category: "Warranty Plans",
  },
];

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  /*
   * Filter FAQs based on category + search text.
   *
   * useMemo prevents unnecessary filtering when
   * unrelated state changes.
   */
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        faq.question.toLowerCase().includes(searchText) ||
        faq.answer.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /*
   * Open / close FAQ
   */
  const handleFaqClick = (id) => {
    setOpenFaq((previous) =>
      previous === id ? null : id
    );
  };

  /*
   * When changing category, close currently
   * opened FAQ.
   */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenFaq(null);
  };

  return (
    <section className="w-full bg-[#101a2e] px-6 py-10 md:px-10 lg:px-[6.8%]">

      {/* =====================================================
          TITLE
      ====================================================== */}

      <h2 className="text-3xl font-medium tracking-tight text-white md:text-[30px]">
        All Frequently Asked Questions
      </h2>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <div className="relative mt-6 w-full">
        <Search
          size={17}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search FAQs..."
          className="
            h-16
            w-full
            rounded-lg
            border
            border-slate-700
            bg-[#1d293d]
            pl-10
            pr-4
            text-lg
            text-white
            outline-none
            placeholder:text-slate-500
            focus:border-indigo-500
          "
        />
      </div>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <div className="mt-7 flex flex-wrap gap-2">

        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() =>
                handleCategoryChange(category)
              }
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "bg-[#1c2940] text-slate-400 hover:bg-[#27354e] hover:text-white"
                }
              `}
            >
              {category}
            </button>
          );
        })}

      </div>

      {/* =====================================================
          FAQ LIST
      ====================================================== */}

      <div className="mt-8 flex flex-col gap-2">

        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  overflow-hidden
                  rounded-lg
                  border
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-indigo-500/40 bg-[#17243a]"
                      : "border-slate-700 bg-[#111b2f]"
                  }
                `}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleFaqClick(faq.id)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-between
                    px-4
                    text-left
                  "
                >

                  <span className="text-lg text-slate-200">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`
                      shrink-0
                      text-white
                      transition-transform
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  />

                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/5 px-4 pb-5 pt-3 text-md leading-5 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          <div className="rounded-lg border border-slate-700 bg-[#111b2f] px-5 py-8 text-center">
            <p className="text-sm text-slate-400">
              No FAQs found.
            </p>
          </div>
        )}

      </div>

      {/* =====================================================
          CONTACT SUPPORT
      ====================================================== */}

      <div
        className="
          mt-6
          flex
          flex-col
          gap-4
          rounded-lg
          border
          border-blue-500/30
          bg-[#111c31]
          px-5
          py-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* Left */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#172e55]
              text-orange-400
            "
          >
            <CircleHelp size={22} />
          </div>

          <div>
            <p className="text-lf text-white">
              Still can’t find what you’re looking for?
            </p>

            <p className="text-lg text-slate-500">
              Our support team is here to help 24/7.
            </p>
          </div>

        </div>

        {/* Button */}
        <button
          type="button"
          className="
            flex
            h-11
            items-center
            justify-center
            gap-1
            rounded-md
            border
            border-orange-400
            px-5
            text-2xl
            text-orange-400
            transition
            hover:bg-orange-400
            hover:text-[#101a2e]
          "
        >
          Contact Support
          <ArrowRight size={15} />
        </button>

      </div>

    </section>
  );
};

export default FaqSection;