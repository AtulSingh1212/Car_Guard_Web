"use client";

import { useState } from "react";
import {
  Wrench,
  CircleDot,
  Zap,
  Snowflake,
  PhoneCall,
  Cpu,
  ChevronDown,
  Check,
  Minus,
  Plus,
} from "lucide-react";

export default function PlanComparison() {
  /*
  |--------------------------------------------------------------------------
  | PLAN DATA
  |--------------------------------------------------------------------------
  */

  const plans = [
    {
      id: "essential",
      name: "Essential",
      price: "$349 / yr",
      accent: "text-slate-200",
      check: "text-slate-300",
    },
    {
      id: "premium",
      name: "Premium Plus",
      price: "$549 / yr",
      accent: "text-pink-400",
      check: "text-pink-400",
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "$749 / yr",
      accent: "text-yellow-400",
      check: "text-yellow-400",
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | COMPARISON DATA
  |--------------------------------------------------------------------------
  */

  const sections = [
    {
      id: "engine",
      title: "Engine & Transmission",
      icon: Wrench,

      planAvailability: [true, true, true],

      rows: [
        {
          label: "Engine protection",
          values: [
            "Included",
            "Included",
            "Included",
          ],
        },
        {
          label: "Transmission protection",
          values: [
            "Included",
            "Included",
            "Included",
          ],
        },
        {
          label: "Driveline protection",
          values: [
            "Included",
            "Included",
            "Included",
          ],
        },
        {
          label: "Engine & transmission replacement",
          values: [
            "One engine and one transmission replacement per policy lifetime",
            "One engine and one transmission replacement per policy lifetime",
            "One engine and one transmission replacement per policy lifetime",
          ],
        },
        {
          label: "Manufacturer warranty on eligible replacement units",
          values: [
            "Up to three years with unlimited mileage, if supplied by the manufacturer",
            "Up to three years with unlimited mileage, if supplied by the manufacturer",
            "Up to three years with unlimited mileage, if supplied by the manufacturer",
          ],
        },
        {
          label: "Workmanship warranty",
          values: [
            "90 days",
            "90 days",
            "90 days",
          ],
        },
      ],
    },

    {
      id: "drive",
      title: "Drive Axle Coverage",
      icon: CircleDot,

      planAvailability: [true, true, true],

      rows: [
        {
          label: "Coverage period",
          values: [
            "24 months or 25,000 miles or 40,000 km",
            "24 months or 25,000 miles or 40,000 km",
            "24 months; higher mileage subject to approval",
          ],
        },
        {
          label: "Hybrid and electric vehicle systems",
          values: [
            "Not included unless approved",
            "Approved hybrid components",
            "Approved hybrid and EV components",
          ],
        },
      ],
    },

    {
      id: "electrical",
      title: "Electrical System",
      icon: Zap,

      planAvailability: [false, true, true],

      rows: [
        {
          label: "Electrical and control modules",
          values: [
            "Basic powertrain & no electrical",
            "Expanded vehicle electronics",
            "Comprehensive electrical and electronics",
          ],
        },
      ],
    },

    {
      id: "air",
      title: "Air Conditioning System",
      icon: Snowflake,

      planAvailability: [false, true, true],

      rows: [
        {
          label: "Climate control components",
          values: [
            "Not included",
            "Included",
            "Included, comprehensive",
          ],
        },
      ],
    },

    {
      id: "roadside",
      title: "24/7 Roadside Assistance",
      icon: PhoneCall,

      planAvailability: [false, true, true],

      rows: [
        {
          label: "Roadside assistance",
          values: [
            "Not included",
            "Up to $800 annually",
            "Up to $800 annually",
          ],
        },
        {
          label: "Towing",
          values: [
            "1 once 160 km twice; $400 annual maximum",
            "320 km once yearly, or 160 km twice; $400 annual maximum",
            "Unlimited distance to an approved location, up to twice annually",
          ],
        },
        {
          label: "Rental vehicle reimbursement",
          values: [
            "Not included",
            "Up to $50 daily for four days",
            "Up to $50 daily for four days",
          ],
        },
        {
          label: "Trip interruption reimbursement",
          values: [
            "Not included",
            "Up to $100 daily for two days",
            "Up to $100 daily for two days",
          ],
        },
      ],
    },

    {
      id: "technology",
      title: "High-Tech Components",
      icon: Cpu,

      planAvailability: [false, false, true],

      rows: [
        {
          label: "Advanced driver-assistance & tech modules",
          values: [
            "Not included",
            "Not included",
            "Included",
          ],
        },
      ],
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | ADDITIONAL BENEFITS
  |--------------------------------------------------------------------------
  */

  const additionalBenefits = [
    {
      label: "Key replacement",
      values: [
        "Optional",
        "Optional",
        "Optional",
      ],
    },
    {
      label: "Collision Coverage",
      values: [
        "Optional",
        "Optional",
        "Optional",
      ],
    },
    {
      label: "Tire and wheel protection",
      values: [
        "Optional",
        "Optional",
        "Optional",
      ],
    },
    {
      label: "Glass repair",
      values: [
        "Optional",
        "Optional",
        "Optional",
      ],
    },
    {
      label: "Ride-share eligibility",
      values: [
        "Not included",
        "Included when approved",
        "Included when approved",
      ],
    },
    {
      label: "Commercial and fleet eligibility",
      values: [
        "Not included",
        "Not included",
        "Included when approved",
      ],
    },
    {
      label: "Maximum vehicle weight",
      values: [
        "7,000 lb",
        "7,000 lb",
        "Up to 16,000 lb with approval",
      ],
    },
    {
      label: "Priority claims handling",
      values: [
        "Standard",
        "Priority handling",
        "Target response within 15 minutes during business hours",
      ],
    },
    {
      label: "Dedicated account manager",
      values: [
        "Not included",
        "Not included",
        "Included",
      ],
    },
    {
      label: "Upholstery or interior cleaning",
      values: [
        "Not included",
        "Not included",
        "Up to three incidents annually; $500 annual maximum",
      ],
    },
    {
      label: "Annual rebate eligibility",
      values: [
        "Not included",
        "Not included",
        "Up to 40% with no claims; 20% for qualifying low-claim years",
      ],
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | PRICING
  |--------------------------------------------------------------------------
  */

  const pricingRows = [
    {
      label: "Monthly price",
      values: [
        "Refer to Website",
        "Refer to Website",
        "Refer to Website",
      ],
    },
    {
      label: "Annual price",
      values: [
        "Refer to Website",
        "Refer to Website",
        "Refer to Website",
      ],
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | EXPANDED STATE
  |--------------------------------------------------------------------------
  |
  | Change these to true if you want sections open initially.
  |
  */

  const [openSections, setOpenSections] = useState({
    engine: true,
    drive: true,
    electrical: false,
    air: false,
    roadside: false,
    technology: false,
  });

  /*
  |--------------------------------------------------------------------------
  | TOGGLE ONE SECTION
  |--------------------------------------------------------------------------
  */

  const toggleSection = (id) => {
    setOpenSections((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | EXPAND ALL
  |--------------------------------------------------------------------------
  */

  const expandAll = () => {
    const result = {};

    sections.forEach((section) => {
      result[section.id] = true;
    });

    setOpenSections(result);
  };

  /*
  |--------------------------------------------------------------------------
  | COLLAPSE ALL
  |--------------------------------------------------------------------------
  */

  const collapseAll = () => {
    const result = {};

    sections.forEach((section) => {
      result[section.id] = false;
    });

    setOpenSections(result);
  };

  /*
  |--------------------------------------------------------------------------
  | VALUE COMPONENT
  |--------------------------------------------------------------------------
  */

  const Value = ({ value, planIndex }) => {
    if (value === "Included") {
      return (
        <Check
          size={18}
          strokeWidth={2.5}
          className={plans[planIndex].check}
        />
      );
    }

    return (
      <span className="text-[13px] leading-[1.45] text-[#d6deeb]">
        {value}
      </span>
    );
  };

  /*
  |--------------------------------------------------------------------------
  | SECTION
  |--------------------------------------------------------------------------
  */

  const Section = ({ section }) => {
    const Icon = section.icon;
    const isOpen = openSections[section.id];

    return (
      <div className="border-t border-[#1c293e]">

        {/* CATEGORY HEADER */}

        <button
          type="button"
          onClick={() => toggleSection(section.id)}
          className="
           cursor-pointer
            group
            grid
            w-full
            grid-cols-[minmax(210px,1fr)_repeat(3,minmax(190px,1fr))]
            items-center
            bg-[#0c1425]
            text-left
            transition
            hover:bg-[#101a2e]
          "
        >

          {/* CATEGORY */}

          <div
            className="
              flex
              min-h-[48px]
              items-center
              gap-2
              px-5
            "
          >
            <Icon
              size={15}
              strokeWidth={1.7}
              className="shrink-0 text-[#7890b4]"
            />

            <span className="text-[13px] font-medium text-[#d8e0ec]">
              {section.title}
            </span>

            <ChevronDown
              size={14}
              className={`
                ml-0.5
                text-[#7286a5]
                transition-transform
                duration-200
                ${isOpen ? "rotate-180" : ""}
              `}
            />
          </div>

          {/* PLAN AVAILABILITY */}

          {section.planAvailability.map(
            (available, index) => (
              <div
                key={index}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  justify-center
                "
              >
                {available ? (
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className={
                      plans[index].check
                    }
                  />
                ) : (
                  <Minus
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#52647f]"
                  />
                )}
              </div>
            )
          )}
        </button>

        {/* CONTENT */}

        <div
          className={`
            grid
            transition-[grid-template-rows]
            duration-300
            ease-in-out
            ${isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">

            {section.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="
                  grid
                  grid-cols-[minmax(210px,1fr)_repeat(3,minmax(190px,1fr))]
                  border-t
                  border-[#172338]
                  bg-[#050b19]
                "
              >

                {/* LABEL */}

                <div
                  className="
                    flex
                    min-h-[52px]
                    items-center
                    px-5
                    py-3
                    text-[12px]
                    leading-[1.4]
                    text-[#83a0c6]
                  "
                >
                  {row.label}
                </div>

                {/* VALUES */}

                {row.values.map(
                  (value, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        min-h-[52px]
                        items-center
                        justify-center
                        px-5
                        py-3
                        text-center
                      "
                    >
                      <Value
                        value={value}
                        planIndex={index}
                      />
                    </div>
                  )
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    );
  };

  /*
  |--------------------------------------------------------------------------
  | MAIN
  |--------------------------------------------------------------------------
  */

  return (
    <main className="min-h-screen bg-[#030817] px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-[1320px]">

        {/* ====================================================== */}
        {/* PAGE HEADER */}
        {/* ====================================================== */}

        <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Compare Plans Side by Side
            </h1>

            <p className="mt-2 text-sm text-[#7187a8]">
              Compare coverage, benefits and protection
              across every available plan.
            </p>
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={expandAll}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#293752]
                bg-[#0c1425]
                px-3
                py-2
                text-xs
                font-medium
                text-[#b8c7dc]
                transition
                hover:border-[#41516e]
                hover:bg-[#111b30]
              "
            >
              <Plus size={14} />
              Expand all
            </button>

            <button
              type="button"
              onClick={collapseAll}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#293752]
                bg-[#0c1425]
                px-3
                py-2
                text-xs
                font-medium
                text-[#b8c7dc]
                transition
                hover:border-[#41516e]
                hover:bg-[#111b30]
              "
            >
              <Minus size={14} />
              Collapse all
            </button>

          </div>
        </div>

        {/* ====================================================== */}
        {/* TABLE */}
        {/* ====================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#25344d]
            bg-[#050b19]
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          "
        >

          {/* RESPONSIVE SCROLL */}

          <div className="overflow-x-auto">

            {/* IMPORTANT:
                Width is large enough to keep
                the comparison readable.
            */}

            <div className="min-w-[1000px]">

              {/* ================================================= */}
              {/* TABLE HEADER */}
              {/* ================================================= */}

              <div
                className="
                  grid
                  grid-cols-[minmax(210px,1fr)_repeat(3,minmax(190px,1fr))]
                  border-b
                  border-[#25344d]
                  bg-[#0d1629]
                "
              >

                {/* FEATURES */}

                <div className="flex min-h-[78px] items-end px-5 pb-4">
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#7892b7]">
                    Features
                  </span>
                </div>

                {/* PLANS */}

                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="
                      flex
                      min-h-[78px]
                      flex-col
                      items-center
                      justify-end
                      pb-4
                    "
                  >
                    <span
                      className={`
                        text-[16px]
                        font-semibold
                        ${plan.accent}
                      `}
                    >
                      {plan.name}
                    </span>

                    <span className="mt-1 text-[11px] text-[#617796]">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* ================================================= */}
              {/* MAIN SECTIONS */}
              {/* ================================================= */}

              {sections.map((section) => (
                <Section
                  key={section.id}
                  section={section}
                />
              ))}

              {/* ================================================= */}
              {/* ADDITIONAL BENEFITS */}
              {/* ================================================= */}

              <div className="border-t border-[#25344d]">

                <div
                  className="
                    bg-[#0d1629]
                    px-5
                    py-4
                  "
                >
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#7892b7]">
                    Additional Benefits & Terms
                  </h2>
                </div>

                {additionalBenefits.map(
                  (row, index) => (
                    <div
                      key={index}
                      className="
                        grid
                        grid-cols-[minmax(210px,1fr)_repeat(3,minmax(190px,1fr))]
                        border-t
                        border-[#172338]
                        bg-[#050b19]
                      "
                    >

                      <div
                        className="
                          flex
                          min-h-[52px]
                          items-center
                          px-5
                          py-3
                          text-[13px]
                          leading-[1.4]
                          text-[#d5ddeb]
                        "
                      >
                        {row.label}
                      </div>

                      {row.values.map(
                        (value, valueIndex) => (
                          <div
                            key={valueIndex}
                            className="
                              flex
                              min-h-[52px]
                              items-center
                              justify-center
                              px-5
                              py-3
                              text-center
                            "
                          >
                            <span className="text-[13px] leading-[1.45] text-[#d6deeb]">
                              {value}
                            </span>
                          </div>
                        )
                      )}

                    </div>
                  )
                )}
              </div>

              {/* ================================================= */}
              {/* PRICING */}
              {/* ================================================= */}

              <div className="border-t border-[#25344d]">

                {pricingRows.map(
                  (row, index) => (
                    <div
                      key={index}
                      className="
                        grid
                        grid-cols-[minmax(210px,1fr)_repeat(3,minmax(190px,1fr))]
                        border-t
                        border-[#172338]
                        first:border-t-0
                        bg-[#080f1e]
                      "
                    >

                      <div className="flex min-h-[52px] items-center px-5 text-[13px] font-medium text-white">
                        {row.label}
                      </div>

                      {row.values.map(
                        (value, valueIndex) => (
                          <div
                            key={valueIndex}
                            className="
                              flex
                              min-h-[52px]
                              items-center
                              justify-center
                              px-5
                              text-center
                            "
                          >
                            <span className="text-[13px] text-[#aebdd1]">
                              {value}
                            </span>
                          </div>
                        )
                      )}

                    </div>
                  )
                )}

              </div>

            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* FOOTER NOTE */}
        {/* ====================================================== */}

        <p className="mt-4 text-center text-[11px] leading-5 text-[#536985]">
          Coverage, eligibility and reimbursement limits
          are subject to the applicable policy terms and
          conditions.
        </p>

      </div>
    </main>
  );
}