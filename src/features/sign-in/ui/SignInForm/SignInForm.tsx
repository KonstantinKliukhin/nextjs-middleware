"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import type { FC } from "react";
import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { saveAuthTokens } from "@/entities/user";
import { appRoutes } from "@/shared/config/app-routes";
import { hardNavigate } from "@/shared/lib/hard-navigate";
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

import { signInSchema } from "../../model/form-schema";
import type { SignInFormType } from "../../model/types";

export const SignInForm: FC = () => {
  const form = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  });
  const { setError } = form;

  const onSubmit = useCallback(
    async (data: SignInFormType) => {
      const response = await signIn("sign-in-credentials", {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        setError("root", {
          message: response?.error ?? "Unknown error occurred",
        });
      } else {
        const session = await getSession();

        if (!session?.user) {
          toast.error("Try again or contact support");

          return;
        }

        saveAuthTokens(session.user.accessToken, session?.user?.refreshToken);

        hardNavigate(appRoutes.dashboard);
      }
    },
    [setError]
  );

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="email"
                    placeholder="john.doe@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Sign in
          </Button>
          <GeneralFormMessage />
          <div className="flex items-center justify-between gap-y-2 max-sm:flex-col">
            <Link href={appRoutes.forgotPassword}>
              <Button variant="link">Forgot your password?</Button>
            </Link>
            <Link href={appRoutes.signUp}>
              <Button variant="link">Don't have account yet?</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
