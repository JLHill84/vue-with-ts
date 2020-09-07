import { LocalesStateInterface } from "@/models/store";
/**
 * @name initialLocalesState
 * @description
 * The Locales state instance
 */
export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: "USA",
      locale: "en-US",
      flag: "us",
      selected: false,
    },
    {
      name: "Italy",
      locale: "it-IT",
      flag: "it",
      selected: false,
    },
    {
      name: "Spain",
      locale: "es-ES",
      flag: "es",
      selected: true,
    },
    {
      name: "France",
      locale: "fr-FR",
      flag: "fr",
      selected: false,
    },
  ],
};
