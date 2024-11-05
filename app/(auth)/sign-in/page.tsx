import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export { SignInPage as default } from "@/pages-layer/sign-in";
