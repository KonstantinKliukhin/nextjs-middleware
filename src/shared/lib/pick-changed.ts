import type { FieldNamesMarkedBoolean, FieldValues } from "react-hook-form";

// For removing all not changed fields
export function pickChanged<T extends FieldValues>(
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>,
  data: T
): Partial<T> {
  return Object.entries(dirtyFields).reduce((acc, [key, isTouched]) => {
    if (!isTouched) return acc;

    return {
      ...acc,
      [key]: data[key],
    };
  }, {});
}
