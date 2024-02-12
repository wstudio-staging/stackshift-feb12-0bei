import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ImSpinner2 } from "react-icons/im";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    link: {
      externalLink: null,
      internalLink: "initial-values-test",
      label: "About Us",
      linkInternal: {
        _ref: "020142ce-cf61-4671-a5db-80b13a08f2d4",
        _type: "reference",
      },
      linkTarget: "_self",
      linkType: "linkInternal",
      type: "linkInternal",
      _key: "1XE3Dhz70dNTMXda86YUY",
    },
    children: "Submit",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};
