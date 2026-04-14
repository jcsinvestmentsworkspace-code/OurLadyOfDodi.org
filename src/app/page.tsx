import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Heart, BookOpen, Flame, HandHeart, CalendarDays, Newspaper, MapPin, ArrowRight } from "lucide-react";



const devotionCards = [
  { title: "Prayer Intentions", desc: "Submit your prayer requests", icon: Heart, href: "/prayer-intentions", color: "bg-blue-50 text-[#1A4D8F]" },
  { title: "Mass Offerings", desc: "Request a Mass intention", icon: BookOpen, href: "/mass-offerings", color: "bg-amber-50 text-[#d4a00a]" },
  { title: "Light a Candle", desc: "A symbolic act of prayer", icon: Flame, href: "/light-a-candle", color: "bg-orange-50 text-orange-600" },
  { title: "Donate", desc: "Support the mission", icon: HandHeart, href: "/donate", color: "bg-green-50 text-green-700" },
];

const newsItems = [
  { title: "Feast of Our Lady of Dodi Celebrated with Joy",  slug: "feast-celebration-2026", date: "February 2, 2026", image: "/news/grottoflyer-1.jpeg", excerpt: "Thousands of pilgrims gathered to celebrate the annual feast day with Mass, processions, and devotional prayers at the Grotto." },
  { title: "New Rosary Garden Inaugurated at the Grotto", slug: "rosary-garden-inauguration", date: "January 15, 2026", image: "/news/church-4.jpeg", excerpt: "A beautiful new Rosary garden has been opened for pilgrims seeking quiet contemplation and prayer amidst nature." },
  { title: "Lenten Retreat Programme Announced", slug: "lenten-retreat-2026", date: "January 8, 2026", image: "/news/church-8.jpeg", excerpt: "Join us for a series of Lenten retreats focusing on Marian devotion, confession, and spiritual renewal." },
];

const events = [
  { title: "Our Lady Of Dodi Pilgrimage", slug: "stations-of-the-cross", date: "30th May, 2026", location: "The Grotto" },
  { title: "Marian Devotion Night", slug: "marian-devotion-night", date: "March 25, 2026", location: "Main Church" },
  { title: "Easter Vigil Mass", slug: "easter-vigil-mass", date: "April 4, 2026", location: "Main Church" },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero Banner */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
       <img
  src="/news/church-7.jpeg"
  alt="Our Lady of Dodi"  
  className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/50"></div>
       
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F2B90F]/10 blur-3xl"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeUp>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-4xl text-[#F2B90F]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>&#10013;</span>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our Lady of Dodi
            </h1>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="text-xl md:text-2xl text-[#F2B90F] font-medium mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              A Sanctuary of Faith &amp; Healing
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              A place of prayer, peace, and pilgrimage
            </p>
          </FadeUp>
          <FadeUp delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prayer-intentions" className="px-8 py-4 bg-[#F2B90F] text-[#333] font-semibold rounded-lg hover:bg-[#f5ca40] transition-all hover:shadow-lg hover:-translate-y-0.5">
                Prayer Intentions
              </Link>
              <Link href="/pilgrimage" className="px-8 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
                Plan My Visit
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 2 — Quick Access Devotions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Devotions &amp; Services
              </h2>
              <p className="text-[#777] max-w-lg mx-auto">Quick spiritual actions to deepen your faith and connect with Our Lady of Dodi.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devotionCards.map((card, i) => (
              <FadeUp key={card.href} delay={i * 100}>
                <Link href={card.href} className="group block p-6 rounded-xl border border-gray-100 hover:border-[#1A4D8F]/20 hover:shadow-lg transition-all bg-white">
                  <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#333] mb-1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{card.title}</h3>
                  <p className="text-[#777] text-sm">{card.desc}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={500}>
            <div className="text-center mt-10">
              <Link href="/resources" className="inline-flex items-center gap-2 text-[#1A4D8F] font-semibold hover:underline">
                All Devotions &amp; Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 3 — About the Sanctuary */}
      <section className="py-16 md:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
  <img
    src="/news/church-6.jpeg"
    alt="Our Lady of Dodi Grotto"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
    <p className="text-sm text-blue-200">Sacred Grounds</p>
    <h3 className="text-xl font-semibold">
      Our Lady of Dodi Grotto
    </h3>
  </div>
  </div>

            </FadeUp>
            <FadeUp delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  About the Sanctuary
                </h2>
                <p className="text-[#555] leading-relaxed mb-4">
                  Our Lady of Dodi is a sacred Catholic pilgrimage site nestled in the serene landscape of Ghana. For generations, the faithful have journeyed here to seek the intercession of the Blessed Virgin Mary, finding solace, healing, and renewed faith.
                </p>
                <p className="text-[#555] leading-relaxed mb-6">
                  The Grotto stands as a testament to Marian devotion, drawing pilgrims from across West Africa and beyond. It is a place where heaven meets earth, where prayers are offered, and miracles are believed.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A4D8F] text-white rounded-lg hover:bg-[#0f3366] transition-colors font-semibold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 4 — Featured News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Latest News
              </h2>
              <p className="text-[#777] max-w-lg mx-auto">Stay updated with the latest happenings at Our Lady of Dodi.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <FadeUp key={item.slug} delay={i * 100}>
                <Link href={`/news/${item.slug}`} className="group block rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48 w-full overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-black/30"></div>
</div>
                  
                  <div className="p-6">
                    <p className="text-xs text-[#777] mb-2">{item.date}</p>
                    <h3 className="font-semibold text-[#333] mb-2 group-hover:text-[#1A4D8F] transition-colors" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#777] line-clamp-2">{item.excerpt}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400}>
            <div className="text-center mt-10">
              <Link href="/news" className="inline-flex items-center gap-2 text-[#1A4D8F] font-semibold hover:underline">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 5 — Pilgrimage Highlight */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1A4D8F] to-[#0f3366] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTJ2LTZoLTZ2LTJoNnYtNmgydjZoNnYyaC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeUp>
            <MapPin className="w-12 h-12 mx-auto mb-6 text-[#F2B90F]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Plan Your Pilgrimage
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Come and experience the peace and grace of Our Lady of Dodi. Whether for a day visit or a spiritual retreat, all are welcome at this sacred place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pilgrimage" className="px-8 py-4 bg-[#F2B90F] text-[#333] font-semibold rounded-lg hover:bg-[#f5ca40] transition-colors">
                Pilgrimage Info
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-colors">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 6 — Events Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D8F] mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Upcoming Events
              </h2>
              <p className="text-[#777] max-w-lg mx-auto">Join us for liturgical celebrations, retreats, and community gatherings.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <FadeUp key={event.slug} delay={i * 100}>
                <Link href={`/events/${event.slug}`} className="group block p-6 rounded-xl border border-gray-100 hover:border-[#1A4D8F]/20 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <CalendarDays className="w-6 h-6 text-[#1A4D8F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333] group-hover:text-[#1A4D8F] transition-colors" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#777] mt-1">{event.date}</p>
                      <p className="text-sm text-[#999] mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {event.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400}>
            <div className="text-center mt-10">
              <Link href="/events" className="inline-flex items-center gap-2 text-[#1A4D8F] font-semibold hover:underline">
                See Full Calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
