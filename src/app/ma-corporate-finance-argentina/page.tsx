import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MALandingTemplate from "@/components/MALandingTemplate";

export const metadata = {
  title: "M&A y Corporate Finance en Argentina | teamOn",
  description:
    "Asesoría especializada en M&A en Argentina. Oportunidades en Agribusiness, Tecnología, Manufactura y Servicios Financieros.",
};

export default function MAArgentinaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MALandingTemplate
          country="Argentina"
          title="M&A y Corporate Finance en Argentina"
          subtitle="Oportunidades de crecimiento en la economía más dinámica de Sudamérica."
          marketStats={[
            { label: "Volumen M&A Anual", value: "$11.8B" },
            { label: "Transacciones/Año", value: "247" },
            { label: "Inversión Extranjera", value: "70%" },
            { label: "Rango Típico", value: "$5-150M" },
          ]}
          sectors={[
            "Agribusiness y Agroexportación",
            "Tecnología y SaaS",
            "Manufactura y Producción",
            "Servicios Financieros",
            "Energía y Minería",
            "Consumer & E-commerce",
          ]}
          description="Argentina es un mercado dinámico con oportunidades significativas en sectores claves. Con una población de 46 millones de habitantes y una economía diversificada, el país atrae inversión extranjera en busca de crecimiento inorgánico. El mercado de M&A está en expansión con múltiples oportunidades en sectores de alto crecimiento."
          whyChoose={[
            "Presencia on-ground con equipo especializado en mercado argentino.",
            "Acceso a red de inversores, PE firms y compradores estratégicos.",
            "Experiencia en operaciones transfronterizas España-Argentina.",
            "Conocimiento profundo del contexto macroeconómico y regulatorio.",
            "Asesoría integral desde identificación hasta cierre de transacción.",
          ]}
          networkLinks={[
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
