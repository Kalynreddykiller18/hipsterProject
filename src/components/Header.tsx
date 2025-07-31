import React from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropDown";
// import { useTheme } from "../contexts/ThemeProvider";

const Header: React.FC = () => {
  // const { theme } = useTheme();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        height: 64,
        padding: "0 2rem",
        boxSizing: "border-box",
        background: "var(--header-bg)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "background 0.3s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            marginRight: 20,
          }}
        >
          🌗 Hipster Themes
        </span>
        <nav className="header-list" style={{ display: "flex", gap: "1.3rem" }}>
          <Link to="/" tabIndex={0}>
            Home
          </Link>
          <Link to="/about" tabIndex={0}>
            About
          </Link>
          <Link to="/contact" tabIndex={0}>
            Contact
          </Link>
        </nav>
      </div>
      <ThemeDropdown />
      <nav
        className="header-list-mob"
        style={{ display: "flex", gap: "1.3rem" }}
      >
        <Link to="/" tabIndex={0}>
          Home
        </Link>
        <Link to="/about" tabIndex={0}>
          About
        </Link>
        <Link to="/contact" tabIndex={0}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
