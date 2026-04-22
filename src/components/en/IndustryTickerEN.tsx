"use client";

const industries = [
  "TECHNOLOGY", "FOOD INDUSTRY", "AGRICULTURE", "HOSPITALITY",
  "HUMAN RESOURCES", "AUTOMOTIVE", "ENGINEERING", "EDUCATION",
  "ROBOTICS", "CONSTRUCTION", "HEALTHCARE", "SENIOR LIVING",
  "MANUFACTURING", "FINTECH", "LOGISTICS", "REAL ESTATE",
];

export default function IndustryTickerEN() {
  const tickerContent = industries.join(" · ") + " · ";

  return (
    <div className="bg-[#0a1628] border-y border-gray-700 py-4 overflow-hidden">
      <div className="ticker-track">
        <span className="text-gray-500 text-xs tracking-[0.15em] whitespace-nowrap px-4 font-light">
          {tickerContent}{tickerContent}
        </span>
      </div>
    </div>
  );
}
