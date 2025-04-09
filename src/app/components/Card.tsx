import React from "react";
import { CardInterface } from "./types";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { BadgeInterface } from "./types";

export const Card = ({
  body,
  badge,
  btn,
  image,
  subtitle,
  title,
}: CardInterface) => {
  return (
    <>
      <div className="bg-white max-w-sm rounded shadow-lg fl mx-10 mt-20">
        {image && <img src={image} className="w-100 h-50 rounded" />}
        <section className="px-10">
          <h1 className="mt-5 font-bold text-xl mb-2 text-gray-600">{title}</h1>
          <p className="text-gray-700">{subtitle}</p>
          {badge && (
            <div className="flex justify-start my-3">
              <Badge text={badge.text} />
            </div>
          )}
        </section>
        {btn && (
          <div className="">
            <Button href="#" text="Boton" />{" "}
          </div>
        )}
      </div>
    </>
  );
};
