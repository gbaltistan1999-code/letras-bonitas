import type { CategoryId, StyleId } from "@/lib/unicode/styles";

/** All short UI strings. Every locale must provide every key. */
export interface Dictionary {
  siteTagline: string;
  nav: {
    home: string;
    styles: string;
    letterStyles: string;
    platforms: string;
    about: string;
    faq: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skipToContent: string;
    mainNav: string;
  };
  footer: {
    tagline: string;
    siteHeading: string;
    stylesHeading: string;
    legalHeading: string;
    cookieSettings: string;
    nonAffiliation: string;
    madeWith: string;
  };
  generator: {
    heading: string;
    inputLabel: string;
    placeholder: string;
    clear: string;
    copy: string;
    copied: string;
    copiedAnnouncement: string;
    copyManual: string;
    filterLabel: string;
    all: string;
    recommended: string;
    showMore: string;
    showLess: string;
    tooLong: string;
    counter: string;
    privacyNote: string;
    resultsLabel: string;
    previewHint: string;
    decorationLabel: string;
    decorationNone: string;
    favorites: string;
    addFavorite: string;
    removeFavorite: string;
    categories: Record<CategoryId, string>;
  };
  styleNames: Record<StyleId, string>;
  common: {
    breadcrumbLabel: string;
    home: string;
    faqHeading: string;
    relatedHeading: string;
    backToGenerator: string;
    lastUpdated: string;
    exampleInput: string;
    tryIt: string;
    onThisPage: string;
  };
  cookies: {
    bannerLabel: string;
    bannerText: string;
    acceptAll: string;
    rejectOptional: string;
    settings: string;
    privacyLink: string;
    settingsTitle: string;
    settingsIntro: string;
    necessaryTitle: string;
    necessaryText: string;
    analyticsTitle: string;
    analyticsText: string;
    marketingTitle: string;
    marketingText: string;
    notInUse: string;
    alwaysOn: string;
    save: string;
    withdraw: string;
    close: string;
    saved: string;
    currentChoice: string;
    noChoice: string;
  };
  contact: {
    emailLabel: string;
    emailPending: string;
    formHeading: string;
    formExplanation: string;
    name: string;
    subject: string;
    message: string;
    submit: string;
    disabled: string;
  };
  pending: {
    author: string;
  };
  notFound: {
    metaTitle: string;
    title: string;
    text: string;
    home: string;
    popular: string;
  };
}
