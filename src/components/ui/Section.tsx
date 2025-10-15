interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 px-6 bg-slate-50">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          {title}
        </h2>
      )}
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
