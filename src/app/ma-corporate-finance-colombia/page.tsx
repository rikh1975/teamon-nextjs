import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MALandingTemplate from "@/components/MALandingTemplate";

export const metadata = {
  title: "M&A y Corporate Finance en Colombia | teamOn",
  description:
    "Asesoría especializada en M&A en Colombia. Oportunidades en Tecnología, Infraestructura y Energía.",
};

export default function MAColombiaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MALandingTemplate
          country="Colombia"
          title="M&A y Corporate Finance en Colombia"
          subtitle="Mercado emergente con potencial de crecimiento en innovación e infraestructura."
          marketStats={[
            { label: "Volumen M&A Anual", value: "$5.2B" },
            { label: "Transacciones/Año", value: "189" },
            { label: "Inversión Extranjera", value: "55%" },
            { label: "Rango Típico", value: "$3-100M" },
          ]}
          sectors={[
            "Tecnología y Digital",
            "Infraestructura y PPP",
            "Energía",
            "Sector Financiero",
            "Retail y Consumer",
            "Turismo y Hotelería",
          ]}
          description="Colombia como miembro de la Alianza del Pacífico presenta oportunidades significativas en tecnología, innovación digital e infraestructura. La economía colombiana crece a tasas sostenibles y atrae inversión de fondos internacionales. El mercado de M&A está en expansión con múltiples oportunidades en sectores de alto crecimiento."
          whyChoose={[
            "Conocimiento profundo del mercado colombiano y sus dinámicas.",
            "Conexión con inversores e instituciones financieras regionales.",
            "Asesoría especializada en regulación y compliance local.",
            "Experiencia en transacciones de infraestructura y energía.",
            "Red transnacional para operaciones España-Colombia.",
          ]}
          networkLinks={[
            {
              label: "M&A en Argentina",
              href: "/ma-corporate-finance-argentina",
            },
            { label: "M&A en Chile", href: "/ma-corporate-finance-chile" },
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
