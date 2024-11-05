export function toQueryParams<
  T extends Record<string, string | number | null | undefined | boolean>,
  URLType extends Readonly<string>,
>(url: URLType, data?: T): URL {
  const urlWithParams = new URL(url);

  if (data) {
    Object.entries(data).forEach(([param, value]) => {
      if (value != null) {
        urlWithParams.searchParams.append(param, String(value));
      }
    });
  }

  return urlWithParams;
}
