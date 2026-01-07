type Props = {
  title: string;
  items: string[];
};

export default function ServiceCard({ title, items }: Props) {
  return (
    <div className="card h-full">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
