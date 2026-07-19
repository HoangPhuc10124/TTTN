import React from "react";

const AdminText = ({
  content,
  align = "left",
  color = "#4b5563",
  fontSize = 16,
  fontWeight = "400",
  lineHeight = 1.7,
  marginBottom = 16,
}) => {
  return (
    <p
      style={{
        textAlign: align,
        color,
        fontSize: `${fontSize}px`,
        fontWeight,
        lineHeight,
        marginBottom: `${marginBottom}px`,
      }}
    >
      {content}
    </p>
  );
};

export default AdminText;