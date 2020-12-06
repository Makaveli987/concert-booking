import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "99vw",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
        }}
        className="spinner-border text-info"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
