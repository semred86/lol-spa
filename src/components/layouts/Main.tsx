import { Outlet } from "react-router-dom";

export function Main() {
  return (
    <main className="container flex-grow">
      <Outlet />
    </main>
  );
}