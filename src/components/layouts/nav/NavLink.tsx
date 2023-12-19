import { Link, useMatch } from "react-router-dom";
import style from "./Link.module.css"

export const NavLink = ({ children, to, ...props }: any) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={match ? style.active : style.link}
      {...props}
    >
      {children}
    </Link>
  );
};
