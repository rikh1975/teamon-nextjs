import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Cookies | teamOn",
  description: "Política de cookies de teamOn Corporate Finance. Información sobre qué son las cookies y cómo las utilizamos.",
};

export default function PoliticaCookies() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Política de Cookies
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Conoce cómo utilizamos cookies para mejorar tu experiencia en teamOn
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

            {/* 1. Qué son las Cookies */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                1. ¿Qué son las Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio web. Estas cookies permiten que el sitio recuerde información sobre ti durante tu visita y en futuras visitas.
              </p>
            </div>

            {/* 2. Tipos de Cookies que Utilizamos */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                2. Tipos de Cookies que Utilizamos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                En teamOn utilizamos los siguientes tipos de cookies:
              </p>

              {/* Cookies Esenciales */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-2xl font-light text-[#009bbf] mb-3">
                  Cookies Esenciales / Técnicas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies, determinadas partes del sitio no funcionarían correctamente.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Preferencias de idioma</li>
                  <li>Información de sesión</li>
                  <li>Seguridad y autenticación</li>
                  <li>Preferencias de usuario</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duración:</strong> Durante la sesión o según se especifique
                </p>
              </div>

              {/* Cookies Analíticas */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-2xl font-light text-[#009bbf] mb-3">
                  Cookies Analíticas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Utilizamos Google Analytics para entender cómo los usuarios interactúan con nuestro sitio. Nos ayudan a identificar patrones de uso y mejorar la experiencia.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Número de visitantes</li>
                  <li>Páginas más consultadas</li>
                  <li>Tiempo de permanencia en el sitio</li>
                  <li>Dispositivos y navegadores utilizados</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Proveedor:</strong> Google Analytics
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Duración:</strong> Hasta 2 años
                </p>
              </div>

              {/* Cookies de Preferencias */}
              <div className="mb-8">
                <h3 className="text-2xl font-light text-[#009bbf] mb-3">
                  Cookies de Preferencias
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Recordamos tus preferencias de usuario para personalizar tu experiencia en futuras visitas.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Preferencias de visualización</li>
                  <li>Tema de color seleccionado</li>
                  <li>Configuración de privacidad</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Duración:</strong> Hasta 1 año
                </p>
              </div>
            </div>

            {/* 3. Cookies de Terceros */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                3. Cookies de Terceros
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Algunos servicios externos pueden establecer sus propias cookies en tu dispositivo:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Google Analytics</p>
                  <p className="text-gray-700 text-sm">
                    Para análisis de tráfico del sitio. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#009bbf] hover:underline">política de privacidad de Google</a>.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Redes Sociales</p>
                  <p className="text-gray-700 text-sm">
                    Si compartes contenido en redes sociales, éstas pueden establecer cookies para seguimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Cómo Gestionar Cookies */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                4. Cómo Gestionar las Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puedes controlar y eliminar cookies a través de la configuración de tu navegador:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-[#009bbf] p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-700 text-sm">
                    Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#009bbf] p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                  <p className="text-gray-700 text-sm">
                    Opciones → Privacidad → Cookies
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#009bbf] p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm">
                    Preferencias → Privacidad → Cookies y datos de sitios web
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#009bbf] p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                  <p className="text-gray-700 text-sm">
                    Configuración → Privacidad y servicios → Cookies y otros datos de sitios
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                Ten en cuenta que desactivar cookies esenciales puede afectar al funcionamiento correcto del sitio web.
              </p>
            </div>

            {/* 5. Consentimiento de Cookies */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                5. Tu Consentimiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al visitar nuestro sitio web, ya has aceptado el uso de cookies esenciales. Para cookies analíticas y de preferencias, solicitamos tu consentimiento explícito a través del banner de cookies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Puedes cambiar tu consentimiento en cualquier momento a través del panel de control de cookies del sitio.
              </p>
            </div>

            {/* 6. No Rastrearme (Do Not Track) */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                6. Señal "No Rastrearme" (Do Not Track)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si tu navegador incluye la opción "No Rastrearme" activada, respetaremos esa preferencia limitando el seguimiento analítico cuando sea posible.
              </p>
            </div>

            {/* 7. Cookies de Marketing */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                7. Cookies de Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No utilizamos cookies de marketing para personalizar publicidad, pero sí utilizamos datos analíticos para entender las necesidades de nuestros visitantes y mejorar el contenido.
              </p>
            </div>

            {/* 8. Seguridad y Privacidad */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                8. Seguridad y Privacidad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tus datos recopilados a través de cookies están protegidos según nuestra Política de Privacidad. No compartimos información personal sin tu consentimiento.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Consulta nuestra <Link href="/politica-de-privacidad" className="text-[#009bbf] hover:underline">Política de Privacidad</Link> para obtener más información sobre cómo protegemos tus datos.
              </p>
            </div>

            {/* 9. Cambios en la Política */}
            <div>
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                9. Cambios en esta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho a actualizar esta política de cookies para reflejar cambios en nuestras prácticas o cambios en la legislación aplicable. Te notificaremos de cambios significativos.
              </p>
            </div>

            {/* 10. Contacto */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-3xl font-light text-[#0a1628] mb-4">
                10. Preguntas sobre Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre esta política de cookies o cómo utilizamos cookies, contáctanos:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <span className="text-[#009bbf]">info@teamon.es</span></p>
                <p><strong>Asunto:</strong> Política de Cookies - Consulta</p>
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
