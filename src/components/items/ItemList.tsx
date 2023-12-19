import { ToolTip } from "@/components/blocks/ToolTip";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useGetDataQuery } from "@/api/lol";
import { SkelList } from "../blocks/skeleton/SkelList";
import { IItem } from "@/interfaces/IItem";
import { Item } from "./Item";

export function ItemList() {
  const {
    version: { version },
    language: { language },
  } = useSelector((state: RootState) => state);

  const data = useGetDataQuery(["item", version, language]).data?.data;
  const { name, tag } = useSelector((state: RootState) => state.item);
  const regexp: RegExp = new RegExp(`^${name}|.+?('|\\s)${name}`, "i");
  const items: IItem[] = [];

  for (const id in data) {
    const item: IItem = Object.assign({}, data[id]);

    if (!item.gold.purchasable) continue;
    if (!item.maps[11]) continue;
    if (item.requiredChampion) continue;

    if (
      (name === "" || regexp.test(item.name)) &&
      (tag === "All" || item.tags.includes(tag))
    ) {
      item.id = +id;
      items.push(item);
    }
  }

  items.sort((a: IItem, b: IItem) => a.gold.total - b.gold.total);

  return (
    <ToolTip>
      <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
        {data ? (
          items.map((item: IItem) => <Item data={item} key={item.id} />)
        ) : (
          <SkelList size={64} />
        )}
      </div>
    </ToolTip>
  );
}
