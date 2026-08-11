import {
  requireAuth,
} from "@/lib/auth/guards/requireAuth";

export default async function DashboardPage() {
  const user =
    await requireAuth();

  return (
    <main>
      <h1>
        داشبورد MELKIST
      </h1>

      <p>
        خوش آمدید {user.email}
      </p>
    </main>
  );
}