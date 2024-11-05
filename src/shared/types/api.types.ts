export type ApiError = {
  error: string;
  message: string | string[];
  statusCode: number;
};

export type ApiResponse<T = unknown> = ApiError | T;

export type PaginationParams<T = {}> = {
  page: number;
  order?: SortOrder;
  take?: number;
} & T;

export type PageResponse<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly itemCount: number;
    readonly pageCount: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T;
};

export type PageApiResponse<T> = ApiResponse<PageResponse<T>>;
