import { useState, useContext, createContext } from "react";
import { en_translation } from "../translations/en_language";
import { pl_translation } from "../translations/pl_language";

export const SettingsContext = createContext({
  language: en_translation,
  setLanguage: () => {},
  theme: {
    headerBackgroundColor: "green", // background of header
    headerTextColor: "white", // header text color
    headerInputColor: "darkgreen", // header search input background color
    mainOnHoverColor: "rgba(0, 127, 0, 0.2)",
    contentBackgroundColor: "white", // main page background color
    contentComponentsColor: "dark-white", // main components foreground color
    contentTextColor: "gray", // color of text in components
  },
  setTheme: () => {},
});
