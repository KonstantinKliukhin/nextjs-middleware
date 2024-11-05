import { SignInForm } from "@/features/sign-in";
import { AuthLayout } from "@/widgets/auth-layout";

export function SignInPage() {
  return (
    <AuthLayout
      title="Sign In"
      subtitle="Enter your email and password to sign in"
      form={<SignInForm />}
    />
  );
}
