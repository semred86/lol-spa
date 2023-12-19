import { Language } from "./Language";
import { NavLink } from "./NavLink";
import { Version } from "./Version";

function Nav() {

  return (
    <nav className="flex justify-center flex-col sm:flex-row">
      {[
        ['Champions', '/'],
        ['Items', '/items'],
        ['Runes', '/runes'],
        ['Summoners', '/summoners'],
        // ['test', '/test'],
      ].map(([title, url], i) => (
        <NavLink
          key={i}
          to={url}
        >{title}</NavLink>
      ))}
      <Version />
      <Language />
    </nav>
  );
}

export { Nav };
