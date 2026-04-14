import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { BookOpen, Download, HelpCircle, Heart, Flame, HandHeart } from "lucide-react";

const quickLinks = [
  { title: "Prayer Intentions", desc: "Submit your prayer requests", icon: Heart, href: "/prayer-intentions" },
  { title: "Mass Offerings", desc: "Request a Mass intention", icon: BookOpen, href: "/mass-offerings" },
  { title: "Light a Candle", desc: "A symbolic act of devotion", icon: Flame, href: "/light-a-candle" },
  { title: "Prayers Library", desc: "Catholic prayers collection", icon: BookOpen, href: "/prayers" },
  { title: "Donate", desc: "Support the Church's mission", icon: HandHeart, href: "/donate" },
  { title: "Contact Us", desc: "Get in touch", icon: HelpCircle, href: "/contact" },
];

const articles = [
  { title: "Understanding the Rosary", desc: "A guide to praying the Most Holy Rosary, including the mysteries and how to meditate on each one." },
  { title: "The Sacrament of Confession", desc: "How to prepare for and make a good confession, with an examination of conscience." },
  { title: "Introduction to Marian Devotion", desc: "Why Catholics honour the Blessed Virgin Mary and how Marian devotion enriches our faith life." },
  { title: "The Holy Mass Explained", desc: "A detailed guide to understanding every part of the Catholic Mass and its significance." },
];

const downloads = [
  { title: "Pilgrimage Prayer Booklet", format: "PDF", desc: "A collection of prayers for your pilgrimage to Our Lady of Dodi." },
  { title: "Rosary Guide", format: "PDF", desc: "Step-by-step guide to praying the Rosary with meditations on the mysteries." },
  { title: "Novena to Our Lady of Dodi", format: "PDF", desc: "Nine-day prayer novena for special intentions through Our Lady of Dodi." },
  { title: "Stations of the Cross", format: "PDF", desc: "Meditations for each station of the Cross at Our Lady of Dodi Grotto." },
];

const faqs = [
  { q: "What are the Mass times at Our Lady of Dodi?", a: "Sunday Masses are at 7:00 AM and 9:30 AM. Weekday Masses (Monday to Friday) are at 6:30 AM. Saturday Mass is at 7:00 AM. Special feast day Masses are announced in advance." },
  { q: "Can I visit the Grotto at any time?", a: "The Grotto is open daily from 6:00 AM to 6:00 PM (Monday to Saturday) and from 5:30 AM to 7:00 PM on Sundays. The Rosary is recited daily at the Grotto at 5:30 PM." },
  { q: "How do I arrange a group pilgrimage?", a: "For group pilgrimages, please contact the parish office in advance to arrange for Masses, guided tours, and accommodations. Use our Contact page to reach us." },
  { q: "Is there accommodation available for pilgrims?", a: "There is a pilgrims' rest area on-site. For extended stays, nearby towns offer guesthouses and lodging. Contact us for recommendations." },
  { q: "How can I submit a prayer intention?", a: "Visit our Prayer Intentions page to submit your request online, or write your intention in the prayer book at the Grotto during your visit." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader title="Faith Resources" subtitle="Articles, downloads, and helpful information for your spiritual journey" />

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#1A4D8F] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              All Devotions &amp; Services
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <FadeUp key={link.href} delay={i * 80}>
                <Link href={link.href} className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#1A4D8F]/20 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <link.icon className="w-6 h-6 text-[#1A4D8F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] text-sm group-hover:text-[#1A4D8F] transition-colors">{link.title}</h3>
                    <p className="text-xs text-[#777]">{link.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#1A4D8F] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Faith Articles
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <FadeUp key={article.title} delay={i * 80}>
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <BookOpen className="w-6 h-6 text-[#1A4D8F] mb-3" />
                  <h3 className="font-semibold text-[#333] mb-2" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{article.title}</h3>
                  <p className="text-sm text-[#777]">{article.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#1A4D8F] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Downloads
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((dl, i) => (
              <FadeUp key={dl.title} delay={i * 80}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#333] text-sm">{dl.title}</h3>
                    <p className="text-xs text-[#777]">{dl.desc}</p>
                  </div>
                  <span className="text-xs text-[#999] bg-gray-100 px-2 py-1 rounded">{dl.format}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#1A4D8F] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 80}>
                <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-[#333] hover:text-[#1A4D8F] transition-colors list-none flex items-center justify-between text-sm">
                    {faq.q}
                    <span className="text-[#999] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-[#555] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
