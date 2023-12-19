import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setName } from "@/store/slices/championSlice";
import { Search } from "../blocks/Search";

export function ChampSearch() {
  const { name } = useSelector((state: RootState) => state.champion);

  return <Search name={name} setName={setName} />;
}
