const version: string = "12.19.1";
// export const version: string = "13.20.1";
const lang: string = "ru_RU";

export const dd: string = "https://ddragon.leagueoflegends.com/cdn/";
export const ddV: string = `https://ddragon.leagueoflegends.com/cdn/${version}/`;

export const urls = {
  sprite: {
    img: {
      net: `${ddV}img/sprite/`,
      local: `/img/sprite/`,
    },
  },
  champ: {
    data: {
      net: `${ddV}data/${lang}/champion.json`,
      local: `/data/${lang}/champion.json`,
    },
    img: {
      net: `${ddV}img/champion/`,
      local: `/img/champion/`,
    },
  },
  item: {
    data: {
      net: `${ddV}data/${lang}/item.json`,
      local: `/data/${lang}/item.json`,
    },
    img: {
      net: `${ddV}img/item/`,
      local: `/img/item/`,
    },
  },
  rune: {
    data: {
      net: `${ddV}data/${lang}/runesReforged.json`,
      local: `/data/${lang}/runesReforged.json`,
    },
    img: {
      net: `${dd}img/`,
      local: `/img/`,
    },
  },
  summoner: {
    data: {
      net: `${ddV}data/${lang}/summoner.json`,
      local: `/data/${lang}/summoner.json`,
    },
    img: {
      net: `${ddV}img/spell/`,
      local: `/img/spell/`,
    },
  },
};

// http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/item.json
// http://ddragon.leagueoflegends.com/cdn/12.19.1/img/item/1001.png
// http://ddragon.leagueoflegends.com/cdn/12.19.1/img/sprite/spell0.png
// https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png
