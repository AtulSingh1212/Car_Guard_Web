import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Car,
  Download,
  Play,
  Headphones,
  MessageCircle,
  Mail,
} from "lucide-react";

const resources = [
  {
    id: "warranty-brochure",
    title: "Warranty Brochure",
    desc: "Complete overview of our plans and coverage details.",
    icon: BookOpen,
    color: "purple",
  },
  {
    id: "claim-guide",
    title: "Claim Guide",
    desc: "Step-by-step guide to filing a claim successfully.",
    icon: CheckCircle2,
    color: "green",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    desc: "Read our official service terms and conditions.",
    icon: FileText,
    color: "blue",
  },
  {
    id: "coverage-guide",
    title: "Coverage Guide",
    desc: "Detailed list of covered components and exclusions.",
    icon: Car,
    color: "amber",
  },
];

const videos = [
  {
    id: "file-a-claim",
    title: "How to File a Claim",
    desc: "A quick guide to filing your claim online or via phone.",
    duration: "2:45",
    gradient: "linear-gradient(135deg,#3a4a68,#1a2233)",
  },
  {
    id: "roadside-assistance",
    title: "Roadside Assistance",
    desc: "Learn how to request help when you're stranded.",
    duration: "1:58",
    gradient: "linear-gradient(135deg,#2a3d4a,#141c26)",
  },
];

const colorMap = {
  purple: {
    bg: "bg-[#4c2f8f]",
    fg: "text-[#c9b3f5]",
  },
  green: {
    bg: "bg-[#14493a]",
    fg: "text-[#6ee7b7]",
  },
  blue: {
    bg: "bg-[#1e3a6e]",
    fg: "text-[#93c5fd]",
  },
  amber: {
    bg: "bg-[#6e3f1e]",
    fg: "text-[#f5b876]",
  },
};

