import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTag } from "@/store/slices/itemSlice";
import { Tags } from "../blocks/Tags";

export function ItemTags() {
  const { tag } = useSelector((state: RootState) => state.item);

  const tags: string[] = [
    "All",
    "Boots",
    "ManaRegen",
    "HealthRegen",
    "Health",
    "CriticalStrike",
    "SpellDamage",
    "Mana",
    "Armor",
    "SpellBlock",
    "LifeSteal",
    "SpellVamp",
    "Jungle",
    "Damage",
    "Lane",
    "AttackSpeed",
    "OnHit",
    "Consumable",
    "Active",
    "Stealth",
    "Vision",
    "CooldownReduction",
    "NonbootsMovement",
    "AbilityHaste",
    "Tenacity",
    "MagicPenetration",
    "ArmorPenetration",
    "Aura",
    "Slow",
    "Trinket",
    "GoldPer",
  ];

  return <Tags tag={tag} tags={tags} setTag={setTag} />;
}
