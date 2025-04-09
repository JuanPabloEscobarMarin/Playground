import React from "react";
import { ButtonInterface } from "./types";

export const Button = ({ text, type, href }: ButtonInterface) => {
  return (
    <a
      href={href}
      className="w-full text-center inline-block bg-white hover:bg-blue-300 rounded-sm px-10 py-2  text-sm font-semibold text-gray-600 border-1 border-gray-700"
    >
      {text}
    </a>
  );
};
