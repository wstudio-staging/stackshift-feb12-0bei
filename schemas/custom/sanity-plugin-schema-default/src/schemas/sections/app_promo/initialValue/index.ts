import {
  defaultImageArray,
  defaultLogo,
} from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { nanoid } from "nanoid";

/**
 * NOTE: When adding array of objects, it is required to add the following:
 *  1. '_type' to tell the schema what fields to map
 *  2. '_key' for indexing.
 *
 *  Example:
 *     arrayOfObjects: [
 *       {
 *         _key: nanoid(),
 *         _type: 'object',
 *         ...other fields...
 *       }
 *     ]
 **/

export default {
  logo: defaultLogo(
    "image-b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833-png"
  ),
  subtitle: "Dolor sit amet consectutar",
  title: "Build & Launch without problems",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
  statItems: [
    {
      _key: nanoid(),
      _type: "object",
      label: "Total Revenue",
      value: "$33,261",
    },
    {
      _key: nanoid(),
      _type: "object",
      label: "Subscribers",
      value: "481,095",
    },
    {
      _key: nanoid(),
      _type: "object",
      label: "Model Sale Rate",
      value: "25%",
    },
    {
      _key: nanoid(),
      _type: "object",
      label: "Conversations",
      value: "643,533",
    },
  ],
  images: defaultImageArray([
    "image-e3cb72c85bf9207d44bb9e0db92cd80be5662108-274x589-png",
    "image-b5e5d428e809f5f6e500df911ef16ab648be35a1-283x468-png",
    "image-ce963623bee96f0173097354a8da28472c88dce3-289x559-png",
    "image-4148621cc49a1c27d31565260703672c4705c49d-289x559-png",
  ]),

  tags: [
    "Vestibulum viverra ante non libero",
    "Morbi mollis metus pretium ultrices tincidunt",
    "Etiam lectus nunc, commodo et risus in",
  ],
};
