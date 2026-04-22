"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface DiagnosticFormData {
  companyName: string;
  revenueRange: string;
  ebitdaRange: string;
  sector: string;
  employees: string;
  audit: boolean;
  management: boolean;
  diversification: boolean;
  processes: boolean;
  email: string;
}

export default function DiagnosticoForm() {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    companyName: "",
    revenueRange: "",
    ebitdaRange: "",
    sector: "",
    employees: "",
    audit: false,
    management: false,
    diversification: false,
    processes: false,
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        companyName: "", revenueRange: "", ebitdaRange: "", sector: "", employees: "",
        audit: false, management: false, diversification: false, processes: false, email: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const maturityScore = [formData.audit, formData.management, formData.diversification, formData.processes].filter(Boolean).length;

  if (submitted) {
    return (
      <div className="bg-green-950 border border-green-800 rounded-lg p-12 text-center">
        <CheckCircle2 size={48} className="text-[#009bbf] mx-auto mb-6" />
        <h2 className="text-3xl font-light text-white mb-4">¡Gracias por completar el diagnóstico!</h2>
        <p className="text-gray-300 font-light mb-6">Nuestro equipo te contactará en las próximas 24 horas con un análisis personalizado.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div>
        <h2 className="text-2xl font-light text-white mb-8">1. Datos de la Empresa</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 font-light mb-3">Nombre de la empresa *</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors" placeholder="Tu empresa" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 font-light mb-3">Ingresos anuales (EUR) *</label>
              <select name="revenueRange" value={formData.revenueRange} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                <option value="">Selecciona un rango</option>
                <option value="0-500k">Menos de 500k</option>
                <option value="500k-1m">500k - 1M</option>
                <option value="1m-5m">1M - 5M</option>
                <option value="5m-10m">5M - 10M</option>
                <option value="10m-50m">10M - 50M</option>
                <option value="50m+">50M+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 font-light mb-3">EBITDA estimado (EUR) *</label>
              <select name="ebitdaRange" value={formData.ebitdaRange} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                <option value="">Selecciona un rango</option>
                <option value="0-100k">Menos de 100k</option>
                <option value="100k-500k">100k - 500k</option>
                <option value="500k-1m">500k - 1M</option>
                <option value="1m-5m">1M - 5M</option>
                <option value="5m+">5M+</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 font-light mb-3">Sector/Industria *</label>
              <select name="sector" value={formData.sector} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                <option value="">Selecciona tu sector</option>
                <option value="tech">Tecnología</option>
                <option value="saas">SaaS</option>
                <option value="industrial">Industrial</option>
                <option value="servicios">Servicios</option>
                <option value="logistica">Logística</option>
                <option value="retail">Retail</option>
                <option value="healthcare">Healthcare</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 font-light mb-3">Número de empleados *</label>
              <select name="employees" value={formData.employees} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors">
                <option value="">Selecciona un rango</option>
                <option value="1-10">1 - 10</option>
                <option value="11-25">11 - 25</option>
                <option value="26-50">26 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="101-250">101 - 250</option>
                <option value="250+">250+</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-light text-white mb-8">2. Madurez para Venta/Inversión</h2>
        <p className="text-gray-400 font-light mb-6">Selecciona los elementos que ya tienes en tu empresa:</p>
        <div className="space-y-4">
          {[
            { name: "audit", label: "Auditoría financiera de los últimos 2 años", description: "Estados financieros auditados o revisados" },
            { name: "management", label: "Equipo directivo consolidado", description: "CEO, CFO y directivos clave con 2+ años en el cargo" },
            { name: "diversification", label: "Diversificación de clientes", description: "Ningún cliente representa más del 30% de ingresos" },
            { name: "processes", label: "Procesos documentados", description: "Manuales, políticas y procedimientos operativos" },
          ].map((item) => (
            <label key={item.name} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 cursor-pointer hover:border-[#009bbf] transition-colors">
              <input type="checkbox" name={item.name} checked={formData[item.name as keyof DiagnosticFormData] as boolean} onChange={handleChange} className="mt-1" />
              <div className="flex-1">
                <p className="text-white font-light">{item.label}</p>
                <p className="text-gray-400 font-light text-sm mt-1">{item.description}</p>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-8 p-6 bg-blue-950 border border-[#009bbf] rounded-lg">
          <p className="text-gray-300 font-light mb-3">Nivel de madurez:</p>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < maturityScore ? "bg-[#009bbf]" : "bg-gray-700"}`} />
              ))}
            </div>
            <p className="text-white font-light">
              {maturityScore === 4 && "Muy alta - Excelente para vender"}
              {maturityScore === 3 && "Alta - Buena posición"}
              {maturityScore === 2 && "Media - Necesita mejoras"}
              {maturityScore === 1 && "Baja - Trabajo por delante"}
              {maturityScore === 0 && "Inicial - Recomendamos asesoría"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-gray-300 font-light mb-3">Tu correo electrónico *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white font-light focus:outline-none focus:border-[#009bbf] transition-colors" placeholder="tu@email.com" />
        <p className="text-gray-400 font-light text-sm mt-2">Te enviaremos tu diagnóstico y recomendaciones personalizadas</p>
      </div>

      <button type="submit" className="w-full px-8 py-4 bg-[#009bbf] text-white font-light rounded-lg hover:bg-[#007a92] transition-colors">
        Enviar Diagnóstico
      </button>
      <p className="text-gray-400 font-light text-sm text-center">Tu información es segura. No compartimos datos con terceros.</p>
    </form>
  );
}
