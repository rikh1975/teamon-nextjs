import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Globe, CheckCircle, Handshake, Map } from "lucide-react";

export const metadata = {
  title: "Red Internacional | The ACS Partners | teamOn",
  description:
    "Discover teamOn's exclusive membership in The ACS Partners global network. Access to 16 countries, 3 continents, and cross-border M&A expertise. The trusted international platform for corporate finance and business origination.",
};

const countries = [
  { name: "Spain", region: "Europe" },
  { name: "Portugal", region: "Europe" },
  { name: "France", region: "Europe" },
  { name: "Germany", region: "Europe" },
  { name: "Netherlands", region: "Europe" },
  { name: "United Kingdom", region: "Europe" },
  { name: "Italy", region: "Europe" },
  { name: "Switzerland", region: "Europe" },
  { name: "United States", region: "America" },
  { name: "Mexico", region: "America" },
  { name: "Colombia", region: "America" },
  { name: "Chile", region: "America" },
  { name: "Argentina", region: "America" },
  { name: "Uruguay", region: "America" },
  { name: "Brazil", region: "America" },
  { name: "Peru", region: "America" },
];

const networkServices = [
  {
    icon: Handshake,
    title: "Deal Origination",
    description:
      "Access to exclusive deal flow and investment opportunities across our global network. Direct connections with decision-makers and transaction partners.",
  },
  {
    icon: Map,
    title: "Cross-Border M&A",
    description:
      "End-to-end support for international mergers and acquisitions. Navigate regulatory frameworks and local expertise in every market.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description:
      "Deep market knowledge combined with global perspective. Local partners who understand regional dynamics and opportunities.",
  },
];

const benefits = [
  "Verified member network of corporate finance professionals",
  "Access to pre-qualified deal opportunities",
  "Streamlined cross-border transaction processes",
  "Market intelligence and industry insights",
  "Direct partnerships with decision-makers",
  "24/7 global network support",
];

export default function RedInternacionalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#0a1628] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#009bbf] rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009bbf] rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-[#009bbf] mr-3" />
              <span className="text-[#009bbf] font-light text-sm tracking-wider uppercase">
                The ACS Partners Network
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-center mb-8 max-w-4xl mx-auto">
              Global Network, Local Expertise
            </h1>

            <p className="text-lg font-light text-gray-300 text-center max-w-3xl mx-auto mb-12">
              teamOn is the exclusive member of The ACS Partners in Spain. Our membership connects you to a curated network of corporate finance professionals across 16 countries, enabling seamless cross-border transactions and international business origination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-light text-[#009bbf] mb-2">
                  16
                </div>
                <p className="font-light text-gray-300">Countries</p>
              </div>
              <div className="text-center border-l border-r border-gray-600">
                <div className="text-4xl font-light text-[#009bbf] mb-2">
                  3
                </div>
                <p className="font-light text-gray-300">Continents</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#009bbf] mb-2">
                  1
                </div>
                <p className="font-light text-gray-300">Global Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Grid */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-[#0a1628] text-center mb-4">
              Our Global Reach
            </h2>
            <p className="text-center text-gray-600 font-light mb-16 max-w-2xl mx-auto">
              Present across key markets in Europe and the Americas, enabling seamless international transactions and partnerships.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#009bbf] hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="w-3 h-3 rounded-full bg-[#009bbf] mb-3 group-hover:scale-125 transition-transform"></div>
                  <p className="font-light text-sm text-center text-[#0a1628]">
                    {country.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{country.region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the Network Works */}
        <section className="bg-gray-50 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-[#0a1628] text-center mb-4">
              How The Network Works
            </h2>
            <p className="text-center text-gray-600 font-light mb-16 max-w-2xl mx-auto">
              Three pillars of value that define our international partnership approach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {networkServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#009bbf] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-[#0a1628] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#0a1628] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-4">
              Benefits for Members
            </h2>
            <p className="text-center text-gray-300 font-light mb-16 max-w-2xl mx-auto">
              Access exclusive advantages as a member of The ACS Partners network through teamOn.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#009bbf] flex-shrink-0 mt-1" />
                  <p className="font-light text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why teamOn Section */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-[#0a1628] mb-6">
              Why Choose teamOn for International Transactions?
            </h2>
            <p className="text-gray-600 font-light text-lg mb-12">
              As the exclusive ACS Partners member in Spain, teamOn bridges Spanish market expertise with global institutional networks. We originate, structure, and execute cross-border transactions with precision and strategic insight.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-light text-[#0a1628] mb-3">
                  Spanish Headquarters
                </h3>
                <p className="text-gray-600 font-light">
                  Deep understanding of local regulations, market dynamics, and decision-makers.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-light text-[#0a1628] mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600 font-light">
                  Institutional connections across Europe and the Americas for seamless partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#009bbf] text-white py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Access the Global Network?
            </h2>
            <p className="font-light text-lg mb-12 opacity-90">
              Let's discuss how The ACS Partners network can accelerate your international expansion or cross-border transaction strategy.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0a1628] text-white px-12 py-4 rounded-lg font-light hover:bg-[#0a1628]/90 transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
