type ValueOf<T> = T[keyof T];

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<R extends keyof any, T> = {
  [P in R]?: T;
};

type Id = string;

interface IdObj {
  id: Id;
}

type OptionType<T extends string | number = string> = {
  value: T;
  label: string;
};

type SortOrder = "ASC" | "DESC";
