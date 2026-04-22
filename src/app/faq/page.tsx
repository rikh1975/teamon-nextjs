import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Preguntas Frecuentes | teamOn",
  description: "Resuelve tus dudas sobre M&A, valuación de empresas y procesos de venta. Preguntas frecuentes sobre Corporate Finance y asesoría empresarial.",
};

const faqs = [
  {
    question: "¿Qué es el Corporate Finance?",
    answer: "El Corporate Finance es la disciplina que se encarga de la gestión financiera de empresas, incluyendo decisiones sobre inversiones, financiamiento y estrategia. En el contexto de M&A, nos enfocamos en procesos de fusión, adquisición y venta de empresas.",
  },
  {
    question: "¿Cuándo necesito un asesor de M&A?",
    answer: "Necesitas un asesor de M&A cuando estás considerando vender tu empresa, buscar inversión, adquirir un competidor o explorar opciones estratégicas. Un asesor profesional maximiza el valor, acelera el proceso y mitiga riesgos.",
  },
  {
    question: "¿Cuánto cuesta vender mi empresa?",
    answer: "Los costos varían según el tamaño y complejidad del proceso. Típicamente incluyen honorarios de asesoría (1-2% del valor), due diligence legal y financiera, y costos administrativos. En teamOn trabajamos con modelos flexibles adaptados a tu situación.",
  },
  {
    question: "¿Qué es el EBITDA y por qué importa?",
    answer: "EBITDA significa Earnings Before Interest, Taxes, Depreciation and Amortization. Es la ganancia operativa de tu empresa antes de gastos financieros e impuestos. Es crucial porque los compradores usan el EBITDA para valorar empresas aplicando múltiplos de mercado.",
  },
  {
    question: "¿Cuánto dura un proceso de venta?",
    answer: "Un proceso típico toma 6-12 meses. Incluye: preparación (2-3 meses), búsqueda de compradores (3-4 meses), due diligence (2-3 meses) y negociación final (1-2 meses). Esto varía según la industria y complejidad.",
  },
  {
    question: "¿Qué es un earn-out?",
    answer: "Un earn-out es una parte del precio de venta que se paga posteriormente, condicionada al cumplimiento de objetivos futuros (revenue, EBITDA, retención de clientes). Reduce riesgo para el comprador y permite al vendedor capturar upside.",
  },
  {
    question: "¿Qué es el due diligence?",
    answer: "Es el proceso exhaustivo de investigación que realiza el comprador antes de cerrar la transacción. Incluye revisión de finanzas, contratos, activos, pasivos legales, clientes, proveedores y operaciones. Una buena preparación acelera este proceso.",
  },
  {
    question: "¿Qué tamaño de empresa necesito para vender?",
    answer: "No hay un mínimo absoluto, pero generalmente empresas con EBITDA mayor a 500k EUR encuentran más compradores estratégicos. Empresas más pequeñas pueden venderse a competidores o inversores de nicho. En teamOn asesoramos empresas de todos los tamaños.",
  },
  {
    question: "¿Qué diferencia hay entre sell-side y buy-side?",
    answer: "Sell-side es cuando asesoramos al vendedor para maximizar el precio y términos. Buy-side es cuando asesoramos al comprador para conseguir la mejor valoración y protección. Cada rol requiere estrategia distinta.",
  },
  {
    question: "¿Cómo se valora una empresa?",
    answer: "Las principales metodologías son: múltiplos de mercado (EBITDA x múltiplo industria), flujos de caja descontados (DCF), y activos menos pasivos. La valoración depende de sector, crecimiento, rentabilidad, riesgos y comparables de mercado.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h1 className="text-5xl lg:text-6xl font-light mb-6">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-300 font-light">
              Resuelve tus dudas sobre M&A, valuación y procesos de venta.
            </p>
          </div>
        </section>

        <section className="bg-gray-950 py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <section className="bg-[#0a1628] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-light text-white mb-6">¿Aún tienes dudas?</h2>
            <p className="text-gray-300 font-light mb-8 text-lg">Nuestro equipo está listo para responder tus preguntas específicas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@teamon.es" className="px-8 py-4 bg-[#009bbf] text-white font-light hover:bg-[#007a92] transition-colors text-sm tracking-widest">
                ENVÍA TU PREGUNTA
              </a>
              <a href="https://calendly.com/teamon" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-light hover:border-[#009bbf] hover:text-[#009bbf] transition-colors text-sm tracking-widest">
                AGENDA UNA LLAMADA
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
