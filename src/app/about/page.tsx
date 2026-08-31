import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { Heart, Users, Eye, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Our Lady of Dodi" subtitle="Identity, history, and the heart of our Catholic faith community" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              History of Our Lady of Dodi
            </h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The story of Our Lady of Dodi begins with a deep and abiding faith in the intercession of the Blessed Virgin Mary. Situated in the verdant landscape of Ghana, the Dodi Grotto was established as a place of Marian apparition and devotion, drawing the faithful from near and far.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Over the decades, the site has grown from a humble place of prayer into a recognised Catholic pilgrimage destination. The faithful come seeking healing, spiritual renewal, and a deeper relationship with God through the intercession of Our Lady. The church has been blessed with numerous testimonies of grace and answered prayers.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The Grotto itself is a natural formation that has been consecrated and adorned with a statue of the Blessed Virgin Mary. Pilgrims are drawn to its serenity and the palpable sense of the sacred that pervades the site. The annual feast day celebrations attract thousands of devotees who come to honour Our Lady and renew their faith.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Mission &amp; Vision
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Our Mission", desc: "To foster a deep and living Catholic faith through Marian devotion, the sacraments, community outreach, and the proclamation of the Gospel. We seek to be a beacon of hope and healing for all who visit." },
              { icon: Eye, title: "Our Vision", desc: "To be a vibrant, welcoming, and transformative pilgrimage centre that glorifies God, honours the Blessed Virgin Mary, and inspires holiness in every soul that enters our sanctuary." },
              { icon: Users, title: "Community Values", desc: "Rooted in the Catholic tradition, we uphold the values of charity, prayer, service, and unity. Our community is bound together by a shared love for Our Lady and a commitment to living the Gospel in daily life." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-[#1A4D8F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#1A4D8F] mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Experience the Grotto
            </h2>
            <p className="text-[#777] mb-6">Visit the spiritual heart of Our Lady of Dodi, a place of deep Marian devotion and quiet contemplation.</p>
            <Link href="/grotto" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A4D8F] text-white rounded-lg hover:bg-[#0f3366] transition-colors font-semibold">
              Visit the Grotto <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
