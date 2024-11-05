import { SignUpForm } from "@/features/sign-up";
import { AuthLayout } from "@/widgets/auth-layout";

export function SignUpPage() {
  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Enter your email below to create your account"
      form={<SignUpForm />}
    />
  );
}
