import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { useFetchProducts } from "../hooks/useFetchProducts";
import CardList from "../components/CardList";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { products, loading } = useFetchProducts();

  if (theme === "theme2") {
    return (
      <main style={{ display: "flex", minHeight: "100vh", paddingTop: 80 }}>
        <aside
          style={{
            width: 220,
            background: "#222233",
            color: "#fff",
            padding: "2em 1em",
            minHeight: "calc(100vh - 64px)",
            borderRight: "2px solid #2d2e4d",
          }}
        >
          <h2 style={{ fontFamily: "Merriweather" }}>Sidebar</h2>
          <ul>
            <li style={{ paddingBottom: 10 }}>Profile</li>
            <li style={{ paddingBottom: 10 }}>Orders</li>
            <li style={{ paddingBottom: 10 }}> Settings</li>
          </ul>
        </aside>
        <main
          className="main-content"
          style={{
            flex: 1,
            padding: "2em",
          }}
        >
          <h1>Dark Sidebar Layout</h1>
          <p>This is Theme 2, featuring a sidebar and bold serif fonts.</p>
          <button>Try me</button>
          <CardList products={products} loading={loading} theme={theme} />
        </main>
      </main>
    );
  } else if (theme === "theme3") {
    return (
      <main
        className="main-content"
        style={{
          paddingTop: 80,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <h1>Colorful Cards Layout</h1>
        <p>Welcome to Theme 3 - playful Google fonts and a card grid!</p>
        <button>Get Groovy</button>
        <CardList products={products} loading={loading} theme={theme} />
      </main>
    );
  }

  return (
    <main
      className="main-content"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        paddingTop: 80,
      }}
    >
      <h1>Minimalist Layout</h1>
      <p>Welcome to Theme 1, a clean layout with a light palette.</p>
      <button>Learn more</button>
      <CardList products={products} loading={loading} theme={theme} />
    </main>
  );
};

export default Home;
