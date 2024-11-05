"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";

import { appRoutes } from "@/shared/config/app-routes";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  GeneralFormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { useResetPassword } from "../../api/query-hooks";
import { resetPasswordSchema } from "../../model/form-schema";
import type { ResetPasswordFormType } from "../../model/types";

type ResetPasswordFormProps = {
  code: string;
};

export const ResetPasswordForm = memo<ResetPasswordFormProps>(function ResetPasswordForm({
  code,
}) {
  const { mutateAsync: resetPassword } = useResetPassword();
  const form = useForm<ResetPasswordFormType>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const { setError } = form;
  const { push } = useRouter();

  const onSubmit = useCallback(
    async (data: ResetPasswordFormType) => {
      try {
        await resetPassword({ ...data, resetPasswordCode: code });
        push(appRoutes.signIn);
      } catch (error) {
        if (typeof error === "string") {
          setError("root", { message: error });
        }
      }
    },
    [push, setError, resetPassword, code]
  );

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Reset password
          </Button>
          <GeneralFormMessage />
        </form>
      </Form>
    </div>
  );
});
