"use client";

import {
  Wrench,
  CarFront,
  Settings,
  SquareActivity,
  Zap,
  Snowflake,
  BadgeDollarSign,
  Ban,
} from "lucide-react";

const coveredComponents = [
  {
    title: "Engine",
    description:
      "Block, cylinder heads, and all internally lubricated parts.",
    icon: CarFront,
  },

  {
    title: "Transmission",
    description:
      "Automatic or manual transmission case and internal components.",
    icon: Settings,
  },

  {
    title: "Drive Axle",
    description:
      "Front and rear drive differentials and transfer case.",
    icon: SquareActivity,
  },

  {
    title: "Electrical System",
    description:
      "Alternator, starter motor, ignition system components.",
    icon: Zap,
  },

  {
    title: "Air Conditioning",
    description:
      "Compressor, condenser, and evaporator.",
    icon: Snowflake,
  },

   
  {
    title: "Engine Accessories",
    description:
      "Water pump, fuel pump, pulleys, tensioners, and related components.",
    icon: Wrench,
  },
];

function ComponentItem({ title, description, icon: Icon }) {
  return (
    <div className="flex gap-3">
      
      <div
        className="
          flex h-[42px] w-[42px] shrink-0 items-center justify-center
          rounded-full border border-[#34364f] bg-[#151d31]
        "
      >
        <Icon
          size={25}
          strokeWidth={1.8}
          className="text-[#f05ab7]"
        />
      </div>

      {/* Content */}
      <div className="pt-[1px]">
        <h4
          className="
            text-[18px]
            font-semibold
            leading-[25px]
            text-[#d8def2]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-[8px]
            max-w-[295px]
            text-[13px]
            leading-[16px]
            text-[#b7b9c7]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CoverageSection() {
  return (
    <section
      className="
        w-full
        bg-[#10192c]
        px-5
        py-8
        h-auto
        lg:h-[555px]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-auto
          w-full
          max-w-[1225px]
          flex-col
          items-center
          justify-center
          gap-6
          md:flex-row
          lg:flex-row
        "
      >
        <div
          className="
            flex
            h-auto
            w-full
            flex-col
            items-start
            justify-between
            rounded-[8px]
            border
            border-[#2c3448]
            bg-[#1b2437]
            px-6
            py-6
            lg:h-[465px]
            lg:w-[654px]
          "
        >
          <div className="flex items-center gap-2">
            <Wrench
              size={28}
              strokeWidth={2}
              className="text-[#ff945d]"
            />

            <h2
              className="
                text-[34px]
                font-semibold
                leading-[30px]
                text-[#d9e0f5]
              "
            >
              Covered Components
            </h2>
          </div>

          {/* Divider */}
          <div className="mt-3 h-px w-full bg-[#303749]" />

          {/* Components */}
          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-x-8
              gap-y-8
            "
          >
            {coveredComponents.map((item) => (
              <ComponentItem
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="flex w-[288px] flex-col gap-6">
          <div
            className="
              h-auto
              w-full
              rounded-[8px]
              border
              border-[#39346e]
              bg-[#2d286e]
              px-[18px]
              py-[18px]
              lg:h-[240px]
              lg:w-[388px]
            "
          >
            {/* Heading */}
            <div className="flex items-center gap-2">
              <BadgeDollarSign
                size={19}
                strokeWidth={2}
                className="text-[#ff9b5d]"
              />

              <h3
                className="
                  text-[28px]
                  font-semibold
                  text-[#ff9b5d]
                "
              >
                Deductible Info
              </h3>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-baseline">
              <span
                className="
                  text-[28px]
                  font-normal
                  text-[#e3e4f2]
                "
              >
                $100
              </span>

              <span
                className="
                  ml-1
                  text-[14px]
                  text-[#c2c0d4]
                "
              >
                / repair visit
              </span>
            </div>

            <p
              className="
                mt-1
                text-[14px]
                text-[#c4c1d4]
              "
            >
              Applies to all approved mechanical claims.
            </p>

            {/* Responsibility Box */}
            <div
              className="
                mt-3
                rounded-[4px]
                border
                border-[#57518b]
                bg-[#27235c]
                px-2
                py-2
              "
            >
              <p
                className="
                  text-[12px]
                  leading-[12px]
                  text-[#ddd9ec]
                "
              >
                <span className="font-semibold">
                  Customer Responsibility:
                </span>{" "}
                You pay the deductible directly to the repair
                facility; CarGuard covers the rest of approved
                parts and labor.
              </p>
            </div>
          </div>
          <div
            className="
              h-auto
              w-full
              rounded-[8px]
              border
              border-[#2d3549]
              bg-[#1b2437]
              px-[18px]
              py-[18px]
              lg:h-[200px]
              lg:w-[388px]
            "
          >
            {/* Heading */}
            <div className="flex items-center gap-2">
              <Ban
                size={18}
                strokeWidth={2}
                className="text-[#ff935b]"
              />

              <h3
                className="
                  text-[24px]
                  font-semibold
                  text-[#d9e0f5]
                "
              >
                Exclusions
              </h3>
            </div>

            {/* List */}
            <div className="mt-3 space-y-[7px]">
              <p
                className="
                  text-[13px]
                  text-[#b8bac8]
                "
              >
                × Routine maintenance (oil changes, brakes, tires)
              </p>

              <p
                className="
                  text-[12px]
                  text-[#b8bac8]
                "
              >
                × Pre-existing conditions
              </p>

              <p
                className="
                  text-[13px]
                  text-[#b8bac8]
                "
              >
                × Cosmetic damage
              </p>
            </div>

            {/* Terms */}
            <button
              type="button"
              className="
                mt-3
                text-[14px]
                font-semibold
                text-[#ef63b8]
                transition-colors
                hover:text-[#ff8acb]
              "
            >
              View Full Terms & Conditions →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}