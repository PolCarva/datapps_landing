import Link from "next/link";
import React from "react";

const Button = ({
  text,
  href,
  type = "primary",
}: {
  text: string;
  href: string;
  type: "primary" | "secondary";
}) => {
  const baseClasses = "transition text-center px-6 py-3 rounded-lg";
  const primaryClasses = "bg-black btn hover:bg-black-hover text-white border";
  const secondaryClasses =
    "border border-black bg-white text-black hover:text-white hover:bg-black-hover";

  const buttonClasses = `${baseClasses} ${
    type === "primary" ? primaryClasses : secondaryClasses
  }`;

  return (
    <Link href={href} className={buttonClasses}>
      {text}
    </Link>
  );
};

export default Button;
