import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MALandingTemplate from "@/components/MALandingTemplate";

export const metadata = {
  title: "M&A y Corporate Finance en México | teamOn",
  description:
    "Asesoría especializada en M&A en México. Oportunidades en Manufactura, Tecnología y Consumer.",
};

export default function MAMexicoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MALandingTemplate
          country="México"
          title="M&A y Corporate Finance en México"
          subtitle="Mayor mercado de M&A en Latinoamérica con economía diversificada y sólida."
          marketStats={[
            { label: "Volumen M&A Anual", value: "$28.5B" },
            { label: "Transacciones/Año", value: "480" },
            { label: "Inversión Extranjera", value: "65%" },
            { label: "Rango Típico", value: "$10-200M" },
          ]}
          sectors={[
            "Manufactura e Industria",
            "Tecnología y Software",
            "Sector Financiero",
            "Consumer y Retail",
            "Energía y Telecomunicaciones",
            "Servicios Logísticos",
          ]}
          description="México es el mercado más grande de M&A en Latinoamérica con volumen anual superior a $28 mil millones. Con una economía diversificada y fuerte presencia de multinacionales, es destino preferente para PE firms e inversores estratégicos. Oportunidades significativas en sectores de manufactura, tecnología y servicios."
          whyChoose={[
            "Experiencia comprobada en mercado mexicano con múltiples transacciones.",
            "Acceso a red de inversores e instituciones financieras principales.",
            "Asesoría especializada en regulación mexicana y compliance.",
            "Conexión con sectores dinámicos: manufactura, tech, finanzas.",
            "Operaciones transnacionales España-México con visión regional.",
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
