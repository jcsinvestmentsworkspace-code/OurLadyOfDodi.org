"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { Heart, Flame } from "lucide-react";
import emailjs from "@emailjs/browser";
import { request } from "http";

export default function PrayerIntentionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", request: "", massIntention: "" });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_0y3h9vx", // replace
    "template_l5dsvvh", // replace
    {
      name: form.name,
      email: form.email,
      request: form.request,
      massIntention: form.massIntention,
   
    },
    "NWDnSiiyLu6kIg9ci" // replace
  )
  .then(() => {
    setSubmitted(true);
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send. Please try again.");
  });
};


  return (
    <>
      <PageHeader title="Prayer Intentions" subtitle="Submit your prayer requests to Our Lady of Dodi" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <FadeUp>
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Your Prayer Has Been Received
                </h2>
                <p className="text-[#777] mb-6 max-w-md mx-auto">
                  Thank you for entrusting your intention to Our Lady of Dodi. Your request will be remembered in our community prayers and Masses.
                </p>
                <Link href="/light-a-candle" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2B90F] text-[#333] rounded-lg hover:bg-[#f5ca40] transition-colors font-semibold">
                  <Flame className="w-4 h-4" /> Light a Candle
                </Link>
              </div>
            </FadeUp>
          ) : (
            <>
              <FadeUp>
                <div className="mb-10">
                  <p className="text-[#555] leading-relaxed">
                    At Our Lady of Dodi, we believe in the power of communal prayer. Submit your prayer intentions and they will be included in the daily prayers of our community and remembered at the Holy Sacrifice of the Mass. All intentions are treated with the utmost confidentiality and reverence.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Prayer Request</label>
                    <textarea
                      required
                      rows={5}
                      value={form.request}
                      onChange={(e) => setForm({ ...form, request: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors resize-none"
                      placeholder="Share your prayer intention..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Mass Intention (Optional)</label>
                    <input
                      type="text"
                      value={form.massIntention}
                      onChange={(e) => setForm({ ...form, massIntention: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors"
                      placeholder="For the repose of the soul of..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1A4D8F] text-white font-semibold rounded-lg hover:bg-[#0f3366] transition-colors"
                  >
                    Submit Prayer Intention
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
