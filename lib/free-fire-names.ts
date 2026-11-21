/**
 * Data for the Spanish-only page /nombres-para-free-fire.
 * Client-safe (no server imports): the generator uses the templates and the
 * random picker, the page renders the lists.
 */

/** Hangul Filler, widely used as an "invisible space" in Free Fire names. */
export const INVISIBLE_SPACE = "ㅤ";

/** Free Fire's commonly cited name limit (not published officially by Garena). */
export const FF_MAX_LENGTH = 12;

/**
 * Estimated length the way most apps count it (UTF-16 code units): ordinary
 * letters and most symbols count 1, characters outside the Basic Multilingual
 * Plane (emoji, 𝐦𝐚𝐭𝐡 letters…) count 2. The game has the final word.
 */
export function ffLength(name: string): number {
  return name.length;
}

export const ffFilters = ["todos", "hombre", "mujer", "gamer", "aesthetic", "clan"] as const;
export type FfFilter = (typeof ffFilters)[number];
type Tag = Exclude<FfFilter, "todos">;

/** Generator templates: "X" is replaced by the visitor's name. */
export const ffTemplates: { pattern: string; tags: Tag[] }[] = [
  { pattern: "꧁X꧂", tags: ["hombre", "mujer", "clan"] },
  { pattern: "꧁༺X༻꧂", tags: ["hombre", "clan"] },
  { pattern: "★彡X彡★", tags: ["mujer", "aesthetic"] },
  { pattern: "乂X乂", tags: ["hombre", "gamer"] },
  { pattern: "☠X☠", tags: ["hombre", "gamer"] },
  { pattern: "⚡X⚡", tags: ["hombre", "gamer"] },
  { pattern: "♛X♛", tags: ["hombre", "mujer"] },
  { pattern: "✿X✿", tags: ["mujer", "aesthetic"] },
  { pattern: "♡X♡", tags: ["mujer", "aesthetic"] },
  { pattern: "☾X☽", tags: ["mujer", "aesthetic"] },
  { pattern: "✧X✧", tags: ["mujer", "aesthetic"] },
  { pattern: "『X』", tags: ["clan"] },
  { pattern: "【X】", tags: ["clan", "gamer"] },
  { pattern: "〖X〗", tags: ["clan"] },
  { pattern: "「X」", tags: ["mujer", "aesthetic", "clan"] },
  { pattern: "×X×", tags: ["hombre", "gamer"] },
  { pattern: "•X•", tags: ["hombre", "aesthetic"] },
  { pattern: "⚔X⚔", tags: ["hombre", "gamer"] },
  { pattern: "☬X☬", tags: ["hombre", "gamer", "clan"] },
  { pattern: "✪X✪", tags: ["hombre", "gamer"] },
  { pattern: "༒X༒", tags: ["hombre", "clan"] },
  { pattern: "꒰X꒱", tags: ["mujer", "aesthetic"] },
  { pattern: "❀X❀", tags: ["mujer", "aesthetic"] },
  { pattern: "⫷X⫸", tags: ["hombre", "gamer"] },
  { pattern: "╰X╯", tags: ["gamer"] },
  { pattern: "ılıXılı", tags: ["gamer"] },
  { pattern: "●▲X▲●", tags: ["hombre", "gamer"] },
  { pattern: "[웃X웃]", tags: ["hombre", "clan"] },
  { pattern: "ঔXঔ", tags: ["mujer", "aesthetic"] },
  { pattern: "⚜X⚜", tags: ["hombre", "clan"] },
];

export function applyTemplate(pattern: string, name: string): string {
  return pattern.replace("X", name);
}

export interface FfNameList {
  id: string;
  heading: string;
  intro?: string;
  /** Which generator filter's "Generar al azar" draws from this list. */
  tag?: Tag;
  names?: string[];
  /** Couple names, shown side by side. */
  pairs?: [string, string][];
}

