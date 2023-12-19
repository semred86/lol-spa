import React, { useCallback, useState } from "react";
import { InnerHTML } from "./InnerHTML";
import { toolTipMove } from "@/utils/toolTipMove";

interface context {
  showTip(desc: string, target: EventTarget): void;
  hideTip(): void;
}

export const TipContext = React.createContext<context | null>(null);

export function ToolTip({ children }: any) {
  const [block, setBlock] = useState<HTMLElement | null>(null);
  const [isTip, setIsTip] = useState(false);
  const [tipDesc, setTipDesc] = useState("");
  const [fn, setFn] = useState<{ f: () => void } | null>(null);

  function showTip(desc: string, target: EventTarget): void {
    setBlock(target as HTMLElement);
    setIsTip(true);
    setTipDesc(desc);
  }

  function hideTip(): void {
    fn && window.removeEventListener("optimizedResize", fn.f);
    setBlock(null);
    setIsTip(false);
    setTipDesc("");
    setFn(null);
  }

  const tipRef = useCallback(
    (tipEl: HTMLDivElement) => {
      if (tipEl !== null && block !== null) {
        const f = () => toolTipMove(tipEl, block as HTMLElement);
        f();
        setFn({ f });
        window.addEventListener("optimizedResize", f);
      }
    },
    [block, setFn]
  );

  return (
    <>
      {isTip && (
        <div
          ref={tipRef}
          className="absolute z-50 top-0 left-0 bg-stone-700 max-w-md p-4 rounded-md text-sm"
        >
          <InnerHTML html={tipDesc} />
        </div>
      )}
      <TipContext.Provider value={{ showTip, hideTip }}>
        {children}
      </TipContext.Provider>
    </>
  );
}
