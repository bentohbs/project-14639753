interface Props {
  eyebrow: string;
  title: string;
  id: string;
  center?: boolean;
}

export default function SectionTitle({ eyebrow, title, id, center }: Props) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      <span className="text-xs tracking-widest uppercase text-secondary-600 font-label">{eyebrow}</span>
      <h2 className="font-heading text-2xl md:text-4xl text-foreground-950 mt-2">
        <a href={`#${id}`} className="cursor-pointer">{title}</a>
      </h2>
      <div className={`h-0.5 w-16 bg-primary-500 mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}