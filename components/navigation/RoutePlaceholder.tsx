import { Link } from "@/i18n/navigation";

interface RoutePlaceholderData {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  primaryHref: string;
}

interface RoutePlaceholderProps {
  data: RoutePlaceholderData;
}

export function RoutePlaceholder({ data }: RoutePlaceholderProps) {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 48,
      }}
    >
      <small>{data.eyebrow}</small>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Link href={data.primaryHref}>{data.primaryAction}</Link>
    </main>
  );
}
