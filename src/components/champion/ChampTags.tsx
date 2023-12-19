import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTag } from "@/store/slices/championSlice";
import { Tags } from "../blocks/Tags";

export function ChampTags() {
  const { tag } = useSelector((state: RootState) => state.champion);

  const tags: string[] = [
    "All",
    "Fighter",
    "Tank",
    "Mage",
    "Assassin",
    "Marksman",
    "Support",
  ];

  return <Tags tag={tag} tags={tags} setTag={setTag} />;
}
