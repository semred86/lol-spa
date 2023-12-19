import { IChamp } from "interfaces/champion/IChamp";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useData } from "./useData";
import { Champ } from "components/champion/Champ";

export function useChampFilter() {

  let { data } = useData('champion').data

  const { name, tag } = useSelector((state: RootState) => state.champion);

  const regexp: RegExp = new RegExp(`^${name}|.+?('|\\s)${name}`, "i");

  const champs: JSX.Element[] = []

  for (const name in data) {
    const champ: IChamp = data[name];

    if (
      (name === '' || regexp.test(champ.name)) &&
      (tag === 'All' || champ.tags.includes(tag))
    ) {
      champs.push(<Champ champ={champ} key={name} />)
    }
  }
  return champs;
}