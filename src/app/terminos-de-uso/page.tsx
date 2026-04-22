import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Términos de Uso | teamOn",
  description: "Términos de uso del sitio web de teamOn Corporate Finance. Condiciones legales para el uso de nuestros servicios.",
};

export default function TerminosDeUso() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Términos de Uso
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Condiciones legales de uso del sitio web de teamOn Corporate Finance
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {/* Last Updated */}
            <div className="text-sm text-gray-500">
              <p>Última actualización: 22 de abril de 2026</p>
            </div>

            {/* 1. Introducción */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                1. Introducción
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Estos Términos de Uso regulan el acceso y uso del sitio web de teamOn Corporate Finance SL (en adelante, "teamOn"). Al acceder y utilizar este sitio web, aceptas los presentes términos en su totalidad. Si no estás de acuerdo con alguno de estos términos, no debes utilizar el sitio web.
              </p>
            </div>

            {/* 2. Información Legal */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                2. Información Legal del Sitio
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                El presente sitio web es propiedad de:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900">teamOn Corporate Finance SL</p>
                <p className="text-gray-700">Barcelona, España</p>
                <p className="text-gray-700">Email: <span className="text-[#009bbf]">info@teamon.es</span></p>
              </div>
            </div>

            {/* 3. Licencia de Uso */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                3. Licencia de Uso del Sitio Web
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                teamOn otorga una licencia limitada y no exclusiva para acceder y utilizar el sitio web únicamente para fines personales y no comerciales, siempre que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>No modifiques ni copies el contenido sin autorización</li>
                <li>No utilices el sitio para fines ilegales o no autorizados</li>
                <li>No alteres ni elimines avisos de derechos de autor o propiedad</li>
                <li>No interferas con el correcto funcionamiento del sitio</li>
                <li>No descargues o reutilices contenido en larga escala sin permiso</li>
              </ul>
            </div>

            {/* 4. Propiedad Intelectual */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                4. Derechos de Propiedad Intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo el contenido del sitio web, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Textos, imágenes y gráficos</li>
                <li>Diseño y estructura del sitio</li>
                <li>Logotipos y marca registrada</li>
                <li>Software y código</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                es propiedad de teamOn o de sus proveedores de contenido. Todos los derechos están reservados. No está permitido reproducir, distribuir o transmitir este contenido sin previa autorización escrita.
              </p>
            </div>

            {/* 5. Uso Aceptable */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                5. Políticas de Uso Aceptable
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Te comprometes a utilizar el sitio web de forma legal y responsable. No debes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Acceder a sistemas sin autorización</li>
                <li>Transmitir malware, virus o código dañino</li>
                <li>Usar técnicas de spam o phishing</li>
                <li>Realizar ataques DDoS o interferir con servidores</li>
                <li>Crear múltiples cuentas para eludir restricciones</li>
                <li>Publicar contenido difamatorio, ofensivo u obsceno</li>
                <li>Violar leyes o regulaciones aplicables</li>
                <li>Infringir derechos de terceros (propiedad intelectual, privacidad, etc.)</li>
              </ul>
            </div>

            {/* 6. Limitación de Responsabilidad */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                6. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El sitio web se proporciona "tal cual" sin garantías de ningún tipo. teamOn no será responsable por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pérdida de datos o información</li>
                <li>Interrupción del servicio o disponibilidad</li>
                <li>Daños indirectos, incidentales o consecuentes</li>
                <li>Errores, omisiones o inexactitudes en el contenido</li>
                <li>Acceso no autorizado o violaciones de seguridad</li>
                <li>Daños causados por software de terceros o malware</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                En la medida máxima permitida por la ley, la responsabilidad total de teamOn no excederá la cantidad pagada, si la hay, por acceso al sitio.
              </p>
            </div>

            {/* 7. Descargo de Garantías */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                7. Descargo de Garantías
              </h2>
              <p className="text-gray-700 leading-relaxed">
                teamOn no garantiza que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                <li>El sitio funcionará sin interrupciones o errores</li>
                <li>Los defectos serán corregidos</li>
                <li>El contenido es exacto, actual o completo</li>
                <li>El sitio está libre de virus o componentes dañinos</li>
              </ul>
            </div>

            {/* 8. Enlaces Externos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                8. Enlaces a Sitios Externos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El sitio web puede contener enlaces a sitios web de terceros. teamOn no es responsable del contenido, precisión, o prácticas de privacidad de estos sitios externos. El acceso a sitios externos está a tu propio riesgo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La inclusión de enlaces no implica respaldo o recomendación de los sitios vinculados.
              </p>
            </div>

            {/* 9. Modificaciones del Sitio */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                9. Modificaciones del Sitio y Servicio
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                teamOn se reserva el derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Modificar o discontinuar el sitio web en cualquier momento</li>
                <li>Cambiar características, funcionalidades o contenido</li>
                <li>Eliminar o restringir acceso a determinadas secciones</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Los cambios significativos serán notificados a través del sitio cuando sea posible.
              </p>
            </div>

            {/* 10. Terminación de Acceso */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                10. Terminación de Acceso
              </h2>
              <p className="text-gray-700 leading-relaxed">
                teamOn se reserva el derecho de terminar o suspender tu acceso al sitio web en cualquier momento si incumples estos Términos de Uso o si detecta actividades no autorizadas o ilegales.
              </p>
            </div>

            {/* 11. Información Proporcionada */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                11. Información y Contenido del Usuario
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si proporcionas información, comentarios o contenido a través del sitio web, garantizas que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Tienes derecho a proporcionar esa información</li>
                <li>La información es exacta y completa</li>
                <li>No infringe derechos de terceros</li>
                <li>Autorizas el uso de esa información por teamOn</li>
              </ul>
            </div>

            {/* 12. Privacidad y Cookies */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                12. Privacidad y Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tu uso del sitio también está regido por nuestra:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><Link href="/politica-de-privacidad" className="text-[#009bbf] hover:underline">Política de Privacidad</Link></li>
                <li><Link href="/politica-de-cookies" className="text-[#009bbf] hover:underline">Política de Cookies</Link></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Consulta estos documentos para entender cómo recopilamos, utilizamos y protegemos tus datos.
              </p>
            </div>

            {/* 13. Ley Aplicable y Jurisdicción */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                13. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos Términos de Uso están regidos por las leyes del Reino de España, específicamente por la legislación de Cataluña. Cualquier disputa se someterá a los tribunales competentes de Barcelona.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Estas condiciones se consideran un contrato válido entre tú y teamOn.
              </p>
            </div>

            {/* 14. Resolución de Disputas */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                14. Resolución de Disputas
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En caso de disputa respecto al uso del sitio web, ambas partes acuerdan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Intentar resolver la disputa mediante negociación de buena fe</li>
                <li>Si no se resuelve, someter la disputa a mediación</li>
                <li>Como último recurso, someterse a los tribunales de Barcelona</li>
              </ul>
            </div>

            {/* 15. Nulidad Parcial */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                15. Nulidad Parcial
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si alguna disposición de estos Términos de Uso es declarada nula o inaplicable, las demás disposiciones permanecerán en vigencia. En tal caso, teamOn adoptará disposiciones alternativas legalmente válidas que se ajusten lo máximo posible a la intención original.
              </p>
            </div>

            {/* 16. Cambios en los Términos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                16. Cambios en estos Términos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                teamOn se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios significativos serán publicados en el sitio web. Tu continuación del uso del sitio después de los cambios constituye la aceptación de los nuevos términos.
              </p>
            </div>

            {/* 17. Contacto */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                17. Contacto para Consultas Legales
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre estos Términos de Uso, contáctanos:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <span className="text-[#009bbf]">info@teamon.es</span></p>
                <p><strong>Asunto:</strong> Términos de Uso - Consulta Legal</p>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-8 border-t border-gray-200 flex gap-4">
              <Link
                href="/politica-de-privacidad"
                className="text-[#009bbf] hover:underline font-light"
              >
                → Política de Privacidad
              </Link>
              <Link
                href="/politica-de-cookies"
                className="text-[#009bbf] hover:underline font-light"
              >
                → Política de Cookies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
