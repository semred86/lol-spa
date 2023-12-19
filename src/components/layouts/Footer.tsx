import { /*useEffect,*/ useRef } from "react";

export const Footer = () => {
  const footer = useRef(null);

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver((entries, observer) => {
  //     const [entrie] = entries;

  //     // console.log(entrie.target);
  //     if (entrie.isIntersecting) {
  //       observer.unobserve(entrie.target)
  //     }
  //   },{
  //     threshold: 1
  //   })
  //   const foo = footer.current;
  //   intersectionObserver.observe(foo!)
  // })


  return (
    <footer ref={footer} className="bg-stone-800 py-8 mt-8">
      <div className="container text-white">
        ololhelp @ 2022
      </div>
    </footer>
  );
}