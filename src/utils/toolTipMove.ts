export function toolTipMove(tip: HTMLElement, target: HTMLElement) {
  const coords = target.getBoundingClientRect();
  const lOff = coords.left + window.scrollX;
  const tOff = coords.top + window.scrollY;

  let left = lOff + coords.width / 2 - tip.clientWidth / 2;
  if (left < 0) left -= left;
  if (left + tip.clientWidth > document.documentElement.clientWidth) {
    left = document.documentElement.clientWidth - tip.clientWidth
  }

  let top = coords.top < (tip.clientHeight + 5) ? tOff + (coords.height + 5) : tOff - (tip.clientHeight + 5);

  tip.style.transform = `translate(${left}px, ${top}px)`
}