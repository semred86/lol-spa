export function getCoords(elem: HTMLElement) {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + window.scrollY),
    right: Math.round(box.right + window.scrollX),
    bottom: Math.round(box.bottom + window.scrollY),
    left: Math.round(box.left + window.scrollX)
  };
}