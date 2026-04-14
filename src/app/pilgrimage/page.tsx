import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { MapPin, Clock, Car, Church, Phone } from "lucide-react";

export default function PilgrimagePage() {
  return (
    <>
      <PageHeader title="Pilgrimage & Visit Information" subtitle="Plan your journey to Our Lady of Dodi" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Location &amp; Map
            </h2>
            <div className="bg-gray-100 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#1A4D8F] mx-auto mb-4" />
                <p className="text-[#555] font-medium">Our Lady of Dodi Grotto</p>
                <p className="text-[#777] text-sm">Dodi, Volta Region, Ghana</p>
                <p className="text-[#999] text-xs mt-2">GPS coordinates available upon request</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mt-12 mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Travel Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Car className="w-8 h-8 text-[#1A4D8F] mb-3" />
                <h3 className="font-semibold text-[#333] mb-2">By Road</h3>
                <p className="text-sm text-[#555]">
                  From Accra, travel north via the Eastern Corridor road through Ho to Dodi. The journey passes through scenic landscapes of the Volta Region. Public transport (tro-tro) and private hire vehicles are available from Ho.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <MapPin className="w-8 h-8 text-[#1A4D8F] mb-3" />
                <h3 className="font-semibold text-[#333] mb-2">From Nearby Towns</h3>
                <p className="text-sm text-[#555]">
                  The Grotto is accessible from Ho (the Volta Regional capital), Kpando, and Jasikan. Local transportation is available from these towns to the pilgrimage site. Signs along the road will guide you to the Grotto.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={300}>
            <h2 className="text-3xl font-bold text-[#1A4D8F] mt-12 mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Facilities &amp; Mass Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <Church className="w-8 h-8 text-[#1A4D8F] mb-3" />
                <h3 className="font-semibold text-[#333] mb-3">Mass Schedule</h3>
                <ul className="text-sm text-[#555] space-y-2">
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#777]" /> Sunday: 7:00 AM, 9:30 AM</li>
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#777]" /> Monday &ndash; Friday: 6:30 AM</li>
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#777]" /> Saturday: 7:00 AM</li>
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#777]" /> Feast Days: As announced</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <MapPin className="w-8 h-8 text-[#1A4D8F] mb-3" />
                <h3 className="font-semibold text-[#333] mb-3">Facilities</h3>
                <ul className="text-sm text-[#555] space-y-2">
                  <li>The Grotto &amp; Marian Shrine</li>
                  <li>Main Church for Holy Mass</li>
                  <li>Confession rooms</li>
                  <li>Pilgrims&apos; rest area</li>
                  <li>Candle lighting station</li>
                  <li>Religious articles shop</li>
                  <li>Rosary Garden</li>
                </ul>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={400}>
            <div className="mt-12 text-center">
              <p className="text-[#777] mb-4">Need more information about visiting?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A4D8F] text-white rounded-lg hover:bg-[#0f3366] transition-colors font-semibold">
                <Phone className="w-4 h-4" /> Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
