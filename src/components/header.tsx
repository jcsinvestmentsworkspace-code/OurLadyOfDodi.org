"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Grotto", href: "/grotto" },
  {
    label: "Devotions",
    children: [
      { label: "Prayer Intentions", href: "/prayer-intentions" },
      { label: "Mass Offerings", href: "/mass-offerings" },
      { label: "Light a Candle", href: "/light-a-candle" },
      { label: "Prayers Library", href: "/prayers" },
    ],
  },
  { label: "Pilgrimage", href: "/pilgrimage" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1A4D8F] flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[#1A4D8F] font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our Lady of Dodi
              </p>
              <p className="text-[#777] text-xs">Catholic Church & Grotto</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#333] hover:text-[#1A4D8F] transition-colors rounded-md hover:bg-blue-50">
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#333] hover:bg-blue-50 hover:text-[#1A4D8F] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm text-[#333] hover:text-[#1A4D8F] transition-colors rounded-md hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#333]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-[#777] uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-2 text-sm text-[#333] hover:text-[#1A4D8F] hover:bg-blue-50 rounded-md"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-[#333] hover:text-[#1A4D8F] hover:bg-blue-50 rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
