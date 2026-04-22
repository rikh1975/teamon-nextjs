"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Red Internacional", href: "/red-internacional" },
  { label: "Videoblog", href: "/videoblog" },
  { label: "FAQ", href: "/faq" },
  { label: "Noticias", href: "/noticias" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Contacta", href: "/contacta", highlight: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="https://teamon.es/wp-content/uploads/2022/02/teamOn.png"
            alt="teamOn"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-light tracking-wide transition-colors ${
                item.highlight
                  ? "text-[#009bbf] font-semibold hover:text-[#007a92]"
                  : "text-gray-700 hover:text-[#009bbf]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-8">
            <Link
              href="/en"
              className="text-sm text-gray-600 hover:text-[#009bbf] transition-colors font-light"
            >
              EN
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-700 font-light">ES</span>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col py-4 px-6 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base py-2 font-light transition-colors ${
                  item.highlight
                    ? "text-[#009bbf] font-semibold hover:text-[#007a92]"
                    : "text-gray-700 hover:text-[#009bbf]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-3 pt-3 flex gap-4">
              <Link href="/en" className="text-sm text-gray-600 hover:text-[#009bbf] font-light">EN</Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-700 font-light">ES</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
