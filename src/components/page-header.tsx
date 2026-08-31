import { FadeUp } from "./fade-up";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#1A4D8F] to-[#0f3366] text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTJ2LTZoLTZ2LTJoNnYtNmgydjZoNnYyaC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <FadeUp>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            {title}
          </h1>
          {subtitle && <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>}
        </FadeUp>
      </div>
    </div>
  );
}
