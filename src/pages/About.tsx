import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

const About: React.FC = () => {
  const { theme } = useTheme();
  const aboutStyle: React.CSSProperties =
    theme === "theme2"
      ? { maxWidth: 600, margin: "100px auto 0", paddingLeft: 240 }
      : { maxWidth: 600, margin: "100px auto 0" };
  return (
    <main style={aboutStyle}>
      <h1>About this App</h1>
      <p>
        This demo showcases a React/TypeScript multi-theme system with
        persistency, custom layouts, API integration, and full mobile
        compatibility.
      </p>
    </main>
  );
};

export default About;
