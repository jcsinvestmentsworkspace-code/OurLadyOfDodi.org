import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { FadeUp } from "@/components/fade-up";

export default function GrottoPage() {
  return (
    <>
      <PageHeader title="The Grotto" subtitle="The spiritual heart of Our Lady of Dodi" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
    
    <Image
      src="/news/church-5.jpeg"
      alt="Our Lady of Dodi Grotto"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <p className="text-sm text-blue-200">Sacred Grounds</p>
      <h3 className="text-xl font-semibold">
        The Sacred Grounds Of Grotto
      </h3>
    </div>

  </div>
</FadeUp>

          <FadeUp delay={200}>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              A Place of Encounter
            </h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The Grotto of Our Lady of Dodi is a sacred space where pilgrims come to meet the Blessed Virgin Mary in prayer. Nestled within a natural rock formation, the Grotto has been a place of devotion for generations. A beautiful statue of Our Lady stands within the Grotto, surrounded by candles, flowers, and the prayers of the faithful.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Visitors to the Grotto often describe a profound sense of peace and the presence of the divine. Many have reported healings, conversions, and spiritual breakthroughs after praying at this holy site. The Grotto is open daily for individual prayer and group devotions.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mt-12 mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Marian Devotion
            </h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Devotion to the Blessed Virgin Mary lies at the heart of Catholic spiritual life. At Our Lady of Dodi, this devotion takes many forms: the daily recitation of the Rosary, Marian hymns, processions, and the celebration of Marian feast days throughout the liturgical year.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The Church teaches that Mary, as the Mother of God and our spiritual mother, intercedes for us before her Son, Jesus Christ. By honouring Mary, we draw closer to Christ and deepen our participation in the life of the Church.
            </p>
          </FadeUp>

          <FadeUp delay={400}>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mt-12 mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Visiting the Grotto
            </h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The Grotto is open to all visitors throughout the year. Whether you come alone for quiet reflection or with a group for a pilgrimage, you are welcome. We ask that all visitors maintain a spirit of reverence and prayer while at the Grotto.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mt-6">
              <h3 className="font-semibold text-[#1A4D8F] mb-2" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Grotto Hours</h3>
              <ul className="text-[#555] space-y-1 text-sm">
                <li>Monday &ndash; Saturday: 6:00 AM &ndash; 6:00 PM</li>
                <li>Sunday: 5:30 AM &ndash; 7:00 PM</li>
                <li>Rosary at the Grotto: Daily at 5:30 PM</li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
