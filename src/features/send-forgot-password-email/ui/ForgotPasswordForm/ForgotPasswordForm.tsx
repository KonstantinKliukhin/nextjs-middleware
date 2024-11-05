"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import * as React from "react";
import { useCallback } from "react";
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

import { useSendForgotPasswordEmail } from "../../api/query-hooks";
import { forgotPasswordSchema } from "../../model/form-schema";
import type { ForgotPasswordFormType } from "../../model/types";

export const ForgotPasswordForm: FC = () => {
  const form = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const { setError } = form;
  const { push } = useRouter();
  const { mutateAsync: sendForgotPasswordEmail } = useSendForgotPasswordEmail();

  const onSubmit = useCallback(
    async (data: ForgotPasswordFormType) => {
      try {
        await sendForgotPasswordEmail(data.email);
        push(appRoutes.resetPassword);
      } catch (error) {
        if (typeof error === "string") {
          setError("root", { message: error });
        }
      }
    },
    [push, sendForgotPasswordEmail, setError]
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

          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Continue
          </Button>
          <GeneralFormMessage />
        </form>
      </Form>
    </div>
  );
};
