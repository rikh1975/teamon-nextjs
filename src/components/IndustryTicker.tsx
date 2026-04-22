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
    <div className="bg-[#0a1628] border-y border-gray-700 py-4 overflow-hidden">
      <div className="ticker-track">
        <span className="text-gray-500 text-xs tracking-[0.15em] whitespace-nowrap px-4 font-light">
          {tickerContent}{tickerContent}
        </span>
      </div>
    </div>
  );
}
