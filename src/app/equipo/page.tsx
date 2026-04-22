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
  title: "Equipo | teamOn - Corporate Finance & M&A",
  description: "Conoce al equipo especializado de teamOn. Expertos en M&A, Corporate Finance y transacciones inmobiliarias.",
};

export default function EquipoPage() {
  const team = [
    {
      name: "Marco Hulsewé",
      role: "Managing Partner, Corporate Finance",
      bio: "Marco es el fundador y socio principal de teamOn con más de 15 años de experiencia en M&A y finanzas corporativas. Especialista en operaciones transfronterizas España-Latinoamérica.",
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
      bio: "Francisco aporta experiencia integral en transacciones inmobiliarias y M&A a nivel España y Europa. Experto en fondos de inversión inmobiliaria y operaciones de alto valor.",
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
      bio: "Enier se especializa en valoración de empresas, due diligence y análisis financiero. Responsable de proyectos en Latinoamérica con enfoque en sectores tecnológico y manufacturero.",
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
      bio: "Jesús colabora en operaciones de M&A y finanzas corporativas con especialización en análisis de modelos de negocio y optimización de estructuras de capital.",
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
              Nuestro Equipo
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Profesionales especializados en M&A, Corporate Finance e Inversión. Con experiencia en mercados de España y Latinoamérica.
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
                        Especialidades
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
              Nuestros Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Especialización",
                  description:
                    "Expertos en M&A y finanzas corporativas con experiencia probada en operaciones complejas.",
                },
                {
                  title: "Integridad",
                  description:
                    "Actuamos con total transparencia y confidencialidad en todas nuestras operaciones.",
                },
                {
                  title: "Resultados",
                  description:
                    "Enfoque pragmático orientado a maximizar valor para nuestros clientes.",
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
              Red Global
            </h2>
            <p className="text-center text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              Trabajamos con una red de expertos internacionales en M&A, Private Equity y Capital
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["España", "Países Bajos", "Uruguay", "Argentina", "Chile", "Colombia", "México", "EE.UU."].map((country) => (
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
              Conoce a nuestro equipo en persona
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Programa una reunión con nuestro equipo especializado.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
            >
              PROGRAMA UNA CITA
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
