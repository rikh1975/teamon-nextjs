import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiagnosticoForm from "@/components/DiagnosticoForm";

export const metadata = {
  title: "Diagnóstico Empresarial Gratuito | teamOn",
  description: "Evalúa la madurez de tu empresa para una venta o inversión. Diagnóstico gratuito con recomendaciones personalizadas.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h1 className="text-5xl lg:text-6xl font-light mb-6">
              Diagnóstico Empresarial
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Evalúa la madurez de tu empresa para una venta o inversión.
              Completa esta evaluación y recibe recomendaciones personalizadas.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <DiagnosticoForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-[#0a1628] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-light text-white mb-12">Próximos pasos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-[#009bbf] mb-4">01</div>
                <h3 className="text-xl font-light text-white mb-3">Evaluación</h3>
                <p className="text-gray-300 font-light">Completamos tu diagnóstico y analizamos tu empresa en detalle</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#009bbf] mb-4">02</div>
                <h3 className="text-xl font-light text-white mb-3">Análisis Personalizado</h3>
                <p className="text-gray-300 font-light">Recibe recomendaciones estratégicas y un plan de acción</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#009bbf] mb-4">03</div>
                <h3 className="text-xl font-light text-white mb-3">Consulta sin costo</h3>
                <p className="text-gray-300 font-light">Agenda una llamada con nuestro equipo para explorar opciones</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
