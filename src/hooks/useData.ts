import { useGetDataQuery } from "@/api/lol";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function useData(name: string) {
  const {
    version: { version },
    language: { language },
  } = useSelector((state: RootState) => state);

  return useGetDataQuery([name, version, language]);
}
