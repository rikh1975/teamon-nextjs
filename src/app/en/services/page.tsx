import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | teamOn - Corporate Finance & M&A",
  description:
    "Corporate Finance, Investment & Capital, Real Estate Transactions. M&A and Corporate Finance specialists in Spain.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate Finance",
      icon: "📊",
      items: [
        "Company M&A",
        "Growth Capital",
        "Buy & Build",
        "Restructuring",
      ],
      description:
        "Comprehensive M&A advisory for entrepreneurs and companies seeking to expand or exit strategically.",
      link: "/en/services",
    },
    {
      title: "Investment & Capital",
      icon: "💼",
      items: [
        "Family Offices",
        "Private Equity",
        "Investment Opportunities",
        "Due Diligence",
      ],
      description:
        "Connecting investors and funds with growth opportunities across Spain and Latin America.",
      link: "/en/services",
    },
    {
      title: "Real Estate Transactions",
      icon: "🏢",
      items: [
        "Property Sales & Acquisitions",
        "Real Estate Funds",
        "Strategic Management",
        "Asset Valuation",
      ],
      description:
        "Experts in high-value real estate transactions and real estate investment fund structuring.",
      link: "/en/services",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Specialized advisory in Corporate Finance, M&A, Investment & Capital, and Real Estate Transactions.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-[#009bbf]"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-light text-[#0a1628] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                      Specialties
                    </h4>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-700 font-light flex items-start gap-3"
                        >
                          <span className="text-[#009bbf] mt-1 flex-shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#009bbf] hover:text-[#007a92] font-light transition-colors"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "In-depth analysis of your situation and goals",
                },
                {
                  step: "2",
                  title: "Strategy",
                  description: "Personalized action plan and timeline",
                },
                {
                  step: "3",
                  title: "Execution",
                  description: "Implementation with specialized team",
                },
                {
                  step: "4",
                  title: "Closing",
                  description: "Successful transaction completion",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                >
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center font-light text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-light text-[#0a1628] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">
              Start your transaction today
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Get 30 minutes of free consulting from our specialized team.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
            >
              SCHEDULE A MEETING
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
