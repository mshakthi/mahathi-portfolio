// components/ui/section-heading.tsx
interface SectionHeadingProps {
    title: string;
    subtitle?: string;
  }
  
  export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-slate-300">
            {subtitle}
          </p>
        )}
      </header>
    );
  }