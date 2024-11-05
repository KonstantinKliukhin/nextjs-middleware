import type { FC, PropsWithChildren } from "react";

import { Header } from "../Header/Header";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid size-full">
      <Header />
      <main className="size-full overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};
