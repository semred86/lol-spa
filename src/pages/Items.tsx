import { ItemList } from "@/components/items/ItemList";
import { ItemTags } from "@/components/items/ItemTags";
import { ItemSearch } from "@/components/items/ItemSearch";

function Items() {
  return (
    <>
      <h1>Items</h1>
      <ItemSearch />
      <ItemTags />
      <ItemList />
    </>
  );
}

export { Items };
