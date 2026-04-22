"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Operaciones cerradas" },
  { value: 500, suffix: "M€+", label: "Valor total transaccionado" },
  { value: 8, suffix: "", label: "Oficinas globales" },
  { value: 3, suffix: "", label: "Continentes" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-light text-[#009bbf] tracking-tight">
      {count}
      <span className="text-4xl font-light">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 text-xs tracking-widest uppercase font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
