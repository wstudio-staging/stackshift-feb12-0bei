import { urlFor } from "lib/sanity";
import Image from "next/image";
import React from "react";

import { Container } from "components/layout/Container";
import { Flex } from "components/layout/Flex/Flex";
import { Button } from "components/ui/Button";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import { HeaderProps } from ".";

function VariantA({
  template,
  mainImage,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  return (
    <section className="pb-20 bg-white lg:pt-20">
      <Container>
        <Flex align="center" gap={4} className="flex-col lg:flex-row">
          <Flex align="center" direction="col" className="w-full basis-1/2">
            <div className="max-w-md mx-auto">
              {title && <Heading className="mb-3">{title}</Heading>}
              {description && (
                <Text muted className="my-6">
                  {description}
                </Text>
              )}
              <Flex align="center" gap={2} className="flex-col md:flex-row">
                {primaryButton?.label && (
                  <Button link={primaryButton} ariaLabel={primaryButton?.label}>
                    {primaryButton?.label}
                  </Button>
                )}
                {secondaryButton?.label && (
                  <Button
                    link={secondaryButton}
                    className="text-black bg-white hover:bg-gray-50"
                    ariaLabel={secondaryButton?.label}
                  >
                    {secondaryButton?.label}
                  </Button>
                )}
              </Flex>
            </div>
          </Flex>
          <Flex
            align="center"
            justify="center"
            className="w-full px-4 mt-10 lg:mt-0 lg:w-1/2"
          >
            {mainImage && (
              <div className="relative w-full max-w-md">
                {mainImage?.image && (
                  <Image
                    className="overflow-hidden rounded-3xl object-cover md:rounded-br-none lg:h-[448px] relative z-10"
                    src={urlFor(mainImage?.image)}
                    sizes="(min-width: 520px) 448px, 90vw"
                    width={448}
                    height={448}
                    alt={mainImage?.alt ?? "header-main-image"}
                    priority={true}
                  />
                )}
                <div
                  className="absolute hidden md:block"
                  style={{ top: "-2rem", right: "3rem", zIndex: "2" }}
                >
                  <Image
                    src="/assets/elements/webriq-blue-dark-up.png"
                    width={112}
                    height={112}
                    alt="webriq-blue-dark-up-mainImage-element"
                  />
                </div>
                <div
                  className="absolute hidden md:block"
                  style={{ bottom: "-2rem", right: "-2rem", zIndex: "2" }}
                >
                  <Image
                    src="/assets/elements/wing-webriq-blue-down.png"
                    width={144}
                    height={144}
                    alt="wing-webriq-blue-down-mainImage-element"
                  />
                </div>
                <div
                  className="absolute hidden md:block"
                  style={{ top: "3rem", right: "-3rem", zIndex: "2" }}
                >
                  <Image
                    src="/assets/elements/bullets-gray-right.svg"
                    width={115}
                    height={157}
                    alt="bullets-gray-right-mainImage-element"
                  />
                </div>
                <div
                  className="absolute hidden md:block"
                  style={{
                    bottom: "2.5rem",
                    left: "-4.5rem",
                    zIndex: "2",
                  }}
                >
                  <Image
                    src="/assets/elements/bullets-gray-left.svg"
                    width={157}
                    height={115}
                    alt="bullets-gray-left-mainImage-element"
                  />
                </div>
              </div>
            )}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
export default React.memo(VariantA);
