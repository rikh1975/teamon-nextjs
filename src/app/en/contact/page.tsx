import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | teamOn - Corporate Finance & M&A",
  description:
    "Contact teamOn. Offices in Barcelona, Hilversum and Montevideo. M&A and Corporate Finance specialists.",
};

export default function ContactPage() {
  const offices = [
    {
      city: "Barcelona",
      address: "Paseo de Gracia 74, 2-1A",
      postal: "08008, Barcelona",
      phone: "+34 93 272 08 61",
      hours: "Monday to Friday, 09:00h to 18:00h",
    },
    {
      city: "Hilversum",
      address: "Koninginneweg 31",
      postal: "1217 KR, Hilversum",
      phone: "+31 303 100 448",
      hours: "Monday to Friday, 09:00h to 18:00h",
    },
    {
      city: "Montevideo",
      address: "Bulevar General Artigas, 417",
      postal: "Floor 7, Montevideo",
      phone: "info@teamon.es",
      hours: "Monday to Friday, 09:00h to 18:00h",
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
              Contact
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Get in touch with our specialized team. We are present across three continents.
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
                            Phone
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
                        Hours
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
              Send us a message
            </h2>

            <form className="bg-white rounded-lg p-12 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                  placeholder="+34 93 272 08 61"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Type of Inquiry
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                  <option value="">Select a service</option>
                  <option value="ma">M&A / Company Sales</option>
                  <option value="corporate">Corporate Finance</option>
                  <option value="investment">Investment & Capital</option>
                  <option value="realestate">Real Estate Transactions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-light text-[#0a1628] mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-[#009bbf] transition-colors resize-none"
                  placeholder="Tell us more details..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
                >
                  SEND MESSAGE
                </button>
                <p className="text-sm text-gray-500 font-light">
                  We will respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Locations
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