export const ffNameLists: FfNameList[] = [
  {
    id: "hombre",
    heading: "Nombres para Free Fire para hombre",
    tag: "hombre",
    names: [
      "꧁Lobo꧂", "☠Reaper☠", "⚡Thor⚡", "乂Blade乂", "★Titan★", "꧁Rey꧂", "彡Zeus彡", "•Kraken•", "☬Ares☬", "༺Draco༻",
      "⚔Viking⚔", "✪Bravo✪", "ᴮᴼˢˢ乂Leo", "Mr•Shadow", "×Jaguar×", "⚡Rayo⚡", "☠Toxic☠", "꧁Fénix꧂", "•Sniper•", "乂Ninja乂",
      "✦Halcón✦", "★Puma★", "⚔Spartan⚔", "☬Kratos☬", "♛King♛", "꧁Ghost꧂", "×Venom×", "⚡Storm⚡", "彡Cobra彡", "•Ozzy•",
      "☠Bruto☠", "★Max★", "乂Kaiser乂", "✪Rambo✪", "⚔Sable⚔", "꧁Diablo꧂", "•Tigre•", "♛Sultan♛", "✗Rex✗", "☬Odin☬",
    ],
  },
  {
    id: "mujer",
    heading: "Nombres para Free Fire para mujer",
    tag: "mujer",
    names: [
      "꧁Luna꧂", "♡Bella♡", "✿Rosa✿", "★Queen★", "♛Reina♛", "❀Mia❀", "꧁Diosa꧂", "♡Kitty♡", "✧Estrella✧", "☾Selene☽",
      "✿Daisy✿", "♡Bunny♡", "❥Amor❥", "꧁Sakura꧂", "✦Nova✦", "♕Lady♕", "☁Cielo☁", "✿Flor✿", "♡Angel♡", "★Lola★",
      "❀Vale❀", "✧Mariposa✧", "♡Cherry♡", "꧁Hada꧂", "✿Lily✿", "☾Moon☽", "♡Sweet♡", "✧Gala✧", "❥Dulce❥", "♛Diva♛",
      "꧁Mística꧂", "✿Kira✿", "♡Nena♡", "★Venus★", "☾Noa☽", "✧Aurora✧", "❀Chiqui❀", "♡Pink♡", "♕Bae♕", "꧁Gatita꧂",
    ],
  },
  {
    id: "gamer",
    heading: "Nombres gamer y pro para Free Fire",
    tag: "gamer",
    names: [
      "ProKiller☠", "HS•Master", "꧁HeadShot꧂", "×1Shot×", "★MVP★", "GG•Ez", "Clutch★", "☠NoMercy☠", "AWM•King", "乂Rush乂",
      "⚡Speed⚡", "×Booyah×", "꧁Top1꧂", "Pro•Gamer", "ᴳᴼᴰ乂Aim", "Sniper★Pro", "☬Legend☬", "✪Elite✪", "×Rusher×", "Kill•Zone",
      "Noob•Slayer", "GOD☠", "☠Tryhard☠", "⚡Flash⚡", "Rank•Up", "꧁Heroico꧂", "×Gold×", "Lag•Free", "Grand•Master", "×Double×",
      "Crown★King", "×Ranked×", "×Smoke×", "Camper☠", "Br•Rank", "Squad•Wipe", "Free•Pro", "⚔Duelo⚔", "★Hunter★",
    ],
  },
  {
    id: "aesthetic",
    heading: "Nombres aesthetic para Free Fire",
    tag: "aesthetic",
    names: [
      "ᥫ᭡Luna", "☁Soft☁", "⋆Cloud⋆", "✧Dream✧", "꒰Mochi꒱", "❀Petal❀", "☾Night☽", "⋆Stars⋆", "✧Velvet✧", "꒰Honey꒱",
      "♡Peach♡", "✿Lilac✿", "⋆Mint⋆", "☁Sky☁", "✧Glow✧", "꒰Bubble꒱", "❀Bloom❀", "☾Dusk☽", "⋆Vibes⋆", "♡Latte♡",
      "✧Halo✧", "꒰Koi꒱", "✿Lotus✿", "⋆Ocean⋆", "☁Pastel☁", "✧Aura✧", "꒰Kumo꒱", "❀Haru❀", "☾Sueño☽", "⋆Calma⋆",
      "♡Lunar♡", "✧Neon✧", "꒰Panda꒱", "✿Iris✿", "⋆Mar⋆",
    ],
  },
  {
    id: "cortos",
    heading: "Nombres cortos para Free Fire",
    intro: "Son ideales si quieres añadir más símbolos sin pasarte del límite.",
    names: [
      "꧁Zy꧂", "★Kai★", "×Ix×", "☠Ko☠", "⚡Zu⚡", "乂Ox乂", "♛Ra♛", "✦Io✦", "☬Ax☬", "•Vex•",
      "×Neo×", "★Ace★", "⚔Kat⚔", "♡Ivy♡", "✿Eli✿", "☠Doc☠", "乂Jin乂", "⚡Ryu⚡", "✪Zed✪", "★Ozo★",
      "•Lux•", "×Fox×", "☾Ash☽", "✦Sol✦", "♛Rex♛", "⚔Kyo⚔", "乂Hex乂", "☠Odin☠", "✿Bea✿", "★Jax★",
      "×Taz×", "♡Mel♡", "⚡Volt⚡", "☬Kan☬", "•Yuu•", "✦Ari✦", "★Gus★", "×Nyx×", "☠Ink☠", "乂Rai乂",
    ],
  },
  {
    id: "raros",
    heading: "Nombres para Free Fire con símbolos raros",
    names: [
      "꧁༺Rey༻꧂", "★彡Lobo彡★", "༒Ares༒", "꧁ঔৣRose꧂", "ılıTitanılı", "●▲Ghost▲●", "[웃Leo웃]", "☬Kai☬", "✰Nova✰", "⫷Blaze⫸",
      "『Shin』", "【Zero】", "〖Kira〗", "╰Ninja╯", "«Draco»", "⎝Yami⎠", "ঔAngelঔ", "•´¯`•Rio", "✞Holy✞", "♆Neptuno♆",
      "⟁Atlas⟁", "⚜Royal⚜", "☯Zen☯", "♤Ace♤", "⧼Void⧽", "ᴮᴿKratos", "꧁☆Sora☆꧂", "★彡Mia彡★", "『Akuma』", "【Rage】",
      "〘Toxic〙", "╾Rex╼", "⚚Hermes⚚", "⌖Aim⌖", "☾⋆Moon⋆☽",
    ],
  },
  {
    id: "insanos",
    heading: "Nombres insanos y chidos para Free Fire",
    names: [
      "☠Insano☠", "乂Chido乂", "×Bestia×", "꧁Demonio꧂", "☠Locura☠", "⚡Furia⚡", "乂Salvaje乂", "★Brutal★", "☠Matón☠", "×Letal×",
      "꧁Infierno꧂", "⚔Caos⚔", "☬Psycho☬", "☠Asesino☠", "乂Trueno乂", "★Pesadilla★", "☠Muerte☠", "⚡Fuego⚡", "×Monstruo×", "꧁Vampiro꧂",
      "乂Rebelde乂", "☠Zombie☠", "★Fiera★", "⚔Guerrero⚔", "×Mafia×", "꧁Maldito꧂", "☬Bandido☬", "乂Loco乂", "☠Veneno☠", "⚡Ciclón⚡",
      "★Patrón★", "×Jefe×", "꧁Tóxico꧂", "☠Oscuro☠", "⚡Huracán⚡",
    ],
  },
  {
    id: "parejas",
    heading: "Nombres para parejas en Free Fire",
    intro: "Usa el mismo estilo de símbolo para que se note que van juntos.",
    pairs: [
      ["♡Rey♡", "♡Reina♡"], ["☀Sol☀", "☾Luna☽"], ["꧁Romeo꧂", "꧁Julieta꧂"], ["★Bonnie★", "★Clyde★"], ["✿Él✿", "✿Ella✿"],
      ["♛MyKing♛", "♛MyQueen♛"], ["❥Mío❥", "❥Mía❥"], ["✦Fuego✦", "✦Hielo✦"], ["♡Bebé♡", "♡Bebito♡"], ["☠Caos☠", "☠Orden☠"],
      ["★Yin★", "★Yang★"], ["♡MrLove♡", "♡MrsLove♡"], ["✧Ángel✧", "✧Demonio✧"], ["꧁Corazón꧂", "꧁Latido꧂"], ["乂Lobo乂", "乂Loba乂"],
      ["⚔Héroe⚔", "⚔Heroína⚔"], ["☾Noche☽", "☀Día☀"], ["♡Siempre♡", "♡Contigo♡"], ["❀Miel❀", "❀Canela❀"], ["★Player1★", "★Player2★"],
      ["✿Tuyo✿", "✿Tuya✿"],
    ],
  },
  {
    id: "clan",
    heading: "Nombres para clan o gremio de Free Fire",
    tag: "clan",
    names: [
      "『LosLobos』", "꧁Legión꧂", "☠Escuadrón☠", "⚔Imperio⚔", "乂Élite乂", "★Titanes★", "×Alpha×", "꧁Dragones꧂", "☬Spartans☬", "『Reyes』",
      "【Fénix】", "⚡Tormenta⚡", "✪Leyendas✪", "乂Vikingos乂", "꧁Ángeles꧂", "☠Calaveras☠", "⚜Dinastía⚜", "×Cobras×", "★Halcones★", "『Sombras』",
      "【Guardianes】", "⚔Clan•MX⚔", "乂Aztecas乂", "꧁Inmortales꧂", "☬Templarios☬", "★Panteras★", "×Ninjas×", "『Furia』", "【Alfa】", "⚡Rayos⚡",
      "✪Gladiador✪", "乂Jaguares乂", "꧁Olimpo꧂", "☠Piratas☠", "⚜Corona⚜",
    ],
  },
  {
    id: "graciosos",
    heading: "Nombres graciosos para Free Fire",
    names: [
      "Noob•Pro", "SoyManco", "Lag•Total", "MeMuero☠", "Camper★", "ElTaquero", "Pan•Dulce", "NoMeMates", "Pollo★Loco", "ElPrimo★",
      "Wifi•Malo", "TíoRico", "MaestroBot", "SoyBot☠", "Patata★", "Tortilla★", "ElPerrito", "Sin•Balas", "ElChamaco", "PerdíTodo",
      "Gallina☠", "ElNoob★", "Corre•Bot", "BurritoFF", "Sin•Ping", "Michi•Pro", "Cero•Kills", "NoCamper★", "Sin•Wifi", "Tamal★Pro",
    ],
  },
  {
    id: "japoneses",
    heading: "Nombres japoneses para Free Fire",
    names: [
      "『Akira』", "【Ronin】", "乂Hiro乂", "꧁Kenji꧂", "「Shinobi」", "『Yuki』", "乂Daichi乂", "꧁Hana꧂", "『Kaito』", "【Ryuu】",
      "乂Takeshi乂", "「Kenzo」", "『Oni』", "【Samurai】", "乂Ichigo乂", "꧁Kami꧂", "『Sora』", "「Haku」", "【Ren】", "乂Yami乂",
      "『Kuro』", "꧁Taiga꧂", "「Senpai」", "【Kitsune】", "乂Tora乂", "『Hikari』", "꧁Raiden꧂", "「Kaze」", "【Jun】", "乂Satoshi乂",
    ],
  },
  {
    id: "espanol",
    heading: "Nombres en español para Free Fire",
    names: [
      "꧁Sombra꧂", "★Leyenda★", "乂Relámpago乂", "☠Calavera☠", "⚔Espada⚔", "꧁Destino꧂", "×Halcón×", "★Valiente★", "乂Volcán乂", "☬Guardián☬",
      "꧁Eterno꧂", "✪Campeón✪", "☾Lunático☽", "⚡Centella⚡", "×Cazador×", "★Invicto★", "꧁Milagro꧂", "乂Fantasma乂", "☠Pirata☠", "⚔Conquista⚔",
      "✦Brillante✦", "×Lobito×", "꧁Pantera꧂", "★Bravío★", "乂Tornado乂", "☬Santo☬", "꧁Libre꧂", "✪Héroe✪", "☾Silencio☽", "⚡Chispa⚡",
    ],
  },
];

