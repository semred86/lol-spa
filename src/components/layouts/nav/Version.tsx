import { useGetVersionsQuery } from "@/api/lol";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setVersion } from "@/store/slices/versionSlice";

export function Version() {
  const { data } = useGetVersionsQuery("");
  const { version } = useSelector((state: RootState) => state.version);
  const dispatch = useDispatch();

  const versions: string[] = data?.slice(0, 10);

  const handleChange = (e: any) => {
    dispatch(setVersion(e.target.value));
  };
  return (
    <select
      value={version}
      onChange={handleChange}
      className="bg-stone-800 text-white px-6 py-5 cursor-pointer"
    >
      {data &&
        versions.map((e: any) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
    </select>
  );
}
