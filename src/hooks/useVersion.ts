import { useGetLanguagesQuery, useGetVersionsQuery } from "@/api/lol";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setLanguage } from "@/store/slices/languageSlice";
import { setVersion } from "@/store/slices/versionSlice";

export function useVersion() {
  const dispatch = useDispatch();

  const Languages: any = useGetLanguagesQuery("");

  const Versions: any = useGetVersionsQuery("");

  useEffect(() => {
    if (Versions.isSuccess) {
      dispatch(setVersion(Versions.data[0]));
    }
    if (Languages.isSuccess) {
      dispatch(setLanguage(Languages.data[19]));
    }
  }, [Versions, Languages, dispatch]);

  const {
    version: { version },
    language: { language },
  } = useSelector((state: RootState) => state);

  return { version, language };
}
