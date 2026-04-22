import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const metadata = {
  title: "Team | teamOn - Corporate Finance & M&A",
  description:
    "Meet the specialized team at teamOn. Experts in M&A, Corporate Finance and real estate transactions.",
};

export default function TeamPage() {
  const team = [
    {
      name: "Marco Hulsewé",
      role: "Managing Partner, Corporate Finance",
      bio: "Marco is the founder and senior partner of teamOn with over 15 years of experience in M&A and corporate finance. Specialist in cross-border Spain-Latin America transactions.",
      expertise: [
        "M&A Strategy",
        "Corporate Finance",
        "Deal Structuring",
        "Cross-border Transactions",
      ],
    },
    {
      name: "Francisco Pérez",
      role: "Partner, Real Estate · M&A",
      bio: "Francisco brings comprehensive experience in real estate transactions and M&A across Spain and Europe. Expert in real estate investment funds and high-value operations.",
      expertise: [
        "Real Estate M&A",
        "Property Transactions",
        "Fund Management",
        "Portfolio Structuring",
      ],
    },
    {
      name: "Enier Rangel",
      role: "Associate, Corporate Finance",
      bio: "Enier specializes in company valuation, due diligence and financial analysis. Responsible for Latin America projects with focus on technology and manufacturing sectors.",
      expertise: [
        "Valuation",
        "Due Diligence",
        "Financial Analysis",
        "LatAm Markets",
      ],
    },
    {
      name: "Jesús Vicens",
      role: "Associate, Corporate Finance",
      bio: "Jesús collaborates in M&A operations and corporate finance with specialization in business model analysis and capital structure optimization.",
      expertise: [
        "M&A Execution",
        "Business Modeling",
        "Capital Structure",
        "Financial Planning",
      ],
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
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Specialized professionals in M&A, Corporate Finance and Investment. With experience in Spain and Latin America markets.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#009bbf]"
                >
                  {/* Profile Header */}
                  <div className="bg-gradient-to-br from-[#0a1628] to-[#0f1f34] p-12 text-white min-h-40 flex flex-col justify-end">
                    <h3 className="text-3xl font-light mb-2">{member.name}</h3>
                    <p className="text-[#009bbf] font-light text-sm tracking-widest uppercase">
                      {member.role}
                    </p>
                  </div>

                  {/* Profile Content */}
                  <div className="p-8">
                    <p className="text-gray-700 font-light leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-light border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200">
                      <a
                        href="mailto:info@teamon.es"
                        className="text-gray-500 hover:text-[#009bbf] transition-colors"
                        title="Email"
                      >
                        <Mail size={20} />
                      </a>
                      <a
                        href="https://linkedin.com/company/teamon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#009bbf] transition-colors"
                        title="LinkedIn"
                      >
                        <LinkedinIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Specialization",
                  description:
                    "Experts in M&A and corporate finance with proven experience in complex transactions.",
                },
                {
                  title: "Integrity",
                  description:
                    "We act with total transparency and confidentiality in all our operations.",
                },
                {
                  title: "Results",
                  description:
                    "Pragmatic approach focused on maximizing value for our clients.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center"
                >
                  <h3 className="text-xl font-light text-[#0a1628] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-6 text-center">
              Global Network
            </h2>
            <p className="text-center text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              We work with a network of international experts in M&A, Private Equity and Capital
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Spain", "Netherlands", "Uruguay", "Argentina", "Chile", "Colombia", "Mexico", "USA"].map((country) => (
                <div
                  key={country}
                  className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 hover:border-[#009bbf] transition-colors"
                >
                  <p className="font-light text-[#0a1628]">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">
              Meet our team in person
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Schedule a meeting with our specialized team.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
            >
              SCHEDULE A MEETING
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
