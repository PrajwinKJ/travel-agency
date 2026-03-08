"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Plane className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
            <span className={`text-2xl font-bold font-heading ${isScrolled ? "text-slate-900" : "text-white"}`}>
              Wanderlust
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:text-primary-hover shadow-md"
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-slate-600 font-medium w-full text-center py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md mt-2 hover:bg-primary-hover transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
