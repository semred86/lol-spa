import { urls } from "@/conf/urls";
import { IRunesReforged } from "@/interfaces/IRunesReforged";

export function RuneSlot({
  data,
  i,
  handleRune,
}: {
  data: IRunesReforged;
  i: number;
  handleRune: (i: number) => void;
}) {
  return (
    <div
      className="grow p-5 flex justify-center cursor-pointer rounded-md hover:bg-stone-800"
      onClick={() => handleRune(i)}
    >
      <img
        src={urls.rune.img.net + data.icon}
        alt={data.name}
        className="border-2 border-orange-400 rounded-full p-3"
      />
    </div>
  );
}
