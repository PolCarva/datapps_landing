import React from "react";
import Button from "./Button";

type Props = {
  imageSrc: string;
  title: string;
  text: string;
  buttonText: string;
  buttonHref?: string;
  reverse?: boolean; // Propiedad para invertir las columnas
};

const Feature: React.FC<Props> = ({
  imageSrc,
  title,
  text,
  buttonText,
  buttonHref,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center`}
    >
      <div className="w-full md:w-1/2 p-4">
        <img src={imageSrc} alt="description" className="w-full h-auto" />
      </div>
      <div className="w-full flex flex-col gap-2 md:w-1/2 p-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="mb-4 text-lg text-gray-400">{text}</p>
        <Button href="/" text="Ver Más" type="secondary" />
      </div>
    </div>
  );
};

export default Feature;
