import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | teamOn",
  description: "Política de privacidad de teamOn Corporate Finance. Información sobre el tratamiento de datos personales según GDPR.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Información sobre cómo teamOn Corporate Finance trata tus datos personales
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

            {/* 1. Responsable del Tratamiento */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                1. Responsable del Tratamiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                El responsable del tratamiento de tus datos personales es:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900">teamOn Corporate Finance SL</p>
                <p className="text-gray-700">Barcelona, España</p>
                <p className="text-gray-700">Email: <span className="text-[#009bbf]">info@teamon.es</span></p>
              </div>
            </div>

            {/* 2. Datos Recogidos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                2. Datos Personales Recogidos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recogemos datos personales que proporcionas voluntariamente a través de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Formularios de contacto</li>
                <li>Solicitud de servicios de asesoramiento</li>
                <li>Suscripción a newsletters</li>
                <li>Datos de navegación y cookies</li>
                <li>Información de identidad (nombre, email, teléfono)</li>
              </ul>
            </div>

            {/* 3. Finalidad del Tratamiento */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                3. Finalidad del Tratamiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos tus datos para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Responder a consultas y solicitudes de información</li>
                <li>Prestar servicios de consultoría y asesoramiento</li>
                <li>Enviar comunicaciones comerciales (con tu consentimiento)</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Análisis estadísticos y mejora de servicios</li>
              </ul>
            </div>

            {/* 4. Base Legal */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                4. Base Legal del Tratamiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El tratamiento de tus datos se basa en:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Consentimiento:</strong> Para comunicaciones comerciales y análisis</li>
                <li><strong>Ejecución de contrato:</strong> Para la prestación de servicios</li>
                <li><strong>Interés legítimo:</strong> Para mejorar servicios y seguridad</li>
                <li><strong>Obligación legal:</strong> Para cumplir regulaciones aplicables</li>
              </ul>
            </div>

            {/* 5. Retención de Datos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                5. Período de Retención de Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mantenemos tus datos personales durante el período necesario para cumplir con las finalidades indicadas y mientras sea legalmente requerido. Los datos se eliminarán cuando dejen de ser necesarios, salvo que exista obligación legal de conservarlos.
              </p>
            </div>

            {/* 6. Derechos del Usuario */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                6. Tus Derechos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conforme al Reglamento General de Protección de Datos (RGPD), tienes los siguientes derechos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Derecho de acceso:</strong> Acceder a tus datos personales</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido")</li>
                <li><strong>Derecho de limitación:</strong> Limitar el tratamiento de tus datos</li>
                <li><strong>Derecho de portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Derecho de oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Derecho a no ser objeto de decisiones automatizadas</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer cualquiera de estos derechos, contáctanos a <span className="text-[#009bbf]">info@teamon.es</span>
              </p>
            </div>

            {/* 7. Cookies y Tecnologías de Seguimiento */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                7. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información sobre cómo usamos cookies, consulta nuestra <Link href="/politica-de-cookies" className="text-[#009bbf] hover:underline">Política de Cookies</Link>.
              </p>
            </div>

            {/* 8. Seguridad de Datos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                8. Seguridad de Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ninguna transmisión de datos por internet es 100% segura.
              </p>
            </div>

            {/* 9. Destinatarios de Datos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                9. Destinatarios de los Datos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tus datos pueden ser compartidos con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proveedores de servicios (hosting, email, análisis)</li>
                <li>Autoridades competentes (si es legalmente requerido)</li>
                <li>Asesores legales y contables</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                No vendemos ni transferimos tus datos personales a terceros sin tu consentimiento.
              </p>
            </div>

            {/* 10. Cambios en la Política */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                10. Cambios en esta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho a actualizar esta política de privacidad en cualquier momento. Los cambios significativos se notificarán a través del sitio web. Tu continuación del uso del sitio constituye la aceptación de los cambios.
              </p>
            </div>

            {/* 11. Contacto y Derechos */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                11. Contacto
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, contáctanos:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <span className="text-[#009bbf]">info@teamon.es</span></p>
                <p><strong>Asunto:</strong> Política de Privacidad - Solicitud de Derechos</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                También puedes presentar una reclamación ante la autoridad supervisora de protección de datos de tu país.
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="pt-8 border-t border-gray-200 flex gap-4">
              <Link
                href="/politica-de-cookies"
                className="text-[#009bbf] hover:underline font-light"
              >
                → Política de Cookies
              </Link>
              <Link
                href="/terminos-de-uso"
                className="text-[#009bbf] hover:underline font-light"
              >
                → Términos de Uso
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
