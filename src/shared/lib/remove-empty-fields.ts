export function removeEmptyFields<T extends Record<string, unknown>>(data: T): T {
  return Object.entries(data).reduce<T>((acc, [key, value]) => {
    if (value === undefined) {
      return acc
    } else {
      return { ...acc, [key]: value }
    }
  }, {} as T)
}
