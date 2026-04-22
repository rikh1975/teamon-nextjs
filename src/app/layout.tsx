import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate Finance y Asesoría M&A en España | teamOn",
  description: "Navega con éxito en las transacciones de finanzas corporativas de la mano de un equipo especializado. M&A, valoración de empresas, due diligence y capital de crecimiento.",
  openGraph: {
    title: "teamOn | Corporate Finance y Asesoría M&A en España",
    description: "Servicios integrales de finanzas corporativas, M&A y asesoramiento estratégico.",
    url: "https://teamon.es",
    siteName: "teamOn Corporate Finance",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
