type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ title, subtitle, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
