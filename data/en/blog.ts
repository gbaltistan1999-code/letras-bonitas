import type { BlogPosts } from "@/types/content";

const posts: BlogPosts = {
  instagramBio: {
    metaTitle: "How to Use Fancy Fonts in Your Instagram Bio | LetrasHub",
    metaDescription:
      "Step-by-step guide to fancy fonts in your Instagram name and bio: where they work, where they don't, and how to keep your profile easy to read.",
    title: "How to use fancy fonts in your Instagram bio",
    excerpt:
      "Where you can use fancy text on Instagram, how to paste it step by step, and which mistakes to avoid so your profile stays easy to read.",
    published: "2026-11-17",
    readMinutes: 4,
    intro:
      "Fancy text is a quick way to give your Instagram profile some personality without downloading an app. It works because it isn't a font: it's Unicode characters that you copy and paste like any other text.",
    sections: [
      {
        heading: "Where it works and where it doesn't",
        blocks: [
          {
            type: "ul",
            items: [
              "Profile name: yes. It's the bold field shown above your bio.",
              "Bio: yes. This is the most common place for styles and symbols.",
              "Captions, comments and stories: yes, although in stories it depends on the font you pick.",
              "Username (@): no. Instagram only accepts letters, numbers, periods and underscores.",
            ],
          },
        ],
      },
      {
        heading: "Step by step",
        blocks: [
          {
            type: "ol",
            items: [
              "Open the [Instagram font generator](instagram) and type your name or phrase.",
              "Tap Copy on the style you like best.",
              "In Instagram, go to your profile and tap Edit profile.",
              "Long-press the name or bio field and choose Paste.",
              "Save your changes and, if you can, check how your profile looks on another device.",
            ],
          },
        ],
      },
      {
        heading: "Styles that usually look good",
        blocks: [
          {
            type: "p",
            text: "Styles based on mathematical letters, such as cursive or bold, display well on most current phones. A few examples:",
          },
          { type: "examples", text: "Your Name", styles: ["boldScript", "sansBold", "smallCaps", "scriptMoon"] },
          {
            type: "p",
            text: "For more options, see [cursive text](cursive) or [gothic text](gothic).",
          },
        ],
      },
      {
        heading: "Tips to keep your profile readable",
        blocks: [
          {
            type: "ul",
            items: [
              "Use the style on one word or your name, not your whole bio.",
              "Screen readers may read these characters oddly or skip them, so keep important information in plain text.",
              "Instagram search doesn't always find styled text: keep your real name somewhere if you want people to find you.",
              "If you see boxes instead of letters, read [why it happens and how to avoid it](faq).",
            ],
          },
        ],
      },
    ],
    related: ["squareBoxes", "freeFireNick"],
  },

  squareBoxes: {
    metaTitle: "Why Fancy Text Shows Up as Boxes and How to Fix It | LetrasHub",
    metaDescription:
      "If your fancy text shows up as empty boxes or question marks, this article explains why and which styles fail least on each device.",
    title: "Why fancy text shows up as boxes (and how to avoid it)",
    excerpt:
      "Empty boxes don't mean the text is broken: the device has no drawing for that character. Here's why it happens and which styles fail least.",
    published: "2026-11-17",
    readMinutes: 3,
    intro:
      "You copy a style that looked perfect and, once pasted, it shows empty boxes (□) or question marks. You didn't do anything wrong: the text is fine, but the device showing it doesn't know how to draw it.",
    sections: [
      {
        heading: "The cause: characters with no drawing",
        blocks: [
          {
            type: "p",
            text: "Fancy letters are real Unicode characters. Unicode defines more than 150,000 characters, but each phone or computer only ships fonts with drawings for some of them. When a drawing is missing, the system shows a box instead.",
          },
          {
            type: "note",
            text: "The text itself doesn't change: copy it to a device that has the drawing and it will display correctly.",
          },
        ],
      },
      {
        heading: "Which styles fail least",
        blocks: [
          {
            type: "p",
            text: "Older, widely used styles have the best support. These usually display well on current phones:",
          },
          { type: "examples", text: "Hello", styles: ["bold", "italic", "script", "fraktur", "doubleStruck"] },
          {
            type: "p",
            text: "Styles with uncommon symbols, rare alphabets or several marks stacked on each letter vary the most between devices.",
          },
        ],
      },
      {
        heading: "How to check before you post",
        blocks: [
          {
            type: "ol",
            items: [
              "Paste the text into the app where you'll use it and look at the preview.",
              "If you can, check it on another device (for example, an Android phone and an iPhone).",
              "If boxes appear, try a simpler style or use the style on only part of the text.",
            ],
          },
        ],
      },
      {
        heading: "Other possible causes",
        blocks: [
          {
            type: "ul",
            items: [
              "Some games and apps only accept basic letters and strip or block symbols.",
              "Phones running very old systems have fewer characters available.",
              "Some fields limit the number of characters, and a single symbol can count as two.",
            ],
          },
          { type: "p", text: "You'll find more details in the [FAQ](faq)." },
        ],
      },
    ],
    related: ["instagramBio", "freeFireNick"],
  },

  freeFireNick: {
    metaTitle: "Free Fire Nickname Ideas with Symbols and Fancy Fonts | LetrasHub",
    metaDescription:
      "Ideas and tips for a Free Fire nickname with symbols and fancy fonts that looks good in the game, with examples ready to copy.",
    title: "Free Fire nickname ideas with symbols",
    excerpt:
      "How to make a stylish Free Fire nickname: copy-ready examples, which symbols work well together, and what to check before changing your name.",
    published: "2026-11-17",
    readMinutes: 4,
    intro:
      "A good nickname is recognizable at a glance mid-match. With fancy letters and a couple of symbols, yours can stand out without becoming hard to read.",
    sections: [
      {
        heading: "Ideas ready to copy",
        blocks: [
          {
            type: "p",
            text: "These examples come from the same engine as the tool. Swap \"Shadow\" for your own name in the [Free Fire font generator](freefire):",
          },
          { type: "examples", text: "Shadow", styles: ["gameSwords", "gameCrown", "gameProX", "gameRoyal", "gothicSkull", "javanese"] },
        ],
      },
      {
        heading: "How to combine symbols without overdoing it",
        blocks: [
          {
            type: "ul",
            items: [
              "Pick one letter style and, at most, one symbol on each side.",
              "Crown, sword or skull symbols suit gaming nicknames well.",
              "Avoid styles with lots of marks above and below letters: in-game they can look blurry or get cut off.",
              "Read your nickname at a small size: if it's hard to make out, simplify it.",
            ],
          },
        ],
      },
      {
        heading: "Before you change your name",
        blocks: [
          {
            type: "ol",
            items: [
              "Check the game's character limit: many symbols take up more than one space.",
              "Paste the nickname into the rename screen and check the preview before confirming.",
              "Remember that renaming may cost in-game currency, so test it properly first.",
              "If the game rejects a symbol, remove it and try a more common one.",
            ],
          },
        ],
      },
      {
        heading: "More ideas",
        blocks: [
          {
            type: "p",
            text: "Find more styles under [nickname fonts](nick) and [gothic text](gothic), which are very popular for gaming names.",
          },
        ],
      },
    ],
    related: ["squareBoxes", "instagramBio"],
  },
};

export default posts;
