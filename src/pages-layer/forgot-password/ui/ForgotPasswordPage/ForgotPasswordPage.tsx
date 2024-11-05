"use client";
import { ForgotPasswordForm } from "@/features/send-forgot-password-email";
import { AuthLayout } from "@/widgets/auth-layout";

export function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter new password"
      form={<ForgotPasswordForm />}
    />
  );
}
