import LoginForm from "@/components/auth/forms/LoginForm";
import { AuthLayout } from "@/components/auth/layout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}