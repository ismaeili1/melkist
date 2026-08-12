import { requireAuth } from "@/lib/auth/guards/requireAuth";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return children;
}