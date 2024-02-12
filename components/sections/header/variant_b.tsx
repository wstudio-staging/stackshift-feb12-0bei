import React from "react";
import { urlFor } from "lib/sanity";
import Image from "next/image";

import { HeaderProps } from ".";
import { ConditionalLink } from "components/ui/ConditionalLink";

function VariantB({
  template,
  images,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  return (
    <section className="relative bg-gray-50">
      <div className="relative z-10 py-12 lg:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="flex items-center w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
              <div className="w-full text-center lg:text-left xl:text-left 2xl:text-left">
                <div className="max-w-md mx-auto">
                  <h1 className="mb-3 text-4xl font-bold font-heading lg:text-5xl">
                    {title && (
                      <>
                        <span>{String(title).split("*")[0]}</span>
                        <span className={`text-${template.color}-900`}>
                          {String(title).split("*")[1]}
                        </span>
                      </>
                    )}
                  </h1>
                </div>
                <div className="max-w-md mx-auto">
                  {description && (
                    <p className="mb-6 leading-loose text-gray-500">
                      {description}
                    </p>
                  )}
                  <div>
                    {primaryButton?.label && (
                      <ConditionalLink
                        ariaLabel={primaryButton?.label}
                        link={primaryButton}
                        className={` mb-3 lg:mb-0 lg:mr-3 `}
                      >
                        {primaryButton?.label}
                      </ConditionalLink>
                    )}
                    {secondaryButton?.label && (
                      <ConditionalLink
                        ariaLabel={secondaryButton?.label}
                        link={secondaryButton}
                        className="text-black bg-white  hover:bg-gray-50"
                      >
                        {secondaryButton?.label}
                      </ConditionalLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {images && (
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-3 sm:flex lg:mb-4 lg:ml-6">
                  {images?.[0]?.image && (
                    <Image
                      className="relative object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:mb-0 sm:w-1/3 md:rounded-3xl lg:rounded-br-none"
                      sizes="100vw"
                      src={urlFor(images?.[0]?.image)}
                      width={941}
                      height={734}
                      alt={images?.[0]?.alt ?? "header-image-1"}
                    />
                  )}
                  {images?.[1]?.image && (
                    <Image
                      className="relative object-cover overflow-hidden rounded-xl sm:ml-2 sm:w-2/3 md:rounded-3xl lg:rounded-bl-none"
                      sizes="100vw"
                      src={urlFor(images?.[1]?.image)}
                      width={1050}
                      height={701}
                      alt={images?.[1]?.alt ?? "header-image-2"}
                    />
                  )}
                </div>
                <div className="mb-3 sm:flex lg:mb-4 lg:mr-6">
                  {images?.[2]?.image?.asset?._ref && (
                    <Image
                      className="object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:w-2/3 md:mb-0 md:rounded-3xl lg:rounded-br-none"
                      sizes="100vw"
                      src={urlFor(images?.[2]?.image)}
                      width={1050}
                      height={701}
                      alt={images?.[2]?.alt ?? "header-image-3"}
                    />
                  )}
                  {images?.[3]?.image?.asset?._ref && (
                    <Image
                      className="object-cover overflow-hidden rounded-xl sm:ml-2 sm:w-1/3 md:rounded-3xl lg:rounded-bl-none"
                      sizes="100vw"
                      src={urlFor(images?.[3]?.image)}
                      width={941}
                      height={734}
                      alt={images?.[3]?.alt ?? "header-image-4"}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(VariantB);
