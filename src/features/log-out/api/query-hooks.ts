import { useMutation } from "react-query";
import { toast } from "sonner";

import { handleQuery } from "@/shared/lib/handle-query";

import { logOut } from "./services";

export function useLogout() {
  return useMutation({
    mutationFn: handleQuery<void, typeof logOut>(logOut),
    onError: () => {
      toast.error("Couldn't logout");
    },
  });
}
