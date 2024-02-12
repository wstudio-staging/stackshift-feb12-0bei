import React from "react";
import dynamic from "next/dynamic";
import EditSection from "components/EditSection";

import { SectionsProps, Logo, LabeledRouteWithKey, LabeledRoute } from "types";

const Variants = {
  variant_a: dynamic(() => import("./variant_a")),
  variant_b: dynamic(() => import("./variant_b")),
  variant_c: dynamic(() => import("./variant_c")),
  variant_d: dynamic(() => import("./variant_d")),
  variant_e: dynamic(() => import("./variant_e")),
};

export interface NavigationProps {
  template?: any;
  logo?: Logo;
  links?: LabeledRouteWithKey[];
  primaryButton?: LabeledRoute;
  secondaryButton?: LabeledRoute;
  banner?: any;
}

function Navigation({ template, data, enableInlineEditing }: SectionsProps) {
  const variant = data?.variant;
  const Variant = Variants?.[variant];

  const props = {
    template,
    logo: data?.variants?.logo,
    links: data?.variants?.routes,
    primaryButton: data?.variants?.primaryButton,
    secondaryButton: data?.variants?.secondaryButton,
    banner: data?.variants?.banner,
  };
  console.log("props", props);
  return (
    <>
      {enableInlineEditing && (
        <EditSection documentType={data?._type} documentId={data?._id} />
      )}
      {Variant ? <Variant {...props} /> : null}
    </>
  );
}
export default React.memo(Navigation);