function ResourceCard({ item, onDownload }) {
  const [hover, setHover] = useState(false);
  const Icon = item.icon;
  const c = colorMap[item.color];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        rounded-xl
        border
        bg-[#171926]
        p-4
        transition-colors
        duration-150
        sm:p-5
        lg:p-[22px]
        ${
          hover
            ? "border-[#3d4058]"
            : "border-[#2a2d3d]"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          mb-4
          flex h-[42px] w-[42px]
          items-center justify-center
          rounded-[10px]
          ${c.bg}
        `}
      >
        <Icon
          size={20}
          strokeWidth={2}
          className={c.fg}
        />
      </div>

      {/* Title */}
      <h3
        className="
          mb-2
          text-[15px]
          font-semibold
          text-[#e8e8ec]
          sm:text-base
        "
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="
          mb-4
          text-[13px]
          leading-[1.55]
          text-[#8b8ea0]
          sm:text-[13.5px]
        "
      >
        {item.desc}
      </p>

      {/* Download */}
      <button
        onClick={() => onDownload(item.title)}
        className="
          inline-flex
          items-center
          gap-1.5
          border-none
          bg-transparent
          p-0
          text-[13px]
          font-medium
          text-[#5b8def]
          transition-colors
          hover:text-[#7ba5ff]
        "
      >
        <Download size={14} />
        Download PDF
      </button>
    </div>
  );
}

function VideoCard({ item, onPlay }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => onPlay(item.title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        mb-4
        flex
        cursor-pointer
        gap-3.5
        rounded-xl
        border
        bg-[#171926]
        p-3.5
        transition-colors
        duration-150
        ${
          hover
            ? "border-[#3d4058]"
            : "border-[#2a2d3d]"
        }
      `}
    >
      {/* Thumbnail */}
      <div
        className="
          relative
          h-[68px]
          w-[100px]
          shrink-0
          overflow-hidden
          rounded-lg
        "
        style={{
          background: item.gradient,
        }}
      >
        {/* Play button */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[30px]
            w-[30px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/90
          "
        >
          <Play
            size={12}
            color="#171926"
            fill="#171926"
            className="ml-0.5"
          />
        </div>

        {/* Duration */}
        <span
          className="
            absolute
            bottom-[5px]
            right-[6px]
            rounded
            bg-black/70
            px-[5px]
            py-px
            text-[10.5px]
            text-white
          "
        >
          {item.duration}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3
          className="
            mb-1
            text-[14px]
            font-semibold
            text-[#e8e8ec]
            sm:text-[14.5px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-[12px]
            leading-[1.5]
            text-[#8b8ea0]
            sm:text-[13px]
          "
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function ResourcesSection() {
  const [toast, setToast] = useState("");

  function showToast(message) {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function handleDownload(name) {
    showToast(`Downloading: ${name}.pdf`);
  }

  function handlePlay(title) {
    showToast(`Playing video: ${title}`);
  }

  function handleChat() {
    showToast("Starting live chat...");
  }

  return (
    <section
      className="
        min-h-screen
        bg-[#0d0e17]
        px-4
        py-10
        font-sans
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-16
      "
    >
      {/* Toast */}
      {toast && (
        <div
          className="
            fixed
            left-1/2
            top-5
            z-50
            -translate-x-1/2
            whitespace-nowrap
            rounded-lg
            border
            border-[#3d4058]
            bg-[#232640]
            px-[18px]
            py-2.5
            text-[13px]
            text-[#e8e8ec]
            shadow-lg
          "
        >
          {toast}
        </div>
      )}

      {/* Main container */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-8
          lg:grid-cols-[1.15fr_0.85fr]
        "
      >
        {/* ===================================== */}
        {/* Resources & Downloads */}
        {/* ===================================== */}

        <div className="flex flex-col">
          {/* Header */}
          <div
            className="
              mb-1.5
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-baseline
              sm:justify-between
            "
          >
            <h1
              className="
                text-3xl
                font-bold
                tracking-[-0.3px]
                text-white
                sm:text-4xl
                lg:text-[46px]
              "
            >
              Resources & downloads
            </h1>

            <a
              href="#"
              className="
                whitespace-nowrap
                text-sm
                font-medium
                text-[#5b8def]
                no-underline
                transition-colors
                hover:text-[#7ba5ff]
              "
            >
              View all ›
            </a>
          </div>

          {/* Description */}
          <p
            className="
              mb-5
              text-[15px]
              text-[#7d8092]
              sm:text-lg
            "
          >
            Access helpful documents and guides anytime.
          </p>

          {/* Resource cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {resources.map((item) => (
              <ResourceCard
                key={item.id}
                item={item}
                onDownload={handleDownload}
              />
            ))}
          </div>
        </div>

        {/* ===================================== */}
        {/* Video Tutorials + Support */}
        {/* ===================================== */}

        <div>
          {/* Header */}
          <div
            className="
              mb-6
              flex
              items-baseline
              justify-between
              gap-4
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                tracking-[-0.3px]
                text-white
              "
            >
              Video tutorials
            </h2>

            <a
              href="#"
              className="
                whitespace-nowrap
                text-sm
                font-medium
                text-[#5b8def]
                no-underline
                hover:text-[#7ba5ff]
              "
            >
              All videos ›
            </a>
          </div>

          {/* Videos */}
          {videos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onPlay={handlePlay}
            />
          ))}

          {/* ================================= */}
          {/* Direct Support */}
          {/* ================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-[#2a2d3d]
              bg-[#141625]
              p-5
              sm:p-6
              lg:min-h-[410px]
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-[190px]
                w-[170px]
                bg-[radial-gradient(circle,rgba(91,141,239,0.18)_0%,rgba(91,141,239,0)_70%)]
              "
            />

            <h2
              className="
                relative
                mb-5
                text-xl
                font-bold
                text-white
              "
            >
              Direct support
            </h2>

            {/* Call */}
            <div
              className="
                relative
                mb-5
                flex
                gap-3.5
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#1e3a6e]
                "
              >
                <Headphones
                  size={18}
                  className="text-[#93c5fd]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-[3px]
                    text-[14px]
                    font-semibold
                    text-[#e8e8ec]
                  "
                >
                  Call us anytime
                </h3>

                <p className="text-[13px] text-[#9698a8]">
                  (800) 123-4567
                </p>

                <span
                  className="
                    mt-1
                    inline-block
                    text-[11.5px]
                    font-semibold
                    tracking-[0.3px]
                    text-[#5b8def]
                  "
                >
                  AVAILABLE 24/7
                </span>
              </div>
            </div>

            {/* Live Chat */}
            <div
              className="
                relative
                mb-5
                flex
                gap-3.5
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#14493a]
                "
              >
                <MessageCircle
                  size={18}
                  className="text-[#6ee7b7]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-[3px]
                    text-[14px]
                    font-semibold
                    text-[#e8e8ec]
                  "
                >
                  Live chat
                </h3>

                <p
                  className="
                    mb-1
                    text-[13px]
                    text-[#9698a8]
                  "
                >
                  Chat with our experts instantly.
                </p>

                <button
                  onClick={handleChat}
                  className="
                    border-none
                    bg-transparent
                    p-0
                    text-[11.5px]
                    font-semibold
                    tracking-[0.3px]
                    text-green-400
                    hover:text-green-300
                  "
                >
                  Start chat now
                </button>
              </div>
            </div>

            {/* Email */}
            <div
              className="
                relative
                flex
                gap-3.5
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#6e3f1e]
                "
              >
                <Mail
                  size={18}
                  className="text-[#f5b876]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-[3px]
                    text-[14px]
                    font-semibold
                    text-[#e8e8ec]
                  "
                >
                  Email support
                </h3>

                <p className="text-[13px] text-[#9698a8]">
                  support@carguard.com
                </p>

                <p
                  className="
                    mt-0.5
                    text-[13px]
                    text-[#9698a8]
                  "
                >
                  Typical response within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
