import en from "./locales/en.json";
import ptBR from "./locales/pt-BR.json";
import es from "./locales/es.json"

export const languages = [
  { language: "pt-BR", title: "Portugês BR" },
  { language: "en-US", title: "English" },
  { language: "es-ES", title: "Spanish" }
];

const messages = {
  "en-US": en,
  "pt-BR": ptBR,
  "es-ES": es
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt-BR",
  messages: messages,
}));
