"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { Flame } from "lucide-react";
import emailjs from "@emailjs/browser";

const candleTypes = [
  { id: "small", name: "Votive Candle", desc: "A small candle for a personal prayer", icon: "🕯️" },
  { id: "medium", name: "Devotional Candle", desc: "A medium candle lit in Marian devotion", icon: "🕯️🕯️" },
  { id: "large", name: "Sanctuary Candle", desc: "A large candle burning before the Blessed Sacrament", icon: "🕯️🕯️🕯️" },
];

export default function LightACandlePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [prayer, setPrayer] = useState("");
  const [email, setEmail] = useState("");
  const [lit, setLit] = useState(false);

  const handleLight = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_0y3h9vx",
    "template_l5dsvvh",
    {
      prayer: prayer,
      email: email,
      type: selected
    },
    "YOUR_PUBLIC_KEY"
  )
  .then(() => {
    setLit(true);
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send prayer. Try again.");
  });
};

  return (
    <>
      <PageHeader title="Light a Virtual Candle" subtitle="A symbolic act of prayer and remembrance" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {lit ? (
            <FadeUp>
              <div className="text-center py-12">
                <div className="text-8xl mb-6 animate-flicker inline-block">🕯️</div>
                <h2 className="text-2xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Your Candle is Lit
                </h2>
                <p className="text-[#777] mb-4 max-w-md mx-auto">
                  Your virtual candle burns in prayer before Our Lady of Dodi. May its light carry your intentions to heaven.
                </p>
                {prayer && (
                  <div className="bg-amber-50 p-6 rounded-xl max-w-md mx-auto mt-6">
                    <p className="text-[#555] italic text-sm">&ldquo;{prayer}&rdquo;</p>
                  </div>
                )}
                <p className="text-sm text-[#777] mt-6">A confirmation has been noted. Thank you for your devotion.</p>
              </div>
            </FadeUp>
          ) : (
            <>
              <FadeUp>
                <p className="text-[#555] leading-relaxed mb-10">
                  Lighting a candle is a beautiful Catholic tradition symbolising prayer, hope, and the light of Christ. Though you may be far from Our Lady of Dodi, you can light a virtual candle here as an act of devotion and prayer. Choose a candle type, write your prayer, and let its light shine before Our Lady.
                </p>
              </FadeUp>

              <FadeUp delay={200}>
                <h3 className="text-xl font-semibold text-[#1A4D8F] mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Choose Your Candle</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {candleTypes.map((candle) => (
                    <button
                      key={candle.id}
                      onClick={() => setSelected(candle.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-center ${selected === candle.id ? "border-[#F2B90F] bg-amber-50 shadow-md" : "border-gray-200 hover:border-[#F2B90F]/50"}`}
                    >
                      <div className="text-3xl mb-2">{candle.icon}</div>
                      <h4 className="font-semibold text-[#333] text-sm">{candle.name}</h4>
                      <p className="text-xs text-[#777] mt-1">{candle.desc}</p>
                    </button>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={300}>
                <form onSubmit={handleLight} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Your Prayer Message</label>
                    <textarea
                      rows={4}
                      value={prayer}
                      onChange={(e) => setPrayer(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors resize-none"
                      placeholder="Write your prayer intention..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Email (for confirmation)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!selected}
                    className="w-full py-4 bg-[#F2B90F] text-[#333] font-semibold rounded-lg hover:bg-[#f5ca40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Flame className="w-5 h-5" /> Light My Candle
                  </button>
                </form>
              </FadeUp>
            </>
          )}
        </div>
      </section>
    </>
  );
}
