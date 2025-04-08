import React from "react";
import { ButtonInterface } from "./types";

export const Button = ({ text, type, href }: ButtonInterface) => {
  return (
    <a
      href={href}
      className="w-40 text-center inline-block bg-white hover:bg-blue-300 rounded-sm px-10 py-2 text-sm font-semibold text-red-300 border-2 border-blue-800"
    >
      {text}
    </a>
  );
};
