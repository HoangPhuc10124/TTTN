import React from "react";

const containerMap = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};

const AdminSection = ({
  container = "lg",
  paddingX = 4,
  paddingY = 4
}) => {

  return (
    <section
      style={{
        border: "2px dashed #3b82f6",
        padding: `${paddingY}rem ${paddingX}rem`
      }}
    >
      <div
        style={{
          maxWidth: containerMap[container],
          margin: "0 auto"
        }}
      >
        <h3>Section</h3>

        <p>
          Đây là Section đang hoạt động.
        </p>
      </div>
    </section>
  );
};

export default AdminSection;