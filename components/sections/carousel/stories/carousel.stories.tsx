import type { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "../index";
import { Sections, SectionsProps, Variants } from "types";
import {
  carouselSchema,
  carouselInitialValue,
} from "schemas/custom/sanity-plugin-schema-default/src";
import { filterArgsByVariant } from "components/common";

const args = {
  ...carouselInitialValue,
};

const meta = {
  title: "Sections/Carousel",
  component: CarouselComponent,
  tags: ["autodocs"],
  render: ({ variant, ...args }) => {
    const data = {
      variant: variant,
      variants: args,
    };

    return <CarouselComponent data={data} />;
  },
} satisfies Meta<typeof CarouselComponent> & any;

export default meta;
type Story = StoryObj<Sections>;

const filterArgs = (variant: string) => {
  return {
    args: {
      variant: variant,
      ...filterArgsByVariant(carouselSchema, args, variant),
    },
  };
};

export const variant_a: Story = filterArgs("variant_a");
