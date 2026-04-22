"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-6 px-6 hover:bg-gray-900 transition-colors text-left"
          >
            <h3 className="text-lg font-light text-white pr-8">{faq.question}</h3>
            <ChevronDown
              size={20}
              className={`flex-shrink-0 text-[#009bbf] transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 bg-gray-950">
              <p className="text-gray-300 font-light leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
