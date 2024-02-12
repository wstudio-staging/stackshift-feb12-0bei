import React from "react";
import { cn } from "utils/cn";
import { FaSpinner } from "react-icons/fa";
import { StyleVariants } from "../types";
import { LabeledRoute, LabeledRouteWithKey } from "types";
import Link from "next/link";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import { ConditionalLink } from "../ConditionalLink";
import { extractLink } from "helper";

export type IButtonProps = {
  asLink?: boolean;
  link?: LabeledRoute;
} & ButtonProps;

export function Button({
  colorScheme,
  variant,
  asLink = false,
  children,
  link,
  ...props
}: IButtonProps) {
  if (asLink) {
    return (
      <Link href={extractLink(link)} legacyBehavior passHref>
        <ChakraButton variant={variant} as="a">
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton variant={variant} {...props}>
      {children}
    </ChakraButton>
  );
}
