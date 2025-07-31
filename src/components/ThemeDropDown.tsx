import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { themeOptions } from "../themes/themes";
import type { ThemeType } from "../themes/themes";

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as ThemeType)}
      aria-label="Switch theme"
      style={{
        marginLeft: 12,
        borderRadius: 6,
        maxWidth: "35%",
        padding: "0.3em 0.6em",
      }}
    >
      {themeOptions.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default ThemeDropdown;
