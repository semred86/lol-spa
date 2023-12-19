import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { BaseSyntheticEvent } from "react";
import { useDispatch } from "react-redux";


type prop = {
  name: string,
  setName: ActionCreatorWithPayload<string, string>
}

export function Search({ name, setName }: prop) {

  const dispatch = useDispatch();

  function handleChange(e: BaseSyntheticEvent) {
    const input: HTMLInputElement = e.target;
    const value = input.value
    dispatch(setName(value))
  }
  function clearInput(e: BaseSyntheticEvent) {
    dispatch(setName(''))
  }

  return (
    <div className="pb-5 px-5 w-full relative">
      <input type="text" value={name} onChange={handleChange} className="bg-stone-700 outline-none text-slate-50 py-2 px-4 w-full rounded-md" />
      {name !== '' ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 stroke-gray-400 absolute top-2 right-7 cursor-pointer" onClick={clearInput}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg> : null}
      {name === '' ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 stroke-gray-400 absolute top-2 right-9 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg> : null}
    </div>
  );
}