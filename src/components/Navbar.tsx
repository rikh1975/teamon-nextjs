"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Videoblog", href: "/videoblog" },
  { label: "FAQ", href: "/faq" },
  { label: "Noticias", href: "/noticias" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Contacta", href: "/contacta", highlight: true },
  { label: "English", href: "/en" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl tracking-tight text-gray-800">
            team<span className="text-[#278CC8] font-semibold">O</span>n
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                item.highlight
                  ? "text-[#278CC8] font-semibold hover:text-[#1a6fa0]"
                  : "text-gray-600 hover:text-[#278CC8]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="text-gray-400 hover:text-[#278CC8] transition-colors">
            <Search size={18} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base py-2 ${
                  item.highlight ? "text-[#278CC8] font-semibold" : "text-gray-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
