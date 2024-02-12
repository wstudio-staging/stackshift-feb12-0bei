import React from "react";
import { cn } from "utils/cn";
import { StyleVariants } from "../types";

type RadioGroup = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  label?: string;
  name: string;
  labelClass?: string;
  noLabel?: boolean;
};

type Variant = "primary" | "inline";

export const RadioGroup = ({
  /** Child radio elements */
  children,
  variant = "primary",
  /** Html name for the radio element */
  name,
  /** Classname for the elements that wraps the children */
  className,
  /** Classname for label element */
  labelClass,
  /** Optional label of the radio group. Defaults to the name */
  label,
  noLabel = false,
}: RadioGroup) => {
  const commonClass = "ml-2";
  const primary = `${commonClass}`;
  const inline = `${commonClass} flex items-center gap-2`;

  const variants: StyleVariants<Variant> = {
    primary,
    inline,
  };

  const variantClass = variants[variant] ?? primary;
  return (
    <div>
      {!noLabel && <p className={labelClass}>{label || name}</p>}
      <div className={cn(variantClass, className)}>{children}</div>
    </div>
  );
};
