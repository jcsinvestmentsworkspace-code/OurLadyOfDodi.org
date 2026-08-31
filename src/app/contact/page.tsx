"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  console.log(form);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
  .then(() => {
    setSubmitted(true);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send message. Try again.");
  });
};
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We would love to hear from you" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeUp>
              <div>
                <h2 className="text-2xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Get in Touch
                </h2>
                <p className="text-[#555] leading-relaxed mb-8">
                  Whether you have a question about visiting the Grotto, wish to arrange a group pilgrimage, or simply want to connect with our community, we are here for you. Reach out through any of the channels below or use the contact form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#1A4D8F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Address</h3>
                      <p className="text-sm text-[#777]">Our Lady of Dodi Catholic Church &amp; Grotto<br />Dodi, Volta Region, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#1A4D8F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Phone</h3>
                      <p className="text-sm text-[#777]">030 296 0550</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#1A4D8F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Email</h3>
                      <p className="text-sm text-[#777]">ourladyofdodigrotto@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[#1A4D8F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Office Hours</h3>
                      <p className="text-sm text-[#777]">Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM<br />Saturday: 8:00 AM &ndash; 12:00 PM<br />Sunday: After Masses</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={200}>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Message Sent
                    </h2>
                    <p className="text-[#777] max-w-md mx-auto">
                      Thank you for reaching out. We will respond to your message as soon as possible. God bless you.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#f8f9fb] p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Your Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors bg-white" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Email Address</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors bg-white" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Subject</label>
                      <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors bg-white" placeholder="What is this about?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Message</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1A4D8F] focus:ring-2 focus:ring-[#1A4D8F]/20 outline-none transition-colors resize-none bg-white" placeholder="Your message..." />
                    </div>
                    <button type="submit" className="w-full py-4 bg-[#1A4D8F] text-white font-semibold rounded-lg hover:bg-[#0f3366] transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
