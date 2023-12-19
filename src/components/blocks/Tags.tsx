import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { BaseSyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";


type prop = {
  tag: string,
  tags: string[],
  setTag: ActionCreatorWithPayload<string, string>
}

export function Tags({ tag, tags, setTag }: prop) {
  const dispatch = useDispatch();

  const liStyleMain = "px-10 py-3 cursor-pointer hover:bg-stone-800 rounded-md";
  const liStyle = `${liStyleMain} text-white`;
  const liStyleActive = `${liStyleMain} text-orange-800`;

  function handleTag(e: BaseSyntheticEvent) {
    const li: HTMLLIElement = e.target;
    const tagText = li.innerText;
    dispatch(setTag(tagText))
    handleSlide()
  }

  const menu = useRef<HTMLDivElement>(null);

  function handleSlide() {
    menu.current?.classList.toggle("translate-x-full")
  }

  return (
    <>
      <div ref={menu} className="h-full fixed z-40 right-0 inset-y-0 bg-stone-800 overflow-y-auto pt-5 pb-20 transition-transform translate-x-full">
        <ul className="">
          {tags.map((t: string) => (
            <li key={t} className={t === tag ? liStyleActive : liStyle} onClick={handleTag}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-5 right-5 z-50 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-stone-700" onClick={handleSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
      </div>
    </>
  );
}