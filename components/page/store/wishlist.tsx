import { Components } from "components/list";
import EditSection from "components/EditSection";
import { WishlistData } from "pages/wishlist";

interface WishlistSectionsProps {
  data: WishlistData;
  enableInlineEditing?: boolean;
}

export function WishlistSections({
  data,
  enableInlineEditing = false,
}: WishlistSectionsProps) {
  const { sections, _id, _type } = data;

  console.log("WishlistSections", data);
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
            <>
              {enableInlineEditing && (
                <EditSection documentId={_id} documentType={_type} />
              )}
              <Component
                key={index}
                template={{
                  bg: "gray",
                  color: "webriq",
                }}
                data={section}
              />
            </>
          );
        })}
    </>
  );
}
