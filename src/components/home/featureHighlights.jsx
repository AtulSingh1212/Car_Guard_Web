import {
    MapPin,
    Tag,
    CreditCard,
    Zap,
  } from "lucide-react";
  
  const features = [
    {
      title: "Nationwide Coverage",
      description: "Genuine support across the country.",
      icon: MapPin,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      title: "No Hidden Costs",
      description: "Transparent pricing with no surprises.",
      icon: Tag,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Cashless Repairs",
      description: "Hassle-free cashless claim experience.",
      icon: CreditCard,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Quick Claim Process",
      description: "Easy, fast and transparent process.",
      icon: Zap,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];
  
  const FeatureHighlights = () => {
    return (
      <section className="w-full flex items-center justify-center h-[150px] px-4 py-2 px-2 lg:px-20 bg-[#0b1220]/95">
        <div className="mx-auto flex w-full h-full items-center justify-around rounded-md bg-white px-6 py-5 shadow-lg">
  
          {features.map((feature, index) => {
            const Icon = feature.icon;
  
            return (
              <div
                key={feature.title}
                className={`flex flex-1 items-center gap-3 h-[100px] w-[100px] `}
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 shrink-0  items-center justify-center rounded-lg ${feature.iconBg}`}
                >
                  <Icon
                    size={22}
                    strokeWidth={2.9}
                    className={feature.iconColor}
                  />
                </div>
  
                {/* Content */}
                <div className="min-w-0 gap-4 flex flex-col items-start justify-center">
                  <h3 className=" font-bold leading-4 text-xl text-[#111827]">
                    {feature.title}
                  </h3>
  
                  <p className="mt-0.5 text-md leading-[10px] text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
  
        </div>
      </section>
    );
  };
  
  export default FeatureHighlights;