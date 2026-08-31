"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import emailjs from "@emailjs/browser";
import { Heart, HandHeart } from "lucide-react";

const donationOptions = [
  { amount: "GHS 20", label: "Light a Candle" },
  { amount: "GHS 50", label: "Mass Offering" },
  { amount: "GHS 100", label: "Support the Grotto" },
  { amount: "GHS 200", label: "Pilgrims' Fund" },
  { amount: "GHS 500", label: "Church Maintenance" },
  { amount: "Custom", label: "Your Choice" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
   const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [donated, setDonated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_0y3h9vx", // replace
    "template_l5dsvvh", // replace
    {
      name: form.name,
      email: form.email,
      message: form.message,
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
      <PageHeader title="Support the Church" subtitle="Your generosity helps sustain Our Lady of Dodi" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {donated ? (
            <FadeUp>
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Thank You for Your Generosity
                </h2>
                <p className="text-[#777] max-w-md mx-auto">
                  Your donation to Our Lady of Dodi is deeply appreciated. May God bless you abundantly for your generosity. A confirmation will be sent to your email.
                </p>
              </div>
            </FadeUp>
          ) : (
            <>
              <FadeUp>
                <div className="flex items-start gap-4 bg-amber-50 p-6 rounded-xl mb-10">
                  <HandHeart className="w-8 h-8 text-[#d4a00a] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#333] mb-2" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Why Your Donation Matters</h3>
                    <p className="text-[#555] text-sm leading-relaxed">
                      Your generous contributions help maintain the Grotto and church facilities, support the clergy and pastoral staff, fund community outreach programmes, provide for the needs of pilgrims, and ensure that Our Lady of Dodi remains a beacon of faith and hope for generations to come. Every donation, no matter the size, makes a difference.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-3">Select Donation Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {donationOptions.map((opt) => (
                        <button
                          key={opt.amount}
                          type="button"
                          onClick={() => setSelectedAmount(opt.amount)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${selectedAmount === opt.amount ? "border-[#F2B90F] bg-amber-50" : "border-gray-200 hover:border-[#F2B90F]/50"}`}
                        >
                          <p className="font-bold text-[#333]">{opt.amount}</p>
                          <p className="text-xs text-[#777]">{opt.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedAmount === "Custom" && (
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Custom Amount (GHS)</label>
                      <input type="text" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="Enter amount" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="Your name (optional)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors" placeholder="For donation receipt" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Message (Optional)</label>
                    <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors resize-none" placeholder="Leave a message with your donation..." />
                  </div>
                  <button type="submit" disabled={!selectedAmount} className="w-full py-4 bg-[#F2B90F] text-[#333] font-semibold rounded-lg hover:bg-[#f5ca40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Make Donation
                  </button>
                  <p className="text-xs text-[#999] text-center">Your donation is secure. God bless your generosity.</p>
                </form>
              </FadeUp>
            </>
          )}
        </div>
      </section>
    </>
  );
}
