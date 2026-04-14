"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1A4D8F] text-white">
      {/* Prayer CTA */}
      <div className="bg-[#0f3366] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3
            className="text-2xl md:text-3xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Stay Connected in Prayer
          </h3>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            Receive updates on events, feast days, and prayer intentions from Our Lady of Dodi.
          </p>
          {subscribed ? (
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-[#F2B90F] font-semibold flex items-center gap-2 justify-center">
                <Heart className="w-5 h-5" /> Thank you! You are now connected in prayer.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-3 rounded-lg text-[#333] bg-white flex-1 outline-none focus:ring-2 focus:ring-[#F2B90F]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F2B90F] text-[#333] font-semibold rounded-lg hover:bg-[#f5ca40] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4
              className="text-lg font-semibold mb-4 text-[#F2B90F]"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Our Lady of Dodi
            </h4>
            <p className="text-blue-200 text-sm leading-relaxed">
              A sanctuary of faith, healing, and pilgrimage. Our Lady of Dodi welcomes all who seek peace and spiritual renewal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F2B90F]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "The Grotto", href: "/grotto" },
                { label: "Pilgrimage", href: "/pilgrimage" },
                { label: "Events", href: "/events" },
                { label: "News", href: "/news" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devotions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F2B90F]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Devotions
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Prayer Intentions", href: "/prayer-intentions" },
                { label: "Mass Offerings", href: "/mass-offerings" },
                { label: "Light a Candle", href: "/light-a-candle" },
                { label: "Prayers Library", href: "/prayers" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F2B90F]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Our Lady of Dodi Grotto, Dodi, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+233 541580247</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>ourladyofdodigrotto@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Our Lady of Dodi Catholic Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
