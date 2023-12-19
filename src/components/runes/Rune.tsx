import { TipContext } from "@/components/blocks/ToolTip";
import { dd } from "@/conf/urls";
import { useContext } from "react";

export function Rune({ rune, i }: any) {
  const handles = useContext(TipContext);

  let style = "cursor-pointer";

  if (i === 0) {
    style += " max-w-60 max-h-60";
  } else {
    style += " w-16 h-16";
  }

  return (
    <div className="cursor-pointer">
      <img
        src={`${dd}img/${rune.icon}`}
        alt=""
        className={style}
        onMouseEnter={(e) =>
          handles?.showTip(
            `<h3 class="text-lg font-medium mb-1">${rune.name}</h3>` +
              rune.longDesc,
            e.target
          )
        }
        onMouseLeave={handles?.hideTip}
      />
    </div>
  );
}
