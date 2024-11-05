import type { FC, ReactNode } from "react";

import { LogoIcon } from "@/shared/ui/icons/LogoIcon";

type AuthLayoutProps = {
  form: ReactNode;
  title: string;
  subtitle: string;
};

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
  return (
    <>
      <div className="h-dvh bg-background">
        <div className="absolute left-0 top-10 mb-5 flex w-full justify-center text-lg font-semibold">
          <LogoIcon className="text-primary" />
        </div>
        <div className="flex h-screen items-center p-8">
          <div className="mx-auto flex w-full flex-col space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">{props.title}</h1>
              <p className="text-sm text-muted-foreground">{props.subtitle}</p>
            </div>

            {props.form}
          </div>
        </div>
      </div>
    </>
  );
};
