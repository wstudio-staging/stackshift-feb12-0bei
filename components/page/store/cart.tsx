import { Components } from "components/list";
import { EcwidContextProvider } from "context/EcwidContext";
import EditSection from "components/EditSection";

import { CartData } from "pages/cart";

interface CartSectionsProps {
  data: CartData;
  enableInlineEditing?: boolean;
}

export function CartSections({
  data,
  enableInlineEditing = false,
}: CartSectionsProps) {
  const { sections, _type, _id } = data;

  console.log("CARTSECTIONS", data);

  return (
    <>
      {sections &&
        sections?.map((section, index) => {
          const sectionType =
            section?._type === "slotCart" // for slotCart, apply the variant templates of the cart section
              ? "cartSection"
              : section?._type === "slotWishlist" // for slotWishlist, apply the variant templates of the wishlist section
              ? "wishlistSection"
              : section?._type; // otherwise, use the actual section type

          const Component = Components[sectionType];

          // skip rendering unknown components
          if (!Component) {
            return null;
          }

          return (
            <EcwidContextProvider key={index}>
              {enableInlineEditing && (
                <EditSection documentId={_id} documentType={_type} />
              )}
              <Component
                template={{
                  bg: "gray",
                  color: "webriq",
                }}
                data={section}
              />
            </EcwidContextProvider>
          );
        })}
    </>
  );
}
