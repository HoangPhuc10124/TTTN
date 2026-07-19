import React from "react";

const AdminImage = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  borderRadius = "0",
  align = "center",
  objectFit = "cover",
  shadow = false,
  marginBottom = 20,
}) => {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit,
          borderRadius,
          boxShadow: shadow
            ? "0 8px 20px rgba(0,0,0,.15)"
            : "none",
        }}
      />
    </div>
  );
};

export default AdminImage;