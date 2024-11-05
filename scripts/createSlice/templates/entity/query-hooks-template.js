const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
"use client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

import { ${toCamelCase(slice)}sListQueryKey, ${toCamelCase(slice)}QueryKey } from "@/shared/api/query-keys";
import { handleQuery } from "@/shared/lib/handle-query";

import { ${firstCharUpperCase(toCamelCase(slice))} } from "../model/types";
import {
  create${firstCharUpperCase(toCamelCase(slice))},
  delete${firstCharUpperCase(toCamelCase(slice))},
  get${firstCharUpperCase(toCamelCase(slice))},
  get${firstCharUpperCase(toCamelCase(slice))}sList,
  update${firstCharUpperCase(toCamelCase(slice))},
} from "./services";

export function useGet${firstCharUpperCase(toCamelCase(slice))}sList() {
  return useQuery({
    queryKey: [${toCamelCase(slice)}sListQueryKey],
    queryFn: handleQuery<${firstCharUpperCase(toCamelCase(slice))}[], typeof get${firstCharUpperCase(toCamelCase(slice))}sList>(get${firstCharUpperCase(toCamelCase(slice))}sList),
    onError: () => {
      toast.error("Couldn't get ${toCamelCase(slice)}s");
    },
  });
}

export function useDelete${firstCharUpperCase(toCamelCase(slice))}() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleQuery<Id, typeof delete${firstCharUpperCase(toCamelCase(slice))}>(delete${firstCharUpperCase(toCamelCase(slice))}),
    onError: () => {
      toast.error("Couldn't delete ${toCamelCase(slice)}");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === ${toCamelCase(slice)}sListQueryKey,
      });
      toast.success("${firstCharUpperCase(toCamelCase(slice))} successfully deleted");
    },
  });
}

export function useGet${firstCharUpperCase(toCamelCase(slice))}(id?: Id) {
  return useQuery({
    queryKey: [${toCamelCase(slice)}QueryKey, id],
    enabled: Boolean(id),
    queryFn: () => handleQuery<${firstCharUpperCase(toCamelCase(slice))}, typeof get${firstCharUpperCase(toCamelCase(slice))}>(get${firstCharUpperCase(toCamelCase(slice))})(id!),
    onError: () => {
      toast.error("Couldn't get ${toCamelCase(slice)}");
    },
  });
}

export function useUpdate${firstCharUpperCase(toCamelCase(slice))}() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleQuery<${firstCharUpperCase(toCamelCase(slice))}, typeof update${firstCharUpperCase(toCamelCase(slice))}>(update${firstCharUpperCase(toCamelCase(slice))}),
    onSuccess: (data, variables) => {
      queryClient.setQueryData([${toCamelCase(slice)}QueryKey, variables.id], data);
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === ${toCamelCase(slice)}sListQueryKey,
      });
      toast.success("${firstCharUpperCase(toCamelCase(slice))} successfully updated");
    },
  });
}

export function useCreate${firstCharUpperCase(toCamelCase(slice))}() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleQuery<${firstCharUpperCase(toCamelCase(slice))}, typeof create${firstCharUpperCase(toCamelCase(slice))}>(create${firstCharUpperCase(toCamelCase(slice))}),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === ${toCamelCase(slice)}sListQueryKey,
      });
      toast.success("${firstCharUpperCase(toCamelCase(slice))} successfully created");
    },
  });
}
`;
