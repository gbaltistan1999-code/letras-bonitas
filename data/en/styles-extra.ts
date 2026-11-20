import type { StylePageContent } from "@/types/content";
import type { ExtraStylePageKey } from "@/lib/routes";

/** Pages added in the second keyword batch (merged into ./styles.ts). */
const pages: Record<ExtraStylePageKey, StylePageContent> = {
  bold: {
    metaTitle: "Bold Text Generator: Copy and Paste 𝐁𝐨𝐥𝐝 Text | LetrasHub",
    metaDescription:
      "Make bold text (𝐛𝐨𝐥𝐝, 𝗯𝗼𝗹𝗱 and 𝙗𝙤𝙡𝙙) you can paste where there's no bold button: bios, display names, LinkedIn posts and comments.",
    h1: "Bold text generator",
    label: "Bold text",
    intro:
      "Make a name, heading or key phrase stand out with bold letters that stay bold when you copy them, even in apps with no formatting button.",
    sample: "Limited offer",
    featured: ["bold", "sansBold", "boldItalic", "sansBoldItalic", "boldSerifFrame", "boldAesthetic", "boldMinimal", "boldSparkle"],
    sections: [
      {
        heading: "Serif bold, sans-serif bold and bold italic",
        blocks: [
          {
            type: "p",
            text: "Unicode includes several bold alphabets designed for mathematical notation: serif bold (𝐀𝐛𝐜), sans-serif bold (𝗔𝗯𝗰), and slanted versions of both (𝑨𝒃𝒄, 𝘼𝙗𝙘). Serif bold looks like a newspaper headline; sans-serif bold looks more modern and reads better on small screens. Both include bold digits (𝟏𝟐𝟑).",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Limited offer today", styles: ["bold", "sansBold", "boldItalic", "sansBoldItalic"] }],
      },
      {
        heading: "Where Unicode bold is useful",
        blocks: [
          {
            type: "ul",
            items: [
              "Bios and display names on [Instagram](instagram) and [TikTok](tiktok), which have no formatting.",
              "LinkedIn posts, where the post editor has no bold button.",
              "Comments, reviews and product descriptions, to highlight a word.",
              "A heading line inside your bio, with the rest in plain text.",
            ],
          },
          {
            type: "note",
            text: "On WhatsApp and Discord, use their built-in formatting instead (*text* on WhatsApp, **text** on Discord). It's more accessible and works with in-app search. See the [WhatsApp](whatsapp) and [Discord](discord) guides.",
          },
        ],
      },
      {
        heading: "How to copy and paste bold text",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your text into the generator.",
              "Pick serif or sans-serif bold and tap Copy.",
              "Paste it into the target field and check it before posting.",
            ],
          },
        ],
      },
      {
        heading: "Use it sparingly",
        blocks: [
          {
            type: "p",
            text: "A whole paragraph of Unicode bold is tiring to read, and screen readers may read it letter by letter. Search on many platforms also won't match “𝐨𝐟𝐟𝐞𝐫” to “offer”. Bold two or three key words and keep the rest plain. For a softer touch, try [italic text](italic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why doesn't bold text look the same on every phone?",
        a: "Each system draws these characters with its own font. Bold is one of the most compatible styles, but weight and shape can vary slightly.",
      },
      {
        q: "Is this real bold formatting?",
        a: "No. It's a set of Unicode characters that look bold, which is why it survives copy and paste into apps without formatting.",
      },
      {
        q: "Can I use bold text in my Instagram username?",
        a: "No. Usernames only accept plain letters, numbers, periods and underscores. Use bold in your display name or bio.",
      },
    ],
    related: ["italic", "cursive", "instagram", "whatsapp"],
  },

  italic: {
    metaTitle: "Italic Text Generator: Copy and Paste 𝐼𝑡𝑎𝑙𝑖𝑐 Text | LetrasHub",
    metaDescription:
      "Italic text generator: 𝑖𝑡𝑎𝑙𝑖𝑐 serif, 𝘪𝘵𝘢𝘭𝘪𝘤 sans and 𝒃𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄. Copy slanted text for bios, quotes, titles and messages.",
    h1: "Italic text generator",
    label: "Italic text",
    intro:
      "Italics slant your letters to add emphasis without shouting. Type below and choose serif italic, sans-serif italic or bold italic.",
    sample: "A special quote",
    featured: ["italic", "sansItalic", "boldItalic", "sansBoldItalic", "italicHearts", "italicBow", "italicMix", "italicStarWave"],
    sections: [
      {
        heading: "What Unicode italic is",
        blocks: [
          {
            type: "p",
            text: "In typography, italics mark quotes, titles of works, foreign words or gentle emphasis. Unicode has italic alphabets in its mathematical block: serif italic (𝐴𝑏𝑐), sans-serif italic (𝘈𝘣𝘤), and bold versions of each (𝑨𝒃𝒄, 𝘼𝙗𝙘).",
          },
          {
            type: "note",
            text: "Fun fact: the serif italic “h” isn't in the mathematical block, because it already existed as ℎ (the Planck constant). The generator uses that character automatically.",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "A special quote", styles: ["italic", "sansItalic", "boldItalic", "italicHearts"] }],
      },
      {
        heading: "Italic vs. cursive vs. bold",
        blocks: [
          {
            type: "ul",
            items: [
              "Italic: elegant and understated, great for quotes or a second bio line.",
              "[Cursive](cursive): imitates handwriting and is more decorative.",
              "[Bold](bold): for what must be seen first, like a heading or an offer.",
            ],
          },
        ],
      },
      {
        heading: "How to use it",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your phrase into the generator.",
              "Copy the italic style you prefer.",
              "Paste it into your bio, post or message. On WhatsApp you can also type _text_ for native italics.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Serif italic has no digits of its own, so numbers stay plain. As with any Unicode styling, avoid it for long text or for information people need to search for or copy.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is italic the same as cursive?",
        a: "Not quite. Italic just slants the letters; cursive imitates joined handwriting with decorated capitals.",
      },
      {
        q: "Why does the “h” look slightly different?",
        a: "It's the ℎ character from the Letterlike Symbols block. Unicode reuses it for mathematical italic, and your device may draw it with a different font.",
      },
      {
        q: "Does italic text work on Instagram and TikTok?",
        a: "Yes, in display names, bios, captions and comments. Not in usernames (@handles).",
      },
    ],
    related: ["bold", "cursive", "small", "instagram"],
  },

  bubble: {
    metaTitle: "Bubble Text Generator: ⓑⓤⓑⓑⓛⓔ and 🅑🅤🅑🅑🅛🅔 Letters | LetrasHub",
    metaDescription:
      "Bubble text generator: white ⓑⓤⓑⓑⓛⓔ letters, black 🅑🅤🅑🅑🅛🅔 letters and circled numbers ①②③. Copy and paste into bios, nicknames and chats.",
    h1: "Bubble text generator",
    label: "Bubble text",
    intro:
      "Put every letter inside a circle for a round, playful look. Choose white bubbles, black bubbles or bubble styles with extra symbols.",
    sample: "Hello friends",
    featured: ["circled", "negativeCircled", "bubbleMix", "bubbleDarkAesthetic", "bubbleDarkFrame", "bubbleDots", "parenthesized", "kaoLove"],
    initialCategory: "enclosed",
    sections: [
      {
        heading: "Where bubble letters come from",
        blocks: [
          {
            type: "p",
            text: "White bubble letters (ⓐⓑⓒ, ⒶⒷⒸ) are in Unicode's Enclosed Alphanumerics block, which also has circled numbers from ① to ⑳. Black bubble letters (🅐🅑🅒) are in the supplementary block and only exist as capitals, so the generator shows them that way even if you type lowercase.",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Hello friends 123", styles: ["circled", "negativeCircled", "bubbleMix", "parenthesized"] }],
      },
      {
        heading: "Ideas",
        blocks: [
          {
            type: "ul",
            items: [
              "Initials or one short word in your bio: ⓛⓞⓥⓔ, ⓢⓣⓨⓛⓔ.",
              "Numbered lists with ① ② ③ in posts and descriptions.",
              "Round, recognizable gamertags; more ideas in [nickname fonts](nick).",
              "Sweet messages on [WhatsApp](whatsapp).",
            ],
          },
        ],
      },
      {
        heading: "How to paste bubble text",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your text and pick white or black bubbles.",
              "Tap Copy.",
              "Paste and check: black bubbles may not display on older systems.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Accents sit on top of the circle as combining marks and may look slightly off. Bubble letters take more space than normal ones, so in length-limited nicknames use them for one word only. Prefer boxes? See [square text](square).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why are black bubble letters always capitals?",
        a: "Unicode only encodes uppercase letters inside black circles. There's no lowercase version.",
      },
      {
        q: "Are there bubble numbers?",
        a: "Yes: ⓪ and ① to ⑳ in white circles, and ❶ to ❾ in black circles.",
      },
      {
        q: "Does bubble text work in games?",
        a: "Often, but every game decides which characters it accepts. Check the preview before confirming a name change.",
      },
    ],
    related: ["square", "aesthetic", "symbols", "tiktok"],
  },

  square: {
    metaTitle: "Square Text Generator: 🆂🆀🆄🅰🆁🅴 and 🅂🅀🅄🄰🅁🄴 Letters | LetrasHub",
    metaDescription:
      "Square text generator: white 🅂🅀🅄🄰🅁🄴 boxes, black 🆂🆀🆄🅰🆁🅴 boxes, boxed letters and blocks. Copy and paste for gamertags, headings and bios.",
    h1: "Square text generator",
    label: "Square text",
    intro:
      "Letters inside white or black squares, with a signboard or keyboard look. Type below and choose the box style you like.",
    sample: "GAME OVER",
    featured: ["squared", "negativeSquared", "boxed", "squareAesthetic", "blocks", "boldBlocks", "thickBox", "bracketEach", "layerBox", "crazyBoxes"],
    sections: [
      {
        heading: "Kinds of square text",
        blocks: [
          {
            type: "ul",
            items: [
              "White squares (🄰🄱🄲): capitals only, from the Enclosed Alphanumeric Supplement block.",
              "Black squares (🅰🅱🅲): also capitals only, with strong contrast.",
              "Boxed letters (a⃞b⃞c⃞): your original letter with a combining square around it, so lowercase is kept.",
              "Brackets around each letter (【a】【b】) and decorative blocks for headings.",
            ],
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Game Over", styles: ["squared", "negativeSquared", "boxed", "bracketEach"] }],
      },
      {
        heading: "Heads up: some letters turn into emoji",
        blocks: [
          {
            type: "p",
            text: "Four black squares are also emoji: 🅰 🅱 🅾 🅿 (the blood-type and parking symbols). On many phones those four letters appear in color and larger than the rest. That's not a generator bug; it's how Unicode and operating systems treat those characters.",
          },
        ],
      },
      {
        heading: "Where square text works well",
        blocks: [
          {
            type: "ul",
            items: [
              "Short capitalized words: NEW, LIVE, VIP, PRO.",
              "Clan names and eye-catching gamertags; more in [gamer fonts](gamer).",
              "Headings in [Discord](discord) servers and channel descriptions.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "White and black squares have no lowercase or accented letters, and numbers stay plain. Boxed letters depend heavily on the font; on some devices the box is misaligned. For a round look, try [bubble text](bubble).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why do 🅰 🅱 🅾 🅿 show in color?",
        a: "Those four characters are also emoji, so your system draws them with the emoji design instead of a plain black square.",
      },
      {
        q: "Is there lowercase square text?",
        a: "Not in the white or black squares. The “boxed letters” style keeps lowercase because it adds the box over your original letter.",
      },
      {
        q: "Can I use square text in my Discord name?",
        a: "In your display name and server nickname, yes. In your unique username, no.",
      },
    ],
    related: ["bubble", "gamer", "symbols", "discord"],
  },

  underline: {
    metaTitle: "Underline Text Generator: Copy and Paste U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Text | LetrasHub",
    metaDescription:
      "Underline text generator: u̲n̲d̲e̲r̲l̲i̲n̲e̲, double underline, wavy and dotted styles. Copy underlined text for bios, headings and messages.",
    h1: "Underline text generator",
    label: "Underline text",
    intro:
      "Underline your text with a single, double, wavy or dotted line that survives copy and paste, even where there's no underline button.",
    sample: "Important",
    featured: ["underline", "doubleUnderline", "dotBelow", "tildeBelow", "doubleMacronBelow", "seagullBelow", "bridgeBelow", "arrowBelow", "arrowsBelow", "overline"],
    sections: [
      {
        heading: "How Unicode underlining works",
        blocks: [
          {
            type: "p",
            text: "Unicode has no underlined letters as such. The effect comes from a combining character added after each letter and drawn beneath it: U+0332 for a single line, U+0333 for a double line, and others for dots, waves or arrows. That's why it works with accents, numbers and almost any alphabet.",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Very important", styles: ["underline", "doubleUnderline", "dotBelow", "tildeBelow"] }],
      },
      {
        heading: "What to use it for",
        blocks: [
          {
            type: "ul",
            items: [
              "Highlighting the key word in a bio or heading.",
              "Signatures and headers in messages.",
              "Decorating a nickname with a double or dotted underline.",
            ],
          },
          {
            type: "note",
            text: "On Discord you can underline by typing __text__, which is more accessible. LetrasHub underlines are for names, bios and apps without formatting.",
          },
        ],
      },
      {
        heading: "Underline vs. strikethrough",
        blocks: [
          {
            type: "p",
            text: "Want a line through the text instead? Head to [strikethrough text](strike). Both use the same combining-character technique, so they share the same strengths and limitations.",
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Spaces aren't underlined, so text stays easy to read and copy; that's why the line breaks between words. Depending on the font, the line may have small gaps or sit slightly low. Text also doubles in character count, which matters in fields with a length limit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why does the line stop between words?",
        a: "The generator doesn't add the line to spaces, so text stays readable and spaces don't turn into odd symbols.",
      },
      {
        q: "Does underline text work on Instagram?",
        a: "Yes, in your name, bio and comments. How it looks depends on each viewer's phone font.",
      },
      {
        q: "Does underlined text use more characters?",
        a: "Yes, each letter gets an extra character for the line, so it roughly doubles in length.",
      },
    ],
    related: ["strike", "bold", "whatsapp", "discord"],
  },

  upsideDown: {
    metaTitle: "Upside Down Text Generator: ʇxǝʇ uʍop ǝpısdn | LetrasHub",
    metaDescription:
      "Flip text upside down: ʇxǝʇ uʍop ǝpısdn, mirror text and reversed text. Copy and paste for pranks, nicknames and messages.",
    h1: "Upside down text generator",
    label: "Upside down text",
    intro:
      "Flip your text upside down, mirror it, or simply reverse it. Perfect for pranks and messages that make people turn their phone around.",
    sample: "Hello world",
    featured: ["upsideDown", "mirrored", "reversed", "kaoFlip"],
    initialCategory: "flip",
    sections: [
      {
        heading: "Three ways to flip text",
        blocks: [
          {
            type: "ul",
            items: [
              "Upside down (plɹoʍ ollǝH): each letter becomes a rotated lookalike and the order is reversed, so it reads correctly when you turn the phone.",
              "Mirror: letters are reflected as in a mirror, also in reverse order.",
              "Reversed: only the order changes (dlrow olleH), not the letter shapes.",
            ],
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Hello world", styles: ["upsideDown", "mirrored", "reversed", "kaoFlip"] }],
      },
      {
        heading: "How it works without special fonts",
        blocks: [
          {
            type: "p",
            text: "Unicode has no “upside-down” alphabet. The effect uses characters from other systems that happen to look like rotated letters: many come from the International Phonetic Alphabet (ɐ, ǝ, ɹ, ʇ), others from Greek or math symbols (∀, ⅄). That's why some capitals are approximations.",
          },
        ],
      },
      {
        heading: "Fun ideas",
        blocks: [
          {
            type: "ul",
            items: [
              "Prank messages on [WhatsApp](whatsapp): “did you drop your phone?”",
              "The classic table flip: (╯°□°)╯︵ ǝlqɐʇ. More faces in [kaomoji](kaomoji).",
              "Attention-grabbing comments on [TikTok](tiktok).",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Upside-down text is hard to read and screen readers can't interpret it. Keep it to short phrases and never use it for important information. For other unusual alphabets, see [weird text](weird).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I read upside-down text?",
        a: "Turn your phone 180 degrees. Because the letter order is reversed too, it then reads left to right.",
      },
      {
        q: "Why aren't some letters perfectly flipped?",
        a: "Unicode doesn't have rotated versions of every letter, so the closest available characters are used.",
      },
      {
        q: "Can I flip text back?",
        a: "Paste the flipped text into the generator and choose upside down again; most letters will flip back, though a few approximations may not.",
      },
    ],
    related: ["weird", "kaomoji", "whatsapp", "tiktok"],
  },

  weird: {
    metaTitle: "Weird Text Generator: 卂丂ㄒ丨卂, ₥Ø₦ɆɎ, ᚱᚢᚾᛖᛋ & Glitch | LetrasHub",
    metaDescription:
      "Weird text generator: Asian-style 卂丂ㄒ丨卂, currency ₳₿, runes ᚱᚢᚾᛖᛋ, faux Cyrillic ДФЯ, glitch text and more. Great for unique gamertags.",
    h1: "Weird text generator",
    label: "Weird text",
    intro:
      "Want something nobody else has? These alphabets swap your letters for lookalike characters from other scripts: Asian-style, runes, currency, faux Cyrillic, glitch and more.",
    sample: "Weird text",
    featured: ["asian", "currency", "runic", "fauxCyrillic", "greekish", "hooked", "syllabic", "cherokee", "barred", "thai", "fairy", "glitch", "mixed"],
    initialCategory: "rare",
    sections: [
      {
        heading: "What weird text is",
        blocks: [
          {
            type: "p",
            text: "Weird text is letters in disguise: each Latin letter is replaced by a character from another writing system that resembles it. Asian style uses Chinese and Japanese characters (卂 for A, 乃 for B), currency style uses symbols like ₳ and ₦, and runic uses ancient Germanic runes (ᚱ, ᚢ, ᚾ).",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Weird text", styles: ["asian", "currency", "runic", "fauxCyrillic", "glitch"] }],
      },
      {
        heading: "What people use it for",
        blocks: [
          {
            type: "ul",
            items: [
              "Unique gamertags; tips in [nickname fonts](nick) and [Free Fire fonts](freefire).",
              "Profile names that stand out.",
              "Mysterious or retro headings, alongside [gothic text](gothic).",
            ],
          },
        ],
      },
      {
        heading: "Use it responsibly",
        blocks: [
          {
            type: "p",
            text: "Because these characters imitate others, some security systems watch for them: lookalike characters are sometimes used to fake names or links. Never use them to impersonate a person, brand or official account. Search engines and screen readers also can't read them as normal text.",
          },
        ],
      },
      {
        heading: "Compatibility",
        blocks: [
          {
            type: "p",
            text: "Asian and currency styles usually display well on modern phones. Runes, Cherokee or Thai styles depend on the device having fonts for those scripts; if you see boxes, try another style. For extra decoration, combine with [symbol fonts](symbols).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is weird text another language?",
        a: "It borrows characters from other scripts, but it doesn't form words in those languages. They're chosen only because they look like Latin letters.",
      },
      {
        q: "Why do some games reject weird text?",
        a: "Many games restrict the characters allowed in names. Weird styles are the most likely to be rejected.",
      },
      {
        q: "Which weird style is most compatible?",
        a: "Usually currency and Asian styles, because they use characters that are common on current systems.",
      },
    ],
    related: ["symbols", "gothic", "upsideDown", "nick"],
  },

  symbols: {
    metaTitle: "Symbol Fonts: Text with Symbols to Copy and Paste ꧁★彡 | LetrasHub",
    metaDescription:
      "Symbol fonts for nicknames and bios: ꧁꧂, ★彡, 亗, 『』, ♡ and hundreds of decorations. Generate decorated text or copy individual symbols.",
    h1: "Symbol fonts: text with symbols",
    label: "Symbol fonts",
    intro:
      "Decorate your name or phrase with frames, stars, hearts and ornaments. Generate the whole thing or copy individual symbols to build your own.",
    sample: "My name",
    featured: ["javanese", "starWaves", "kanjiFrame", "lenticular", "cornerBrackets", "wings", "hearts", "floralBorder", "crownBorder", "diamondsBetween", "arrows", "heartLine"],
    initialCategory: "decorated",
    sections: [
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "My name", styles: ["javanese", "starWaves", "kanjiFrame", "cornerBrackets", "hearts"] }],
      },
      {
        heading: "Symbols to copy",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Frames", text: "꧁ ꧂ 『 』 【 】 「 」 ﴾ ﴿ ⟦ ⟧" },
              { label: "Stars", text: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ 彡" },
              { label: "Hearts", text: "♡ ♥ ❤ ❥ ❣ ღ" },
              { label: "Flowers", text: "✿ ❀ ❁ ✾ ❃ ❋ ✽" },
              { label: "For gamertags", text: "亗 乂 ツ ×͜× ☯ ♛ ♔ ⚔ ☠ ⚡ 么" },
              { label: "Arrows and lines", text: "➳ ➵ ➶ ➸ ➹ ➺ ⇝ ⇜ ━ ═ ─ ~ ≈" },
            ],
          },
        ],
      },
      {
        heading: "Where these symbols come from",
        blocks: [
          {
            type: "p",
            text: "Unicode groups symbols into blocks: Dingbats (✿, ❀, ➳) and Miscellaneous Symbols (★, ☯, ♛) come from old decorative fonts; 亗 and 乂 are Chinese characters; ꧁ and ꧂ are punctuation marks from the Javanese script; and 『』 and 【】 are Japanese and Chinese quotation marks and brackets.",
          },
        ],
      },
      {
        heading: "How to combine them",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your name in the generator and pick a symbol style, or use the Decoration picker.",
              "For something custom, copy individual symbols from the list above.",
              "Paste everything into a note, adjust it, and copy the final result.",
            ],
          },
          {
            type: "note",
            text: "Less is more: one frame or a couple of symbols is enough. Too many decorations make text unreadable and raise the chance a game rejects it.",
          },
        ],
      },
      {
        heading: "Compatibility",
        blocks: [
          {
            type: "p",
            text: "Nearly all these symbols display on current phones, but some (like ꧁꧂) need fonts that older systems may lack. For gamertag ideas, see [nickname fonts](nick) and [Free Fire fonts](freefire); for soft combinations, [aesthetic fonts](aesthetic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I put symbols around my name?",
        a: "Type your name in the generator and pick a framed style, or use the Decoration picker to wrap any style in the symbol you want.",
      },
      {
        q: "What does 亗 mean?",
        a: "It's a rare Chinese character. Gamers use it for its decorative shape rather than its meaning.",
      },
      {
        q: "Why do some symbols show as boxes?",
        a: "Your device has no font containing that symbol. Try another one or update your system.",
      },
    ],
    related: ["weird", "nick", "freefire", "aesthetic"],
  },

  aesthetic: {
    metaTitle: "Aesthetic Fonts: Cute Text to Copy and Paste ✧˖° | LetrasHub",
    metaDescription:
      "Aesthetic fonts and cute text: soft cursive, ✨ sparkles, 🌸 flowers, 🎀 bows and little stars ☆. Copy pretty text for your Instagram or TikTok bio.",
    h1: "Aesthetic fonts and cute text",
    label: "Aesthetic fonts",
    intro:
      "Soft, cute letters with sparkles, flowers, bows and little stars, made for a carefully styled bio. Type your text and pick your vibe.",
    sample: "good morning",
    featured: ["scriptStarsAesthetic", "scriptMoon", "scriptCloud", "boldAesthetic", "squareAesthetic", "bubbleDarkAesthetic", "cuteSakura", "cuteBow", "cuteButterfly", "smallMoon", "elegantStars", "tenderStars"],
    sections: [
      {
        heading: "What “aesthetic” means",
        blocks: [
          {
            type: "p",
            text: "On social media, “aesthetic” describes a curated, consistent visual style: pastel colors, delicate type, sparkles and small decorations. In text, that translates to soft cursive, small letters, cute emoji and pretty dividers.",
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "good morning", styles: ["scriptStarsAesthetic", "cuteSakura", "cuteBow", "smallMoon"] }],
      },
      {
        heading: "Aesthetic decorations to copy",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Dividers", text: "˚ ༘ ♡ ⋆｡˚ ✧˖°" },
              { label: "Sparkles", text: "✨ ⋆ ˚｡⋆ ✧ ✦ ⊹" },
              { label: "Flowers and bows", text: "🌸 🌷 🎀 🦋 🍓 🧸" },
              { label: "Bio line", text: "⋆｡‧˚ʚ♡ɞ˚‧｡⋆" },
            ],
          },
        ],
      },
      {
        heading: "How to build an aesthetic bio",
        blocks: [
          {
            type: "ol",
            items: [
              "Pick one main style (soft cursive or small caps) for your name or phrase.",
              "Add one or two decorations from the list. Don't overdo it.",
              "Keep important things, like your city or a link, in plain text.",
              "Paste into your [Instagram](instagram) or [TikTok](tiktok) bio and check how it looks.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Emoji and decorations use up space in length-limited bios, and some delicate symbols (˚, ⊹) may not display on older phones. For more soft styles, see [cursive text](cursive) or [bubble text](bubble); for cute faces, [kaomoji](kaomoji).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Which fonts look the most aesthetic?",
        a: "Thin cursive, small caps and combinations with sparkles or flowers are the most popular for a soft look.",
      },
      {
        q: "Can I use aesthetic fonts in my username?",
        a: "Not in your Instagram or TikTok @handle. Use them in your display name, bio, captions and comments.",
      },
      {
        q: "Do emoji count as several characters?",
        a: "On many platforms, yes: some emoji count as two or more characters toward the bio limit.",
      },
    ],
    related: ["cursive", "kaomoji", "instagram", "bubble"],
  },

  gamer: {
    metaTitle: "Gamer Fonts: Cool Gaming Text to Copy ▄︻デ 𝔊𝔞𝔪𝔢𝔯 ☠ | LetrasHub",
    metaDescription:
      "Gamer fonts for your gamertag, clan or channel: ▄︻デ, ⚔, ☠, ♛, ᴾᴿᴼ and gothic styles. Copy and paste into games, Discord, Twitch or YouTube.",
    h1: "Gamer fonts for copy and paste",
    label: "Gamer fonts",
    intro:
      "Give your player name a competitive look: rifles, swords, skulls, crowns and gothic letters. Type your gamertag and pick your frame.",
    sample: "Sniper",
    featured: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro", "gameLightning", "gameRoyal", "gameProX", "gameSport", "gothicSkull", "javanese", "kanjiFrame"],
    initialCategory: "gaming",
    sections: [
      {
        heading: "Gamer font examples",
        blocks: [{ type: "examples", text: "Sniper", styles: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro"] }],
      },
      {
        heading: "Where to use gamer fonts",
        blocks: [
          {
            type: "ul",
            items: [
              "Your in-game name (if allowed): tips in [nickname fonts](nick) and [Free Fire fonts](freefire).",
              "Display names and server nicknames on [Discord](discord).",
              "Stream and video titles, channel descriptions and panels.",
              "Clan names: everyone uses the same symbol plus their own name.",
            ],
          },
        ],
      },
      {
        heading: "Gamertag ideas",
        blocks: [
          {
            type: "copy",
            items: ["▄︻デ Sniper ══━一", "⚔ 𝕷𝖊𝖌𝖊𝖓𝖉 ⚔", "☠ ʙᴀʀᴏɴ ☠", "♛ 𝗞𝗜𝗡𝗚 ♛", "ᴾᴿᴼ ɢᴀᴍᴇʀ ✓"],
          },
          {
            type: "note",
            text: "These are just for inspiration. Swap in your own name using the generator, and don't copy the exact tag of a well-known player or creator.",
          },
        ],
      },
      {
        heading: "Before you change your name",
        blocks: [
          {
            type: "ol",
            items: [
              "Check the game accepts symbols: many only allow basic letters and numbers.",
              "Make sure the name is readable and searchable so friends can find you.",
              "If renaming costs money or in-game currency, test it somewhere else first.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "The rifle ▄︻デ and lines ══━ use many characters, so they don't always fit in a name. Usernames on many streaming platforms only allow basic characters, so use styled text in titles and panels there. For a medieval look, see [gothic text](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the best gamer symbol?",
        a: "It depends on your vibe: ⚔ for epic, ☠ for aggressive, ♛ for royalty. Pick one that also displays well on your friends' phones.",
      },
      {
        q: "Why won't the game accept my gamertag?",
        a: "The game decides which characters are allowed. Remove symbols one at a time or switch to a simpler style like small caps.",
      },
      {
        q: "Can I use gamer fonts on Twitch or YouTube?",
        a: "In titles and descriptions, usually yes. For usernames, each platform has its own rules, so check what it lets you save.",
      },
    ],
    related: ["nick", "freefire", "gothic", "discord"],
  },

  kaomoji: {
    metaTitle: "Kaomoji: Japanese Emoticons to Copy and Paste (◕‿◕) ʕ•ᴥ•ʔ | LetrasHub",
    metaDescription:
      "Copy and paste kaomoji: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯, (╯°□°)╯︵ ┻━┻ and more. Use them on their own or combined with your styled text.",
    h1: "Kaomoji to copy and paste",
    label: "Kaomoji",
    intro:
      "Kaomoji are faces built from text characters: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯. Copy one from the list, or type your text to pair it with a face.",
    sample: "hi",
    featured: ["kaoHug", "kaoBear", "kaoSparkle", "kaoShrug", "kaoFlip", "kaoLove", "kaoCry", "kaoDance", "kaoLenny", "kaoConfused", "kaoHappy", "kaoHappySmall"],
    initialCategory: "kaomoji",
    sections: [
      {
        heading: "What kaomoji are",
        blocks: [
          {
            type: "p",
            text: "“Kaomoji” comes from Japanese: kao (face) and moji (character). Unlike Western emoticons such as :) that you read sideways, kaomoji are read upright: (^_^). They spread through Japanese forums and the early internet from the 1980s and are now used worldwide.",
          },
        ],
      },
      {
        heading: "Kaomoji to copy",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Happy", text: "(◕‿◕) (＾▽＾) (≧◡≦) ٩(◕‿◕)۶" },
              { label: "Love", text: "(♡˙︶˙♡) (っ◔◡◔)っ ♥ (´｡• ᵕ •｡`) ♡" },
              { label: "Sad", text: "(ಥ﹏ಥ) (╥﹏╥) (；￣Д￣)" },
              { label: "Angry", text: "(╯°□°)╯︵ ┻━┻ (ಠ益ಠ) (￣^￣)" },
              { label: "Animals", text: "ʕ•ᴥ•ʔ (=^･ω･^=) ▼・ᴥ・▼" },
              { label: "Shrug", text: "¯\\_(ツ)_/¯" },
              { label: "Hug", text: "(づ｡◕‿‿◕｡)づ" },
            ],
          },
        ],
      },
      {
        heading: "Kaomoji with your text",
        blocks: [
          {
            type: "p",
            text: "The generator above pairs faces with your styled text: a hug with cursive letters, or a table flip with your text upside down. Type something and try it.",
          },
          { type: "examples", text: "hi", styles: ["kaoHug", "kaoBear", "kaoShrug", "kaoFlip"] },
        ],
      },
      {
        heading: "Where to use them",
        blocks: [
          {
            type: "ul",
            items: [
              "Messages on [WhatsApp](whatsapp) and [Discord](discord), to add emotion without emoji.",
              "Bios and comments with an [aesthetic](aesthetic) style.",
              "Fun nicknames, though many games don't accept these characters.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Some kaomoji use characters from less common scripts (Kannada, Thai…) and may appear as boxes on older phones. On Discord and other markdown apps, underscores and asterisks can be read as formatting: if “¯\\_(ツ)_/¯” loses an arm, add an extra backslash.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between kaomoji and emoji?",
        a: "Emoji are pictures (😀); kaomoji are built from text characters. Kaomoji work even where emoji aren't available.",
      },
      {
        q: "Why is my ¯\\_(ツ)_/¯ missing an arm?",
        a: "In markdown apps, backslashes and underscores have special meaning. Type two backslashes, or use this page's Copy button.",
      },
      {
        q: "Do kaomoji work on every phone?",
        a: "Simple ones do. Ones using characters from less common scripts may fail on older systems.",
      },
    ],
    related: ["aesthetic", "upsideDown", "whatsapp", "discord"],
  },
};

export default pages;
