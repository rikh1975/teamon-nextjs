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
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-[#278CC8]">
      {count}
      <span className="text-3xl">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 text-sm mt-3 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
