"use client";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const team = [
  {
    name: "Marco Hulsewé",
    role: "Managing Partner",
    area: "Corporate Finance",
    email: "marco.hulsewe@teamon.es",
    linkedin: "https://linkedin.com/in/marcohulsewe",
    initials: "MH",
  },
  {
    name: "Francisco Pérez",
    role: "Partner",
    area: "Real Estate · M&A",
    email: "francisco.perez@teamon.es",
    linkedin: "https://linkedin.com/in/franciscoperez",
    initials: "FP",
  },
  {
    name: "Enier Rangel",
    role: "Associate",
    area: "Corporate Finance",
    email: "enier.rangel@teamon.es",
    linkedin: "https://linkedin.com/in/enierrangel",
    initials: "ER",
  },
  {
    name: "Jesús Vicens",
    role: "Associate",
    area: "Corporate Finance",
    email: "jesus.vicens@teamon.es",
    linkedin: "https://linkedin.com/in/jesusvicens",
    initials: "JV",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#278CC8] text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestro Equipo
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800">
            Profesionales con experiencia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#278CC8]/30"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1a1a2e] flex items-center justify-center group-hover:bg-[#278CC8] transition-colors duration-500">
                <span className="text-white text-xl font-light tracking-wider">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-[#278CC8] text-sm font-medium mb-1">
                {member.role}
              </p>
              <p className="text-gray-400 text-xs tracking-wide uppercase mb-5">
                {member.area}
              </p>

              <div className="flex justify-center gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-[#278CC8] transition-colors"
                  title={member.email}
                >
                  <Mail size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#278CC8] transition-colors"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
