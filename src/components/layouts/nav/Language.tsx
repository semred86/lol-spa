import { useGetLanguagesQuery } from "@/api/lol";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setLanguage } from "@/store/slices/languageSlice";

export function Language() {
  const { data } = useGetLanguagesQuery("");
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <select
      value={language}
      onChange={handleChange}
      className="bg-stone-800 text-white px-6 py-5 cursor-pointer"
    >
      {data &&
        data.map((e: any) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
    </select>
  );
}
