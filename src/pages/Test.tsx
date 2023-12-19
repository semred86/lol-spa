// import { lazy, Suspense } from "react";

// const TestLazy = lazy(() => import('./TestLazy'));


export function Test() {

  // const { data } = useGetVersionQuery('');


  // console.log(data && data[0])


  return (
    <>
      <h1>Test</h1>


      <pre>

      </pre>
    </>
  )
}

interface RootObject {
  n: N;
  v: string;
  l: string;
  cdn: string;
  dd: string;
  lg: string;
  css: string;
  profileiconmax: number;
  store?: any;
}

interface N {
  item: string;
  rune: string;
  mastery: string;
  summoner: string;
  champion: string;
  profileicon: string;
  map: string;
  language: string;
  sticker: string;
}