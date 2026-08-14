import RegisterForm from "@/components/auth/forms/RegisterForm";
import { AuthLayout } from "@/components/auth/layout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
