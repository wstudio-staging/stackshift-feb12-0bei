import React, { useState } from "react";
import { Box, Button, Flex, useToast } from "@sanity/ui";
import { nanoid } from "nanoid";
import { sanityClient } from "lib/sanity.client";

export default function DialogFooter({ page, title, sections, dialogFn, values }) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const document = values?.page || page;
  const pageTitle = values?.title || title;
  const pageSections = values?.sections || sections;
  const setDialogOpen = values?.dialogFn || dialogFn; 

  // DUPLICATE DOCUMENT
  const handleDuplicateBtn = async (payload: any) => {
    setIsLoading(true);

    try {
      const updatedSections = await Promise.all(
        payload?.sections?.map(async (section) => {
          if(section?.current) {
            // use the existing section object for the new document
            return {
              _key: nanoid(),
              _ref: section?._id,
              _type: section?._type
            }
          } else {
            // create new document for the section and use result "_id" as reference
            return await sanityClient
              .create({
                label: section?.label,
                variant: section?.variant,
                variants: section?.variants,
                _type: section?._type === "pages_productInfo" 
                  ? "productInfo" 
                  : section?._type,
              })
              .then((result) => ({ 
                _key: nanoid(), 
                _ref: result?._id, 
                _type: result?._type 
              })
            )  
          }
        })
      );

      payload.sections = updatedSections;
      console.log("[INFO] Duplicate sections created! ");
      
      // make sure we have new section documents before creating the duplicate document
      if(sections.length !== 0) {
        await sanityClient
          .create(
            payload,
            {
              tag: "sanity.studio.document.duplicate",
              returnFirst: true,
              returnDocuments: true,
              visibility: "sync"
            }
          )
          .then((response) => {
            console.log("[INFO] Successfully duplicated document: ", response);
            toast.push({
              status: "success",
              title: "Successfully duplicated document!",
            });
            setIsLoading(false);
            setDialogOpen(false);
          })
      }
    } catch (error) {
      setIsLoading(false);
      
      console.log("Sorry, something went wrong. Failed to duplicate document.", error);

      toast.push({
        status: "error",
        title: "Sorry, something went wrong. Failed to duplicate document.",
      });
    }
  }

  return (
    <Flex justify="space-between">
      <p className="ml-4 text-sm text-gray-500">
        <span className="font-bold">{pageSections?.filter((section) => section?.include)?.length}</span>{" "}
        section/s to duplicate
      </p>
      <Box style={{ textAlign: "right" }}>
        {/* Duplicate button */}
        <Button
          fontSize={2}
          padding={3}
          text="Duplicate"
          onClick={() => handleDuplicateBtn({ 
            title: pageTitle, 
            slug: {
              current: pageTitle?.replace(/[^a-z0-9 ]/gi, "")?.replace(/\s+/g, "-")?.toLowerCase(),
              _type: "slug"
            }, 
            _type: document?._type,
            sections: pageSections?.filter((section) => section?.include)?.map((section) => (
              {
                ...section, 
                _type: section?._type === "pages_productInfo" ? "productInfo" : section?._type
              }
            )),
            seo: document?.seo
          })}
          loading={isLoading}
          disabled={!pageTitle || pageSections?.filter((section) => section.include)?.length === 0}
          style={{ 
            backgroundColor: !pageTitle || pageSections?.filter((section) => section.include)?.length === 0 ? "#d5e3ff" : "#0045d8", 
            boxShadow: "unset", 
            marginRight: "10px" 
          }}
        />
      </Box>
    </Flex>
  )
}