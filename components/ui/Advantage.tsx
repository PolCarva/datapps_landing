import Image from "next/image";
import React from "react";

const Advantage = ({
  title,
  text,
  src,
  alt,
}: {
  title: string;
  text: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className="p-5 w-full rounded-lg bg-white-secondary border border-tertiary">
      <Image
        className="w-full object-cover shadow-lg rounded-lg"
        src={src}
        width={467}
        height={320}
        alt={alt}
      />
      <h3 className="text-2xl mt-5 font-medium">{title}</h3>
      <p className="text-gray-400 text-lg">{text}</p>
    </div>
  );
};

export default Advantage;
