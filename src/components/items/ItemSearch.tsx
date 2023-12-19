import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setName } from "@/store/slices/itemSlice";
import { Search } from "../blocks/Search";

export function ItemSearch() {
  const { name } = useSelector((state: RootState) => state.item);

  return <Search name={name} setName={setName} />;
}
