import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

interface CardListProps {
  products: Product[] | null;
  loading: boolean;
  theme: string;
}

const CardList: React.FC<CardListProps> = ({ products, loading, theme }) => {
  if (loading) return <div>Loading...</div>;

  // Layout changes based on theme
  if (theme === "theme2") {
    // List layout for sidebar
    return (
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: 520,
          margin: "auto",
        }}
      >
        {products?.map((product) => (
          <li
            key={product.id}
            className="card"
            style={{ display: "flex", gap: 16, marginBottom: 16 }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: 72, height: 72, objectFit: "contain" }}
            />
            <div>
              <h3>{product.title}</h3>
              <p style={{ opacity: 0.8 }}>
                {product.description.substring(0, 60)}...
              </p>
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                ${product.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (theme === "theme3") {
    // Grid playful cards
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5em",
        }}
      >
        {products?.map((product) => (
          <div
            className="card"
            key={product.id}
            style={{
              borderColor: "#fcba7f",
              background: "#ffece7",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: 100,
                height: 100,
                objectFit: "contain",
              }}
            />
            <h3>{product.title}</h3>
            <div style={{ color: "#fe6384", fontWeight: 700 }}>
              ${product.price}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default theme1: simple centered list
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {products?.map((product) => (
        <div
          className="card"
          key={product.id}
          style={{
            maxWidth: 400,
            width: "100%",
            marginBottom: 16,
          }}
        >
          <h3>{product.title}</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              height={50}
              style={{ marginRight: 16 }}
            />
            <span style={{ fontWeight: 500 }}>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
