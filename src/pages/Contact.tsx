import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const baseStyle: React.CSSProperties = {
    maxWidth: 600,
    margin: "100px auto 40px",
    padding: "0 1rem",
    fontFamily: "inherit",
  };

  const theme2Style: React.CSSProperties =
    theme === "theme2" ? { ...baseStyle, marginLeft: 240 } : baseStyle;

  return (
    <main style={theme2Style}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out with any questions or feedback.</p>
    </main>
  );
};

export default Contact;
