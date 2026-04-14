import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { allEvents } from "../page";

export function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = allEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHeader title={event.title} subtitle={event.category} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-[#555]">
                <CalendarDays className="w-5 h-5 text-[#1A4D8F]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <Clock className="w-5 h-5 text-[#1A4D8F]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <MapPin className="w-5 h-5 text-[#1A4D8F]" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#555] leading-relaxed">{event.description}</p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link href="/events" className="inline-flex items-center gap-2 text-[#1A4D8F] font-semibold hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Events
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
