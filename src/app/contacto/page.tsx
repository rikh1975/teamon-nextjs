import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contacto | teamOn - Corporate Finance & M&A",
  description: "Contacta con teamOn. Oficinas en Barcelona, Hilversum y Montevideo. Especialistas en M&A y Corporate Finance.",
};

export default function ContactoPage() {
  const offices = [
    {
      city: "Barcelona",
      address: "Paseo de Gracia 74, 2-1A",
      postal: "08008, Barcelona",
      phone: "+34 93 272 08 61",
      hours: "Lunes a viernes, 09:00h a 18:00h",
    },
    {
      city: "Hilversum",
      address: "Koninginneweg 31",
      postal: "1217 KR, Hilversum",
      phone: "+31 303 100 448",
      hours: "Lunes a viernes, 09:00h a 18:00h",
    },
    {
      city: "Montevideo",
      address: "Bulevar General Artigas, 417",
      postal: "Piso 7, Montevideo",
      phone: "info@teamon.es",
      hours: "Lunes a viernes, 09:00h a 18:00h",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Contacto
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Ponte en contacto con nuestro equipo especializado. Estamos presentes en tres continentes.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-[#009bbf]"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin className="text-[#009bbf]" size={24} />
                    <h3 className="text-2xl font-light text-[#0a1628]">
                      {office.city}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 font-light">{office.address}</p>
                      <p className="text-gray-600 font-light">{office.postal}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Phone
                          className="text-[#009bbf] flex-shrink-0"
                          size={20}
                        />
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-widest font-light">
                            Teléfono
                          </p>
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="text-[#0a1628] font-light hover:text-[#009bbf] transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-light mb-2">
                        Horario
                      </p>
                      <p className="text-gray-700 font-light">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email Contact */}
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
              <Mail className="text-[#009bbf] mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-light text-[#0a1628] mb-2">Email</h3>
              <a
                href="mailto:info@teamon.es"
                className="text-[#009bbf] text-lg hover:text-[#007a92] transition-colors font-light"
              >
                info@teamon.es
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Envíanos un mensaje
            </h2>

            <form className="bg-white rounded-lg p-12 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                  placeholder="+34 93 272 08 61"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Tipo de consulta
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                  <option value="">Selecciona un servicio</option>
                  <option value="ma">M&A / Compraventa</option>
                  <option value="finanzas">Finanzas Corporativas</option>
                  <option value="inversion">Inversión y Capital</option>
                  <option value="inmobiliaria">Transacciones Inmobiliarias</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Mensaje
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors resize-none"
                  placeholder="Cuéntanos más detalles..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
                >
                  ENVIAR MENSAJE
                </button>
                <p className="text-sm text-gray-500 font-light">
                  Te responderemos en el plazo de 24 horas
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Ubicaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: "Barcelona", emoji: "🇪🇸" },
                { city: "Hilversum", emoji: "🇳🇱" },
                { city: "Montevideo", emoji: "🇺🇾" },
              ].map((location) => (
                <div
                  key={location.city}
                  className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{location.emoji}</div>
                    <p className="text-xl font-light text-[#0a1628]">
                      {location.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
