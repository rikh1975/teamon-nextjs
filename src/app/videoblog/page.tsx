import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Videoblog | teamOn Corporate Finance",
  description:
    "Explora nuestro hub de contenido audiovisual sobre M&A, valoración empresarial, due diligence y estrategias de corporate finance para empresarios y CEOs.",
};

interface VideoCard {
  id: number;
  title: string;
  date: string;
  duration: string;
}

const videos: VideoCard[] = [
  {
    id: 1,
    title: "¿Cuánto vale mi empresa?",
    date: "Marzo 2026",
    duration: "12:45",
  },
  {
    id: 2,
    title: "El proceso de due diligence explicado",
    date: "Marzo 2026",
    duration: "15:20",
  },
  {
    id: 3,
    title: "Earn-outs: ventajas y riesgos",
    date: "Febrero 2026",
    duration: "10:30",
  },
  {
    id: 4,
    title: "Empresa familiar: sucesión vs venta",
    date: "Febrero 2026",
    duration: "14:15",
  },
  {
    id: 5,
    title: "M&A en Latinoamérica 2026",
    date: "Enero 2026",
    duration: "18:00",
  },
  {
    id: 6,
    title: "Corporate Finance para CEOs",
    date: "Enero 2026",
    duration: "16:30",
  },
];

export default function VideoblogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0a1628" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-light text-white">
                Videoblog
              </h1>
              <p className="text-lg font-light max-w-2xl mx-auto text-gray-300">
                Contenido de alto valor sobre M&A, valoración empresarial y
                estrategia corporativa. Aprende de expertos en Corporate
                Finance.
              </p>
              <div className="pt-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 font-light rounded transition-all duration-300 bg-[#009bbf] text-white hover:opacity-90 hover:-translate-y-0.5"
                >
                  Suscribirse al Canal de YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-16" style={{ color: "#0a1628" }}>
              Nuestro Contenido
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:scale-105 cursor-pointer"
                >
                  {/* Video Thumbnail */}
                  <div
                    className="relative w-full aspect-video flex items-center justify-center"
                    style={{ backgroundColor: "#0a1628" }}
                  >
                    <Play
                      size={64}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "#009bbf" }}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-light mb-3" style={{ color: "#0a1628" }}>
                      {video.title}
                    </h3>
                    <div className="flex justify-between text-sm font-light text-gray-600">
                      <span>{video.date}</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Note */}
            <div className="mt-16 p-8 rounded-lg border border-gray-300 bg-white text-center">
              <p className="text-lg font-light" style={{ color: "#0a1628" }}>
                Próximamente más contenido
              </p>
              <p className="text-sm font-light text-gray-600 mt-2">
                Mantente atento a nuevos videos sobre estrategia empresarial y
                finanzas corporativas
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
