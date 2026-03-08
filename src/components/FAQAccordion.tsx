"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 bg-white shadow-sm' : 'border-slate-200 bg-slate-50 hover:bg-white'}`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className={`font-bold text-left md:text-lg transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                {item.question}
              </span>
              <ChevronDown 
                className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
