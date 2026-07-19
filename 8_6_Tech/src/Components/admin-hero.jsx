import React from "react";

const AdminHero = ({
  title = "Hero Title",
  subtitle = "Hero Subtitle",
  buttons = [],
  background,
  layout,
}) => {
  const bg = background || {};

  let style = {
    padding: "80px 20px",
    textAlign: layout?.align || "center",
    background: "#f3f4f6",
    color: "#111",
  };

  if (bg.type === "color") {
    style.background = bg.color || "#667eea";
    style.color = "#fff";
  }

  if (bg.type === "gradient") {
    // Sửa lại thành 1 dòng duy nhất ở đây:
    style.background = `linear-gradient(${bg.gradientDirection || "to right"}, ${bg.gradientFrom || "#667eea"}, ${bg.gradientTo || "#764ba2"})`;
    style.color = "#fff";
  }

  if (bg.type === "image") {
    style.backgroundImage = `url(${bg.imageUrl || ""})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
    style.color = "#fff";
  }

  return (
    <section style={style}>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <div style={{ marginTop: 20 }}>
        {(buttons || []).map((b, i) => (
          <a
            key={i}
            href={b.url || "#"}
            style={{
              margin: "0 8px",
              padding: "10px 18px",
              background: "white",
              color: "#111",
              borderRadius: 6,
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            {b.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default AdminHero;