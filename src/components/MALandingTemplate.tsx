import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MALandingTemplateProps {
  country: string;
  title: string;
  subtitle: string;
  marketStats: {
    label: string;
    value: string;
  }[];
  sectors: string[];
  description: string;
  whyChoose: string[];
  networkLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export default function MALandingTemplate({
  country,
  title,
  subtitle,
  marketStats,
  sectors,
  description,
  whyChoose,
  networkLinks = [],
}: MALandingTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 font-light mb-8">{subtitle}</p>
          <p className="text-[#009bbf] text-sm font-light">
            * Recibe 30 minutos de consultoría gratuita
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-[#0a1628] mb-12">
            Mercado M&A en {country}
          </h2>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
            <h3 className="text-lg font-light text-[#0a1628] mb-6">
              Indicadores Clave
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {marketStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-12">
            {description}
          </p>

          {/* Sectors */}
          <div>
            <h3 className="text-2xl font-light text-[#0a1628] mb-6">
              Sectores con Mayor Actividad
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-3"
                >
                  <span className="text-[#009bbf] flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700 font-light">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-[#0a1628] mb-12">
            Por qué elegir teamOn
          </h2>

          <div className="space-y-6">
            {whyChoose.map((point, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light">
                  {index + 1}
                </div>
                <div className="pt-1">
                  <p className="text-gray-700 font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Links */}
      {networkLinks.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Explorar Otros Mercados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="font-light text-[#0a1628] group-hover:text-[#009bbf] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-[#009bbf] group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Inicia tu transacción en {country}
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Recibe 30 minutos de consultoría gratuita sobre oportunidades en el
            mercado.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
          >
            PROGRAMA UNA CITA
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
