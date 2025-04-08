import React from "react";
import { BadgeInterface } from "./types";

export const Badge = ({ text }: BadgeInterface) => {
  return (
    <div>
      <small className="inline-block bg-white rounded-sm px-10 py-2 text-sm font-semibold text-red-300 border-2 border-blue-800">
        {text}
      </small>
    </div>
  );
};
