import type { InfoPages } from "@/types/content";

const info: InfoPages = {
  about: {
    metaTitle: "About LetrasHub: Who We Are and How It Works | LetrasHub",
    metaDescription:
      "Learn about LetrasHub, a free fancy text generator that runs in your browser: what it does, how it works and the principles behind it.",
    h1: "About LetrasHub",
    label: "About",
    intro:
      "LetrasHub is a free tool that turns plain text into fancy letters you can copy and paste into social media, games and messages.",
    sections: [
      {
        heading: "What we do",
        blocks: [
          {
            type: "p",
            text: "We bring together more than 200 Unicode text styles, explained in Spanish, Portuguese and English. The main styles and platforms each have their own page with examples, instructions and real limitations, so you know what to expect before pasting into your profile.",
          },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          {
            type: "p",
            text: "The generator uses mapping tables between plain letters and Unicode characters, built from the Unicode Consortium's official code charts. Everything happens in your browser. No server receives your text, there are no accounts, and no AI generates anything. When a style has no equivalent for a character, we leave it unchanged instead of showing a broken symbol.",
          },
        ],
      },
      {
        heading: "Our principles",
        blocks: [
          {
            type: "ul",
            items: [
              "Honesty: we explain what works, what doesn't and why. We don't promise every style works in every app.",
              "Privacy: we don't send or store what you type, and we don't use analytics or advertising.",
              "Accessibility: we point out that these characters can be hard for screen readers and recommend using them sparingly.",
              "Independence: we aren't affiliated with any platform we mention.",
            ],
          },
        ],
      },
      {
        heading: "Who's behind it",
        blocks: [{ type: "owner" }, { type: "p", text: "More details on the [author](author) page." }],
      },
      {
        heading: "Contact and corrections",
        blocks: [
          {
            type: "p",
            text: "If you spot an error, a style that doesn't behave as described, or have a suggestion, get in touch via the [contact page](contact). We review content when platforms or the Unicode standard change.",
          },
        ],
      },
    ],
  },

  author: {
    metaTitle: "LetrasHub Author: Who Writes and Reviews the Content | LetrasHub",
    metaDescription:
      "Meet the person behind LetrasHub: who builds the text styles, writes the guides and checks that they work on each platform.",
    h1: "Author",
    label: "Author",
    intro:
      "This page introduces the person responsible for LetrasHub: who builds and tests the text styles and writes the site's guides.",
    sections: [
      {
        heading: "Our mission",
        featured: true,
        blocks: [
          {
            type: "p",
            text: "Our mission is to let anyone style their text without hassle. We want you to turn your name, nickname or phrase into beautiful fonts in seconds: free, with no sign-up, and without your text ever leaving your browser.",
          },
          {
            type: "p",
            text: "We believe customizing your profile should be easy and honest. That is why we explain which styles work in each app, which ones may show up as boxes, and how to use them without hurting accessibility.",
          },
        ],
      },
      {
        heading: "Who built LetrasHub",
        blocks: [{ type: "owner" }],
      },
      {
        heading: "What they do at LetrasHub",
        blocks: [
          {
            type: "ul",
            items: [
              "Builds and maintains the Unicode character tables behind the [generator](home).",
              "Writes the guides for each style and platform, such as [cursive text](cursive) and [Free Fire fonts](freefire).",
              "Tests the styles in the apps we mention and notes what works and what doesn't.",
              "Handles corrections and suggestions sent through the [contact page](contact).",
            ],
          },
        ],
      },
      {
        heading: "How the content is reviewed",
        blocks: [
          {
            type: "p",
            text: "Explanations are based on the official Unicode Consortium tables and on real tests in each platform. When an app changes what it allows in names or bios, or a new Unicode version is released, the affected content is reviewed and updated.",
          },
        ],
      },
      {
        heading: "Contact the author",
        blocks: [
          {
            type: "p",
            text: "If you find a mistake or want to suggest a new style, use the [contact page](contact). You can also read more about the project on the [About](about) page.",
          },
        ],
      },
    ],
  },

  contact: {
    metaTitle: "Contact | LetrasHub",
    metaDescription: "Contact LetrasHub with suggestions, corrections or privacy questions. Here's how to reach us by email.",
    h1: "Contact",
    label: "Contact",
    intro: "Have a suggestion, found a mistake, or have a privacy question? Email us.",
    sections: [
      {
        heading: "Before you write",
        blocks: [
          {
            type: "ul",
            items: [
              "If a style shows boxes, check the compatibility section on the [home page](home) and the [FAQ](faq) first.",
              "We can't help with game or social media accounts (recovery, blocked name changes and so on). Contact each platform's support for that.",
              "Please don't include passwords or sensitive information in your message.",
            ],
          },
        ],
      },
    ],
  },

  faq: {
    metaTitle: "Fancy Text FAQ: Common Questions Answered | LetrasHub",
    metaDescription:
      "Clear answers about fancy text: copying on mobile, why boxes appear, where it works, privacy and accessibility.",
    h1: "Frequently asked questions",
    label: "FAQ",
    intro: "The most common questions about the generator and about using fancy text in apps and games.",
    sections: [],
    groups: [
      {
        heading: "Using the generator",
        faqs: [
          {
            q: "How do I copy on my phone?",
            a: "Tap a style's Copy button. If your browser blocks automatic copying, the text is selected so you can long-press and copy it.",
          },
          { q: "Is there a text limit?", a: "Yes, 200 characters, to keep the page fast. That's plenty for nicknames, bios and short messages." },
          { q: "Do I need to download a font or app?", a: "No. The results are Unicode characters your phone can already display in most cases." },
          { q: "Does it work offline?", a: "Once the page has loaded, yes. The conversion happens in your browser." },
        ],
      },
      {
        heading: "Compatibility",
        faqs: [
          {
            q: "Why do I see boxes or question marks?",
            a: "Your device has no glyph for that character. Try another style or update your system; bold, cursive and gothic are the most compatible.",
          },
          {
            q: "Why won't a game accept my nickname?",
            a: "Each game decides which characters and how many it allows. Try a style with fewer symbols or remove decorations. More tips in [nickname fonts](nick).",
          },
          {
            q: "Why can't I use these in my @username?",
            a: "Many networks only allow plain letters, numbers and a few symbols in usernames. Use the style in your display name or bio.",
          },
          {
            q: "Do they look the same on iPhone and Android?",
            a: "Not exactly. Each system uses its own fonts, so shapes may differ slightly or a symbol may be missing.",
          },
        ],
      },
      {
        heading: "Privacy and security",
        faqs: [
          { q: "Do you store what I type?", a: "No. Your text never leaves your browser and isn't saved. See the [privacy policy](privacy)." },
          {
            q: "Why is there a cookie notice if you don't track?",
            a: "For transparency, and to remember your choice. We only use necessary storage; details are in the [cookie policy](cookies).",
          },
        ],
      },
      {
        heading: "Accessibility",
        faqs: [
          {
            q: "Is fancy text accessible?",
            a: "Not fully. Screen readers may read it oddly or skip it. Use it for decoration and keep important information in plain text.",
          },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Privacy Policy | LetrasHub",
    metaDescription:
      "How LetrasHub handles data: text is processed in your browser, only your cookie choice is stored, and there's no analytics or advertising.",
    h1: "Privacy policy",
    label: "Privacy policy",
    showUpdated: true,
    intro:
      "This policy explains what data LetrasHub (letrashub.com) processes, why, and what rights you have. It's written to match how the site actually works.",
    sections: [
      {
        heading: "1. Who is responsible",
        blocks: [
          {
            type: "p",
            text: "The site is operated by the owner named on the [About](about) page. You can reach them at the email address on the [contact page](contact).",
          },
        ],
      },
      {
        heading: "2. Text you type into the generator",
        blocks: [
          {
            type: "p",
            text: "Text you type is converted by code running in your browser. It is not sent to our servers or any third party, not logged, and not saved on your device; it's gone when you close or reload the page. When you tap Copy, the text is placed on your device's clipboard, which you control.",
          },
        ],
      },
      {
        heading: "3. Browser storage",
        blocks: [
          {
            type: "p",
            text: "We use your browser's local storage (localStorage) for two things: remembering your choice in the cookie notice (accepted categories and date) and, only if you tap a style's heart ♡, keeping your list of favorite styles (style names only, never the text you type). This data stays on your device, we never receive it, and you can delete it anytime in your browser settings or with the Withdraw consent button under Cookie settings.",
          },
          {
            type: "p",
            text: "We don't use analytics, advertising or social media cookies, and we don't load third-party tracking scripts. See the [cookie policy](cookies) for details.",
          },
        ],
      },
      {
        heading: "4. Hosting server logs",
        blocks: [
          {
            type: "p",
            text: "Like any website, the server that delivers these pages may log technical details of each request (IP address, date and time, requested page, browser) for security and operation. These logs are handled by the hosting provider under its own policy.",
          },
          {
            type: "note",
            text: "PENDING: the owner must name the hosting provider here, link to its privacy policy and state how long its logs are kept.",
          },
        ],
      },
      {
        heading: "5. If you email us",
        blocks: [
          {
            type: "p",
            text: "If you email us, we receive your address and whatever you include. We use it only to reply and keep it as long as needed to handle your request, unless the law requires longer. The contact form doesn't send data from the website; it only opens your own email app.",
          },
        ],
      },
      {
        heading: "6. Legal bases",
        blocks: [
          {
            type: "p",
            text: "Storing your cookie choice is strictly necessary to provide the service you're using (legitimate interest; exempt from consent as strictly necessary storage). Replying to emails is based on your request. If analytics or advertising were ever added, they would only run with your prior consent.",
          },
        ],
      },
      {
        heading: "7. Your rights",
        blocks: [
          {
            type: "p",
            text: "Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing of your data, to data portability, and to withdraw consent at any time.",
          },
          {
            type: "ul",
            items: [
              "In the EU and UK (GDPR / UK GDPR), you can complain to your data protection authority.",
              "In Brazil (LGPD), you can contact the National Data Protection Authority (ANPD).",
              "In the United States, some state privacy laws (for example in California) give similar rights. We do not sell or share personal information for targeted advertising.",
            ],
          },
          {
            type: "p",
            text: "Because we don't collect the text you type or browsing data, in practice the only data we could hold is from emails you send us. To exercise your rights, use the [contact page](contact).",
          },
        ],
      },
      {
        heading: "8. Children",
        blocks: [
          {
            type: "p",
            text: "The generator doesn't ask for any personal information. If you're under 13 (or the age of digital consent where you live), please ask a parent or guardian before emailing us.",
          },
        ],
      },
      {
        heading: "9. Changes",
        blocks: [
          {
            type: "p",
            text: "If the way the site works changes (for example, if an external service is added), we'll update this policy and the date at the top before the change takes effect.",
          },
        ],
      },
    ],
  },

  terms: {
    metaTitle: "Terms and Conditions | LetrasHub",
    metaDescription:
      "LetrasHub terms of use: acceptable use of the fancy text generator, intellectual property, compatibility and limitation of liability.",
    h1: "Terms and conditions",
    label: "Terms and conditions",
    showUpdated: true,
    intro: "By using LetrasHub you agree to these terms. If you don't agree, please don't use the site.",
    sections: [
      {
        heading: "1. The service",
        blocks: [
          {
            type: "p",
            text: "LetrasHub provides a free tool that converts text into styled Unicode characters, plus informational content about using them. No account is required.",
          },
        ],
      },
      {
        heading: "2. Acceptable use",
        blocks: [
          { type: "p", text: "You may use the output freely for legitimate personal and commercial purposes. You may not use the site or generated text to:" },
          {
            type: "ul",
            items: [
              "Impersonate other people, brands, moderators or official accounts.",
              "Send spam, deceive people (for example with lookalike names or links) or evade moderation filters.",
              "Harass, threaten or publish illegal content.",
              "Overload, attack or interfere with the site.",
            ],
          },
        ],
      },
      {
        heading: "3. Intellectual property",
        blocks: [
          {
            type: "p",
            text: "Unicode characters don't belong to LetrasHub, and the text you create is yours. The site's explanatory text, design and code belong to its owner and may not be substantially copied without permission. Platform names mentioned are trademarks of their respective owners and are used descriptively only.",
          },
        ],
      },
      {
        heading: "4. Compatibility and results",
        blocks: [
          {
            type: "p",
            text: "How text displays depends on the device, operating system, app or game where you paste it. Some platforms may reject characters, show boxes or alter text. You're responsible for checking the result before using it, especially for paid or irreversible name changes.",
          },
        ],
      },
      {
        heading: "5. Availability",
        blocks: [
          {
            type: "p",
            text: "We aim to keep the site available and working, but we don't guarantee it will be uninterrupted or error-free. We may change, add or remove styles and content at any time.",
          },
        ],
      },
      {
        heading: "6. Liability",
        blocks: [
          {
            type: "p",
            text: "The site is provided “as is”. To the extent permitted by law, LetrasHub is not liable for damages arising from use of generated text, its rejection by third-party platforms, or those platforms' decisions about your account. Nothing in these terms limits rights you have under consumer protection laws that apply to you.",
          },
        ],
      },
      {
        heading: "7. External links",
        blocks: [{ type: "p", text: "Some pages link to external sites such as unicode.org. We don't control their content or policies." }],
      },
      {
        heading: "8. Governing law and changes",
        blocks: [
          {
            type: "note",
            text: "PENDING LEGAL REVIEW: the owner must specify the governing law and jurisdiction based on their country of residence.",
          },
          {
            type: "p",
            text: "We may update these terms. The date at the top shows the latest version. Questions? Visit the [contact page](contact).",
          },
        ],
      },
    ],
  },

  cookies: {
    metaTitle: "Cookie Policy | LetrasHub",
    metaDescription:
      "What LetrasHub stores in your browser: only what's needed to remember your cookie choice. No analytics, no advertising.",
    h1: "Cookie policy",
    label: "Cookie policy",
    showUpdated: true,
    intro: "Cookies and local storage are small pieces of data a site keeps in your browser. Here's exactly what LetrasHub uses.",
    sections: [
      {
        heading: "What we use",
        blocks: [
          {
            type: "ul",
            items: [
              "Name: letrashub-consent. Type: local storage (localStorage), not an HTTP cookie. Category: necessary. Purpose: remember your cookie-notice choice and its date. Duration: until you delete it or withdraw consent.",
              "Name: letrashub-favorites. Type: local storage. Category: functional, requested by you. Purpose: remember the styles you mark with ♡ (names only). Created only when you mark a favorite; removed when you unmark them all or clear the site's data.",
            ],
          },
          {
            type: "p",
            text: "We don't set any HTTP cookies of our own, and we don't use analytics, advertising or social media cookies. Text you type into the generator is never saved to any storage.",
          },
        ],
      },
      {
        heading: "Notice categories",
        blocks: [
          {
            type: "ul",
            items: [
              "Necessary: always on, because without it we couldn't remember your choice.",
              "Analytics: off by default. We don't currently use any analytics service.",
              "Marketing: off by default. We don't currently show advertising.",
            ],
          },
          {
            type: "p",
            text: "If a service in these categories is ever added, this policy will be updated and the service will only load after you consent.",
          },
        ],
      },
      {
        heading: "Changing or withdrawing your choice",
        blocks: [
          {
            type: "p",
            text: "Click Cookie settings in the footer of any page to review categories, save a different choice or withdraw consent. You can also clear the site's storage in your browser settings; the notice will then reappear.",
          },
        ],
      },
      { heading: "More information", blocks: [{ type: "p", text: "See the [privacy policy](privacy) for how we handle data in general." }] },
    ],
  },

  disclaimer: {
    metaTitle: "Disclaimer | LetrasHub",
    metaDescription:
      "LetrasHub generates Unicode characters for informational and entertainment purposes. Not affiliated with Free Fire, Instagram, WhatsApp, TikTok or Discord.",
    h1: "Disclaimer",
    label: "Disclaimer",
    showUpdated: true,
    sections: [
      {
        heading: "Nature of the content",
        blocks: [
          {
            type: "p",
            text: "LetrasHub generates Unicode characters for informational and entertainment purposes. The results are not typefaces, and how they look depends on the device, operating system, app or game displaying them.",
          },
        ],
      },
      {
        heading: "No affiliation",
        blocks: [
          {
            type: "p",
            text: "LetrasHub is an independent site. It is not affiliated with, sponsored by or endorsed by Garena (Free Fire), Meta (Instagram, WhatsApp), ByteDance (TikTok), Discord Inc. or any other company or platform mentioned. Their names are trademarks of their owners and are cited only to describe where text can be used. We do not use their logos.",
          },
        ],
      },
      {
        heading: "Accuracy",
        blocks: [
          {
            type: "p",
            text: "Platform instructions reflect how each platform generally worked when written. Platforms change menus, rules and limits without notice, so if something no longer matches, what the platform shows is what counts. We appreciate a heads-up via the [contact page](contact).",
          },
        ],
      },
      {
        heading: "Use at your own risk",
        blocks: [
          {
            type: "p",
            text: "Before using a name with special characters, especially if changing it costs money, make sure it displays correctly and the platform accepts it. See also the [terms and conditions](terms).",
          },
        ],
      },
    ],
  },
};

export default info;
