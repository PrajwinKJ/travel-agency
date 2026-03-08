"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Search } from "lucide-react";

const availableDestinations = [
  { id: "bali", name: "Bali", country: "Indonesia" },
  { id: "dubai", name: "Dubai", country: "UAE" },
  { id: "paris", name: "Paris", country: "France" },
  { id: "manali", name: "Manali", country: "India" },
  { id: "maldives", name: "Maldives", country: "Maldives" },
  { id: "goa", name: "Goa", country: "India" },
];

export default function DestinationSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = availableDestinations.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) || 
    d.country.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setQuery("");
    setIsFocused(false);
    router.push(`/destinations/${id}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-4xl mx-auto text-left">
      <div className="bg-white p-3 rounded-[2rem] flex flex-col md:flex-row gap-2 shadow-2xl relative z-20">
        <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
          <MapPin className="text-primary mr-3 shrink-0" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Where do you want to go?" 
            className="w-full text-slate-800 outline-none font-medium bg-transparent h-full min-h-[40px]" 
          />
        </div>
        <Link 
          href="/destinations"
          className="bg-primary hover:bg-primary-hover transition-colors text-white px-8 py-3 md:py-4 rounded-full font-bold flex items-center justify-center gap-2"
        >
          <Search size={20} />
          View All
        </Link>
      </div>

      {/* Autocomplete Dropdown */}
      {isFocused && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-30">
          {filtered.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto py-2">
              {filtered.map(dest => (
                <li key={dest.id}>
                  <button 
                    onClick={() => handleSelect(dest.id)}
                    className="w-full text-left px-6 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                    <MapPin size={18} className="text-slate-400" />
                    <div>
                      <span className="font-bold text-slate-800 block">{dest.name}</span>
                      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{dest.country}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
             <div className="p-6 text-center text-slate-500 font-medium">
               No destinations found matching "{query}"
             </div>
          )}
        </div>
      )}
    </div>
  );
}
