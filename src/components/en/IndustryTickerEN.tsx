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
    <div className="bg-[#1a1a2e] border-y border-gray-700 py-3 overflow-hidden">
      <div className="ticker-track">
        <span className="text-gray-400 text-xs tracking-[0.2em] whitespace-nowrap px-4">
          {tickerContent}{tickerContent}
        </span>
      </div>
    </div>
  );
}
