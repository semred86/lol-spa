import { ChampList } from "@/components/champion/ChampList";
import { ChampSearch } from "@/components/champion/ChampSearch";
import { ChampTags } from "@/components/champion/ChampTags";

export function Champions() {
  return (
    <>
      <h1>Champions</h1>
      <ChampSearch />
      <ChampTags />
      <ChampList />
    </>
  );
}
