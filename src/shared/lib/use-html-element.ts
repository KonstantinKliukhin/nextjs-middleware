"use client"

import { useLayoutEffect, useState } from "react"

export function useHtmlElement<El extends HTMLElement>(selector: string): El | null {
  const [element, setElement] = useState<El | null>(null)

  useLayoutEffect(
    function getElement() {
      const element = document.querySelector(selector)
      if (element) {
        setElement(element as El)
      }
    },
    [selector]
  )

  return element
}
