"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import emailjs from "@emailjs/browser";
import { BookOpen, Check } from "lucide-react";

export default function MassOfferingsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", intention: "", type: "living", donation: "" });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_0y3h9vx", // replace
    "template_l5dsvvh", // replace
    {
      name: form.name,
      email: form.email,
      type: form.type,
      intention: form.intention,
      donation: form.donation,
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
      <PageHeader title="Mass Offerings" subtitle="Request a Mass intention for your loved ones" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <FadeUp>
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Mass Intention Received
                </h2>
                <p className="text-[#777] mb-6 max-w-md mx-auto">
                  Thank you for your Mass offering. Your intention will be remembered at the Holy Sacrifice of the Mass. A confirmation will be sent to your email.
                </p>
              </div>
            </FadeUp>
          ) : (
            <>
              <FadeUp>
                <div className="mb-10">
                  <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-xl mb-8">
                    <BookOpen className="w-8 h-8 text-[#1A4D8F] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A4D8F] mb-2" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>What is a Mass Offering?</h3>
                      <p className="text-[#555] text-sm leading-relaxed">
                        A Mass offering is a long-standing tradition in the Catholic Church whereby the faithful request that a Mass be celebrated for a specific intention. This may be for the living (health, thanksgiving, special needs) or for the deceased (repose of the soul). The Mass is the highest form of prayer, and offering a Mass intention is a profound act of charity and devotion.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Your Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Email Address</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Intention Type</label>
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors bg-white">
                      <option value="living">For the Living</option>
                      <option value="deceased">For the Deceased</option>
                      <option value="thanksgiving">Thanksgiving</option>
                      <option value="special">Special Intention</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Mass Intention Details</label>
                    <textarea required rows={4} value={form.intention} onChange={(e) => setForm({ ...form, intention: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors resize-none" placeholder="Describe your Mass intention..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Offering Amount (Optional)</label>
                    <input type="text" value={form.donation} onChange={(e) => setForm({ ...form, donation: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="e.g., GHS 50" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#1A4D8F] text-white font-semibold rounded-lg hover:bg-[#0f3366] transition-colors">
                    Submit Mass Offering
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
