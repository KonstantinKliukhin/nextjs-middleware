import { useMutation } from "react-query";
import { toast } from "sonner";

import { handleQuery } from "@/shared/lib/handle-query";

import { sendForgotPasswordEmail } from "./services";

export function useSendForgotPasswordEmail() {
  return useMutation({
    mutationFn: handleQuery<void, typeof sendForgotPasswordEmail>(
      sendForgotPasswordEmail
    ),
    onSuccess: () => {
      toast("Code is sent to your email");
    },
  });
}
