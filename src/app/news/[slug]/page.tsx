import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { ArrowLeft } from "lucide-react";
import { allNews } from "../page";

export function generateStaticParams() {
  return allNews.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = allNews.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader title={article.title} subtitle={article.date} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-lg max-w-none">
              {article.content.split(". ").reduce((acc: string[], sentence, i, arr) => {
                const idx = Math.floor(i / 3);
                if (!acc[idx]) acc[idx] = "";
                acc[idx] += sentence + (i < arr.length - 1 ? ". " : "");
                return acc;
              }, []).map((paragraph, i) => (
                <p key={i} className="text-[#555] leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link href="/news" className="inline-flex items-center gap-2 text-[#1A4D8F] font-semibold hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to News
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
