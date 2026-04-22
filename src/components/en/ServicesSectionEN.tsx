"use client";
import { ArrowRight, Building2, TrendingUp, Home } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Corporate Finance",
    description:
      "Comprehensive Corporate Finance services: company buy-sell transactions, Growth Capital sourcing, and Buy and Build strategy advisory.",
    links: [
      { label: "Sell your company", href: "/en/services" },
      { label: "Buy a company", href: "/en/services" },
      { label: "Restructure your finances", href: "/en/services" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment & Capital",
    description:
      "Strategic bridge connecting Family Offices, private equity firms and investors with select investment opportunities.",
    links: [
      { label: "Raise capital", href: "/en/services" },
      { label: "Find partners", href: "/en/services" },
      { label: "Find opportunities", href: "/en/services" },
    ],
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Strategic and customized real estate transaction advisory oriented to meet the diverse needs of companies and families.",
    links: [
      { label: "Sell your property", href: "/en/services" },
      { label: "Buy a property", href: "/en/services" },
      { label: "Other services", href: "/en/services" },
    ],
  },
];

export default function ServicesSectionEN() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#009bbf] text-xs font-light tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Comprehensive Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-lg p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#009bbf]/20"
            >
              <div className="mb-6">
                <service.icon
                  size={48}
                  className="text-[#009bbf] group-hover:text-[#007a92] transition-colors"
                />
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              <div className="space-y-3">
                {service.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-[#009bbf] hover:text-[#007a92] transition-colors font-light"
                  >
                    <ArrowRight size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
