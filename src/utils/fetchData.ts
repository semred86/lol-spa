export async function fetchData(url: string, fn: Function) {
  const result = await fetch(url);
  const data = await result.json();
  fn(data)
}