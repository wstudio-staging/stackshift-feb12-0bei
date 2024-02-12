import React from "react";
import { urlFor } from "lib/sanity";
import Image from "next/image";

import { HeaderProps } from ".";

import { Container } from "components/layout/Container";
import { Flex } from "components/layout/Flex/Flex";
import { Heading } from "components/ui/Heading";
import { Button } from "components/ui/Button";
import { Text } from "components/ui/Text";

function VariantD({
  template,
  mainImage,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  return (
    <section className="relative pb-40 overflow-hidden bg-gray-50 pt-28">
      <Container>
        <Flex align="center" className="flex-col lg:flex-row" gap={4}>
          <Flex align="center" direction="col" className="w-full ">
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

          {mainImage?.image?.asset?._ref && (
            <div className="w-full h-full my-12 rounded-none ">
              <Image
                src={urlFor(mainImage?.image)}
                width={1050}
                height={700}
                sizes="100vw"
                style={{ objectFit: "contain" }}
                alt={mainImage?.alt ?? "header-main-image"}
              />
            </div>
          )}
        </Flex>
      </Container>
    </section>
  );
}

export default React.memo(VariantD);
