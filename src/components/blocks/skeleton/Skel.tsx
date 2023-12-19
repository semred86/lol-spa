import style from "@/components/blocks/Block.module.css";

export function Skel({ size = 88 }: { size?: number }) {
  return (
    <div className={style.block}>
      <div
        className="rounded-sm sceleton"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
      <div>
        <div
          className="mt-2 mb-2 h-3 rounded-sm sceleton"
          style={{ width: `${size}px` }}
        ></div>
        {/* <div className="mt-2 mb-2 w-[88px] h-3 rounded-sm sceleton"></div> */}
      </div>
    </div>
  );
}
