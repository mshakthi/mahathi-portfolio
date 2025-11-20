// components/ui/tag.tsx
interface TagProps {
    label: string;
  }
  
  export function Tag({ label }: TagProps) {
    return (
      <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-xs text-slate-200">
        {label}
      </span>
    );
  }