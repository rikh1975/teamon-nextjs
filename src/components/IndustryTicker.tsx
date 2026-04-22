"use client";

const industries = [
  "TECNOLOGÍA", "INDUSTRIA ALIMENTARIA", "AGRICULTURA", "HOSTELERÍA",
  "RECURSOS HUMANOS", "AUTOMOCIÓN", "INGENIERÍA", "EDUCACIÓN",
  "ROBÓTICA", "CONSTRUCCIÓN", "SANIDAD", "RESIDENCIAS DE MAYORES",
  "FABRICACIÓN", "FINTECH", "LOGÍSTICA", "INMOBILIARIA",
];

export default function IndustryTicker() {
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
