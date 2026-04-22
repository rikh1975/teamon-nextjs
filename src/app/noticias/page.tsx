import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Zap } from "lucide-react";

export const metadata = {
  title: "Noticias y Análisis | teamOn",
  description: "Análisis de tendencias en M&A, valuación de empresas y mercado de capitales. Últimas noticias del sector Corporate Finance.",
};

const placeholderArticles = [
  {
    id: 1,
    title: "El boom de M&A en 2024: oportunidades para medianas empresas",
    excerpt:
      "Un análisis de las tendencias del mercado y cómo las empresas pequeñas y medianas pueden capitalizar este momento.",
    date: "15 de Abril, 2024",
    category: "Análisis",
    icon: "📊",
  },
  {
    id: 2,
    title: "¿Cuál es el múltiplo de EBITDA correcto para tu sector?",
    excerpt:
      "Desglosamos los múltiplos promedio por industria y cómo interpretarlos en tu valuación empresarial.",
    date: "12 de Abril, 2024",
    category: "Guía",
    icon: "📈",
  },
  {
    id: 3,
    title: "Earn-outs: ventajas y riesgos para comprador y vendedor",
    excerpt:
      "Exploramos esta estructura de pago cada vez más común en M&A y cómo protegerse en ambos lados.",
    date: "08 de Abril, 2024",
    category: "Estrategia",
    icon: "⚖️",
  },
  {
    id: 4,
    title: "El rol del CFO en la venta de una empresa: checklist completo",
    excerpt:
      "Guía práctica para directivos financieros que preparan su empresa para un proceso de M&A.",
    date: "02 de Abril, 2024",
    category: "Operacional",
    icon: "✅",
  },
];

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h1 className="text-5xl lg:text-6xl font-light mb-6">
              Noticias y Análisis
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Mantente actualizado sobre tendencias en M&A, valuación de empresas
              y estrategias de growth. Análisis desde la perspectiva del Corporate Finance.
            </p>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-[#009bbf] to-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-light mb-2">
                  Recibe análisis directamente en tu correo
                </h2>
                <p className="text-blue-100 font-light">
                  Suscríbete a nuestro newsletter con insights exclusivos sobre M&A y finanzas
                </p>
              </div>
              <button className="px-6 py-3 bg-white text-[#009bbf] font-light rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="bg-gray-950 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="bg-blue-950 border border-[#009bbf] rounded-lg p-8 flex items-start gap-4">
              <Zap size={24} className="text-[#009bbf] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-light text-lg mb-2">
                  Próximamente: Sistema de Gestión de Contenido Integrado
                </h3>
                <p className="text-gray-300 font-light">
                  Estamos conectando WordPress Gutenberg para gestión automática de contenido.
                  Nuestro equipo editorial publica directo desde el CMS con actualizaciones en tiempo real.
                  Los artículos aparecerán aquí automáticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-light text-white mb-12">
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {placeholderArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-[#009bbf] transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
                >
                  {/* Card Header with Icon */}
                  <div className="h-32 bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center border-b border-gray-800">
                    <span className="text-6xl">{article.icon}</span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-950 text-[#009bbf] text-xs font-light rounded-full border border-blue-800">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#009bbf] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 font-light mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 text-[#009bbf] font-light hover:gap-3 transition-all duration-200">
                      Leer más
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Load More / Archive */}
        <section className="bg-gray-950 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-gray-400 font-light mb-6">
              Más artículos estarán disponibles próximamente a medida que expandimos nuestro biblioteca de contenido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@teamon.es"
                className="px-8 py-4 bg-[#009bbf] text-white font-light rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contáctanos para sugerencias
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-gray-700 text-gray-300 font-light rounded-lg hover:border-[#009bbf] hover:text-[#009bbf] transition-colors"
              >
                Ver Archivo
              </a>
            </div>
          </div>
        </section>

        {/* Content Strategy Section */}
        <section className="bg-[#0a1628] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-light text-white mb-8">
              Nuestra estrategia de contenido
            </h2>
            <div className="space-y-6 text-gray-300 font-light">
              <p>
                En teamOn publicamos análisis profundo sobre:
              </p>
              <ul className="space-y-3 text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#009bbf] mt-1">→</span>
                  <span><strong className="font-normal">Tendencias de M&A</strong> - movimientos del mercado, sectores activos, múltiplos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#009bbf] mt-1">→</span>
                  <span><strong className="font-normal">Estrategia Empresarial</strong> - preparar tu empresa para venta, growth hacking, valorización</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#009bbf] mt-1">→</span>
                  <span><strong className="font-normal">Finanzas</strong> - EBITDA, múltiplos, flujo de caja, valuation models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#009bbf] mt-1">→</span>
                  <span><strong className="font-normal">Operaciones</strong> - due diligence, due diligence, procesos, documentación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#009bbf] mt-1">→</span>
                  <span><strong className="font-normal">Casos de Estudio</strong> - deals cerrados, lecciones aprendidas, benchmarks</span>
                </li>
              </ul>
              <p className="mt-8">
                Suscríbete al newsletter para recibir estos análisis directamente en tu bandeja de entrada,
                cada semana con insights que afectan a tu negocio.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
