import type { Meta, StoryObj } from "@storybook/react";
import BlogComponent from "../index";
import { Sections, SectionsProps, Variants } from "types";
import {
  blogSchema,
  blogInitialValue,
} from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { filterArgsByVariant } from "components/common";
import { blogDefaultValues } from "helper/defaultValues";

const args: Variants = {
  ...blogDefaultValues,
};

const meta = {
  title: "Sections/Blog",
  component: BlogComponent,
  tags: ["autodocs"],
  render: ({ variant, ...args }) => {
    const data = {
      variant: variant,
      variants: args,
    };

    return <BlogComponent data={data} />;
  },
} satisfies Meta<typeof BlogComponent> & any;

export default meta;
type Story = StoryObj<Sections>;

const filterArgs = (variant: string) => {
  return {
    args: {
      variant: variant,
      ...filterArgsByVariant(blogSchema, args, variant),
    },
  };
};

export const variant_a: Story = filterArgs("variant_a");
export const variant_b: Story = filterArgs("variant_b");
export const variant_c: Story = filterArgs("variant_c");
export const variant_d: Story = filterArgs("variant_d");
