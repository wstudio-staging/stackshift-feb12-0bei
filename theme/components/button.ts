import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "0.75rem 0.75rem 0 0.75rem",
  // padding: "1.5rem 0.5rem 1.5rem 0.5rem",
  fontWeight: "bold",
  color: "white",
});
const sizes = {
  md: {
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
};

const variantSolid = defineStyle((props: StyleFunctionProps) => {
  return {
    color: "white",
    bg: "brand.primary.default",
    _hover: {
      backgroundColor: "brand.primary.foreground",
    },
    // hover: props.colorScheme["fg"],
  };
});

const variants = {
  solid: variantSolid,
};
export type ButtonVariants = keyof typeof variants;

export const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "brand",
  },
});
