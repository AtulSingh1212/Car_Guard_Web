import React from "react";
import {
  Clock3,
  Headphones,
  ClipboardList,
  CarFront,
  MessageSquare,
  Users,
  BadgeCheck,
  FileText,
  Wrench,
} from "lucide-react";

const SupportAndTrustSection = ({
  title = "Business Hours & Support Availability",
  description = "We're here when you need us.",
  trustTitle = "Why Thousands Trust CarGuard",
  trustDescription = "We're committed to providing the best protection and service.",
  supportItems = [
    {
      title: "Sales Support",
      subtitle: "Questions about plans",
      icon: Headphones,
      iconColor: "text-slate-300",
      hours: [
        ["Mon - Fri", "7:00 AM - 9:00 PM"],
        ["Sat", "8:00 AM - 6:00 PM"],
      ],
    },
    {
      title: "Claims Department",
      subtitle: "File and check claims",
      icon: ClipboardList,
      iconColor: "text-yellow-400",
      hours: [
        ["Mon - Fri", "7:00 AM - 8:00 PM"],
        ["Sat", "8:00 AM - 5:00 PM"],
      ],
    },
    {
      title: "Roadside Assistance",
      subtitle: "Emergency help on road",
      icon: CarFront,
      iconColor: "text-orange-400",
      special: {
        value: "24 / 7",
        label: "365 Days a Year",
      },
    },
    {
      title: "Live Chat",
      subtitle: "Chat with our experts",
      icon: MessageSquare,
      iconColor: "text-slate-300",
      hours: [["Mon - Sun", "7:00 AM - 11:00 PM"]],
      timezone: "(Eastern Time)",
    },
  ],
  trustItems = [
    {
      value: "10K+",
      label: "Happy Customers",
      icon: Users,
      color: "text-slate-300",
    },
    {
      value: "98%",
      label: "Claims Settled",
      icon: BadgeCheck,
      color: "text-yellow-400",
    },
    {
      value: "25K+",
      label: "Active Contracts",
      icon: FileText,
      color: "text-red-300",
    },
    {
      value: "1.5K+",
      label: "Repair Partners",
      icon: Wrench,
      color: "text-slate-300",
    },
  ],
}) => {
  return (
    <div className="w-full bg-[#111a2d] p-4">
      <div className="mx-auto grid w-full min-h-[400px]  py-2  max-w-[1500px] grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1.1fr]">
        {/* LEFT PANEL */}
        <div className="rounded-2xl flex flex-col justify-between min-h-[470px] border border-slate-600/60 bg-[#121c30] p-4">
          {/* Header */}
          <div className="mb-4 flex items-start gap-2.5">
            <Clock3
              size={30}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-slate-300"
            />

            <div>
              <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-slate-100">
                {title}
              </h2>

              <p className="mt-1 text-[18px] text-slate-500">
                {description}
              </p>
            </div>
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title || index}
                  className="rounded-lg border  border-slate-700/50 bg-slate-800/80 px-3 py-3.5"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-2.5">
                    <Icon
                      size={25}
                      strokeWidth={2}
                      className={item.iconColor || "text-slate-300"}
                    />

                    <div className="min-w-0">
                      <p className="text-[18px] leading-tight text-slate-200">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[15px] leading-tight text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-2.5 h-px bg-slate-700/70" />

                  {/* Special Content */}
                  {item.special ? (
                    <div className="text-center">
                      <p className="text-[16px] font-semibold tracking-wide text-slate-200">
                        {item.special.value}
                      </p>

                      <p className="mt-0.5 text-[16px] text-slate-500">
                        {item.special.label}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {item.hours?.map(([day, time]) => (
                        <div
                          key={day}
                          className="flex items-center justify-between gap-3 text-[16px]"
                        >
                          <span className="text-slate-400">
                            {day}
                          </span>

                          <span className="font-medium text-slate-200">
                            {time}
                          </span>
                        </div>
                      ))}

                      {item.timezone && (
                        <p className="pt-0.5 text-right text-[8px] text-slate-500">
                          {item.timezone}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-2xl border border-slate-600/60 bg-[#121c30] p-4">
          {/* Header */}
          <div>
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-slate-100">
              {trustTitle}
            </h2>

            <p className="mt-1 text-[18px] text-slate-500">
              {trustDescription}
            </p>
          </div>

          {/* Trust Stats */}
          <div className="mt-7 grid grid-cols-2 gap-y-9">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label || index}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <Icon
                    size={50}
                    strokeWidth={2}
                    className={item.color || "text-slate-300"}
                  />

                  <p className="mt-1.5 text-[26px] font-semibold text-slate-100">
                    {item.value}
                  </p>

                  <p className="mt-0.5 text-[14px] text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportAndTrustSection;
