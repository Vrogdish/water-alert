import React, { ReactNode } from "react";

interface Props {
  type?: "button" | "submit";
  action?: () => void;
  children: ReactNode;
  size?: "large" | "small";
  variant?: "default" | "disable" | "alert";
  className?: string;
}

export default function Button({
  type = "button",
  action,
  children,
  variant = "default",
  size = "small",
  className,
}: Props) {
  let varianStyle = "";
  let variantSize = "";

  switch (variant) {
    case "default":
      varianStyle = "bg-blue-900";
      break;
    case "disable":
      varianStyle = "";
      break;
    case "alert":
      varianStyle = "";
      break;
    default:
      break;
  }

  switch (size) {
    case "large":
      variantSize = "";
      break;
    case "small":
      variantSize = "";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={action}
      className={`px-6 py-3 text-white  font-bold  rounded-full ${varianStyle} ${variantSize} ${className}`}
    >
      {children}
    </button>
  );
}
