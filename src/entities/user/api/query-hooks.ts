"use client";
import { useQuery } from "react-query";
import { toast } from "sonner";

import { currentUserQueryKey } from "@/shared/api/query-keys";
import { handleQuery } from "@/shared/lib/handle-query";

import type { User } from "../model/types";
import { getCurrentUser } from "./services";

export function useGetCurrentUser() {
  return useQuery({
    queryKey: currentUserQueryKey,
    queryFn: handleQuery<User, typeof getCurrentUser>(getCurrentUser),
    onError: () => {
      toast.error("Couldn't get profile data");
    },
  });
}
