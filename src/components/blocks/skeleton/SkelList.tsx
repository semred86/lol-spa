import { Skel } from "./Skel";

export function SkelList({ amount = 28, size = 88 }: { amount?: number, size?:number }) {
  return (
    <>
      {Array(amount).fill(0).map((_, i) => <Skel size={size} key={i} />)}
    </>
  );
}