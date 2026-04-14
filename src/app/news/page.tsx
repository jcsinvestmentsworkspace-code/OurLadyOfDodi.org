import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { Newspaper, ArrowRight } from "lucide-react";
import Image from "next/image";

 
const allNews = [
  {
    title: "Feast of Our Lady of Dodi Celebrated with Joy",
    slug: "feast-celebration-2026",
    date: "May 30th, 2026",
    image: "/news/grottoflyer-1.jpeg", // 👈 ADD THIS
    excerpt: "Thousands of pilgrims gathered...",
    content: "The Our Lady of Dodi Grotto warmly invites all faithful to the 2026 Annual Pilgrimage on Saturday, 30th May. Join us for a spiritually enriching day of prayer, reflection, healing, and renewal as we honor the Blessed Virgin Mary. Come as a parish, family, or individual and experience a powerful encounter of faith, unity, and divine grace."
  },  
  { title: "New Rosary Garden Inaugurated at the Grotto", 
    slug: "rosary-garden-inauguration", 
    date: "January 15, 2026",
    image: "/news/church-4.jpeg",
    excerpt: "A beautiful new Rosary garden has been opened for pilgrims seeking quiet contemplation and prayer amidst nature.", 
    content: "A beautiful new Rosary Garden has been inaugurated at the Our Lady of Dodi pilgrimage site. The garden features stations for each mystery of the Rosary, set among native trees and flowering plants, creating a peaceful environment for prayer and meditation. The project was funded through generous donations from parishioners and pilgrims. The Bishop blessed the garden during a special ceremony attended by hundreds of the faithful. The Rosary Garden is now open daily and is expected to become a beloved feature of the pilgrimage experience, offering pilgrims a serene path for walking meditation and Rosary recitation." },
  
    { title: "Lenten Retreat Programme Announced", 
      slug: "lenten-retreat-2026", 
      date: "January 8, 2026", 
      image: "/news/church-8.jpeg",
      excerpt: "Join us for a series of Lenten retreats focusing on Marian devotion, confession, and spiritual renewal.", 
      content: "Our Lady of Dodi is pleased to announce a comprehensive Lenten retreat programme for 2026. The retreats will take place on consecutive weekends throughout Lent, with themes centred on Marian devotion, the Way of the Cross, the Sacrament of Reconciliation, and preparing our hearts for the Paschal Mystery. Each retreat will include Holy Mass, guided meditations, confessions, and opportunities for quiet prayer at the Grotto. Guest speakers include renowned Catholic retreat directors and theologians. Registration is open to individuals, families, and parish groups." },
  
      /*{ title: "Christmas Mass at Dodi Draws Thousands", 
        slug: "christmas-mass-2025", 
        date: "December 26, 2025",
        //image: "public/news/church-1.jpeg",
        excerpt: "The midnight Mass and Christmas Day celebrations brought the community together in faith and joy.", 
        content: "The Christmas celebrations at Our Lady of Dodi were marked by an outpouring of faith and joy. The midnight Mass was attended by thousands, who braved the cool night air to welcome the birth of our Lord Jesus Christ. The church was adorned with beautiful decorations, and the choir's rendition of traditional carols filled the sanctuary with heavenly music. Christmas Day Mass continued the celebrations with a special children's liturgy, a nativity play, and the distribution of gifts to underprivileged families in the community." },
   
         { title: "Parish Outreach Programme Expanded", 
          slug: "outreach-expansion-2025", 
          date: "October 5, 2025",
          //image: "public/news/church-2.jpeg", 
          excerpt: "Our Lady of Dodi expands its charitable outreach to serve more families in the surrounding communities.", 
          content: "Our Lady of Dodi has expanded its parish outreach programme to serve more families in the surrounding communities. The expanded programme now includes regular food distribution, medical outreach clinics, educational support for children, and counselling services. This expansion reflects the Church's commitment to living the Gospel through works of mercy and charity. Volunteers from the parish and visiting pilgrims have been instrumental in making this expansion possible." },
];*/
    ];
export { allNews };

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News & Updates" subtitle="Official communications from Our Lady of Dodi" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((item, i) => (
              <FadeUp key={item.slug} delay={i * 80}>
                <Link href={`/news/${item.slug}`} className="group block rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className="relative h-44 w-full overflow-hidden">
  <Image
    src={item.image || "/news/default.jpg"}
    alt={item.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>
</div>
                  
                  <div className="p-6">
                    <p className="text-xs text-[#777] mb-2">{item.date}</p>
                    <h3 className="font-semibold text-[#333] mb-2 group-hover:text-[#1A4D8F] transition-colors" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#777] line-clamp-3">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#1A4D8F] font-medium group-hover:underline">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
