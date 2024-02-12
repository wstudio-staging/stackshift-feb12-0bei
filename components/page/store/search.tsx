import { Components } from "components/list";
import { SearchData } from "pages/search";

interface SearchPageSectionsProps {
  data: SearchData;
  enableInlineEditing?: boolean;
}

export function SearchPageSections({
  data,
  enableInlineEditing = false,
}: SearchPageSectionsProps) {
  const { sections } = data;

  console.log("SearchPageSections", data);
  return (
    <>
      {sections &&
        sections?.map((section, index) => {
          const Component = Components[section._type];

          // skip rendering unknown components
          if (!Component) {
            return null;
          }

          return (
            <Component
              key={index}
              template={{
                bg: "gray",
                color: "webriq",
              }}
              data={section}
              enableInlineEditing={enableInlineEditing}
            />
          );
        })}
    </>
  );
}
