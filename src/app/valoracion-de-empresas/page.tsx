import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Valoración de Empresas: 3 Métodos Reales en M&A | teamOn",
  description: "Guía completa sobre valoración de empresas: DCF, multiples comparables, y método basado en activos. Con ejemplos reales.",
};

export default function ValoracionDeEmpresas() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Valoración de Empresas: 3 Métodos Reales en M&A
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Cómo calcular el valor real de una empresa y aplicarlo en transacciones
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {/* Intro */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                La valoración de una empresa es el proceso de estimar su valor económico. Es fundamental en transacciones M&A (fusiones y adquisiciones), porque determina el precio de compra y decide si el negocio es una buena inversión.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Existen tres métodos principales, cada uno con aplicaciones específicas:
              </p>
            </div>

            {/* Method 1: DCF */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-6">
                Método 1: DCF (Discounted Cash Flow)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es el método más riguroso. Se basa en la idea de que el valor de una empresa es igual a la suma de todos los flujos de caja futuros que generará, descontados al presente.
              </p>

              <div className="bg-[#f8f9fa] p-8 rounded-lg mb-6">
                <h3 className="text-xl font-light text-[#009bbf] mb-4">Fórmula DCF</h3>
                <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm mb-4">
                  <p>Valor Empresa = Σ (FC / (1 + WACC)^t) + Valor Terminal / (1 + WACC)^n</p>
                </div>
                <p className="text-gray-700 text-sm">
                  Donde: FC = Flujo de Caja, WACC = Costo de Capital (promedio ponderado), t = año, n = años proyectados
                </p>
              </div>

              <div>
                <h4 className="text-xl font-light text-[#0a1628] mb-4">Pasos para Calcular DCF</h4>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="border-l-4 border-[#009bbf] pl-4">
                    <h5 className="font-semibold text-gray-900 mb-2">1. Proyectar Flujos de Caja (5-10 años)</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Analizar histórico de 3-5 años</li>
                      <li>Estimar crecimiento de ingresos (basado en mercado, competencia)</li>
                      <li>Calcular EBITDA (ingresos - costos operativos)</li>
                      <li>Estimar capex y cambios en capital de trabajo</li>
                      <li>Llegar a Free Cash Flow (FCF) anual</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="border-l-4 border-[#009bbf] pl-4">
                    <h5 className="font-semibold text-gray-900 mb-2">2. Calcular WACC (Costo de Capital)</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))</li>
                      <li>E/V = % capital propio, D/V = % deuda</li>
                      <li>Re = tasa retorno esperada (típicamente 8-12%)</li>
                      <li>Rd = costo de deuda, Tc = tasa de impuestos</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="border-l-4 border-[#009bbf] pl-4">
                    <h5 className="font-semibold text-gray-900 mb-2">3. Calcular Valor Terminal</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Asume crecimiento perpetuo después del período proyectado</li>
                      <li>Fórmula: VT = FCF final × (1 + g) / (WACC - g)</li>
                      <li>g = tasa crecimiento perpetuo (típicamente 2-3%, no {'>'} PIB)</li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="border-l-4 border-[#009bbf] pl-4">
                    <h5 className="font-semibold text-gray-900 mb-2">4. Descontar Flujos al Presente</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Dividir cada FCF por (1 + WACC)^t</li>
                      <li>Sumar todos los FCF descontados</li>
                      <li>Descontar Valor Terminal igualmente</li>
                      <li>Restar deuda neta al resultado final</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example */}
              <div className="mt-6 bg-blue-50 border border-[#009bbf] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Ejemplo DCF Simplificado</h4>
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Empresa de software, Barcelona:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
                  <li>FCF Año 1-5: 500k€, 550k€, 600k€, 650k€, 700k€</li>
                  <li>WACC: 10%</li>
                  <li>Tasa crecimiento perpetuo: 2.5%</li>
                  <li>Deuda neta: 200k€</li>
                </ul>
                <div className="bg-white p-4 rounded border border-gray-300 text-sm font-mono mb-4">
                  <p>PV FCF (años 1-5): 2.36M€</p>
                  <p>Valor Terminal: 7.5M€ → PV: 4.67M€</p>
                  <p>Empresa Value: 7.03M€</p>
                  <p>Menos deuda neta: -200k€</p>
                  <p className="font-bold text-[#009bbf]">Equity Value: 6.83M€</p>
                </div>
                <p className="text-gray-700 text-sm italic">
                  Este método es ideal cuando hay clara visibilidad de flujos y crecimiento esperado.
                </p>
              </div>

              {/* Ventajas / Desventajas */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="border border-green-300 bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-2">✓ Ventajas</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Más riguroso y teórico</li>
                    <li>Refleja crecimiento futuro</li>
                    <li>Usado en PE/VC</li>
                  </ul>
                </div>
                <div className="border border-red-300 bg-red-50 p-4 rounded">
                  <p className="font-semibold text-red-900 mb-2">✗ Desventajas</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Muy sensible a supuestos</li>
                    <li>Complejo de calcular</li>
                    <li>Pequeñas empresas (datos débiles)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Method 2: Multiples */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-6">
                Método 2: Multiples Comparables
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compara el valor de tu empresa con transacciones similares o empresas cotizadas del mismo sector. Es rápido y basado en realidad de mercado.
              </p>

              <div className="bg-[#f8f9fa] p-8 rounded-lg mb-6">
                <h3 className="text-xl font-light text-[#009bbf] mb-4">Multiples Principales</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">EV / EBITDA</p>
                    <p className="text-sm text-gray-700">El más usado. Relaciona el valor de empresa con su ganancia operativa.</p>
                    <p className="text-sm text-gray-700 mt-1"><strong>Ejemplo:</strong> Si comparable tiene 10x EBITDA y tu EBITDA es 1M€, valor = 10M€</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">EV / Ingresos</p>
                    <p className="text-sm text-gray-700">Útil para empresas no rentables aún. Múltiple típicamente 1-3x.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">P/E (Price to Earnings)</p>
                    <p className="text-sm text-gray-700">Precio sobre beneficio neto. Para empresas con beneficios estables.</p>
                  </div>
                </div>
              </div>

              {/* Multiples by Sector */}
              <div className="mb-6">
                <h4 className="text-lg font-light text-[#0a1628] mb-4">
                  Multiples EBITDA Típicos por Sector (España/Barcelona)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0a1628] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-light">Sector</th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-light">Múltiplo EBITDA</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-light">Notas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Tecnología/SaaS</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">8-15x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Margen alto, recurrente</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Healthcare / Farmacéutica</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">6-12x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Regulatory, estable</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Alimentos & Bebidas</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">5-9x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Commodity, margen bajo</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Industrial / Manufactura</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">4-8x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Capital intensivo</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Real Estate / Construcción</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">5-10x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Cíclico, depende mercado</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Distribución / Retail</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#009bbf]">3-6x</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">Margen comprimido</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Find Comparables */}
              <div className="bg-blue-50 border border-[#009bbf] p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Cómo Encontrar Comparables</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li><strong>M&A deals:</strong> Busca transacciones recientes del mismo sector en tu región</li>
                  <li><strong>Empresas cotizadas:</strong> Si hay público comps, extrae múltiples de sus estados financieros</li>
                  <li><strong>Bases de datos:</strong> Thomson Reuters, PitchBook, CapitalIQ, etc.</li>
                  <li><strong>Brokers M&A:</strong> Consultoras locales tienen datos de deals cerrados</li>
                </ul>
              </div>

              {/* Example */}
              <div className="bg-blue-50 border border-[#009bbf] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Ejemplo Multiples</h4>
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Empresa distribuidora de componentes, Barcelona:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
                  <li>Tu EBITDA: 1.2M€</li>
                  <li>Comparable 1 (distribuidor similar vendido en 2024): 9x EBITDA</li>
                  <li>Comparable 2 (distribuidor cotizado en Bolsa): 7.5x EBITDA</li>
                  <li>Promedio: 8.25x EBITDA</li>
                </ul>
                <div className="bg-white p-4 rounded border border-gray-300 text-sm font-mono mb-4">
                  <p className="font-bold text-[#009bbf]">Valor = 1.2M€ × 8.25x = 9.9M€</p>
                </div>
              </div>
            </div>

            {/* Method 3: Asset-Based */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-6">
                Método 3: Valoración Basada en Activos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se enfoca en el valor neto de los activos de la empresa. Es menos usado que DCF y multiples, pero es importante para empresas de activos (real estate, holdings, manufactureras pesadas).
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fórmula Básica</h4>
                  <div className="bg-[#f8f9fa] p-4 rounded border border-gray-300 font-mono text-sm">
                    <p>Valor de Activos = Activos Totales - Pasivos Totales</p>
                    <p className="mt-2 text-gray-600">O versión más sofisticada:</p>
                    <p>Valor = Activos Tangibles (ajustados) - Pasivos - Activos Intangibles No-Operativos</p>
                  </div>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <h4 className="text-lg font-light text-[#0a1628] mb-4">
                    Proceso de Cálculo
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="text-[#009bbf] font-light min-w-fit">1.</div>
                      <div>
                        <p className="font-semibold text-gray-900">Listar Activos</p>
                        <p className="text-sm text-gray-700">Inmuebles, maquinaria, inventario, efectivo, cuentas por cobrar, marcas, patentes.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-[#009bbf] font-light min-w-fit">2.</div>
                      <div>
                        <p className="font-semibold text-gray-900">Revaluar Activos</p>
                        <p className="text-sm text-gray-700">Usar valor de mercado, no valor contable. Ej: inmueble en libros 500k€ pero vale 800k€.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-[#009bbf] font-light min-w-fit">3.</div>
                      <div>
                        <p className="font-semibold text-gray-900">Listar Pasivos</p>
                        <p className="text-sm text-gray-700">Deuda, proveedores, obligaciones laborales, pasivos fiscales.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-[#009bbf] font-light min-w-fit">4.</div>
                      <div>
                        <p className="font-semibold text-gray-900">Restar y Ajustar</p>
                        <p className="text-sm text-gray-700">Activos - Pasivos. Ajustar por contingencias ocultas, goodwill negativo.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-[#009bbf] p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Ejemplo Asset-Based</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    <strong>Empresa inmobiliaria / holding, Barcelona:</strong>
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-300 text-sm font-mono mb-4">
                    <p>Inmuebles (valor mercado): 5M€</p>
                    <p>Maquinaria / Equipos: 500k€</p>
                    <p>Efectivo: 300k€</p>
                    <p>Intangibles operativos: 200k€</p>
                    <p className="border-t border-gray-300 pt-2">Total Activos: 6M€</p>
                    <p>Deuda: -2M€</p>
                    <p className="font-bold text-[#009bbf]">Valor Neto: 4M€</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="border border-green-300 bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-2">✓ Cuándo Usar</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Empresas with real estate</li>
                    <li>Holdings / Inversoras</li>
                    <li>Valuación de liquidación</li>
                  </ul>
                </div>
                <div className="border border-red-300 bg-red-50 p-4 rounded">
                  <p className="font-semibold text-red-900 mb-2">✗ Limitaciones</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ignora futuros flujos</li>
                    <li>No captura brand value</li>
                    <li>Menos relevante para negocios</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparación */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-6">
                Comparación de Métodos
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0a1628] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-light">Aspecto</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-light">DCF</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-light">Multiples</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-light">Asset-Based</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Complejidad</td>
                      <td className="border border-gray-300 px-4 py-3">Alta</td>
                      <td className="border border-gray-300 px-4 py-3">Media</td>
                      <td className="border border-gray-300 px-4 py-3">Baja-Media</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Aceptación M&A</td>
                      <td className="border border-gray-300 px-4 py-3">Muy alta</td>
                      <td className="border border-gray-300 px-4 py-3">Muy alta</td>
                      <td className="border border-gray-300 px-4 py-3">Media</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Mejor Para</td>
                      <td className="border border-gray-300 px-4 py-3">Crecimiento claro</td>
                      <td className="border border-gray-300 px-4 py-3">Comparables disponibles</td>
                      <td className="border border-gray-300 px-4 py-3">Activos tangibles</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Sensibilidad a supuestos</td>
                      <td className="border border-gray-300 px-4 py-3">Muy alta</td>
                      <td className="border border-gray-300 px-4 py-3">Media</td>
                      <td className="border border-gray-300 px-4 py-3">Baja</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best Practice */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-2xl font-light text-[#0a1628] mb-4">
                Best Practice en M&A
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los mejores asesores utilizan los tres métodos y triangularlos para llegar a un rango de valor:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>DCF típicamente da el valor más alto (asume best case)</li>
                <li>Multiples da el valor más realista (basado en mercado)</li>
                <li>Asset-based da el piso mínimo</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Rango final:</strong> Si DCF = 12M€, Multiples = 9M€, Asset-based = 6M€, entonces rango es 6-12M€, siendo 9M€ el valor más probable.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#0d1f36] text-white p-12 rounded-lg">
              <h2 className="text-3xl font-light mb-4">
                ¿Necesitas Valoración Profesional?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                En teamOn realizamos valuaciones exhaustivas con los tres métodos. Servimos como base para transacciones, refinanciación, o decisiones estratégicas.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[#009bbf] text-white px-8 py-3 rounded hover:bg-opacity-90 transition font-light"
              >
                Solicitar Valoración
              </Link>
            </div>

            {/* Related */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-light text-[#0a1628] mb-4">Artículos Relacionados</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/empresa-familiar" className="text-[#009bbf] hover:underline font-light">
                    → Empresa Familiar: Cómo Organizarla para Maximizar su Valor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
