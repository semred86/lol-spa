import { TipContext } from "@/components/blocks/ToolTip";
import { dd } from "@/conf/urls";
import { useContext } from "react";
import { ISummoner } from "@/interfaces/ISummoner";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface IProp {
  data: ISummoner;
}

export function Summoner({ data }: IProp) {
  const {
    version: { version },
  } = useSelector((state: RootState) => state);

  const spritePath = `${dd + version}/img/sprite/`;
  const sprite = data.image.sprite;

  const handles = useContext(TipContext);

  return (
    <div className="flex flex-col items-center p-5 cursor-pointer text-slate-200 gap-3 hover:bg-zinc-700">
      <div
        className="w-12 h-12 shadow-xl shadow-neutral-900"
        style={{
          width: data.image.w,
          height: data.image.h,
          backgroundImage: `url(${spritePath}${sprite})`,
          backgroundPosition: `${-data.image.x}px ${-data.image.y}px`,
        }}
      />
      <img
        src={`${dd + version}/img/spell/` + data.image.full}
        alt=""
        onMouseEnter={(e) => handles?.showTip(data.description, e.target)}
        onMouseLeave={handles?.hideTip}
      />
      <span className="text-center">{data.name}</span>
    </div>
  );
}
