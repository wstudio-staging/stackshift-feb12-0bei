import React from "react";
import dynamic from "next/dynamic";
import EditSection from "components/EditSection";
import { SectionsProps } from "types";

const Variants = {
  variant_a: dynamic(() => import("./variant_a")),
  variant_b: dynamic(() => import("./variant_b")),
  variant_c: dynamic(() => import("./variant_c")),
};

export interface TextComponentProps {
  heading?: string;
  firstColumn?: any;
  secondColumn?: any;
  thirdColumn?: any;
}

function TextComponent({ data, enableInlineEditing }: SectionsProps) {
  const variant = data?.variant;
  const Variant = Variants?.[variant];

  const props = {
    heading: data?.variants?.title,
    firstColumn: data?.variants?.firstColumn,
    secondColumn: data?.variants?.secondColumn,
    thirdColumn: data?.variants?.thirdColumn,
  };

  return (
    <>
      {enableInlineEditing && (
        <EditSection documentType={data?._type} documentId={data?._id} />
      )}
      {Variant ? <Variant {...props} /> : null}
    </>
  );
}

export default React.memo(TextComponent);
