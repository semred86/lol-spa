import { dd } from "@/conf/urls";
import style from "@/components/blocks/Block.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IChamp } from "@/interfaces/champion/IChamp";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function Champ({ champ }: { champ: IChamp }) {
  const {
    version: { version },
  } = useSelector((state: RootState) => state);

  const src = `${dd + version}/img/champion/` + champ.image.full;

  return (
    <Link to={"/champions/" + champ.id} className={style.block}>
      <LazyLoadImage
        alt={champ.name}
        height={88}
        src={src} // use normal <img> attributes as props
        width={88}
        threshold={10}
        className="z-10 relative rounded-sm"
        wrapperClassName="sceleton shadow-md shadow-neutral-900 rounded-sm"
      />
      <span className="text-center text-sm">{champ.name}</span>
    </Link>
  );
}
