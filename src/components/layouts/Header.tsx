import { useRef } from "react";
import { Nav } from "./nav/Nav";

export function Header() {

  const menu = useRef<HTMLDivElement>(null);

  function handleSlide() {
    menu.current?.classList.toggle("translate-x-[-100%]")
  }

  return (
    <>
      <header className="bg-stone-800 hidden sm:block">
        <div className="container">
          <Nav />
        </div>
      </header>
      <header ref={menu} className="px-4 sm:hidden h-full fixed z-40 left-0 inset-y-0 bg-stone-800 overflow-y-auto pt-20 pb-5 transition-transform translate-x-[-100%]">
        <Nav />
      </header>

      <div className="sm:hidden fixed left-8 top-4 z-50 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-stone-700" onClick={handleSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>
    </>
  );
}