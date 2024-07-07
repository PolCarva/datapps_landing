import Link from "next/link";
import React from "react";

const Button = ({
  text,
  href,
  type = "primary",
  rounded = false,
  className = "",
}: {
  text: string;
  href: string;
  rounded?: boolean;
  type: "primary" | "secondary";
  className?: string;
}) => {
  const baseClasses = `transition w-full md:w-fit text-center px-6 py-3 ${className} ${
    rounded ? "rounded-full" : "rounded"
  }`;
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
