import React from "react";
import { Container } from "components/layout/Container";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import Image from "next/image";
import { AppPromoProps } from ".";
import { Flex } from "components/layout/Flex";
import { SwiperButton } from "components/ui/SwiperButton";
import { urlFor } from "lib/sanity";

function VariantD({ subtitle, title, description, images }: AppPromoProps) {
  //for image carousel
  let [currentPosition, setCurrentPosition] = React.useState(0); // Initial image index value

  const arrowRightClick = () => {
    currentPosition !== images.length - 1 // Check index length
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0));
  };
  const arrowLeftClick = () => {
    currentPosition !== 0 // Check index length
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = images.length - 1));
  };

  return (
    <section className="bg-secondary-foreground">
      <Container maxWidth={1024}>
        <Flex>
          <div className="my-auto">
            <Heading className="text-primary my-2" fontSize="lg" muted>
              {subtitle}
            </Heading>
            <Heading className="mb-2" fontSize="2xl" weight="bold">
              {title}
            </Heading>
            <Text className="mb-2" fontSize="base" muted>
              {description}
            </Text>
          </div>
          <Flex
            align="center"
            justify="center"
            gap={8}
            className="w-full 2xl:w-1/2"
          >
            {images &&
              (images.length > 1 ? (
                <>
                  <SwiperButton
                    variant="variant_a"
                    type="left"
                    ariaLabel="Left Arrow button"
                    onClick={arrowLeftClick}
                  />

                  <div className="object-contain w-1/2 mr-2">
                    {images?.[currentPosition]?.image && (
                      <Image
                        className="object-cover w-full mx-auto mb-8 xl:mb-0"
                        src={urlFor(images?.[currentPosition]?.image)}
                        sizes="100vw"
                        width={500}
                        height={850}
                        alt={
                          images?.[currentPosition]?.alt ??
                          `appPromo-variantB-image${currentPosition}`
                        }
                      />
                    )}
                  </div>
                  <SwiperButton
                    variant="variant_a"
                    type="right"
                    ariaLabel="Right Arrow button"
                    onClick={arrowRightClick}
                  />
                </>
              ) : (
                <div className="object-contain md:w-2/5 xl:w-2/5">
                  {images?.[currentPosition]?.image && (
                    <Image
                      className="object-cover mx-auto mb-8 xl:mb-0"
                      src={urlFor(images?.[currentPosition]?.image)}
                      sizes="100vw"
                      width={500}
                      height={850}
                      alt={
                        images?.[currentPosition]?.alt ??
                        `appPromo-variantB-image${currentPosition}`
                      }
                    />
                  )}
                </div>
              ))}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}

export default React.memo(VariantD);
