export type Locale =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "ja"
  | "ko"
  | "pl"
  | "pt"
  | "tr"
  | "vi"
  | "id"
  | "zh"
  | "th"
  | "da"
  | "nl"
  | "no"
  | "sv"
  | "ar"
  | "ru";

export const locales: Locale[] = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "ja",
  "ko",
  "pl",
  "pt",
  "tr",
  "vi",
  "id",
  "zh",
  "th",
  "da",
  "nl",
  "no",
  "sv",
  "ar",
  "ru",
];

export const languages: { locale: Locale; name: string; label: string }[] = [
  { locale: "en", name: "English", label: "English" },
  { locale: "es", name: "Spanish", label: "Español" },
  { locale: "fr", name: "French", label: "Français" },
  { locale: "de", name: "German", label: "Deutsch" },
  { locale: "it", name: "Italian", label: "Italiano" },
  { locale: "ja", name: "Japanese", label: "日本語" },
  { locale: "ko", name: "Korean", label: "한국어" },
  { locale: "pl", name: "Polish", label: "Polski" },
  { locale: "pt", name: "Portuguese", label: "Português" },
  { locale: "tr", name: "Turkish", label: "Türkçe" },
  { locale: "vi", name: "Vietnamese", label: "Tiếng Việt" },
  { locale: "id", name: "Indonesian", label: "Bahasa" },
  { locale: "zh", name: "Chinese", label: "中文" },
  { locale: "th", name: "Thai", label: "ไทย" },
  { locale: "da", name: "Danish", label: "Dansk" },
  { locale: "nl", name: "Dutch", label: "Nederlands" },
  { locale: "no", name: "Norwegian", label: "Norsk" },
  { locale: "sv", name: "Swedish", label: "Svenska" },
  { locale: "ar", name: "Arabic", label: "العربية" },
  { locale: "ru", name: "Russian", label: "Русский" },
];
