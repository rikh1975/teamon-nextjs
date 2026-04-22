import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glosario de M&A y Corporate Finance | teamOn",
  description:
    "Diccionario profesional de términos clave en M&A, Corporate Finance y transacciones empresariales. Definiciones claras y prácticas de conceptos esenciales.",
  openGraph: {
    title: "Glosario de M&A y Corporate Finance | teamOn",
    description:
      "Diccionario profesional de términos clave en M&A, Corporate Finance y transacciones empresariales.",
    type: "website",
  },
};

const glossaryTerms = [
  {
    letter: "B",
    terms: [
      {
        term: "Buy & Build",
        definition:
          "Estrategia de adquisición donde una empresa matriz compra una plataforma inicial y luego realiza múltiples adquisiciones complementarias para crear un grupo más grande y diversificado.",
      },
      {
        term: "Buy-Side / Sell-Side",
        definition:
          "Buy-Side: perspectiva del comprador en una transacción. Sell-Side: perspectiva del vendedor. Determinan roles, intereses y estrategias en negociaciones.",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        term: "CFIUS",
        definition:
          "Committee on Foreign Investment in the United States. Revisa transacciones con inversión extranjera para proteger seguridad nacional, especialmente en sectores estratégicos.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Data Room",
        definition:
          "Plataforma segura donde el vendedor centraliza documentación de la empresa (financiera, legal, operativa) para que compradores potenciales realicen due diligence.",
      },
      {
        term: "DCF (Discounted Cash Flow)",
        definition:
          "Método de valoración que proyecta flujos de caja futuros y los descuenta a valor presente usando una tasa de descuento (WACC), determinando el valor intrínseco.",
      },
      {
        term: "Due Diligence",
        definition:
          "Investigación exhaustiva del comprador sobre la empresa, incluyendo aspectos financieros, legales, operativos, tributarios y comerciales antes de cerrar la transacción.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "EBITDA",
        definition:
          "Earnings Before Interest, Taxes, Depreciation and Amortization. Métrica clave de rentabilidad operativa que muestra la capacidad de generación de caja del negocio.",
      },
      {
        term: "Earn-Out",
        definition:
          "Componente del precio de compra diferido y condicionado al cumplimiento de objetivos financieros o operativos post-cierre. Alinea intereses de comprador y vendedor.",
      },
      {
        term: "Enterprise Value (EV)",
        definition:
          "Valor total de la empresa, calculado como capitalización de mercado más deuda neta. Representa lo que pagaría alguien por adquirir la compañía completamente.",
      },
    ],
  },
  {
    letter: "G",
    terms: [
      {
        term: "Growth Capital",
        definition:
          "Inversión de capital privado o fondos en empresas para financiar crecimiento operativo, expansión geográfica o adquisiciones, sin cambio de control.",
      },
    ],
  },
  {
    letter: "H",
    terms: [
      {
        term: "Hreflang",
        definition:
          "Elemento HTML que indica a motores de búsqueda versiones alternativas de una página en diferentes idiomas o regiones, mejorando indexación internacional.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "LBO / MBO",
        definition:
          "LBO (Leveraged Buyout): adquisición financiada principalmente con deuda. MBO (Management Buyout): LBO donde la gerencia actual es el comprador principal.",
      },
      {
        term: "LOI (Letter of Intent)",
        definition:
          "Documento no vinculante que expresa intención del comprador de proceder con la transacción. Establece términos preliminares y activa el período de due diligence.",
      },
    ],
  },
  {
    letter: "N",
    terms: [
      {
        term: "NDA (Non-Disclosure Agreement)",
        definition:
          "Contrato de confidencialidad entre partes que protege información sensible de la empresa. Requisito previo para compartir datos en data rooms y due diligence.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Post-Closing",
        definition:
          "Período después del cierre de transacción donde se ejecutan actividades de integración, ajustes de precio (true-up) y cumplimiento de condiciones suspensivas.",
      },
    ],
  },
  {
    letter: "R",
    terms: [
      {
        term: "R&W (Representations & Warranties)",
        definition:
          "Declaraciones del vendedor sobre la situación de la empresa. Protegen al comprador mediante seguros o depósitos en caso de incumplimiento post-cierre.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "SPA (Share Purchase Agreement)",
        definition:
          "Contrato vinculante principal que regula los términos de la transacción: precio, condiciones de cierre, representaciones, covenants y remedios ante incumplimientos.",
      },
    ],
  },
  {
    letter: "T",
    terms: [
      {
        term: "Term Sheet",
        definition:
          "Documento que resume los términos principales de la transacción (precio, estructura, condiciones). Usualmente no vinculante pero establece marco para negociación.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "Valoración por Múltiplos",
        definition:
          "Método de valoración que compara ratios financieros (EV/EBITDA, P/E) con empresas comparables del mercado para determinar valor relativo de la empresa.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "WACC",
        definition:
          "Weighted Average Cost of Capital. Costo promedio ponderado de las fuentes de financiamiento (deuda y equity) de la empresa. Se usa como tasa de descuento en DCF.",
      },
    ],
  },
];

export default function GlosarioMAPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#0f1f35] pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="font-light text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Glosario de M&A y <span className="text-[#009bbf]">Corporate Finance</span>
              </h1>
              <p className="font-light text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Diccionario profesional de términos clave en fusiones, adquisiciones y finanzas corporativas.
                Definiciones claras y prácticas para profesionales del sector.
              </p>
            </div>
          </div>

          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#009bbf] opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009bbf] opacity-5 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Glossary Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {glossaryTerms.map((section) => (
              <div key={section.letter} className="mb-16">
                {/* Letter Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-light text-[#009bbf] pb-4 border-b border-[#009bbf] border-opacity-30">
                    {section.letter}
                  </h2>
                </div>

                {/* Terms Grid */}
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {section.terms.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white bg-opacity-5 backdrop-blur-sm border border-[#009bbf] border-opacity-20 rounded-lg p-6 hover:border-opacity-50 hover:bg-opacity-10 transition-all duration-300"
                    >
                      <h3 className="text-lg font-light text-[#009bbf] mb-3">
                        {item.term}
                      </h3>
                      <p className="font-light text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-t from-[#009bbf] from-0% to-[#0a1628] to-60%">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-light text-3xl sm:text-4xl text-white mb-6">
              ¿Necesitas asesoramiento en M&A o Corporate Finance?
            </h2>
            <p className="font-light text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para guiar tu transacción desde la estrategia inicial hasta el cierre.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-white text-[#0a1628] font-light text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Solicitar Consulta
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
