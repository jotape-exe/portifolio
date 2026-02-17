import ptBR from "./locales/br.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

export const languages = [
  { language: "pt", title: "Portugês" },
  { language: "en", title: "English" },
  { language: "es", title: "Spanish" }
];

const messages = {
  "en": en,
  "pt": ptBR,
  "es": es
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: messages,
}));
