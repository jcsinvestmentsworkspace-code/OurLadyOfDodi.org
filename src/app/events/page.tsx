import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const allEvents = [
  { title: "Stations of the Cross", slug: "stations-of-the-cross", date: "Every Friday in Lent", time: "3:00 PM", location: "The Grotto", category: "Mass", description: "Join us for the solemn devotion of the Stations of the Cross, walking the path of Our Lord's Passion. This powerful Lenten practice takes place at the Grotto, where pilgrims meditate on each station amidst the natural beauty of the sacred site. Bring your Rosary and prayer intentions." },
  { title: "Marian Intercessory Prayer", slug: "marian-intercessory-prayer", date: "March 25, 2026", time: "6:00 PM", location: "Main Church", category: "Retreats", description: "A special evening of Marian devotion featuring the Rosary, Marian hymns, a reflection on Our Lady's role in salvation history, and Benediction of the Blessed Sacrament. This event coincides with the Solemnity of the Annunciation of the Lord." },
  { title: "Easter Vigil Mass", slug: "easter-vigil-mass", date: "April 4, 2026", time: "7:00 PM", location: "Main Church", category: "Mass", description: "The most solemn and beautiful liturgy of the Church year. Beginning with the blessing of the new fire and the lighting of the Paschal candle, the Easter Vigil celebrates Christ's resurrection from the dead. This is also the night when catechumens receive the sacraments of initiation." },
  { title: "Our Lady of Dodi Feast Day", slug: "feast-day-2026", date: "May 31, 2026", time: "8:00 AM", location: "The Grotto & Main Church", category: "Feasts", description: "The annual feast day of Our Lady of Dodi is the highlight of the pilgrimage year. Celebrations include a solemn High Mass, a candlelight procession to the Grotto, special devotions, testimonies of grace, and community fellowship. Pilgrims from across the country and beyond gather for this blessed occasion." },
  { title: "Corpus Christi Procession", slug: "corpus-christi", date: "June 14, 2026", time: "10:00 AM", location: "Main Church & Grounds", category: "Feasts", description: "A solemn procession in honour of the Most Blessed Sacrament. The faithful process through the church grounds with the Eucharist, stopping at decorated altars for prayer and Benediction. This is a beautiful expression of Catholic devotion to the Real Presence." },
  { title: "Monthly Recollection for Women", slug: "women-recollection", date: "First Saturday of Each Month", time: "9:00 AM", location: "Parish Hall", category: "Retreats", description: "A monthly day of recollection for women, featuring Mass, a conference by a spiritual director, time for personal prayer and confession, and Rosary at the Grotto. This is an opportunity for women of the parish and visiting pilgrims to deepen their spiritual life." },
];

export { allEvents };

export default function EventsPage() {
  const categories = ["All", "Mass", "Retreats", "Feasts"];

  return (
    <>
      <PageHeader title="Events & Liturgical Calendar" subtitle="Join us for celebrations, retreats, and community gatherings" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm border border-gray-200 text-[#555] hover:border-[#1A4D8F] hover:text-[#1A4D8F] transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeUp>

          <div className="space-y-4">
            {allEvents.map((event, i) => (
              <FadeUp key={event.slug} delay={i * 80}>
                <Link href={`/events/${event.slug}`} className="group block p-6 rounded-xl border border-gray-100 hover:border-[#1A4D8F]/20 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <CalendarDays className="w-8 h-8 text-[#1A4D8F]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg text-[#333] group-hover:text-[#1A4D8F] transition-colors" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#777]">
                            <span>{event.date}</span>
                            <span>&middot;</span>
                            <span>{event.time}</span>
                            <span>&middot;</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                          </div>
                        </div>
                        <span className="hidden sm:inline-block px-3 py-1 text-xs rounded-full bg-blue-50 text-[#1A4D8F] font-medium">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-sm text-[#777] mt-2 line-clamp-2">{event.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#999] group-hover:text-[#1A4D8F] shrink-0 hidden sm:block" />
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
