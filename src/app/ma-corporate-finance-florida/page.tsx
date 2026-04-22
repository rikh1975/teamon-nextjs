import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MALandingTemplate from "@/components/MALandingTemplate";

export const metadata = {
  title: "M&A y Corporate Finance en Florida | teamOn",
  description:
    "Asesoría especializada en M&A en Florida. Hub hispano para operaciones EEUU-Latinoamérica.",
};

export default function MAFloridaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MALandingTemplate
          country="Florida"
          title="M&A y Corporate Finance en Florida"
          subtitle="Hub hispano para operaciones transatlánticas y bridge US-Latinoamérica."
          marketStats={[
            { label: "Población Hispana", value: "27%" },
            { label: "Startup Ecosistema", value: "Creciente" },
            { label: "PE Firms Activas", value: "150+" },
            { label: "Rango Típico", value: "$5-500M" },
          ]}
          sectors={[
            "Real Estate y Desarrollo",
            "Tecnología y Startups",
            "Healthcare y Life Sciences",
            "Logística y Puertos",
            "Finanzas y Fintech",
            "Turismo y Hostelería",
          ]}
          description="Miami y Florida son el hub principal para operaciones de M&A entre EEUU y Latinoamérica. Con una población hispana del 27% y una ubicación geográfica estratégica, atrae empresas que buscan expandirse en el mercado norteamericano o acceder a inversión de EEUU. Centro financiero global con infraestructura de clase mundial."
          whyChoose={[
            "Presencia estratégica en Miami como puerta a EEUU y Latinoamérica.",
            "Red de contactos en inversores, PE firms y corporaciones de EEUU.",
            "Asesoría bilingüe especializada en operaciones transfronterizas.",
            "Experiencia en startups, scale-ups y empresas en crecimiento.",
            "Conexión directa con ecosistema tech y emprendimiento de EEUU.",
          ]}
          networkLinks={[
            {
              label: "M&A en Argentina",
              href: "/ma-corporate-finance-argentina",
            },
            { label: "M&A en Chile", href: "/ma-corporate-finance-chile" },
            {
              label: "M&A en Colombia",
              href: "/ma-corporate-finance-colombia",
            },
            { label: "M&A en México", href: "/ma-corporate-finance-mexico" },
            {
              label: "Crossborder LATAM-España",
              href: "/ma-en-latam",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
