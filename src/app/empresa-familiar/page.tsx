import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Empresa Familiar: Cómo Organizarla para Maximizar su Valor | teamOn",
  description: "Estrategia de crecimiento y preparación para la venta o sucesión de empresas familiares. teamOn Corporate Finance.",
};

export default function EmpresaFamiliar() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Empresa Familiar: Cómo Organizarla para Maximizar su Valor
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Preparación profesional para sucesión o venta exitosa
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {/* Intro Stats */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="bg-[#f0f7fb] p-6 rounded-lg">
                <p className="text-4xl font-light text-[#009bbf] mb-2">80%</p>
                <p className="text-gray-700 text-sm font-light">
                  De las empresas en Barcelona son de estructura familiar
                </p>
              </div>
              <div className="bg-[#f0f7fb] p-6 rounded-lg">
                <p className="text-4xl font-light text-[#009bbf] mb-2">15-20%</p>
                <p className="text-gray-700 text-sm font-light">
                  De empresas familiares llegan a la tercera generación con éxito
                </p>
              </div>
            </div>

            {/* 1. El Reto de la Empresa Familiar */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                El Reto de la Empresa Familiar
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                La mayoría de empresas familiares de Barcelona enfrentan desafíos críticos que erosionan su valor:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#009bbf] pl-4">
                  <h3 className="text-xl font-light text-[#0a1628] mb-2">
                    Conflicto Generacional
                  </h3>
                  <p className="text-gray-700">
                    Diferencias en visión, valores y decisiones estratégicas entre fundador y herederos crean parálisis operativa.
                  </p>
                </div>

                <div className="border-l-4 border-[#009bbf] pl-4">
                  <h3 className="text-xl font-light text-[#0a1628] mb-2">
                    Mezcla de Ámbito Personal y Empresarial
                  </h3>
                  <p className="text-gray-700">
                    Decisiones basadas en lealtad familiar en lugar de criterios fiduciarios. Falta de gobernanza clara.
                  </p>
                </div>

                <div className="border-l-4 border-[#009bbf] pl-4">
                  <h3 className="text-xl font-light text-[#0a1628] mb-2">
                    Dependencia del Fundador
                  </h3>
                  <p className="text-gray-700">
                    El negocio gira alrededor de una persona. Comprador reduce valuación si ve riesgo de continuidad.
                  </p>
                </div>

                <div className="border-l-4 border-[#009bbf] pl-4">
                  <h3 className="text-xl font-light text-[#0a1628] mb-2">
                    Debilidad Administrativa y Financiera
                  </h3>
                  <p className="text-gray-700">
                    Procesos informales, contabilidad deficiente, falta de reportes confiables. Multiplicador bajo en EBITDA.
                  </p>
                </div>

                <div className="border-l-4 border-[#009bbf] pl-4">
                  <h3 className="text-xl font-light text-[#0a1628] mb-2">
                    Falta de Diversificación
                  </h3>
                  <p className="text-gray-700">
                    Dependencia de pocos clientes, productos o mercados. Riesgo concentrado que reduce múltiplo de venta.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. El Plan de 3-5 Años */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                Plan de 3-5 Años para Maximizar Valor
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                La preparación correcta puede aumentar la valuación entre 30-50%. Estos son los pilares:
              </p>

              <div className="space-y-6">
                {/* Pilar 1 */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-[#009bbf] min-w-fit">1</div>
                    <div>
                      <h3 className="text-xl font-light text-[#0a1628] mb-2">
                        Gestión Profesional (Año 1-2)
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Designar CEO o COO profesional (no familiar)</li>
                        <li>Crear estructura de reporting claro</li>
                        <li>Implementar tablero de control (KPIs mensuales)</li>
                        <li>Documentar procesos críticos</li>
                        <li>Separar toma de decisiones (Junta Directiva vs. Equipo Ejecutivo)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 2 */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-[#009bbf] min-w-fit">2</div>
                    <div>
                      <h3 className="text-xl font-light text-[#0a1628] mb-2">
                        Limpieza Financiera (Año 1-2)
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Auditoría de cifras históricas (últimas 3 años)</li>
                        <li>Separar gastos personales de empresariales</li>
                        <li>Normalizar EBITDA para venta (ajustes por no-recurrentes)</li>
                        <li>Implementar contabilidad de accrual (no solo caja)</li>
                        <li>Crear presupuestos y proyecciones confiables</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 3 */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-[#009bbf] min-w-fit">3</div>
                    <div>
                      <h3 className="text-xl font-light text-[#0a1628] mb-2">
                        Gobernanza Familiar (Año 1-3)
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Crear Pacto Familiar (acuerdos sobre poder, voto, dividendos)</li>
                        <li>Constituir Junta Directiva con miembros independientes</li>
                        <li>Protocolo de sucesión documentado</li>
                        <li>Plan de retiro del fundador (timing, transición)</li>
                        <li>Política de dividendos clara</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 4 */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-[#009bbf] min-w-fit">4</div>
                    <div>
                      <h3 className="text-xl font-light text-[#0a1628] mb-2">
                        Diversificación (Año 2-4)
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Reducir dependencia de clientes clave (nunca {'>'}15% de ingresos)</li>
                        <li>Expandir líneas de producto o servicio</li>
                        <li>Penetrar nuevos mercados geográficos</li>
                        <li>Reducir concentración de proveedores</li>
                        <li>Construir pipeline de clientes para 3+ años</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 5 */}
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-[#009bbf] min-w-fit">5</div>
                    <div>
                      <h3 className="text-xl font-light text-[#0a1628] mb-2">
                        Crecimiento de Ingresos (Año 2-5)
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Crecer ingresos 8-12% anual (mínimo expectativa)</li>
                        <li>Mejorar márgenes operativos</li>
                        <li>Optimizar capital de trabajo</li>
                        <li>Reducir deuda innecesaria</li>
                        <li>Invertir en activos que mejoren posición competitiva</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Sucesión vs. Venta */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                Sucesión Dinástica vs. Venta: ¿Cuándo Considerar Cada Una?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-light text-[#009bbf] mb-4">
                    Sucesión Dinástica
                  </h3>
                  <p className="text-gray-700 font-semibold mb-3">Considera si:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Hay heredero preparado y competente</li>
                    <li>La familia desea mantener control</li>
                    <li>El negocio tiene crecimiento long-term claro</li>
                    <li>No hay urgencia de liquidez</li>
                    <li>Hay armonía familiar sobre visión futura</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-light text-[#009bbf] mb-4">
                    Venta / Exit
                  </h3>
                  <p className="text-gray-700 font-semibold mb-3">Considera si:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>No hay heredero interesado o competente</li>
                    <li>Fundador desea retirarse</li>
                    <li>Falta capital para crecer o innovar</li>
                    <li>Existe conflicto familiar sobre dirección</li>
                    <li>Comprador estratégico muestra interés</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-[#f0f7fb] p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Nota:</strong> Ambas opciones requieren preparación profesional. Una venta bien preparada puede generar 10-20M€ de valor liquido. Una sucesión fallida puede destruir el negocio completamente.
                </p>
              </div>
            </div>

            {/* 4. El Enfoque teamOn */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                Nuestro Enfoque para Empresa Familiar
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                En teamOn acompañamos la transformación estratégica de empresas familiares:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl font-light text-[#009bbf] min-w-fit">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Diagnóstico 360°</p>
                    <p className="text-gray-700">Análisis integral: financiero, operativo, de gobernanza familiar, y mercado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl font-light text-[#009bbf] min-w-fit">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Roadmap Personalizado</p>
                    <p className="text-gray-700">Plan específico para tu empresa (3-5 años) con hitos, responsables y métricas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl font-light text-[#009bbf] min-w-fit">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Gobernanza Familiar</p>
                    <p className="text-gray-700">Facilitamos conversaciones difíciles. Ayudamos a crear Pacto Familiar documentado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl font-light text-[#009bbf] min-w-fit">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Limpieza Financiera & Valoración</p>
                    <p className="text-gray-700">Auditamos cifras, normalizamos EBITDA, y hacemos valuación realista (DCF, multiples).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl font-light text-[#009bbf] min-w-fit">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Búsqueda de Comprador (si aplica)</p>
                    <p className="text-gray-700">Si decides vender, manejamos proceso de sale con investors estratégicos y financieros.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Caso de Éxito (Patrón) */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-2xl font-light text-[#0a1628] mb-4">
                Patrón de Éxito
              </h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Empresa:</strong> Distribuidora de componentes industriales, Barcelona</p>
                <p><strong>Situación inicial:</strong> Fundador 68 años, 3 hijos (uno en empresa, dos fuera), ingresos 8M€, márgenes bajos, sin procesos.</p>
                <p><strong>Plan:</strong> 3 años de transformación + sucesión a CEO profesional con opción de compra para hijo mayor.</p>
                <p><strong>Resultado:</strong> EBITDA creció de 800k€ a 1.2M€, márgenes mejoraron 2 puntos, valuación pasó de 4.8M€ a 7.2M€ (50% más).</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#0d1f36] text-white p-12 rounded-lg">
              <h2 className="text-3xl font-light mb-4">
                ¿Tu Empresa Familiar Está Preparada?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Descubre cómo teamOn puede ayudarte a professionalizar tu empresa y maximizar su valor, ya sea para sucesión o venta.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[#009bbf] text-white px-8 py-3 rounded hover:bg-opacity-90 transition font-light"
              >
                Solicitar Diagnóstico Gratuito
              </Link>
            </div>

            {/* Related Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-light text-[#0a1628] mb-4">Artículos Relacionados</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/valoracion-de-empresas" className="text-[#009bbf] hover:underline font-light">
                    → Valoración de Empresas: 3 Métodos Reales en M&A
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-[#009bbf] hover:underline font-light">
                    → Hablar con Especialista en Empresa Familiar
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
