import React from "react";
import { useCallback } from "react";

export function InnerHTML({ html, tag = 'div' }: { html: string, tag?: keyof React.ReactHTML }) {

  const descRef = useCallback((node: null | HTMLElement) => {
    if (node !== null) {
      node.innerHTML = html
    }
  }, [html]);

  return React.createElement(tag, { ref: descRef });
}