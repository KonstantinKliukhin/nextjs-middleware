export function getIsClient(): boolean {
  return typeof window !== "undefined";
}
