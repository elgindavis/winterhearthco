import React from "react";
import { SingleContentStrip } from "../";
import { getBorderStyle } from "../../utils";

export default ({ list, cover }) => {
  return list.map((edition, index) => {
    return (
      <SingleContentStrip
        color={getBorderStyle(index)}
        className="pb-20"
        key={edition.id}
        content={edition}
        cover={cover}
      />
    );
  });
};
