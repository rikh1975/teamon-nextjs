"use client";
import { ArrowRight, Building2, TrendingUp, Home } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Corporate Finance",
    description:
      "teamOn offers comprehensive Corporate Finance services, including company buy-sell transactions, Growth Capital sourcing, and Buy and Build strategy advisory.",
    links: [
      { label: "sell your company", href: "/en/services" },
      { label: "buy a company", href: "/en/services" },
      { label: "restructure your finances", href: "/en/services" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment & Capital",
    description:
      "Our financial advisory and investment services represent a strategic bridge connecting Family Offices, private equity firms and investors with select investment opportunities.",
    links: [
      { label: "raise capital", href: "/en/services" },
      { label: "find partners", href: "/en/services" },
      { label: "find opportunities", href: "/en/services" },
    ],
  },
  {
    icon: Home,
    title: "Real Estate Transactions",
    description:
      "With a focus on strategic and customized solutions, our real estate transaction advisory is oriented to meet the diverse needs of companies and families.",
    links: [
      { label: "sell your property", href: "/en/services" },
      { label: "buy a property", href: "/en/services" },
      { label: "other services", href: "/en/services" },
    ],
  },
];

export default function ServicesSectionEN() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gray-50 rounded-lg p-8 hover:bg-[#1a1a2e] hover:text-white transition-all duration-500 border border-gray-100 hover:border-[#278CC8]/30"
            >
              <service.icon size={40} className="text-[#278CC8] mb-6 group-hover:text-[#278CC8]" />
              <h3 className="text-2xl font-light mb-4 text-gray-800 group-hover:text-white">{service.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.links.map((link) => (
                  <Link key={link.label} href={link.href} className="flex items-center gap-2 text-sm text-[#278CC8] hover:text-[#009bbf] transition-colors">
                    <ArrowRight size={14} />
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
