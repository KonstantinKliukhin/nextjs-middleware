import { useMutation } from "react-query";
import { toast } from "sonner";

import { handleQuery } from "@/shared/lib/handle-query";

import { resetPassword } from "./services";

export function useResetPassword() {
  return useMutation({
    mutationFn: handleQuery<void, typeof resetPassword>(resetPassword),
    onSuccess: () => {
      toast.success("Password successfully reset");
    },
  });
}
