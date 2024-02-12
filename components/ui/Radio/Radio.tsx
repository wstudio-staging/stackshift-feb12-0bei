import React from "react";
import { cn } from "utils/cn";
import { IFormElements, StyleVariants } from "../types";

type RadioProps = {
  /** Classname for the input element */
  className?: string;
  /** Html name for the input element */
  name: string;
  /** String value that labels an interactive element */
  ariaLabel: string;
  variant?: Variant;
  /** String value of input element */
  item: string;
  /** Classname for the label element */
  labelClass?: string;
  /** Function that runs when an input value changes*/
  onChange?: () => void;
  [key: string]: any;
};

type Variant = "primary";

export const Radio = ({
  className,
  variant = "primary",
  name,
  ariaLabel,
  labelClass,
  item,
  onChange,
  ...props
}: RadioProps) => {
  const commonStyle = "";
  const primary = `${commonStyle}`;

  const variants: StyleVariants<Variant> = {
    primary,
  };

  const variantClass = variants[variant] ?? primary;

  return (
    <label htmlFor={item} className={cn("flex items-center gap-2", labelClass)}>
      <input
        onChange={onChange}
        className={cn(variantClass, className)}
        name={name}
        value={item}
        type="radio"
        aria-label={ariaLabel || name}
        id={item}
        {...props}
      />
      {item}
    </label>
  );
};
