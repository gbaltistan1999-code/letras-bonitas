import type { HomeContent } from "@/types/content";

const home: HomeContent = {
  metaTitle: "Fancy Text Generator: Cool Fonts to Copy and Paste | LetrasHub",
  metaDescription:
    "Free fancy text generator: type once and get 80+ cool fonts to copy and paste — cursive, gothic, small, strikethrough and symbol styles for Instagram, Discord, TikTok and games.",
  h1: "Fancy text generator",
  intro:
    "Type your name, nickname or message and instantly see it in more than 80 fancy letter styles. Tap Copy on the one you like and paste it anywhere.",
  sample: "Fancy Text",
  sections: [
    {
      heading: "What this fancy text generator does",
      blocks: [
        {
          type: "p",
          text: "LetrasHub turns plain text into stylish text: elegant cursive, gothic letters, tiny text, strikethrough, circled letters and symbol frames for gaming nicknames. There's nothing to install and no account to create. The output is ordinary text you can paste wherever you normally type, such as a bio, a display name, a game nickname or a chat message.",
        },
        {
          type: "p",
          text: "The conversion runs entirely in your browser. What you type never leaves your device, so the generator keeps working even if you go offline after the page has loaded.",
        },
      ],
    },
    {
      heading: "How to use it in 4 steps",
      blocks: [
        {
          type: "ol",
          items: [
            "Type into the box above. Results update as you type.",
            "Use the filters (Cursive, Gothic, With symbols…) to narrow down the styles.",
            "Tap Copy on the style you want. You'll see a “Copied!” confirmation.",
            "Open the app or game, long-press the text field and choose Paste. Check that every character displays properly before you save.",
          ],
        },
      ],
    },
    {
      heading: "Where fancy letters work",
      blocks: [
        { type: "p", text: "Because the results are text characters rather than images, you can paste them into almost any text field. Popular uses include:" },
        {
          type: "ul",
          items: [
            "Bios and display names: see the guides for [Instagram fonts](instagram) and [TikTok fonts](tiktok).",
            "Gaming nicknames: general tips in [nickname fonts](nick) plus a dedicated guide to [Free Fire fonts](freefire).",
            "Display names and server nicknames on [Discord](discord).",
            "Messages, status updates and group names on [WhatsApp](whatsapp).",
            "Posts, comments, slides and anywhere you want a word to stand out.",
          ],
        },
      ],
    },
    {
      heading: "How it works: Unicode characters, not real fonts",
      blocks: [
        {
          type: "p",
          text: "A font changes how letters are drawn, but only inside one program; copy the text elsewhere and the styling disappears. These “cool fonts” work differently. Each letter is swapped for a different character from the Unicode standard, the system every modern device uses to represent text.",
        },
        {
          type: "p",
          text: "Unicode defines more than 150,000 characters. Among them are complete alphabets designed for mathematical notation (bold, italic, script, fraktur and double-struck), small phonetic letters, letters inside circles and squares, and decorative symbols from scripts around the world. For example, “𝓐” isn't an A in a different font: it's the character U+1D4D0, MATHEMATICAL BOLD SCRIPT CAPITAL A. The official code charts are at [unicode.org](https://www.unicode.org/charts/).",
        },
        {
          type: "note",
          text: "Accented letters keep their accents as combining marks (for example 𝐞́). If a style has no equivalent for a character, that character is left as typed instead of being replaced with a broken symbol.",
        },
      ],
    },
    {
      heading: "Compatibility: why you might see boxes",
      blocks: [
        {
          type: "p",
          text: "A character existing in Unicode doesn't guarantee your device has a glyph for it. If it doesn't, you'll see an empty box (□) or a question mark. Bold, cursive and gothic styles render well on current phones; rare symbols and combining-line styles vary more between devices.",
        },
        {
          type: "ul",
          items: [
            "Some games and apps only accept basic letters and numbers, or limit length. Always test before saving a name you can't easily change.",
            "Usernames (@handles) on many networks only allow plain letters, numbers, periods or underscores. Fancy text usually works in the display name and bio instead.",
            "What looks right on your phone may look different on someone else's older device.",
            "Search features on some platforms won't match words written with these characters.",
          ],
        },
      ],
    },
    {
      heading: "Accessibility: use fancy text sparingly",
      blocks: [
        {
          type: "p",
          text: "Screen readers used by blind and low-vision people don't always treat these characters as normal letters. Some read out technical names character by character, and some skip them entirely. Use fancy text for accents like a nickname or one highlighted word, and keep important information such as contact details, prices or instructions in plain text.",
        },
      ],
    },
  ],
  stylesHeading: "Text styles",
  stylesIntro: "Each page opens the generator on that style, with examples and specific tips.",
  platformsHeading: "Fonts for social media and games",
  teasers: {
    cursive: "Handwriting-style letters for bios and names.",
    gothic: "Old-English blackletter for bold nicknames.",
    small: "Tiny text: small caps, superscript and subscript.",
    strike: "Strikethrough, underline and other line styles.",
    nick: "Ideas and tips for gaming nicknames that actually work.",
    freefire: "Symbol nicknames and how to change your in-game name.",
    instagram: "Stylish name and bio, without touching your @.",
    tiktok: "Stand out in your name, bio and comments.",
    whatsapp: "Unicode styles plus WhatsApp's built-in formatting.",
    discord: "Display names, server nicknames and markdown.",
  },
  faqs: [
    { q: "Is this fancy text generator free?", a: "Yes. It's free, needs no sign-up and has no usage limit." },
    {
      q: "Why do some letters show up as boxes?",
      a: "Your device, or the viewer's device, has no glyph for that Unicode character. Try another style; bold, cursive and gothic are the most widely supported.",
    },
    {
      q: "Do you store what I type?",
      a: "No. Text is converted in your browser and is never sent anywhere or saved. You can check by using the generator offline once the page has loaded.",
    },
    {
      q: "Can I use fancy fonts in my username?",
      a: "Usually not. Instagram and TikTok, for example, only allow plain letters, numbers, periods and underscores in your @handle. Display names and bios generally accept them.",
    },
    {
      q: "Are these real fonts?",
      a: "No. They are Unicode characters that look like styled letters, which is why they survive copy and paste between apps.",
    },
    {
      q: "Can I paste fancy text into Word or Google Docs?",
      a: "Yes, it's just text. Spell-check won't recognize the words, and some document fonts may not include every symbol.",
    },
  ],
  conclusion: {
    heading: "Pick a style and try it",
    blocks: [
      {
        type: "p",
        text: "The best approach is to experiment: type your name, try a few styles, and paste the result into a note or a message to yourself before using it on your profile. Looking for something specific? Start with [cursive text](cursive), [gothic text](gothic) or the [nickname fonts](nick) guide, and check the [FAQ](faq) if anything's unclear.",
      },
    ],
  },
};

export default home;