/** Every ready-made name on the page (pairs count as two names). */
export function allFfNames(): string[] {
  return ffNameLists.flatMap((l) => [...(l.names ?? []), ...(l.pairs ?? []).flat()]);
}

/** Names the "Generar al azar" button draws from for a filter. */
export function namesForFilter(filter: FfFilter): string[] {
  if (filter === "todos") return allFfNames();
  return ffNameLists.filter((l) => l.tag === filter).flatMap((l) => l.names ?? []);
}

/** Symbols section: copyable groups. */
export const ffSymbolGroups: { label: string; text: string }[] = [
  { label: "Marcos y estrellas", text: "꧁ ꧂ ༺ ༻ ★ ☆ 彡 乂 ☠ ⚡ ♛ ♕ ✿ ❀ ♡ ❥ ☾ ☽ ✧ ✦ ⋆" },
  { label: "Corchetes y adornos", text: "『 』 【 】 〖 〗 「 」 × • ⚔ ☬ ✪ ༒ ꒰ ꒱ ⫷ ⫸" },
  { label: "Símbolos raros", text: "ılı ● ▲ 웃 ঔ ⚜ ☯ ✞ ♆ ⟁ ⧼ ⧽ ᴮᴼˢˢ ᴳᴼᴰ" },
  { label: "Espacio invisible (U+3164)", text: INVISIBLE_SPACE },
];
