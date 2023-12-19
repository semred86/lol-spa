import { useGetDataQuery } from "@/api/lol";
import { ToolTip } from "@/components/blocks/ToolTip";
import { IRunesReforged } from "@/interfaces/IRunesReforged";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Rune } from "./Rune";
import { RuneSlot } from "./RuneSlot";

export function RuneList() {
  const {
    version: { version },
    language: { language },
  } = useSelector((state: RootState) => state);
  const data = useGetDataQuery(["runesReforged", version, language])
    .data as IRunesReforged[];
  const [id, setId] = useState(0);
  const rune: IRunesReforged | null = data ? data[id] : null;

  const handleRune = (i: number) => {
    setId(i);
  };

  return (
    <ToolTip>
      <div className="flex justify-between flex-wrap">
        {/* <div className="grid grid-cols-3 gap-4 sm:grid-cols-5"> */}
        {data &&
          data.map((dataEl: IRunesReforged, i) => (
            <RuneSlot
              data={dataEl}
              key={dataEl.id}
              i={i}
              handleRune={handleRune}
            />
          ))}
      </div>
      <h2 className="text-center text-xl py-4">{rune?.name}</h2>

      <div>
        {rune &&
          rune.slots.map((slot, i) => (
            <div className="flex justify-center gap-1 w-full py-3" key={i}>
              {slot.runes.map((rune) => (
                <Rune rune={rune} i={i} key={rune.id} />
              ))}
            </div>
          ))}
      </div>
    </ToolTip>
  );
}
