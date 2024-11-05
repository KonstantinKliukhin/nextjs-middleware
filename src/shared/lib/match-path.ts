// Both functions are stolen from react-router
// https://github.com/remix-run/react-router/blob/main/packages/router/utils.ts#L980

type MatchPathOptions = Partial<{
  caseSensitive: boolean;
  end: boolean;
}>;

export function matchPath(
  pattern: string,
  pathname: string,
  options?: MatchPathOptions
): boolean {
  let [matcher] = compilePath(
    pattern,
    options?.caseSensitive ?? false,
    options?.end ?? true
  );

  const match = pathname.match(matcher);

  return Boolean(match);
}

type CompiledPathParam = { paramName: string; isOptional?: boolean };

function compilePath(
  path: string,
  caseSensitive = false,
  end = true
): [RegExp, CompiledPathParam[]] {
  const params: CompiledPathParam[] = [];
  let regexpSource =
    "^" +
    path
      .replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
      .replace(/^\/*/, "/") // Make sure it has a leading /
      .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
      .replace(/\/:([\w-]+)(\?)?/g, (_: string, paramName: string, isOptional) => {
        params.push({ paramName, isOptional: isOptional != null });

        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });

  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource +=
      path === "*" || path === "/*"
        ? "(.*)$" // Already matched the initial /, just match the rest
        : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else {
    // Nothing to match for "" or "/"
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");

  return [matcher, params];
}
