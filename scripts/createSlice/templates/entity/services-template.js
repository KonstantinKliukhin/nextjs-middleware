const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import { appFetch } from "@/shared/api/app-fetch";
import { apiRoutes } from "@/shared/config/api-routes";
import { ApiError, ApiResponse } from "@/shared/types/api.types";

import type { ${firstCharUpperCase(toCamelCase(slice))} } from "../model/types";
import type { Create${firstCharUpperCase(toCamelCase(slice))}Dto } from "./types/create-${toCamelCase(slice)}.dto";
import type { Update${firstCharUpperCase(toCamelCase(slice))}Dto } from "./types/update-${toCamelCase(slice)}.dto";

export async function get${firstCharUpperCase(toCamelCase(slice))}sList(): Promise<ApiResponse<${firstCharUpperCase(toCamelCase(slice))}[]>> {
  const response = await appFetch(apiRoutes.${toCamelCase(slice)}s);

  return (await response.json()) as ApiResponse<${firstCharUpperCase(toCamelCase(slice))}[]>;
}

export async function delete${firstCharUpperCase(toCamelCase(slice))}(id: Id): Promise<ApiResponse<Id>> {
  const response = await appFetch(apiRoutes.${toCamelCase(slice)}(id), {
    method: "DELETE",
  });

  if (!response.ok) {
    return (await response.json()) as ApiError;
  } else {
    return id;
  }
}

export async function get${firstCharUpperCase(toCamelCase(slice))}(id: Id): Promise<ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>> {
  const response = await appFetch(apiRoutes.${toCamelCase(slice)}(id));

  return (await response.json()) as ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>;
}

type Update${firstCharUpperCase(toCamelCase(slice))}Param = {
  id: Id;
} & Update${firstCharUpperCase(toCamelCase(slice))}Dto;

export async function update${firstCharUpperCase(toCamelCase(slice))}({
  id,
  ...dto
}: Update${firstCharUpperCase(toCamelCase(slice))}Param): Promise<ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>> {
  const response = await appFetch(apiRoutes.${toCamelCase(slice)}(id), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  return (await response.json()) as ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>;
}

export async function create${firstCharUpperCase(toCamelCase(slice))}(
  dto: Create${firstCharUpperCase(toCamelCase(slice))}Dto
): Promise<ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>> {
  const response = await appFetch(apiRoutes.${toCamelCase(slice)}s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  return (await response.json()) as ApiResponse<${firstCharUpperCase(toCamelCase(slice))}>;
}
`;
