import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Globe, TrendingUp, Shield, Clock, BarChart3, AlertCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'M&A Cross-Border España-Latinoamérica | teamOn',
  description: 'Asesoría integral en operaciones de M&A transfronterizo entre España y América Latina. Análisis de mercados clave, procesos, y estrategias de inversión.',
}

export default function MATransborderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#0f1f35] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 inline-flex items-center bg-[#009bbf]/10 border border-[#009bbf]/30 rounded-full px-4 py-2">
            <Globe className="w-4 h-4 mr-2 text-[#009bbf]" />
            <span className="text-sm font-light text-[#009bbf]">Corredor España-Latinoamérica</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-light mb-6 leading-tight">
            M&A Cross-Border<br />
            <span className="text-[#009bbf]">España-Latinoamérica</span>
          </h1>
          <p className="text-xl font-light text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Guía completa de operaciones transfronterizas: mercados, procesos, retos y oportunidades de inversión entre España y América Latina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#mercados" className="inline-flex items-center bg-[#009bbf] text-white px-6 py-3 rounded-lg font-light hover:bg-[#007a94] transition">
              Explorar Mercados
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#proceso" className="inline-flex items-center border border-[#009bbf] text-[#009bbf] px-6 py-3 rounded-lg font-light hover:bg-[#009bbf]/10 transition">
              Ver Proceso
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-[#009bbf] mb-2">USD 18.2B</div>
              <p className="text-gray-600 font-light">Inversión España en LatAm 2023</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-[#009bbf] mb-2">USD 380B</div>
              <p className="text-gray-600 font-light">Stock acumulado de inversión</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-[#009bbf] mb-2">65%</div>
              <p className="text-gray-600 font-light">Operaciones mid-market</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cross-Border M&A */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">¿Qué es el M&A Cross-Border?</h2>
          <p className="text-gray-600 font-light mb-12 text-lg max-w-3xl">
            Operaciones de fusiones y adquisiciones entre empresas de diferentes países, donde el comprador (español o europeo) adquiere activos, operaciones o participaciones en una empresa latinoamericana, o viceversa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-[#009bbf] mr-3" />
                <h3 className="text-xl font-light text-[#0a1628]">Proximidad Lingüística</h3>
              </div>
              <p className="text-gray-600 font-light">Idioma compartido, marcos legales similares y menor fricción comunicacional en procesos complejos de debido diligencia.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#009bbf] mr-3" />
                <h3 className="text-xl font-light text-[#0a1628]">Complementariedad Económica</h3>
              </div>
              <p className="text-gray-600 font-light">España accede a mercados de alto crecimiento; LatAm accede a capital, tecnología y estándares europeos de gobernanza.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#009bbf] mr-3" />
                <h3 className="text-xl font-light text-[#0a1628]">Flujos de Inversión Real</h3>
              </div>
              <p className="text-gray-600 font-light">España es 2º inversor en LatAm después de EE.UU. Corredor establecido con ecosistema maduro de asesores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Corredor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">El Corredor España-Latinoamérica</h2>
          <p className="text-gray-600 font-light mb-12 text-lg">Composición sectorial y duración típica de operaciones.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sector Breakdown */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-light mb-8 text-[#0a1628]">Composición por Sector</h3>
              <div className="space-y-4">
                {[
                  { sector: 'Alimentos & Bebidas', pct: 28 },
                  { sector: 'Manufactura', pct: 22 },
                  { sector: 'Retail & Distribución', pct: 15 },
                  { sector: 'SaaS & Tech', pct: 12 },
                  { sector: 'Logística & Transporte', pct: 10 },
                  { sector: 'Energía & Utilidades', pct: 8 },
                  { sector: 'Real Estate', pct: 5 },
                ].map((item) => (
                  <div key={item.sector}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-light text-gray-700">{item.sector}</span>
                      <span className="text-sm font-light text-[#009bbf] font-semibold">{item.pct}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-[#009bbf] h-2 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#0f1f35] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-light mb-8">Timeline Típico</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-[#009bbf]" />
                  </div>
                  <div>
                    <p className="font-light text-sm text-gray-300">Fase Completa</p>
                    <p className="text-lg font-light text-white">120-250 días</p>
                  </div>
                </div>
                <p className="text-sm font-light text-gray-400 italic">
                  Varía según complejidad regulatoria, requiere análisis CFIUS, múltiples jurisdicciones, y due diligence intensivo en cadenas de suministro y cumplimiento fiscal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercados Clave */}
      <section id="mercados" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">Mercados Clave por País</h2>
          <p className="text-gray-600 font-light mb-12 text-lg">Oportunidades de inversión y características de cada mercado.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Argentina */}
            <Link href="/ma-corporate-finance-argentina" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition h-full">
                <h3 className="text-xl font-light text-[#0a1628] mb-2">Argentina</h3>
                <p className="text-3xl font-light text-[#009bbf] mb-4">USD 11.8B</p>
                <p className="text-sm text-gray-600 font-light mb-4">Agribusiness, Tech, Fintech</p>
                <div className="inline-flex items-center text-[#009bbf] group-hover:gap-2 transition">
                  <span className="text-sm font-light">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Mexico */}
            <Link href="/ma-corporate-finance-mexico" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition h-full">
                <h3 className="text-xl font-light text-[#0a1628] mb-2">México</h3>
                <p className="text-3xl font-light text-[#009bbf] mb-4">USD 33B</p>
                <p className="text-sm text-gray-600 font-light mb-4">40% LatAm M&A, USMCA Hub</p>
                <div className="inline-flex items-center text-[#009bbf] group-hover:gap-2 transition">
                  <span className="text-sm font-light">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Colombia */}
            <Link href="/ma-corporate-finance-colombia" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition h-full">
                <h3 className="text-xl font-light text-[#0a1628] mb-2">Colombia</h3>
                <p className="text-3xl font-light text-[#009bbf] mb-4">USD 8.2B</p>
                <p className="text-sm text-gray-600 font-light mb-4">+24% YoY, Crecimiento Dinámico</p>
                <div className="inline-flex items-center text-[#009bbf] group-hover:gap-2 transition">
                  <span className="text-sm font-light">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Chile */}
            <Link href="/ma-corporate-finance-chile" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition h-full">
                <h3 className="text-xl font-light text-[#0a1628] mb-2">Chile</h3>
                <p className="text-3xl font-light text-[#009bbf] mb-4">USD 7.8B</p>
                <p className="text-sm text-gray-600 font-light mb-4">Mercado Más Estable</p>
                <div className="inline-flex items-center text-[#009bbf] group-hover:gap-2 transition">
                  <span className="text-sm font-light">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Uruguay */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-light text-[#0a1628] mb-2">Uruguay</h3>
              <p className="text-3xl font-light text-[#009bbf] mb-4">USD 2.1B</p>
              <p className="text-sm text-gray-600 font-light">Fintech & SaaS, Instituciones Ejemplares</p>
            </div>

            {/* Florida */}
            <Link href="/ma-corporate-finance-florida" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009bbf] hover:shadow-lg transition h-full">
                <h3 className="text-xl font-light text-[#0a1628] mb-2">Florida, EE.UU.</h3>
                <p className="text-3xl font-light text-[#009bbf] mb-4">USD 18.4B</p>
                <p className="text-sm text-gray-600 font-light mb-4">Miami-Dade, Hub Hispano</p>
                <div className="inline-flex items-center text-[#009bbf] group-hover:gap-2 transition">
                  <span className="text-sm font-light">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tipos de Operaciones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">Tipos de Operaciones</h2>
          <p className="text-gray-600 font-light mb-12 text-lg">Distribución de operaciones en el corredor España-LatAm.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Adquisición Estratégica', pct: 35, desc: 'Comprador industrial busca complementar operaciones' },
              { name: 'PE Roll-up', pct: 25, desc: 'Fondo de private equity consolida múltiples PYMES' },
              { name: 'Venta de Empresa Familiar', pct: 20, desc: 'Sucesión generacional o desinversión' },
              { name: 'Greenfield + Bolt-on', pct: 12, desc: 'Entrada + adquisiciones tácticas' },
              { name: 'Refinanciamiento', pct: 8, desc: 'Recapitalización o restructuring de deuda' },
            ].map((op) => (
              <div key={op.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-light text-[#0a1628]">{op.name}</h3>
                  <span className="text-2xl font-light text-[#009bbf]">{op.pct}%</span>
                </div>
                <p className="text-sm text-gray-600 font-light">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retos del M&A Cross-Border */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">Retos del M&A Cross-Border</h2>
          <p className="text-gray-600 font-light mb-12 text-lg">Factores clave que requieren expertise especializada.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: TrendingUp, title: 'Volatilidad Cambiaria', desc: 'Fluctuaciones USD/EUR/ARS/COP' },
              { icon: Shield, title: 'Regulaciones Múltiples', desc: 'Cumplimiento BCRA, SEC, IRS, AFIP' },
              { icon: AlertCircle, title: 'CFIUS & Sectores Sensibles', desc: 'Restricciones en defensa, energía, datos' },
              { icon: Zap, title: 'Due Diligence Compleja', desc: 'Cadenas de suministro, anti-corrupción' },
              { icon: Clock, title: 'Integración Post-Cierre', desc: '12-24 meses de sincronización' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <Icon className="w-8 h-8 text-[#009bbf] mx-auto mb-4" />
                <h3 className="text-lg font-light text-[#0a1628] mb-2">{title}</h3>
                <p className="text-sm text-gray-600 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#0a1628]">El Proceso Paso a Paso</h2>
          <p className="text-gray-600 font-light mb-12 text-lg">6 fases de una operación típica: 8-12 meses totales.</p>

          <div className="space-y-4">
            {[
              { phase: 1, name: 'Origination', duration: '2-4 semanas', desc: 'Identificación, pitch, LOI preliminar' },
              { phase: 2, name: 'Confidentiality & Exclusivity', duration: '4-8 semanas', desc: 'NDA, SPA draft, indicaciones de precio' },
              { phase: 3, name: 'Due Diligence', duration: '8-16 semanas', desc: 'Legal, financiera, tributaria, operacional, ambiental' },
              { phase: 4, name: 'LOI & SPA Negociación', duration: '4-8 semanas', desc: 'Términos, representaciones, warranties, indemnificaciones' },
              { phase: 5, name: 'Financiamiento & Closing', duration: '4-12 semanas', desc: 'Debt/equity raise, aprobaciones regulatorias, firma' },
              { phase: 6, name: 'Post-Closing', duration: '12-24 meses', desc: 'Integración, 100-day plan, creación de valor' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#009bbf] text-white font-light">
                    {item.phase}
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-light text-[#0a1628]">{item.name}</h3>
                    <span className="text-sm text-[#009bbf] font-light bg-[#009bbf]/10 px-3 py-1 rounded">{item.duration}</span>
                  </div>
                  <p className="text-gray-600 font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#0a1628] to-[#0f1f35] rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-[#009bbf] mr-3" />
              <h3 className="text-2xl font-light">Duración Total</h3>
            </div>
            <p className="text-4xl font-light text-[#009bbf] mb-4">8-12 meses</p>
            <p className="text-gray-300 font-light">Desde identificación de target hasta creación de valor post-cierre. Las operaciones mid-market tienden a 10-11 meses en promedio.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-[#0a1628]">¿Estás considerando una operación transfronteriza?</h2>
          <p className="text-xl font-light text-gray-600 mb-12">
            Contáctanos para una sesión confidencial de 30 minutos sobre tu situación específica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-sm text-gray-500 font-light mb-2">Email</p>
              <a href="mailto:info@teamon.es" className="text-xl font-light text-[#009bbf] hover:underline">
                info@teamon.es
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-sm text-gray-500 font-light mb-2">Teléfono</p>
              <a href="tel:+34932720861" className="text-xl font-light text-[#009bbf] hover:underline">
                +34 932 720 861
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-sm text-gray-500 font-light mb-2">Agendar Sesión</p>
              <a href="https://calendly.com/teamon" target="_blank" rel="noopener noreferrer" className="text-xl font-light text-[#009bbf] hover:underline">
                Calendly
              </a>
            </div>
          </div>

          <a href="https://calendly.com/teamon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#009bbf] text-white px-8 py-4 rounded-lg font-light hover:bg-[#007a94] transition text-lg">
            Agendar Sesión de Consultoría
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
