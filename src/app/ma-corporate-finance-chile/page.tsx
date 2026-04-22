import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MALandingTemplate from "@/components/MALandingTemplate";

export const metadata = {
  title: "M&A y Corporate Finance en Chile | teamOn",
  description:
    "Asesoría especializada en M&A en Chile. Oportunidades en Minería, Fintech, Energía Renovable y Agroexportación.",
};

export default function MAChilePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MALandingTemplate
          country="Chile"
          title="M&A y Corporate Finance en Chile"
          subtitle="Mercado líder de Latinoamérica con economía abierta e instituciones sólidas."
          marketStats={[
            { label: "Volumen M&A Anual", value: "$7.8B" },
            { label: "Transacciones/Año", value: "312" },
            { label: "Inversión Extranjera", value: "48%" },
            { label: "Rango Típico", value: "$5-120M" },
          ]}
          sectors={[
            "Minería y Recursos Naturales",
            "Fintech e Innovación Financiera",
            "Energía Renovable",
            "Agroexportación",
            "Tecnología y Software",
            "Infraestructura",
          ]}
          description="Chile es una economía abierta con mercado de capitales desarrollado y marco regulatorio sólido. Como miembro de la Alianza del Pacífico, genera oportunidades significativas en sectores de innovación, energías limpias y tecnología. El país es destino preferente para inversión de PE firms internacionales."
          whyChoose={[
            "Experiencia comprobada en transacciones en mercado chileno.",
            "Red global de inversores y compradores interesados en oportunidades chilenas.",
            "Asesoría en marcos regulatorios y compliance locales.",
            "Conexión con ecosistema de emprendimiento y innovación.",
            "Operaciones transfronterizas con España y otros mercados.",
          ]}
          networkLinks={[
            {
              label: "M&A en Argentina",
              href: "/ma-corporate-finance-argentina",
            },
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
