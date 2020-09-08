import React from "react";

const Separator = () => {
  return (
    <div className="col-md-12 pb-20">
      <hr
        style={{ borderTop: "4px solid var(--color-primary)" }}
        className="separator"
      />
      <hr
        style={{ borderTop: "4px solid var(--color-secondary)" }}
        className="separator"
      />
      <hr
        style={{ borderTop: "4px solid var(--color-yellow)" }}
        className="separator"
      />
    </div>
  );
};

export default Separator;
