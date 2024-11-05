import { useEffect } from "react"

import { useLatest } from "./use-latest"

type GetWindowEvent<Type extends string> = Type extends keyof WindowEventMap
  ? WindowEventMap[Type]
  : Event

export function useWindowEvent<Type extends string>(
  type: Type,
  cb: (event: GetWindowEvent<Type>) => void
): void
export function useWindowEvent(type: string, cb: (event: Event) => void) {
  const latestCb = useLatest(cb)

  useEffect(() => {
    const handler = (event: Event) => {
      latestCb.current(event)
    }

    window?.addEventListener(type, handler)

    return () => {
      window?.removeEventListener(type, handler)
    }
  }, [type, latestCb])
}
