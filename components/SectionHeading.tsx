interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-[2.5rem] md:leading-[1.15]">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
