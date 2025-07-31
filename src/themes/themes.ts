export type ThemeType = "theme1" | "theme2" | "theme3";

export const themeOptions = [
  { value: "theme1", label: "Theme 1 (Minimal)" },
  { value: "theme2", label: "Theme 2 (Dark/Sidebar)" },
  { value: "theme3", label: "Theme 3 (Colorful Cards)" },
];

export const themeMeta = {
  theme1: {
    className: "theme1",
    fontFamily: "Inter, Arial, sans-serif",
  },
  theme2: {
    className: "theme2",
    fontFamily: "Merriweather, serif",
  },
  theme3: {
    className: "theme3",
    fontFamily: "'Pacifico', cursive",
  },
};
