import type { StylePageContent } from "@/types/content";
import type { StylePageKey } from "@/lib/routes";

const pages: Record<StylePageKey, StylePageContent> = {
  cursive: {
    metaTitle: "Cursive Text Generator: Cursive Fonts Copy and Paste 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 | LetrasHub",
    metaDescription:
      "Turn plain text into cursive (𝒸𝓊𝓇𝓈𝒾𝓋𝑒 and bold 𝓬𝓾𝓻𝓼𝓲𝓿𝓮) you can copy and paste into bios, names and messages. Free cursive font generator.",
    h1: "Cursive text generator",
    label: "Cursive text",
    intro:
      "Cursive text mimics handwriting with slanted, flowing strokes. Type below and choose between light script, bold script or simple italics.",
    sample: "Emily Rose",
    featured: ["script", "boldScript", "italic", "boldItalic", "sansItalic", "javanese", "starWaves"],
    sections: [
      {
        heading: "The cursive styles explained",
        blocks: [
          {
            type: "p",
            text: "There are two main cursive styles. Light script (𝒜𝒷𝒸) looks like copperplate calligraphy with very ornate capitals. Bold script (𝓐𝓫𝓬) has heavier strokes and is easier to read on small screens. Italic (𝐴𝑏𝑐) simply slants the letters for a quieter look.",
          },
          {
            type: "p",
            text: "These characters come from Unicode's Mathematical Alphanumeric Symbols block, created so mathematicians could write symbols like ℒ and ℋ. A few script capitals already existed in an older block (Letterlike Symbols), so light script mixes characters from both. That's expected and doesn't affect pasting.",
          },
        ],
      },
      {
        heading: "Cursive examples",
        blocks: [{ type: "examples", text: "Emily Rose", styles: ["script", "boldScript", "italic", "boldItalic"] }],
      },
      {
        heading: "When cursive works well",
        blocks: [
          {
            type: "ul",
            items: [
              "Your profile display name, for an elegant touch that's still readable.",
              "The first line of your bio, used as a heading.",
              "Invitations and greetings sent by message.",
              "Combined with symbols for a nickname, like ★彡 𝓔𝓶 彡★.",
            ],
          },
          {
            type: "p",
            text: "Avoid whole paragraphs in cursive. It's tiring for everyone to read and especially hard for people using screen readers.",
          },
        ],
      },
      {
        heading: "How to copy and paste cursive",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your text into the generator above.",
              "Tap Copy next to the cursive style you prefer.",
              "In the target app, long-press the text field and choose Paste.",
              "Check the preview for boxes before saving.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Light script varies the most between devices because each system draws these characters with its own font. If it looks too thin or shows boxes on your phone, switch to bold script, which has better support. Unicode has no cursive digits, so numbers stay plain.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are there cursive numbers?",
        a: "No. Unicode doesn't include cursive digits, so numbers stay as typed. For styled numbers, try bold or double-struck.",
      },
      {
        q: "What's the difference between cursive and italic?",
        a: "Italic just slants the letters. Cursive imitates handwriting, with rounder letterforms and decorated capitals.",
      },
      {
        q: "Can I use cursive text in my Instagram name?",
        a: "Yes, the Name field accepts it. Your @username doesn't. See the [Instagram fonts](instagram) guide for details.",
      },
    ],
    related: ["gothic", "small", "instagram", "nick"],
  },

  gothic: {
    metaTitle: "Gothic Text Generator: Old English Font Copy and Paste 𝔊𝔬𝔱𝔥𝔦𝔠 | LetrasHub",
    metaDescription:
      "Convert text into gothic blackletter (𝔤𝔬𝔱𝔥𝔦𝔠 and bold 𝖌𝖔𝖙𝖍𝖎𝖈) — the Old English look. Copy and paste for nicknames, profiles and designs.",
    h1: "Gothic text generator",
    label: "Gothic text",
    intro:
      "Gothic text, often called Old English or blackletter, has sharp, angular strokes and a medieval feel. Type below and copy it in regular or bold gothic.",
    sample: "Dark Knight",
    featured: ["fraktur", "boldFraktur", "kanjiFrame", "doubleStruck", "asian", "javanese"],
    sections: [
      {
        heading: "Where gothic lettering comes from",
        blocks: [
          {
            type: "p",
            text: "Blackletter, also known as Fraktur or gothic script, was used in European manuscripts and early printing for centuries, and stayed common in German-speaking countries into the 20th century. Today it's associated with tattoos, band logos, newspaper mastheads and edgy gaming nicknames.",
          },
          {
            type: "p",
            text: "This generator uses the Fraktur letters from Unicode's mathematical block. Five capitals (ℭ, ℌ, ℑ, ℜ and ℨ) were encoded earlier in a different block and are taken from there, as the standard specifies.",
          },
        ],
      },
      {
        heading: "Gothic examples",
        blocks: [{ type: "examples", text: "Dark Knight", styles: ["fraktur", "boldFraktur", "kanjiFrame"] }],
      },
      {
        heading: "Tips for readable gothic text",
        blocks: [
          {
            type: "ul",
            items: [
              "Bold gothic (𝕬𝖇𝖈) reads better than the light version on small screens.",
              "Gothic capitals are very ornate, so an all-caps name can become unreadable.",
              "It works best on short words. For longer phrases, mix it with plain text.",
              "For a harsher look, try the 亗 frame or the Asian-style letters in [nickname fonts](nick).",
            ],
          },
        ],
      },
      {
        heading: "Using it on a profile or in a game",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your name or phrase into the generator.",
              "Copy the gothic version you like.",
              "Paste it into the name, nickname or bio field.",
              "If the app rejects it or shows boxes, try the other gothic variant or a style with fewer symbols.",
            ],
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Unicode has no gothic digits, so numbers stay plain. Some platforms and games filter mathematical characters out of names, in which case plain letters with an allowed symbol are the fallback. See the [Free Fire](freefire) and [Discord](discord) guides for specific cases.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is gothic text a font?",
        a: "No. These are standalone Unicode characters, which is why they stay gothic when you paste them into another app.",
      },
      {
        q: "Can I use this for a tattoo design?",
        a: "It's fine for ideas, but a tattoo artist will work from a real blackletter typeface. These characters are designed for screens.",
      },
      {
        q: "Why do some gothic capitals look different?",
        a: "ℭ, ℌ, ℑ, ℜ and ℨ live in a different Unicode block, so your device may draw them with a different font.",
      },
    ],
    related: ["cursive", "freefire", "nick", "discord"],
  },

  small: {
    metaTitle: "Small Text Generator: Tiny Text Copy and Paste ᵗᶦⁿʸ ᴛᴇxᴛ | LetrasHub",
    metaDescription:
      "Make small text instantly: small caps (ꜱᴍᴀʟʟ), superscript tiny text (ᵗᶦⁿʸ) and subscript. Copy and paste into bios, nicknames and messages.",
    h1: "Small text generator",
    label: "Small text",
    intro: "Small text gives a subtle, minimal look. Type below and pick small caps, superscript (tiny text) or subscript.",
    sample: "good morning",
    featured: ["smallCaps", "superscript", "subscript", "sans", "monospace"],
    initialCategory: "small",
    sections: [
      {
        heading: "Three kinds of small text",
        blocks: [
          {
            type: "ul",
            items: [
              "Small caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ): capital letters at lowercase height. The most readable and complete option.",
              "Superscript (ˢᵘᵖᵉʳ): tiny raised letters, like an exponent. Often called “tiny text”.",
              "Subscript (ₛᵤᵦ): tiny lowered letters. Unicode only encodes some of them.",
            ],
          },
          {
            type: "p",
            text: "Many of these characters come from phonetic alphabets such as the International Phonetic Alphabet, where they represent sounds. That's why not every letter exists in every version.",
          },
        ],
      },
      {
        heading: "Small text examples",
        blocks: [{ type: "examples", text: "good morning", styles: ["smallCaps", "superscript", "subscript"] }],
      },
      {
        heading: "Which letters are missing",
        blocks: [
          {
            type: "p",
            text: "Unicode has no superscript “q” and no small-cap “x”, and subscript is missing many letters (b, c, d, f, g, q, w, y, z and others). When a letter doesn't exist, the generator keeps the original so your text doesn't break. If you need a whole word in tiny text, check the result before using it.",
          },
          { type: "note", text: "Superscript converts everything to lowercase because superscript capitals are very incomplete in Unicode." },
        ],
      },
      {
        heading: "Ideas",
        blocks: [
          {
            type: "ul",
            items: [
              "Subtle subtitles in your [Instagram](instagram) or [TikTok](tiktok) bio.",
              "A tiny “ᵒᶠᶠᶦᶜᶦᵃˡ” or “ᴠɪᴘ” next to your nickname.",
              "Playful footnotes in messages.",
            ],
          },
        ],
      },
      {
        heading: "Compatibility",
        blocks: [
          {
            type: "p",
            text: "Small caps display well on most phones. Superscript and subscript borrow characters from several Unicode blocks, so depending on the font, some letters may sit at slightly different heights. That comes from how each system draws them, not from the copied text.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why don't some letters get smaller?",
        a: "They have no small version in Unicode. Rather than show a broken symbol, the generator keeps the original letter.",
      },
      {
        q: "Does small text work in game nicknames?",
        a: "Small caps work in many games and apps, but each platform decides what it accepts, so test before saving.",
      },
      { q: "Are there tiny numbers?", a: "Yes, in superscript (⁰¹²³) and subscript (₀₁₂₃). Small caps leave numbers unchanged." },
    ],
    related: ["cursive", "strike", "instagram", "tiktok"],
  },

  strike: {
    metaTitle: "Strikethrough Text Generator: Copy and Paste S̶t̶r̶i̶k̶e̶ | LetrasHub",
    metaDescription:
      "Create strikethrough, underlined and slashed text (s̶t̶r̶i̶k̶e̶, u̲n̲d̲e̲r̲l̲i̲n̲e̲) that stays when you copy and paste into Instagram, Discord or any app.",
    h1: "Strikethrough text generator",
    label: "Strikethrough text",
    intro:
      "Cross out, underline or slash your text with a line that survives copy and paste. Great for jokes, to-do lists and playful corrections.",
    sample: "old price",
    featured: ["strike", "shortStrike", "slash", "underline", "doubleUnderline", "overline", "crossAbove"],
    initialCategory: "lines",
    sections: [
      {
        heading: "How strikethrough text is made",
        blocks: [
          {
            type: "p",
            text: "Unlike the other styles, letters aren't replaced here. Instead, a “combining character” is added after each letter. On its own it's invisible, but it's drawn over or under the previous character. Strikethrough uses U+0336 (COMBINING LONG STROKE OVERLAY) and underline uses U+0332 (COMBINING LOW LINE).",
          },
          { type: "p", text: "Because the original letters don't change, this works with accents, numbers and almost any alphabet." },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "I don't care", styles: ["strike", "slash", "underline", "doubleUnderline"] }],
      },
      {
        heading: "Common uses",
        blocks: [
          {
            type: "ul",
            items: [
              "Jokes like “w̶o̶r̶k̶i̶n̶g̶ strategic napping”.",
              "Finished tasks on a shared list.",
              "Showing a change: “M̶e̶e̶t̶i̶n̶g̶ ̶a̶t̶ ̶5̶” now at 6.",
              "Decorating a nickname with a double underline.",
            ],
          },
        ],
      },
      {
        heading: "On WhatsApp and Discord, use built-in formatting",
        blocks: [
          {
            type: "p",
            text: "If you just want to strike through a message, WhatsApp and Discord have their own formatting, which is more accessible: type ~text~ on WhatsApp and ~~text~~ on Discord. This generator's strikethrough is useful where that formatting doesn't exist, such as profile names and bios. See the [WhatsApp](whatsapp) and [Discord](discord) guides.",
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "Where the line sits depends on each device's font. It may look slightly high or low, or have small gaps between letters. Your text also doubles in character count (letter + line), which matters in fields with a length limit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why does the line have gaps between letters?",
        a: "Each line belongs to one letter and the font decides its width. Some devices leave small gaps, and the text itself can't change that.",
      },
      {
        q: "Does strikethrough text use more characters?",
        a: "Yes, every letter gets an extra character for the line, so it roughly doubles in length.",
      },
      { q: "How do I remove the strikethrough?", a: "Retype the text without the style. The line is part of the copied text." },
    ],
    related: ["small", "whatsapp", "discord", "cursive"],
  },

  nick: {
    metaTitle: "Nickname Fonts: Cool Gaming Names with Symbols | LetrasHub",
    metaDescription:
      "Generate cool nickname fonts with symbols for games and socials: ꧁༒ 𝓝𝓲𝓬𝓴 ༒꧂, 亗, ×͜×, 『』. Free, with tips so your name actually displays.",
    h1: "Nickname fonts with symbols",
    label: "Nickname fonts",
    intro:
      "A great gamertag is recognizable at a glance. Type your player name and try frames, symbols and special letters until you find the one.",
    sample: "ShadowHunter",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "cornerBrackets", "asian", "greekish", "smallCaps", "boldFraktur"],
    sections: [
      {
        heading: "What makes a nickname look good",
        blocks: [
          {
            type: "ul",
            items: [
              "It's readable. If friends can't tell how to spell it, they can't search for you either.",
              "One main decoration. A frame (꧁꧂, 『』) or a symbol (亗, ×͜×) is enough.",
              "Few unusual characters. The more symbols, the more likely a game rejects the name.",
              "Consistency. Use the same style across games and socials so people recognize you.",
            ],
          },
        ],
      },
      {
        heading: "Nickname examples",
        blocks: [{ type: "examples", text: "ShadowHunter", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "asian", "lenticular"] }],
      },
      {
        heading: "Step by step",
        blocks: [
          {
            type: "ol",
            items: [
              "Type your base name. Shorter is better.",
              "Filter by “With symbols” or “Weird” and pick a style.",
              "Copy it and paste it into a note or chat first to see how it looks.",
              "In the game, open your profile and find the option to change your name.",
              "Paste it and check the preview before confirming, especially if renaming costs money or in-game currency.",
            ],
          },
        ],
      },
      {
        heading: "Compatibility in games",
        blocks: [
          {
            type: "p",
            text: "Every game decides which characters it allows and how many. Some accept almost any symbol, some only basic letters and numbers, and some count complex symbols as several characters. We don't publish specific limits because they change with updates. The reliable test is whether the game lets you save the name. For the most requested case, see [Free Fire fonts](freefire).",
          },
          {
            type: "note",
            text: "Don't use a nickname to impersonate another person, a moderator or a brand. It breaks the rules of almost every platform and our terms of use.",
          },
        ],
      },
      {
        heading: "More ideas",
        blocks: [
          {
            type: "p",
            text: "If your nickname is for a chat server, the [Discord fonts](discord) guide explains usernames versus server nicknames. For a medieval look, try [gothic text](gothic); for something cleaner, [small text](small).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the best symbol for a nickname?",
        a: "There's no single best. Popular choices are the ꧁꧂ and 『』 frames and symbols like 亗 or ×͜×. Pick one that displays well on your device and your friends' devices.",
      },
      {
        q: "The game says my name has invalid characters. What now?",
        a: "Remove symbols one at a time until it's accepted, or switch to a simpler style like small caps or plain letters with a frame.",
      },
      {
        q: "Will everyone see my nickname the same way?",
        a: "Not always. Players on systems without those characters will see boxes. Common styles reduce that risk.",
      },
    ],
    related: ["freefire", "gothic", "discord", "tiktok"],
  },

  freefire: {
    metaTitle: "Free Fire Fonts: Stylish Nickname Symbols to Copy | LetrasHub",
    metaDescription:
      "Free Fire nickname fonts and symbols: ꧁༒ 𝓝𝓪𝓶𝓮 ༒꧂, 亗, ×͜×, 【】. Generate, copy and paste a stylish name, plus tips so the game accepts it.",
    h1: "Free Fire fonts and nickname symbols",
    label: "Free Fire fonts",
    intro:
      "Build a stylish Free Fire name: type it, pick a frame or symbol, and copy. We also cover what to check before you change your in-game name.",
    sample: "Headshot",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "cornerBrackets", "lenticular", "asian", "boldFraktur", "wings", "smallCaps"],
    sections: [
      {
        heading: "Popular styles in the Free Fire community",
        blocks: [
          {
            type: "p",
            text: "Free Fire players love symmetrical frames (꧁ ꧂), East Asian symbols like 亗 or 乂, the ×͜× “face”, and Asian-style lookalike letters (卂乃匚). These symbols come from real writing systems, including Javanese, Tibetan and Chinese, which Unicode encodes so those languages can be typed on any device.",
          },
        ],
      },
      {
        heading: "Free Fire name examples",
        blocks: [{ type: "examples", text: "Headshot", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "asian"] }],
      },
      {
        heading: "How to put fancy letters in your Free Fire name",
        blocks: [
          {
            type: "ol",
            items: [
              "Create your name in the generator and tap Copy.",
              "Open Free Fire and go to your profile.",
              "Tap the edit icon next to your name (its location may change between versions).",
              "Delete your current name, long-press the field and choose Paste.",
              "Check the preview carefully. Renaming in Free Fire usually costs diamonds or a name-change item, so it's worth getting it right first time.",
            ],
          },
        ],
      },
      {
        heading: "What to check before confirming",
        blocks: [
          {
            type: "ul",
            items: [
              "No warning about invalid characters or the name being too long.",
              "No boxes (□) in the preview.",
              "The name is still recognizable, so friends can find and add you.",
              "It doesn't imitate a well-known player, creator or the official team.",
            ],
          },
          {
            type: "p",
            text: "The game decides how many characters and which symbols it accepts, and that can change with any update. That's why we don't state an exact limit. If your name doesn't fit, use a shorter frame (『』 instead of ꧁༒ ༒꧂) or remove spaces.",
          },
        ],
      },
      {
        heading: "Guild names",
        blocks: [
          {
            type: "p",
            text: "For a guild, one idea is for every member to use the same symbol or frame with their own name: 亗 Ana, 亗 Leo. Teammates recognize each other without making names unreadable. Find more ideas in [nickname fonts](nick) and [gothic text](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does Free Fire accept all these symbols?",
        a: "It accepts many, but we can't guarantee all of them. The game may reject some characters or change its rules in an update, so always check the preview.",
      },
      {
        q: "How long can a Free Fire name be?",
        a: "The limit is set by the game, and some symbols can count as more than one character. If the field stops accepting input, shorten your name or use a smaller frame.",
      },
      {
        q: "Is LetrasHub part of Free Fire?",
        a: "No. LetrasHub is an independent site and isn't affiliated with or endorsed by Garena or Free Fire.",
      },
    ],
    related: ["nick", "gothic", "cursive", "tiktok"],
  },

  instagram: {
    metaTitle: "Instagram Fonts: Copy and Paste for Your Bio and Name | LetrasHub",
    metaDescription:
      "Instagram fonts for your bio and name: cursive, bold, small caps and symbol styles. Copy and paste, and learn where fancy text works and where it doesn't.",
    h1: "Instagram fonts for your bio and name",
    label: "Instagram fonts",
    intro:
      "Give your Instagram profile some personality with fancy text in your name and bio. Type below, copy a style and paste it while editing your profile.",
    sample: "Travel & photography",
    featured: ["script", "boldScript", "sansBold", "smallCaps", "spaced", "hearts", "starFrame", "doubleStruck"],
    sections: [
      {
        heading: "Where fancy text works on Instagram",
        blocks: [
          {
            type: "ul",
            items: [
              "Name (the bold text on your profile): accepts Unicode characters.",
              "Bio: the perfect spot for a cursive or bold heading.",
              "Captions, comments and stories.",
              "Not your username (@handle): Instagram only allows letters, numbers, periods and underscores.",
            ],
          },
        ],
      },
      {
        heading: "Bio examples",
        blocks: [{ type: "examples", text: "Travel & photography", styles: ["boldScript", "sansBold", "smallCaps", "hearts"] }],
      },
      {
        heading: "How to change your name or bio",
        blocks: [
          {
            type: "ol",
            items: [
              "Copy a style from the generator.",
              "In Instagram, go to your profile and tap Edit profile.",
              "Tap the Name or Bio field.",
              "Long-press and choose Paste. Add plain text if you like.",
              "Save and check how your profile looks.",
            ],
          },
        ],
      },
      {
        heading: "Tips for a readable bio",
        blocks: [
          {
            type: "ul",
            items: [
              "Use fancy text on one line or keyword, not the whole bio.",
              "Keep anything people might search for or copy, like your city or email, in plain text.",
              "Go easy on mixing styles and emoji so it doesn't get cluttered.",
              "If you can, view your profile on another phone, since not every device shows the same characters.",
            ],
          },
        ],
      },
      {
        heading: "Search and accessibility",
        blocks: [
          {
            type: "p",
            text: "Instagram search may not match “𝓐𝓷𝓷𝓪” to “Anna”, because the system sees different characters. If you want people to find you by name, keep your real name in plain text and use fancy text as decoration. Screen readers can also struggle with these characters; see the accessibility note on the [home page](home).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use fancy fonts in my Instagram username?",
        a: "No. Usernames only accept plain letters, numbers, periods and underscores. Use fancy text in the Name field or your bio.",
      },
      { q: "Why does my bio show boxes?", a: "Your device doesn't have those characters. Try bold or bold script, which have better support." },
      {
        q: "Will fancy text hurt my account?",
        a: "They're standard text characters. Still, follow Instagram's Community Guidelines and never use them to impersonate anyone.",
      },
    ],
    related: ["cursive", "small", "tiktok", "whatsapp"],
  },

  tiktok: {
    metaTitle: "TikTok Fonts: Fancy Text for Your Name, Bio and Comments | LetrasHub",
    metaDescription:
      "TikTok fonts to copy and paste: bold, small caps, tiny text and symbol styles for your display name, bio and comments. Make your profile stand out.",
    h1: "TikTok fonts for your name and bio",
    label: "TikTok fonts",
    intro:
      "Make your TikTok profile pop with fancy letters. Type your name or phrase, copy a style and paste it while editing your profile or writing comments.",
    sample: "Dance & comedy",
    featured: ["sansBold", "smallCaps", "superscript", "script", "lightning", "starWaves", "bracketEach", "fullwidth"],
    sections: [
      {
        heading: "Which parts of TikTok accept fancy text",
        blocks: [
          {
            type: "ul",
            items: [
              "Name (your profile display name).",
              "Bio.",
              "Video captions and comments.",
              "Not your username (@handle), which only allows letters, numbers, underscores and periods.",
            ],
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "Dance & comedy", styles: ["sansBold", "smallCaps", "lightning", "fullwidth"] }],
      },
      {
        heading: "How to add it to your profile",
        blocks: [
          {
            type: "ol",
            items: [
              "Copy a style from the generator.",
              "In TikTok, go to your profile and tap Edit profile.",
              "Choose Name or Bio.",
              "Delete the current text, paste the new one and save.",
            ],
          },
        ],
      },
      {
        heading: "Styles that work in a fast feed",
        blocks: [
          {
            type: "p",
            text: "People see your name for about a second while scrolling, so fast-to-read styles win: bold sans, small caps or a simple symbol like ⚡ or ★. Heavy styles like [gothic](gothic) or light script work better in your bio than in your name.",
          },
          {
            type: "p",
            text: "For text on top of videos, TikTok's editor has its own fonts. This generator is most useful for your profile, captions and comments.",
          },
        ],
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "p",
            text: "As on other networks, search may not find words written in fancy letters, and some viewers will see boxes on older systems. Keep key words (your name, your niche) in plain text. If you're also on Instagram, see [Instagram fonts](instagram).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use fancy fonts in my TikTok username?",
        a: "No, your @handle only accepts plain letters, numbers, underscores and periods. Your name and bio can use them.",
      },
      { q: "Do fancy fonts work in comments?", a: "Yes, paste them like any text. Use them sparingly so your comment stays easy to read." },
      {
        q: "Can I use them in on-video text?",
        a: "You can paste them into the text tool, but how they look depends on the editor's font. Test before posting.",
      },
    ],
    related: ["instagram", "small", "nick", "freefire"],
  },

  whatsapp: {
    metaTitle: "WhatsApp Fonts: Fancy Text and Built-in Formatting | LetrasHub",
    metaDescription:
      "WhatsApp fonts to copy and paste — cursive, circled and upside-down text for your name, about and status — plus WhatsApp's built-in bold, italic and strikethrough.",
    h1: "WhatsApp fonts and formatting",
    label: "WhatsApp fonts",
    intro:
      "Customize your WhatsApp name, about and messages with fancy text, and learn the formatting WhatsApp already has built in, which is sometimes the better option.",
    sample: "Happy birthday",
    featured: ["script", "bold", "italic", "strike", "monospace", "circled", "hearts", "upsideDown"],
    sections: [
      {
        heading: "First: WhatsApp's built-in formatting",
        blocks: [
          { type: "p", text: "WhatsApp lets you format messages without special characters by typing symbols around text:" },
          { type: "ul", items: ["*text* for bold.", "_text_ for italic.", "~text~ for strikethrough.", "```text``` for monospace."] },
          {
            type: "p",
            text: "Built-in formatting is more accessible and has no compatibility issues, so it's the best choice for everyday messages. LetrasHub covers what it can't do: styles like calligraphic cursive, circled letters or upside-down text, and fields like your name and about, where WhatsApp formatting doesn't apply.",
          },
        ],
      },
      {
        heading: "WhatsApp examples",
        blocks: [{ type: "examples", text: "Happy birthday", styles: ["script", "circled", "hearts", "upsideDown"] }],
      },
      {
        heading: "Where to paste fancy text",
        blocks: [
          {
            type: "ul",
            items: [
              "Your profile name and about: in Settings, tap your photo or name and edit each field.",
              "Group names and descriptions (if you're allowed to edit them).",
              "Status updates and messages.",
            ],
          },
          { type: "ol", items: ["Copy a style from the generator.", "Open the field you want to edit in WhatsApp.", "Long-press, choose Paste and save."] },
        ],
      },
      {
        heading: "Tips",
        blocks: [
          {
            type: "ul",
            items: [
              "In big groups, a heavily decorated name can make it harder for people to @mention you.",
              "If you want to be found by name, keep your real name readable.",
              "Upside-down text (ʎllıs) is fun for jokes but hard to read, so keep it short.",
              "To strike through a message, use ~text~. For a name or status, use [strikethrough text](strike).",
            ],
          },
        ],
      },
      {
        heading: "Compatibility",
        blocks: [
          {
            type: "p",
            text: "WhatsApp displays characters using each person's phone font. If someone in your group has an older phone, they may see boxes instead of some letters. Bold, cursive and circled are the safest styles.",
          },
        ],
      },
    ],
    faqs: [
      { q: "How do I bold text on WhatsApp without another site?", a: "Wrap the word in asterisks, like *hello*. It appears bold once sent." },
      {
        q: "Can I use fancy text in my WhatsApp name?",
        a: "Yes, your profile name accepts Unicode characters. Keep in mind that contacts usually see the name they saved you under.",
      },
      {
        q: "Is there colored text for WhatsApp?",
        a: "No. Text color is set by the app, and Unicode characters have no color of their own, except emoji.",
      },
    ],
    related: ["strike", "instagram", "cursive", "discord"],
  },

  discord: {
    metaTitle: "Discord Fonts: Fancy Display Names and Nicknames | LetrasHub",
    metaDescription:
      "Discord fonts to copy and paste: gothic, cursive and symbol styles for your display name and server nicknames, plus Discord markdown for bold, strikethrough and code.",
    h1: "Discord fonts for names and nicknames",
    label: "Discord fonts",
    intro:
      "Customize your Discord display name and server nicknames. Type your name, pick a style and copy it. Below we explain which fields accept fancy text.",
    sample: "NightOwl",
    featured: ["fraktur", "boldScript", "monospace", "smallCaps", "doubleStruck", "negativeSquared", "cornerBrackets", "asian"],
    sections: [
      {
        heading: "Username vs. display name vs. nickname",
        blocks: [
          {
            type: "ul",
            items: [
              "Username: unique, and limited to lowercase letters, numbers, underscores and periods. Fancy text doesn't work here.",
              "Display name: shown across all servers, and accepts Unicode characters.",
              "Server nickname: a different name for one server, if you have permission to change it.",
            ],
          },
        ],
      },
      {
        heading: "Examples",
        blocks: [{ type: "examples", text: "NightOwl", styles: ["fraktur", "boldScript", "negativeSquared", "cornerBrackets"] }],
      },
      {
        heading: "How to change your display name or nickname",
        blocks: [
          {
            type: "ol",
            items: [
              "Copy a style from the generator.",
              "Display name: open User Settings → My Account (or Profiles) and edit your display name.",
              "Nickname: in the server, open the server menu or your profile and choose Edit Server Profile or Change Nickname.",
              "Paste the text and save.",
            ],
          },
          { type: "note", text: "Menu names may differ between mobile, desktop and app updates." },
        ],
      },
      {
        heading: "Discord markdown for messages",
        blocks: [
          {
            type: "p",
            text: "In messages, Discord has its own formatting that's more accessible than special characters: **bold**, *italic*, __underline__, ~~strikethrough~~ and `code`. Use it in chat and save fancy text for names, roles and channels.",
          },
        ],
      },
      {
        heading: "Server rules",
        blocks: [
          {
            type: "p",
            text: "Many servers have nickname rules. Some require names that are easy to mention, and some use bots that reset nicknames containing special characters or starting with symbols to jump to the top of the member list. Check the rules before using a heavily decorated nickname. For more ideas, see [nickname fonts](nick) and [gothic text](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't I use fancy text in my Discord username?",
        a: "Unique usernames only accept lowercase letters, numbers, underscores and periods. Use the style in your display name or server nickname.",
      },
      {
        q: "Can I use fancy fonts in channel names?",
        a: "With admin permissions you can try. Discord may transform some characters in text-channel names.",
      },
      {
        q: "A bot changed my nickname. Why?",
        a: "Some servers run moderation bots that clean up nicknames with symbols. Check the server rules or ask the moderators.",
      },
    ],
    related: ["gothic", "nick", "strike", "whatsapp"],
  },
};

export default pages;
