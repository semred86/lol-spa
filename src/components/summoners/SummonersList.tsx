import { Summoner } from "./Summoner";
import { ISummoner } from "./ISummoner";
import { ToolTip } from "@/components/blocks/ToolTip";
import { useGetDataQuery } from "@/api/lol";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function SummonersList() {
  const {
    version: { version },
    language: { language },
  } = useSelector((state: RootState) => state);

  const data = useGetDataQuery(["summoner", version, language]).data?.data;

  const summoners = [];

  for (const el in data) {
    const summoner: ISummoner = data[el];
    summoners.push(<Summoner data={summoner} key={summoner.id} />);
  }

  return (
    <ToolTip>
      <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
        {summoners}
      </div>
    </ToolTip>
  );
}
