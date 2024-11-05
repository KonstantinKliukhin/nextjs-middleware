"use client";
import type { ComponentProps} from "react";
import { memo, useCallback } from "react";

import { Button } from "@/shared/ui/button";

import { useLogout } from "../../api/query-hooks";

type LogoutButtonProps = ComponentProps<typeof Button>;

export const LogoutButton = memo<LogoutButtonProps>(function LogoutButton(props) {
  const { mutate: logOut } = useLogout();

  const onLogout = useCallback(() => logOut(), [logOut]);

  return <Button onClick={onLogout} {...props} />;
});
